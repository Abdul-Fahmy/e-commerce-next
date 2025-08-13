# E-Commerce Next.js Project

A modern e-commerce web application built with **Next.js (App Router)**, **TypeScript**, **Redux Toolkit**, and **Tailwind CSS v4**.  
The app follows a modular folder structure and includes authentication, product browsing, cart management, wishlist, checkout, payment method and more.

---

## 📌 Features

- **User Authentication**
  - Login / Register
  - Protected routes for authenticated users
- **Product Management**
  - Product listing with images and details
  - Product detail page with dynamic routing
- **Cart & Wishlist**
  - Add/remove products from cart
  - Wishlist management
- **Orders**
  - View past orders with delivery & payment status
  - Order details including products and total price
- **UI & Styling**
  - Fully responsive design
  - Styled using Tailwind CSS and SCSS Modules
  - Custom 404 page
- **API Integration**
  - Fetch products, orders, and user data from external API
  - Axios for API requests

---

## 🛠 Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/) (v15+)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), SCSS Modules
- **API Calls**: [Axios](https://axios-http.com/)
- **Other Libraries**:
  - `jwt-decode` for token decoding
  - `formik` & `yup` for forms and validation
  - `swiper` for product sliders

---

## 📂 Folder Structure

```plaintext
src
├─ app
│  ├─ (auth)            # Authentication routes (login, signup, forgot password)
│  ├─ (pages)           # Main application pages (protected routes)
│  ├─ favicon.ico
│  ├─ globals.css       # Global styles (TailwindCSS)
│  ├─ layout.tsx        # Root layout
│  ├─ not-found.tsx     # Custom 404 page
│  └─ notFound.module.scss
├─ components           # Reusable UI components
├─ hooks                # Custom React hooks
├─ store                # Redux slices & store setup
└─ types                # TypeScript type definitions
```

---

## 📬 Contact

For inquiries, suggestions, or collaboration opportunities, feel free to reach out:

- **Email:** abdelrhmanfahmy69@gmail.com
- **GitHub:** [Abdul-Fahmy](https://github.com/Abdul-Fahmy)
- **LinkedIn:** [Abdulrahman Fahmy](https://www.linkedin.com/in/abdulrahman-fahmy-aa06321b0/)

---

© 2025 Abdulrahman Fahmy – All Rights Reserved

## 🛠 Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Abdul-Fahmy/e-commerce-next.git
cd e-commerce-next
```

### 2️⃣ Install dependencies

```bash
npm install
```

---

## 💻 Development

### Start the development server

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🏗 Build for Production

```bash
npm run build
npm start
```

---

## 🎨 Styling

This project uses **Tailwind CSS v4**.  
You can customize styles in `globals.css` and use Tailwind’s utility classes for quick styling.

---

## 🔒 Authentication

- Public routes for **login**, **signup**, **forgot password**
- Protected routes for **home**, **orders**, **wishlist**, **cart** and more
- Route protection handled via `ProtectedRoute` and `GuestRoute` components

---

## 📦 State Management

- **Redux Toolkit** slices:
  - `cart.slice.ts`
  - `wishlist.slice.ts`
  - `products.slice.ts`
  - `categories.slice.ts`
  - `user.slice.ts`
- Store initialized in `store.ts`

---

## 🔗 API Integration

- All API requests are handled via **Axios**
- Base URL and endpoints are configurable
- Authentication tokens stored in Redux

---

## 📄 License

This project is licensed under the MIT License – see the [LICENSE](./LICENSE) file for details.
