CREATE DATABASE realestate;

USE realestate;

CREATE TABLE listings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    location VARCHAR(255),
    price DECIMAL(10, 2),
    image_url VARCHAR(255),
    property_type VARCHAR(50)
);
