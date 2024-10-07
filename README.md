
# Application Setup Guide

## Prerequisites

- Node.js (>=14.x)
- Angular CLI (>=12.x)
- Git

## Project Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install project dependencies:
   ```bash
   npm install
   ```

3. Start the application:
   ```bash
   ng serve
   ```

   This will launch the application at `http://localhost:4200/`.

## Steps to Run the Application

1. **Registration**:
   - Navigate to the registration page (`/sign-up`).
   - Fill in the required fields (name, email, password) and click on "Sign Up".
   - Once registered, you will be redirected to the login page.

2. **Login**:
   - Navigate to the login page (`/`).
   - Use the registered credentials to log in.
   - On successful login, you will be redirected to the admin panel dashboard.

3. **View Shipments**:
   - After logging in, you can view the shipment data.
   - The shipment data can be viewed in three different formats:
     - **Chart View**: A bar chart displaying the number of orders by date.
     - **Tabular View**: A table listing all the shipment details.
     - **Card View**: A card-style layout for each shipment, showing key details.

4. **Filter and Search**:
   - Use the date range filter to view shipments within a specific period.
   - Search for shipments by product name using the search bar.

## Key Features & Technologies:
- **Angular Material UI**: Responsive design with Material components.
- **NgRx**: State management using Redux pattern.
- **RxJS**: For handling asynchronous data streams.
- **AuthGuard**: Secured routes with authentication guard.
- **User Authentication**: Sign-up and sign-in system.
- **Dummy API**: Simulated data for orders and shipments.
- **Local Storage**: Persisted user details across sessions.
- **Filters & Search**: Date range and product name filters.
- **Form Validation**: Reactive form validation.
- **Pagination & Sorting**: For large data handling.

