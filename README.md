# Bamazon
## What is Bamazon?
Bamazon is an Amazon-like storefront on the command line. As a customer, you can "purchase" things that Bamazon has in inventory. This application uses Node.js and MySQL to store and access products available for sale.

## How can I set-up Bamazon?
Start by using MySQL Workbench and the SQL directory. First, create the Bamazon database by executing the schema.sql file. Then, execute the seeds.sql file to populate the database with products.

Refer to these screenshots showing the needed SQL statements for creating the bamazon database.

schema.sql:
![Image of schema.sql]
(https://github.com/Wilder101/Bamazon/tree/master/Images/schema.png)

seeds.sql:
![Image of seeds.sql]
(https://github.com/Wilder101/Bamazon/tree/master/Images/seeds.png)

Once your database is up and running, be sure to run the following Node Package Manager commands in the same directory as your cloned Bamazon repository in order to build the json.package initialization files and two library prerequisites:
    npm init -y
    npm install mysql
    npm install inquirer

Then you are set to run Bamazon, as a customer, on the command line with this command:
    node bamazonCustomer.js
    
Note that you may need to update the "user" and "password" values on lines 18 & 19 of bamazonCustomer.js, depending on how you have configured MySQL.
    
## How can I use Bamazon?
When Bamazon starts up, the current inventory is displayed on the command line and you are asked the ID of the product you would like to buy.

At startup:
![Image of startup]
(https://github.com/Wilder101/Bamazon/tree/master/Images/startup.png)

Simply enter the ID of the product you wish to purchase. You will then be prompted to enter the quantity of said product. Once the quantity is entered, Bamazon decides if the product can be sold to you. If it can, your order will ship and your total will be displayed. If the product and quantity cannot be fulfilled, you will be notified.

Successful transaction:
![Image of successful transaction]
(https://github.com/Wilder101/Bamazon/tree/master/Images/success.png)

Too little inventory transaction:
![Image of failed transaction]
(https://github.com/Wilder101/Bamazon/tree/master/Images/fail.png)

## Languages used
* JavaScript
* SQL

## Node.js packages used
* mysql
* inquirer

## Author
### Wilder Molyneux
