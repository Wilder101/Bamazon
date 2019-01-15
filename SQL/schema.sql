-- schema for Bamazon CLI app

-- Drops the db if it exists currently
DROP DATABASE IF EXISTS bamazon;

-- Creates database
CREATE DATABASE bamazon;

-- Make it so all of the following code will affect the db
USE bamazon;

CREATE TABLE products (

    -- Create a unique id for each product that automatically increments
    item_id INTEGER(10) NOT NULL AUTO_INCREMENT,
  
    -- Create a string column for name of product
  	product_name VARCHAR(60) NOT NULL,
    
	-- Create a string column for name of department
  	department_name VARCHAR(60) NULL,
    
    -- Create a decimal column for cost to customer (aka price)
	price DECIMAL(10, 2) NULL, 
    
	-- Create an integer column for how much of the product is available in stock
	stock_quantity INTEGER(5) NULL,
    
    -- Set the primary key of the table to item_id
	PRIMARY KEY (item_id)
);

