# E-Commerce Project

**Student Name**: Nikul Brahmbhatt  
**Student Number**: 8960731  
**Date**: 22 july 2024

### Technology Stack

**Frontend**: Angular  
**Backend**: Node.js with Express  
**Database**: MongoDB (Atlas)

### Project Setup

1. **Project Initialization**: Repository created on GitHub and cloned to local machine.
2. **Frontend Setup**: Initialized ReactJS project.
3. **Backend Setup**: Initialized Node.js project with Express and connected to MongoDB (Atlas).

### Database Schema Design

**Products Schema (MongoDB)**

- `name`: String
- `description`: String
- `price`: Number
- `category`: String
- `stock`: Number
- `imageUrl`: String

**Users Schema (MongoDB)**

- `firstname`: Sting
- `lastname`: String
- `email`: String
- `phone`:String
- `username`: String
- `password`: String
- `userrole`: String

**Orders Schema(MongoDB)**

-`userid`:Number
-`productid`:Number
-`totalamount`:Number
-`orderdate`:DateTime
-`deliveryadd`:String

### Frontend Setup

1. Basic structure set up for React components, including directories for components and services.
2. State management planned to handle user sessions and cart data.

### Notes

- The project is set up using Git and GitHub for version control.
- Further development will include implementing user interfaces for product listings, shopping cart, and checkout.
