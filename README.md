# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- Here’s a **detailed description** for your **GitHub repository** about the **Currency Converter** project:

---

# 🌍 Currency Converter 💱  

A **simple and responsive** currency converter built with **React & Tailwind CSS**. This web app allows users to convert currencies in real-time using exchange rates from an external API.  

## 🚀 Features  
✔ **Live Exchange Rates** - Fetches real-time currency exchange rates via an API.  
✔ **Intuitive UI** - Clean, modern, and easy-to-use interface.  
✔ **Swap Functionality** - Quickly switch between "From" and "To" currencies.  
✔ **Responsive Design** - Works on desktop and mobile devices.  
✔ **Optimized for Performance** - Uses React hooks and efficient state management.  

## 🛠 Tech Stack  
- **React.js** (Frontend Framework)  
- **Tailwind CSS** (Styling)  
- **Exchange Rate API** (Fetching live currency data)  

## 📸 UI Preview  

![currencyConverter](https://github.com/user-attachments/assets/c1b17bc5-09be-4d4d-9c91-85b058de6ded)


## 🔧 Setup & Installation  
1️⃣ Clone the repository:  
```sh
git clone https://github.com/yourusername/currency-converter.git
cd currency-converter
```
2️⃣ Install dependencies:  
```sh
npm install
```
3️⃣ Start the app:  
```sh
npm run dev
```
4️⃣ Open in your browser:  
```sh
http://localhost:5173
```

## 🔗 API Integration  
The app uses the **ExchangeRate-API** to fetch real-time exchange rates. Update the API key in `currencyInfo.js`:  
```js
fetch(`https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/${currency}`)
```

## 🏆 Contributing  
Pull requests are welcome! Please follow these steps:  
- Fork the repository  
- Create a new branch  
- Make your changes  
- Submit a pull request  

## 📜 License  
This project is **open-source** under the **MIT License**.  

---

