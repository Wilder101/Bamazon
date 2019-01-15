-- seeds.sql for Bamazon CLI database

-- Make it so all of the following code will affect the db
USE bamazon;


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pen", "Office Supplies", 1.49, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pencil", "Office Supplies", 0.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Plain Black T-shirt", "Clothing", 19.99, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wide Striped T-shirt", "Clothing", 17.99, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Leather Biker Wallet", "Mens Accessories", 49.99, 15);



INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("RFID Blocking Rainbow Velcro Wallet", "Mens Accessories", 9.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bananas, 1 bunch (min. 5 ct.)", "Grocery", 1.99, 35);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toilet Paper, Ultra Plush, 24 ct.", "Health & Personal Care", 29.92, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bandanas, 5-Pack", "Bamazon Fashion", 10.99, 28);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Classic Yellow Rubber Ducky", "Baby", 6.77, 3);


SELECT * FROM products;

