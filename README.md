# Fake Store ReactJS Application

This project is a simple ReactJS application that fetches product data from the Fake Store API and allows users to add products to the cart through a modal interface.

## Features

- Fetches products from the Fake Store API and displays them on the main page.
- Users can add products to the cart through an "Add to Cart" button.
- Displays an alert if the product is already in the cart.
- Displays the current cart items count in the Navbar component.
- Opens a modal to show the cart items when the "Cart" button is clicked.
- Allows users to remove products from the cart within the modal.
- Responsive layout for both desktop and mobile devices.
- Clean and readable code with necessary comments and documentation.

## Tech

- **ReactJS**: For building the user interface.
- **HTML/CSS**: For the structure and styling of the app.
- **Tailwind CSS**: For styling the components.
- **JavaScript**: For functionality.

## Installation

1. Clone the repository:

git clone https://github.com/your-username/add-to-cart.git
cd add-to-cart

2. npm install

3. npm run dev

4. This Application will be available in : 


## Project Structure:

src/App.jsx: Main component that manages the state and renders other components and displays the navbar with the cart count.

src/ProductList.jsx: Component that displays the list of products.

src/CartIcon.jsx: Component that displays Icon the "Cart".

src/components/CartModal.jsx: Component that displays the cart items in a modal with the option to remove items.

## Code:

### App.jsx

Imports: Brings in React, components, logo, and CSS.
State: Manages cart (items in the cart) and showCart (whether the cart modal is visible).

-Functions:
  - addToCart: Adds a product to the cart, prevents duplicates.
  - removeFromCart: Removes a product from the cart by its ID.

-Rendering:
  - Displays a navigation bar with the logo and cart icon.
  - Shows the product list.
  - Conditionally shows the cart modal if showCart is true.

### ProductList.jsx

  - Imports: Brings in React, hooks, and star icon.
  - State: Manages products (list of products fetched from API).
  - Effect: Fetches products from an API when the component mounts.
  - Rendering:
    - Displays products in a grid layout.
    - Each product shows an image, title, price, rating, and an "Add to Cart" button.
    - The button calls addToCart to add the product to the cart.

### CartModal.jsx

  - Imports: Brings in React and star icon.
  - Props: Receives cart(items in the cart), removeFromCart(function to remove items), and onClose(function to close the modal).
  - Total Amount: Calculates the total price of items in the cart.
  - Rendering:
    - Displays a modal with a list of cart items.
    - Each item shows an image, title, rating, price, and a "Remove" button.
    - The "Remove" button calls removeFromCart to remove the item.
    - Shows the total amount and a close button.

### CartIcon.jsx

  - Imports: Brings in React and shopping cart icon.
  - Props: Receives itemCount(number of items in the cart) and onClick(function to handle clicks).
  - Rendering:
    - Displays a shopping cart icon.
    - Shows a badge with the item count if itemCount is greater than 0.
    - Handles click events to show the cart modal.

## Usage:

Browse the products displayed on the main page.

Click the "Add to Cart" button to add products to the cart.

Click the "Cart" button in the Navbar to view the cart items.

Remove items from the cart using the "Remove" button in the modal.


## Acknowledgements:

Fake Store API for providing the product data.
