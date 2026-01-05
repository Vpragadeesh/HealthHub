# HealthHub - Complete Healthcare Management Platform

## Overview

HealthHub is a full-stack MERN application providing comprehensive healthcare services including:
- 🏥 **Doctor appointment booking** - Schedule consultations with healthcare professionals
- 💊 **Medicine ordering** - Purchase medications with online payment integration
- 🩸 **Blood donation management** - Connect donors with recipients in emergencies
- 💬 **Real-time chat support** - Communicate with administrators and staff

---

## Features

### Core Functionality
- **User Authentication** - Registration, login, email verification, password reset
- **Medicine Management** - Browse, search, review, and purchase medicines
- **Doctor Appointments** - Schedule appointments, receive confirmations
- **Blood Donation System** - Donor registration, emergency blood requests
- **Shopping Cart** - Add items, apply promo codes, manage orders
- **Multiple Payment Methods** - AamarPay (Bangladesh), PayPal (Global)

### Admin Controls
- ✅ User management (view, edit, delete)
- ✅ Medicine management (CRUD operations)
- ✅ Doctor management (CRUD operations)
- ✅ Blood donor management
- ✅ Order approval and delivery tracking
- ✅ Appointment management
- ✅ Blood request approvals

### Technical Features
- Responsive design (mobile-optimized)
- SEO-optimized pages
- Real-time notifications
- Order history and tracking
- Review and rating system
- Smart search and filters

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18, Redux Toolkit, Bootstrap 5 |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Authentication** | JWT, bcrypt |
| **Payment** | PayPal, AamarPay API |
| **Real-time** | Socket.io |
| **File Upload** | Multer |
| **Email** | Nodemailer |

---

## Installation

### Prerequisites
- Node.js (v14+)
- MongoDB Atlas account
- PayPal Sandbox account (optional)

### Backend Setup
```bash
# Install dependencies
npm install

# Create .env file from .env.example
cp .env.example .env

# Update .env with your credentials
# Run development server
npm run server

# Server runs on: http://localhost:5000
```

### Frontend Setup
```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start development server
npm start

# App runs on: http://localhost:3000
```

### Run Full Application
```bash
# From root directory
npm run dev  # Runs both frontend and backend concurrently
```

---

## Environment Variables

See `.env.example` and `frontend/.env.example` for required configuration.

**Critical Variables:**
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - JWT signing secret
- `PAYPAL_CLIENT_ID` - PayPal client ID
- `EMAIL_USER` / `EMAIL_PASS` - Gmail credentials for notifications

---

## API Documentation

### Authentication Routes
- `POST /api/users/register` - Register new user
- `POST /api/users/login` - User login
- `POST /api/users/logout` - User logout
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile

### Medicine Routes
- `GET /api/meds` - Get all medicines
- `GET /api/meds/:id` - Get medicine details
- `POST /api/meds` - Create medicine (admin)
- `PUT /api/meds/:id` - Update medicine (admin)
- `DELETE /api/meds/:id` - Delete medicine (admin)

### Doctor Routes
- `GET /api/doctors` - Get all doctors
- `GET /api/doctors/:id` - Get doctor details
- `POST /api/doctors` - Create doctor (admin)
- `PUT /api/doctors/:id` - Update doctor (admin)
- `DELETE /api/doctors/:id` - Delete doctor (admin)

### Appointment Routes
- `GET /api/appointments` - Get user appointments
- `POST /api/appointments` - Create appointment
- `PUT /api/appointments/:id` - Update appointment
- `DELETE /api/appointments/:id` - Cancel appointment

### Order Routes
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create order
- `PUT /api/orders/:id/pay` - Mark order as paid
- `PUT /api/orders/:id/deliver` - Mark order as delivered

### Blood Routes
- `GET /api/bloods` - Get all blood donors
- `POST /api/bloods` - Register as donor
- `PUT /api/bloods/:id` - Update donor info
- `DELETE /api/bloods/:id` - Remove donor

### Request Routes
- `GET /api/requests` - Get blood requests
- `POST /api/requests` - Create blood request
- `PUT /api/requests/:id/approve` - Approve request (admin)

---

## Project Structure

```
HealthHub-MERN/
├── backend/
│   ├── config/          # Database configuration
│   ├── controller/      # Route controllers
│   ├── middleware/      # Custom middleware
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   ├── utils/           # Helper utilities
│   ├── server.js        # Express app setup
│   └── seeder.js        # Database seeding
├── frontend/
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── Screens/     # Page components
│   │   ├── slices/      # Redux slices
│   │   ├── assets/      # Styles and images
│   │   └── App.js       # Root component
│   └── package.json
├── .env.example         # Environment variables template
├── package.json         # Root dependencies
└── README.md           # This file
```

---

## Live Demo

- **Frontend:** https://healthhub.vercel.app
- **Backend API:** https://healthhub-api.railway.app
- **Admin Panel:** https://healthhub.vercel.app/admin (requires admin login)

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## Troubleshooting

### Port Already in Use
```bash
# Change PORT in .env (default: 5000)
PORT=5001
```

### MongoDB Connection Error
- Verify `MONGO_URI` in `.env`
- Ensure IP is whitelisted in MongoDB Atlas
- Check network connection

### CORS Issues
- Verify `REACT_APP_BACKEND_URL` in frontend `.env`
- Check backend CORS configuration in `server.js`

---

## Author

**Your Name**  
[GitHub](https://github.com/yourusername) | [LinkedIn](https://linkedin.com/in/yourprofile)

### Acknowledgments

Original base project inspired by open-source healthcare solutions.  
Special thanks to the MERN community and all contributors.

---

## License

MIT License - See LICENSE file for details

---

## Support

For issues and feature requests, please open an issue on [GitHub Issues](https://github.com/yourusername/HealthHub-MERN/issues)

---

**Last Updated:** January 2026

## Project Features:
- User Registration and Sign In Option including account verification and password reset from gmail.
- Medicine Info & Add Medicine to Cart then buy.
- Applying promo code to get discount.
- Shopping Address and Payment Method.
- Pay Using AamarPay(BD) And Paypal(Global)
- Post Review About That Medicine. 
- Doctor Info & Get Doctor Appointment.
- Blood Info & Smart Search and Filter Option For Donors.
- Request For Blood In Emergency Situation.
- Chat with administrator regarding doctors and more.
  
**General Admin (Staff) Controls** 
- Can See People Order.
- Can Add Anything.
- Can Update Anything.
- Can Delete Anything.
- Can See All History.
- Can Approve, Deliver Orders, Appointments and Requests.
- Category Pages Optimized for SEO.
- Responsive Layout.

## User Interface :
<p align="center">
  <b>Title</b><br>
    <img src="ss/title.JPG">
   <b> Registration / User Login / Forget Password</b><br>
    <img src="ss/login.jpg">
    <img src="ss/reg.jpg">
    <img src="ss/forget.jpg">
    <br><b> Medicine Info Page</b><br>
    <img src="ss/medicine_page.jpg">
    <b> Medicine Page Details</b><br>
    <img src="ss/medicine_details.jpg">
    <br><b> Purchase Process</b><br>
    <img src="ss/purchase 1.jpg">
    <img src="ss/purchase 2.jpg">
    <br><b> Select Payment</b><br>
    <img src="ss/select_payment.jpg"><br>
    <b> AamarPay</b><br>
    <img src="ss/amarpay.jpg"><br>
    <b> Paypal</b><br>
    <img src="ss/paypal.jpg"><br>
    <b> Doctor Info</b><br>
    <img src="ss/doctorInfo.jpg">
    <b> Doctor Details</b><br>
    <img src="ss/doctordetails.jpg">
    <b> Appointment Process</b><br>
    <img src="ss/selectdate.jpg">
    <img src="ss/patientinfo.jpg">
    <br><b> Appointment Confirm</b><br>
    <img src="ss/appointment.jpg">
    <br><b> Blood Donors</b><br>
    <img src="ss/blooddonors.jpg">
    <br><b> Filter Donor</b><br>
    <img src="ss/filterdonor.jpg">
    <br><b> Request Blood</b><br>
    <img src="ss/request_form.jpg">
    <img src="ss/req_sumary.jpg"><br>
    <b> Approving Request From Admin Panel</b><br>
    <img src="ss/approving donor from admin.JPG">
    <b> User Profile </b><br>
    <img src="ss/userprofile.jpg">
    <b> Admin Profile</b><br>
    <img src="ss/adminprofile.jpg">
    <b> Medicine Panel</b><br>
    <img src="ss/medicinepanel.jpg">
    <b> Create, Update and Delete Medicines</b><br>
    <img src="ss/create update and del medicine.JPG">
    <b> Doctor Panel</b><br>
    <img src="ss/doctorpanel.jpg">
    <b> Create, Update and Delete Doctors</b><br>
    <img src="ss/create updaet and del doctor.JPG">
    <b> Donor Panel</b><br>
    <img src="ss/donorpanel.jpg">
    <b> Create, Update and Delete Donors</b><br>
    <img src="ss/create update and del donor.JPG">
    <b> Users Panel</b><br>
    <img src="ss/userpanel.jpg">
    <b> Update and Delete Users</b><br>
    <img src="ss/edit user and del.JPG">
    <b> Appointments,Orders and Requests</b><br>
    <img src="ss/appointment order and request.JPG">

</p>

