/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       YOOJIN LEE
 *      Student ID: 188162218
 *      Date:       July 26 2023
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");


// Function to generate the category buttons
function createCategoryButtons() {
  const menu = document.getElementById("menu");

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.textContent = category.name;
    button.addEventListener("click", () => showProductsByCategory(category.id));
    menu.appendChild(button);
  });
}

// Function to show products by the selected category
function showProductsByCategory(categoryId) {
  const selectedCategoryTitle = document.getElementById("selected-category");
  const productList = document.getElementById("product-list");
  
  // Clear the existing product list
  productList.innerHTML = "";

  // Get products in the selected category
  const selectedCategoryProducts = products.filter(product => product.categories.includes(categoryId));

  // Update the selected category title
  const selectedCategory = categories.find(category => category.id === categoryId);
  selectedCategoryTitle.textContent = selectedCategory.name;

  // Generate product rows for the selected category
  selectedCategoryProducts.forEach((product) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const descriptionCell = document.createElement("td");
    const priceCell = document.createElement("td");

    nameCell.textContent = product.title;
    descriptionCell.textContent = product.description;
    priceCell.textContent = formatPrice(product.price);

    row.appendChild(nameCell);
    row.appendChild(descriptionCell);
    row.appendChild(priceCell);

    productList.appendChild(row);
  });
}

// Helper function to format price in dollars and cents
function formatPrice(priceInCents) {
  const priceInDollars = (priceInCents / 100).toFixed(2);
  return `$${priceInDollars}`;
}

// Call the function to create category buttons on page load
window.addEventListener("load", createCategoryButtons);

