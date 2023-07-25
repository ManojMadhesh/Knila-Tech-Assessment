import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import cellEditFactory from 'react-bootstrap-table2-editor';
import { Row, Col, Button, Modal, Form, Input } from 'antd';
import MapView from './mapview';
import "./home.css";

const Home = () => {
    const [products, setProducts] = useState([
        { firstname: "John", lastname: "Doe", email: "john@gmail.com", phonenumber: "(555) 123-4567", addr: "123 Main Street", city: "Springfield", state: "IL", country: "United States", postalcode: "62701", latitude: 39.801372, longitude: -89.651205 },
        { firstname: "Jane", lastname: "Smith", email: "jane@gmail.com", phonenumber: "(555) 987-6543", addr: "456 Oak Avenue", city: "Los Angeles", state: "CA", country: "United States", postalcode: "90001", latitude: 34.052235, longitude: -118.243683 },
        { firstname: "Michael", lastname: "Johnson", email: "michael@gmail.com", phonenumber: "(555) 657-8564", addr: "789 Elm Street", city: "New York", state: "NY", country: "United States", postalcode: "10001", latitude: 40.712776, longitude: -74.005974 },
        { firstname: "Emily", lastname: "Brown", email: "emily@gmail.com", phonenumber: "(555) 374-5493", addr: "321 Pine Road", city: "Seattle", state: "WA", country: "United States", postalcode: "98101", latitude: 47.606209, longitude: -122.332071 },
        { firstname: "Robert", lastname: "Lee", email: "robert@gmail.com", phonenumber: "(555) 756-8675", addr: "987 Cedar Lane", city: "Dallas", state: "TX", country: "United States", postalcode: "75201", latitude: 32.776665, longitude: -96.796989 }
    ]);

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };

    const columns = [{
        dataField: 'firstname',
        text: 'First Name',
        sort: true
    }, {
        dataField: 'lastname',
        text: 'Last Name',
        sort: true
    }, {
        dataField: 'email',
        text: 'Email',
        sort: true
    },
    {
        dataField: 'phonenumber',
        text: 'Contact',
        sort: true
    },
    {
        dataField: 'addr',
        text: 'Address',
        sort: true
    },
    {
        dataField: 'city',
        text: 'City',
        sort: true
    },
    {
        dataField: 'state',
        text: 'State',
        sort: true
    },
    {
        dataField: 'country',
        text: 'Country',
        sort: true
    },
    {
        dataField: 'postalcode',
        text: 'Postal code',
        sort: true
    },
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            // number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };
    /* eslint-enable no-template-curly-in-string */

    const handleCellEdit = (oldValue, newValue, row, column) => {
        // Update the products array with the edited value
        const updatedData = products.map((product) => {
            if (product.email === row.email) {
                return { ...product, [column.dataField]: newValue };
            }
            return product;
        });
        setProducts(updatedData);

        // Save the updated data directly to sessionStorage
        sessionStorage.setItem('tableData', JSON.stringify(updatedData));
    };

    const onFinish = (values) => {
        setIsModalOpen(false);
        const newData = {
            firstname: values.user.firstname,
            lastname: values.user.lastname,
            email: values.user.email,
            phonenumber: values.user.phonenumber,
            addr: values.user.addr,
            city: values.user.city,
            state: values.user.state,
            country: values.user.country,
            postalcode: values.user.postalcode,
            latitude: '',
            longitude: ''
        };
        setProducts([newData, ...products]);
        sessionStorage.setItem('tableData', JSON.stringify([newData, ...products]));
        console.log(values);
    };

    useEffect(() => {
        // Retrieve data from localStorage on component mount
        const storedData = sessionStorage.getItem('tableData');
        if (storedData) {
            setProducts(JSON.parse(storedData));
        }
    }, []);
    return (
        <>
            <Row>
                <Col span={6}>
                    <Button type="primary" className="addbtn mb-3" onClick={showModal}>Add Contact</Button>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <div className="contactTable">
                        <BootstrapTable keyField='email' data={products} columns={columns} cellEdit={cellEditFactory({
                            mode: 'click',
                            blurToSave: true,
                            afterSaveCell: handleCellEdit
                        })} />
                    </div>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <div className="mapview">
                        <MapView products={products} />
                    </div>
                </Col>
            </Row>

            <Modal title="Enter New Details" destroyOnClose={true} open={isModalOpen} footer={null} onCancel={handleCancel}>
                <Form
                    {...layout}
                    name="nest-messages"
                    onFinish={onFinish}
                    style={{
                        maxWidth: 600,
                    }}
                    validateMessages={validateMessages}
                >
                    <Form.Item
                        name={['user', 'firstname']}
                        label="First Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'lastname']}
                        label="Last Name"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'email']}
                        label="Email"
                        rules={[
                            {
                                required: true,
                                type: 'email',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'phonenumber']}
                        label="Contact"
                        rules={[
                            {
                                required: true,
                                min: 0,
                                max: 10,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'addr']} label="Address"
                        rules={[
                            {
                                required: true,
                            },
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'city']} label="City"
                        rules={[
                            {
                                required: true,
                            },
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'state']} label="State"
                        rules={[
                            {
                                required: true,
                            },
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'country']} label="Country"
                        rules={[
                            {
                                required: true,
                            },
                        ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={['user', 'postalcode']}
                        label="Postal Code"
                        rules={[
                            {
                                required: true,
                                min: 0,
                                max: 6,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            ...layout.wrapperCol,
                            offset: 10,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default Home;