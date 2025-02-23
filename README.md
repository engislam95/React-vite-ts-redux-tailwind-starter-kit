# React + Vite + Redux Toolkit + Tailwind  Starter Kit

This project is a starter kit that includes:
- **React** with **Vite** for fast development.
- **Redux Toolkit** for state management.
- **Axios** for API calls.
- **Tailwind CSS** for styling.

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/engislam95/React-vite-ts-redux-tailwind-starter-kit.git
cd react-vite-starter-kit
```

### 2️⃣ Install Dependencies
```sh
yarn install
```

### 3️⃣ Run the Development Server
```sh
yarn dev
```

---

## 🔧 Project Structure
```
├── src
│   ├── api
│   │   ├── axiosInstance.ts   # Axios instance with interceptors
│   ├── redux
│   │   ├── slices
│   │   │   ├── counterSlice.ts   # Counter state management example
│   │   ├── store.ts           # Redux store configuration
│   ├── App.tsx                # Main app component
│   ├── main.tsx               # Entry point
│   ├── index.css              # Tailwind CSS imports
├── tailwind.config.ts         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Project dependencies
```

---

## 🎨 Tailwind CSS Setup
Make sure your `index.css` includes:
```css
@import "tailwindcss"
```

Tailwind config (`tailwind.config.ts`):
```ts
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

---


## 📦 API Calls with Axios
The `axiosInstance.ts` handles API calls with authentication headers.

```ts
const axiosInstance = axios.create({
  baseURL: "https://api.example.com",
  headers: { "Content-Type": "application/json" },
});
```

---

## ⚡ Redux Store Setup
Ensure `store.ts` combines all slices:
```ts
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

Wrap your app in `Provider` inside `main.tsx`:
```tsx
 <Provider store={store}>
      <div className="min-h-screen bg-gray-100">
        <AppRouter />
      </div>
</Provider>
```

---

## ✅ Next Steps
- Add protected routes.
- Implement user registration.
- Fetch products using Redux + React Query.

---

## 🤝 Contributing
Feel free to submit pull requests or suggest improvements!

---

## 📜 License
This project is licensed under the MIT License.

