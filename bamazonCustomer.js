// Bamazon by WBM, 1/11/19, bamazonCustomer.js file
// Updated prereq packages due to new security vulnerabilities, 2/22/20

// Prereqs on the CLI:
// npm init -y
// npm install mysql
// npm install inquirer

// This is a node.js driver for mysql
var mysql = require("mysql");

// A collection of common interactive command line user interfaces
var inquirer = require("inquirer");

// Database connection variable
var connection = mysql.createConnection({
    host:      "localhost",
    port:      3306,
    user:      "root",
    password:  "password",
    database:  "bamazon"         // Already created in MySQL Workbench
});

// Connect to the database
connection.connect(function(err) {
    if (err) {
        throw err;
    }
    displayInventory();
});

// Show inventory in the console
function displayInventory() {

    connection.query("SELECT * FROM products", function(err, res) {
        if(err){
            throw err;
        }
        console.log("Bamazon current inventory:");
        console.table(res);
    });

    // Hang back a split second for mysql to respond before selling something
    setTimeout(sellSomething, 50);
}

// Sell something from the Bamazon inventory
function sellSomething() {

    // Promp CLI user of desired product ID and quantity
    inquirer
    .prompt([
        {
            name: "id",
            type: "input",
            message: "What is the ID of the product you would like to buy?"
        },
        {
            name: "quantity",
            type: "input",
            message: "How many would you like to buy?"
        }
    ])
    .then(function(inquirerResponse) {

        let requestedProductID = parseInt(inquirerResponse.id);
        let requestedProductQuantity = parseInt(inquirerResponse.quantity);
 
        var query = "SELECT * FROM products WHERE ?";
        connection.query(query, { item_id: requestedProductID}, function(err, res) {

            // Message if item is not found
            if (res.length <= 0) {
                console.log("Sorry. Bamazon does not have the item you requested.")

            } else {

                // Store db response item -- safe assumption: there will only be one item in the response array
                let itemFromDB = res[0];

                // Display the selected item
                console.log("\nProduct ID: " + itemFromDB.item_id + " || Name: " + itemFromDB.product_name + " || Price: " + itemFromDB.price + " || Inventory: " + itemFromDB.stock_quantity);

                // Check to ensure inventory can meet demand
                if (requestedProductQuantity > itemFromDB.stock_quantity) {
                    console.log("Insufficient quantity in stock!\n");

                    // End transaction
                    thankYou();

                // Fulfill order and update inventory    
                } else {

                    query = "UPDATE products SET ? WHERE ?";
                    connection.query(query, [{stock_quantity: itemFromDB.stock_quantity - requestedProductQuantity}, { item_id: requestedProductID}], function(err, res) {
                        console.log("Your order is on its way!  Your total today is: $" + requestedProductQuantity * itemFromDB.price + "\n");
                    })   

                    // Hang back a split second for mysql to respond before ending
                    setTimeout(thankYou, 50);
                }
            }
        });
    });
}

// Thank you for using Bamazon function
function thankYou() {

    // End the database connection
    console.log("Thank you for using Bamazon!\n")
    connection.end();
}
