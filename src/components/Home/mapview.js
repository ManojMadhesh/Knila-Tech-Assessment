import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
    });
    
    L.Marker.prototype.options.icon = DefaultIcon;

const MapView = ({ products }) => {
    return (
      <MapContainer
        center={[40.712776, -74.005974]} // Center the map on a default location (e.g., New York City)
        zoom={3} // Set the initial zoom level
        style={{ height: '400px', width: '100%' }} // Set the map's height and width
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
  
        {/* Loop through the products array and add markers for each person */}
        {products.map((product, index) => (
          <Marker
            key={index}
            position={[product.latitude, product.longitude]}
          >
            <Popup>
              {/* Customize the popup content with the person's details */}
              <div>
                <h3>{`${product.firstname} ${product.lastname}`}</h3>
                <p>Email: {product.email}</p>
                <p>Phone: {product.phonenumber}</p>
                <p>Address: {product.addr}</p>
                <p>City: {product.city}</p>
                <p>State: {product.state}</p>
                <p>Country: {product.country}</p>
                <p>Postal Code: {product.postalcode}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    );
  };
  
  export default MapView;
  