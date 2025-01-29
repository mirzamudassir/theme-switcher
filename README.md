# Theme Switcher for Next.js & TailwindCSS

A lightweight and efficient **dark mode switcher** package for **Next.js** applications using **TailwindCSS**. Easily toggle between **light** and **dark** modes with persistent state management.

---

## 🚀 **Features**
- 🌗 **Dark Mode Support** – Uses TailwindCSS's `dark` class.
- 💾 **Persistent Theme State** – Stores user preference in `localStorage`.
- ⚡ **Lightweight & Fast** – No external dependencies apart from React & TailwindCSS.
- 🎨 **Easy to Customize** – Modify styles to fit your project.

---

## 📦 **Installation**
Install the package using npm or yarn:

```bash
pnpm install ox-theme-switcher
# or
npm install ox-theme-switcher
#or
yarn add ox-theme-switcher
```

---

## 🛠 **Usage**

### **1️⃣ Wrap Your Application with `ThemeProvider`**
Modify your `_app.tsx` to include the `ThemeProvider`:

```tsx
import { ThemeProvider } from 'ox-theme-switcher';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
```

### **2️⃣ Add the `ThemeSwitcher` Button**
Place the `ThemeSwitcher` component anywhere in your app:

```tsx
import { ThemeSwitcher } from 'ox-theme-switcher';

const Home = () => (
  <div className="p-4">
    <ThemeSwitcher />
  </div>
);

export default Home;
```

---

## 🎨 **Customization**
You can customize the button styles inside `ThemeSwitcher.tsx`:

```tsx
<button
  onClick={toggleTheme}
  className="p-2 rounded-full bg-gray-200 dark:bg-gray-800"
>
  {theme === 'light' ? '🌞 Light Mode' : '🌙 Dark Mode'}
</button>
```

Modify the styles to match your UI.

---

## 🛠 **Development & Contribution**
1. Clone the repository:
   ```bash
   git clone https://github.com/mirzamudassir/theme-switcher.git
   cd theme-switcher
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the package:
   ```bash
   npm run build
   ```

---

## 📄 **License**
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## ✨ **Author**
Developed and maintained by **[Mudassir Mirza](https://github.com/mirzamudassir)**. Contributions and feedback are welcome! 😊

---

## 📣 **Support & Issues**
For feature requests, questions, or bug reports, please [open an issue](https://github.com/mirzamudassir/theme-switcher/issues).

---

Happy coding! 🚀

