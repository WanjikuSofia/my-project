    # Boutique E-Commerce Platform

    ## Project Overview

    This project is a **web-based boutique e-commerce platform** designed to provide small and medium-sized boutique stores with a customizable, lightweight, and fully functional online selling system. It includes an admin CMS for product management, a user-friendly storefront with a shopping cart, and integrated checkout that supports simulated and Mpesa payments.

    ## Features

    - Responsive design for desktop and mobile devices
    - Product catalog browsing with search and filtering
    - Secure admin panel for managing products (CRUD)
    - Shopping cart functionality (add, update, remove products)
    - Checkout process with simulated or real Mpesa payment integration
    - Order management and tracking in the admin dashboard
    - User input validation and secure session-based authentication for admin
    - Order confirmation and status updates

    ---

    ## Technologies Used

    | Technology          | Purpose                                 |
    |---------------------|-----------------------------------------|
    | HTML, CSS           | Structure and styling of the frontend   |
    | Bootstrap / Tailwind | Responsive UI components and layouts    |
    | JavaScript          | Client-side interactions and validation |
    | PHP                 | Server-side logic and database handling |
    | MySQL (via XAMPP)   | Relational database management           |
    | Mpesa Daraja API    | Optional real mobile payment integration |

    ---

    ## Project Structure




    ---

    ## Setup Instructions

    ### Prerequisites

    - Install [XAMPP](https://www.apachefriends.org/index.html) (Apache, PHP, MySQL).
    - Basic understanding of PHP, MySQL, and frontend technologies.
    - Optional: Mpesa Daraja API credentials for real payment integration.

    ### Installation Steps

    1. Clone or download the project folder into your local `htdocs` directory inside your XAMPP installation (e.g., `C:\xampp\htdocs\boutique-ecommerce`).

    2. Start Apache and MySQL servers via the XAMPP control panel.

    3. Create a new MySQL database:


    4. Import the provided SQL schema file (`database/schema.sql`) using phpMyAdmin or MySQL command line to create necessary tables:

    - `products`
    - `orders`
    - `order_details`
    - `users` (for admin login)

    5. Configure the database connection in `config/db.php` with your MySQL username and password.

    6. (Optional) Configure Mpesa Daraja API credentials and endpoints inside `mpesa_integration/config.php`.

    ### Running the Project

    - Open your browser and navigate to `http://localhost/boutique-ecommerce/` to access the storefront.
    - For admin management, visit `http://localhost/boutique-ecommerce/admin/` and log in with the admin credentials stored in the `users` database.

    ---

    ## Usage

    ### User Actions

    - Browse products by categories or search keywords.
    - View detailed product descriptions and images.
    - Add items to the shopping cart.
    - Update quantities or remove items from the cart.
    - Proceed to checkout, fill in order details, and complete payment (simulated or Mpesa).
    - Receive order confirmation.

    ### Admin Actions

    - Secure login to admin panel.
    - Add new products, edit existing ones, or delete products.
    - View and manage all customer orders.
    - Update order status (pending, shipped, completed).
    - Optional: View dashboard analytics for sales and inventory.

    ---

    ## Security Considerations

    - All user inputs are validated client- and server-side.
    - SQL statements use prepared statements or proper escaping to prevent injection.
    - Admin area is protected by session authentication to prevent unauthorized access.
    - Sensitive data like database credentials should be kept secure and not exposed publicly.

    ---

    ## Future Enhancements

    - Multi-vendor support.
    - Real-time inventory updates and notifications.
    - Integration with more payment gateways.
    - User registration and account management.
    - Enhanced analytics and reporting in admin dashboard.

    ---

    ## Contact & Support

    For questions, improvements, or issues, please reach out via [your-email@example.com].

    ---

    Thank you for using the Boutique E-Commerce Platform!

