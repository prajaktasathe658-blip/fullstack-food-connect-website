# 🍲 Food Connect

### Share Food. Reduce Waste. Help Communities.

**Food Connect** is a full-stack food donation and food waste reduction platform that connects **food donors with NGOs**. The platform allows donors to share surplus food while NGOs can discover and request available food for people in need.

The project is designed as a **BCA Final-Year Full-Stack Web Development Project** with role-based authentication, food management, donation requests, dashboards, and an expandable donation workflow.

---

## 🌱 Project Objective

Every day, a significant amount of edible food is wasted while many people struggle to access sufficient food.

Food Connect aims to provide a digital platform where:

**Donor → Lists Surplus Food → NGO Requests Food → Donor Accepts → Food is Picked Up → Donation Completed**

The main objective is to reduce food wastage and make surplus food easier to distribute to people who need it.

---

# ✨ Main Features

## 👤 User Authentication

* User registration
* User login
* JWT authentication
* Protected routes
* Role-based access
* Secure password handling

---

## 🥘 Food Management

Donors can:

* Post available food
* Add food details
* Specify quantity
* Add expiry date
* Add pickup information
* View their food donations
* Manage their food listings

NGOs can:

* Browse available food
* View food details
* Request available food

---

## 🤝 Food Request System

The platform supports a complete donation request workflow:

```text
NGO
 ↓
Request Food
 ↓
Pending
 ↓
Donor Reviews Request
 ↓
Accept / Reject
 ↓
Accepted
 ↓
Food Picked Up
 ↓
Completed
```

Supported request statuses:

```text
pending
accepted
rejected
picked_up
completed
cancelled
```

---

# 👥 User Roles

## 🧑‍🍳 Donor

Donors can:

* Register and login
* Post food donations
* Edit food listings
* Delete food listings
* View donation requests
* Accept requests
* Reject requests
* Track donation status
* View completed donations

---

## 🏢 NGO

NGOs can:

* Register
* Browse available food
* Search food
* Filter food
* View food details
* Request food
* Track requests
* Mark food as picked up
* View request history

---

## 👨‍💼 Admin

Administrators can:

* View users
* View donors
* View NGOs
* View food donations
* View food requests
* Manage NGO registrations
* Remove inappropriate listings
* Monitor platform activity
* View project statistics

---

# 🔍 Search & Filter

The food discovery system can be extended with:

### Search

Search food by:

* Food name
* Example: Biryani
* Rice
* Chapati
* Meals

### Filters

Filter food by:

* Location
* Food type
* Availability
* Request status
* Expiry date

This makes it easier for NGOs to find suitable donations.

---

# 📄 Food Details

Each food donation can contain:

* Food image
* Food name
* Description
* Quantity
* Food type
* Pickup address
* Expiry date
* Donor information
* Availability status
* Request button

---

# 📊 Dashboard & Analytics

## Donor Dashboard

Example statistics:

```text
Total Donations       25
Available Food         8
Food Requested         6
Completed Donations   11
```

## Admin Dashboard

Example statistics:

```text
Total Users           150
Total Donors           75
Total NGOs             40
Food Donations        230
Completed Donations   185
Pending Requests       20
```

The dashboard can also include charts for:

* Donations by month
* Food category distribution
* Requests by status
* Completed vs pending donations

---

# 🔔 Notifications

Food Connect can provide in-app notifications for important events.

### NGO requests food

```text
🔔 New food request received!
```

### Donor accepts request

```text
✅ Your food request has been accepted.
```

### Donor rejects request

```text
❌ Your food request was rejected.
```

The initial implementation focuses on **in-app notifications**, with email/SMS notifications as possible future enhancements.

---

# ⏰ Food Expiry System

Food donations can be automatically checked based on their expiry date.

Example:

```text
Vegetable Biryani
Expires: Tomorrow

⚠️ Expiring Soon
```

When food expires:

```text
Expiry Date < Today
        ↓
     Expired
        ↓
No longer available
```

Expired food should not appear in the list of available donations.

---

# 📍 Location & Maps

The platform can support pickup locations so NGOs can identify where donated food is available.

Future implementation can include:

* Pickup location
* Location search
* Map integration
* Nearby food donations
* Distance-based discovery

---

# 🖼️ Food Image Upload

Donors can upload images while creating food listings.

Example:

```text
Post Food
    ↓
Food Name
Quantity
Food Type
Expiry Date
Pickup Address
Food Image
    ↓
Post Donation
```

Images make food listings easier for NGOs to understand.

---

# 🔐 Security

Security is an important part of Food Connect.

Implemented/planned security features include:

* JWT authentication
* Password hashing
* Protected routes
* Role-based authorization
* Input validation
* Authorization for food editing
* Authorization for food deletion
* Request ownership validation
* Prevention of unauthorized access

---

# 🎨 User Interface

The application is designed to provide a clean and responsive experience.

Planned UI improvements include:

* Modern food cards
* Better buttons
* Status badges
* Dashboard sidebar
* Responsive mobile design
* Loading animations
* Empty-state screens
* Icons
* Improved navigation
* Professional dashboard layouts

---

# 🛠️ Technologies Used

## Frontend

| Technology            | Purpose                         |
| --------------------- | ------------------------------- |
| **React.js**          | Frontend user interface         |
| **Vite**              | Frontend development/build tool |
| **JavaScript (ES6+)** | Application logic               |
| **CSS3**              | Styling and responsive design   |
| **Axios**             | API communication               |
| **React Router**      | Client-side routing             |

---

## Backend

| Technology     | Purpose                 |
| -------------- | ----------------------- |
| **Node.js**    | Backend runtime         |
| **Express.js** | REST API framework      |
| **MongoDB**    | Database                |
| **Mongoose**   | MongoDB object modeling |
| **JWT**        | Authentication          |
| **bcrypt**     | Password hashing        |
| **dotenv**     | Environment variables   |
| **Nodemon**    | Development server      |

---

## Development Tools

| Tool              | Purpose                |
| ----------------- | ---------------------- |
| **VS Code**       | Code editor            |
| **Git**           | Version control        |
| **GitHub**        | Source code repository |
| **MongoDB Atlas** | Cloud database         |

---

# 📁 Project Structure

```text
Food-Connect/
│
├── backend/
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── foodController.js
│   │   └── requestController.js
│   │
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Food.js
│   │   └── FoodRequest.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── foodRoutes.js
│   │   └── requestRoutes.js
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── FoodCard.jsx
│   │   └── ProtectedRoute.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── DonorDashboard.jsx
│   │   ├── NGORegistration.jsx
│   │   ├── FoodListing.jsx
│   │   ├── PostFood.jsx
│   │   ├── FoodDetails.jsx
│   │   ├── Requests.jsx
│   │   └── AdminDashboard.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
│
├── public/
│
├── .gitignore
├── README.md
└── package.json
```

---

# 📂 Backend Structure Explained

### `config/`

Contains database configuration.

```text
db.js
```

Responsible for connecting the application to MongoDB.

### `controllers/`

Contains application/business logic.

```text
authController.js
foodController.js
requestController.js
```

### `middleware/`

Contains authentication and authorization middleware.

```text
authMiddleware.js
```

### `models/`

Contains MongoDB/Mongoose database models.

```text
User.js
Food.js
FoodRequest.js
```

### `routes/`

Contains API routes.

```text
authRoutes.js
foodRoutes.js
requestRoutes.js
```

### `server.js`

Main backend entry point that starts the Express server and connects the required routes and middleware.

---

# 📂 Frontend Structure Explained

### `components/`

Reusable UI components.

```text
Navbar.jsx
FoodCard.jsx
ProtectedRoute.jsx
```

### `pages/`

Application screens.

```text
Home.jsx
Login.jsx
Register.jsx
DonorDashboard.jsx
NGORegistration.jsx
FoodListing.jsx
PostFood.jsx
FoodDetails.jsx
Requests.jsx
AdminDashboard.jsx
```

### `services/`

Handles communication between frontend and backend.

```text
api.js
```

### `App.jsx`

Main React application and routing configuration.

### `main.jsx`

React application entry point.

### `index.css`

Global styling.

---

# 🔄 Application Workflow

```text
                    FOOD CONNECT
                         │
          ┌──────────────┼──────────────┐
          │              │              │
        DONOR            NGO           ADMIN
          │              │              │
          ↓              ↓              ↓
     Post Food       Find Food      Manage Users
          │              │              │
          ↓              ↓              ↓
     Food Listed     Request Food   Manage NGOs
          │              │              │
          └───────→ Request ←───────────┘
                       │
                       ↓
                    Pending
                       │
                 ┌─────┴─────┐
                 ↓           ↓
              Accept       Reject
                 │
                 ↓
             Accepted
                 │
                 ↓
             Picked Up
                 │
                 ↓
             Completed
```

---

# 🚀 Development Roadmap

## Phase 1 — Food Management

* [x] Basic food management
* [ ] Search food
* [ ] Filter food
* [ ] Food details improvement
* [ ] Edit food
* [ ] Delete food

---

## Phase 2 — Request Workflow

* [x] Food request
* [ ] Pending requests
* [ ] Accept request
* [ ] Reject request
* [ ] Picked-up status
* [ ] Completed status
* [ ] Cancelled status
* [ ] Request history

---

## Phase 3 — User Roles

* [x] Donor
* [x] NGO
* [x] Admin
* [ ] Advanced role-based permissions
* [ ] NGO approval workflow

---

## Phase 4 — Dashboard & Analytics

* [ ] Donor statistics
* [ ] NGO statistics
* [ ] Admin statistics
* [ ] Monthly donation chart
* [ ] Food category chart
* [ ] Request status chart
* [ ] Completed vs pending chart

---

## Phase 5 — Advanced Features

* [ ] Food image upload
* [ ] Location integration
* [ ] Maps
* [ ] In-app notifications
* [ ] Food expiry system
* [ ] Expiring-soon notifications

---

## Phase 6 — Final-Year Project Polish

* [ ] Responsive design
* [ ] Professional dashboard
* [ ] Better UI/UX
* [ ] Loading animations
* [ ] Empty-state screens
* [ ] Improved validation
* [ ] Security improvements
* [ ] Testing
* [ ] Deployment

---

# ⚙️ Installation & Setup

## 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

```bash
cd Food-Connect
```

---

## 2. Install Frontend Dependencies

```bash
npm install
```

---

## 3. Install Backend Dependencies

```bash
cd backend
npm install
```

---

## 4. Configure Environment Variables

Create:

```text
backend/.env
```

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

⚠️ **Never upload `.env` to GitHub.**

---

## 5. Start Backend

```bash
cd backend
npm run dev
```

Backend will run on:

```text
http://localhost:5000
```

---

## 6. Start Frontend

Open another terminal:

```bash
cd Food-Connect
npm run dev
```

The frontend will run on the Vite development URL shown in the terminal.

---

# 🗃️ Database

Food Connect uses **MongoDB** for storing application data.

Main collections/models:

```text
Users
Food
FoodRequests
```

The database structure can be expanded later for:

```text
Notifications
NGOs
Admin
FoodCategories
Locations
```

---

# 🔒 Environment Variables

The following sensitive information should never be committed to Git:

```text
.env
MongoDB password
MongoDB connection string
JWT secret
API keys
```

These files should be included in `.gitignore`.

---

# 🎯 Future Scope

Food Connect can be expanded into a larger food donation ecosystem by adding:

* Real-time notifications
* Email notifications
* Mobile application
* Advanced map integration
* Nearby donation discovery
* AI-based food demand prediction
* Donation analytics
* QR-based pickup verification
* NGO verification
* Donation certificates
* Cloud image storage
* Deployment on cloud platforms

---

# 🎓 Academic Project

**Project:** Food Connect

**Type:** Full-Stack Web Application

**Purpose:** Food Donation & Food Waste Reduction

**Technology:** MERN Stack

**Academic Level:** BCA Final-Year Project

---

# 👩‍💻 Author

Developed as a BCA final-year full-stack web development project.

---

## ⭐ Project Vision

> **"Share Food. Reduce Waste. Help Communities."**

Food Connect aims to use technology to connect surplus food with organizations that can distribute it to people who need it, creating a more efficient and responsible food-sharing ecosystem.
