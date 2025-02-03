# 🎬 Movie Search App

This is a movie search project using **React**, **TypeScript** and **The Movie Database API (TMDb)**.

The Movie Search App is a web application built with React, TypeScript, and TMDb API that allows users to 
search for movies in real time. It displays movie titles, descriptions, and posters, and features a simple and 
clean UI styled with custom CSS. The app fetches data from the external TMDb API and provides a smooth search experience for users.

## 📌 Features

- 🔍 Real-time movie search.
- 🎭 Displays the movie title, description, and poster.
- 🎨 Custom styles with CSS.
- 🌐 Consumes the external TMDb API.
- 
## 🛠️ Technologies Used

- **React + Vite** ⚛️
- **TypeScript** ⌨️
- **Pure CSS** 🎨

## 🚀 Installation and Running

1. **Clone the repository:**
   ```sh
   git clone https://github.com/tuusuario/movie-search-app.git
   cd movie-search-app
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Run the project:**
   ```sh
   npm run dev
   ```
4. **Open in the browser:**
   - El proyecto correrá en `http://localhost:5173/`

## 🔑 API Setup

To make the application work properly, you need an TMDb API key:

1. Sign up at [The Movie Database](https://www.themoviedb.org/).
2. Get your API key from [here](https://www.themoviedb.org/settings/api).
3. Modify `MovieSearch.tsx` and insert your API Key:
   ```tsx
   const API_KEY = "TU_API_KEY_AQUI";
   ```

## 📂 Project Structure
```
📦 movie-search-app
 ┣ 📂 src
 ┃ ┣ 📂 assets  # Images and resources
 ┃ ┣ 📂 styles  # CSS Files
 ┃ ┃ ┗ 📜 MovieSearch.css
 ┃ ┣ 📜 MovieSearch.tsx
 ┃ ┣ 📜 main.tsx
 ┃ ┗ 📜 vite-env.d.ts
 ┣ 📜 index.html
 ┣ 📜 package.json
 ┣ 📜 vite.config.ts
 ┣ 📜 tsconfig.json
 ┗ 📜 README.md
```

## ✨ Future Improvements

- Add pagination 📄
- Display more movie details 📝
- Implement a favorites system ⭐

## 🛠 Contribution

If you'd like to contribute, you're welcome! Open an issue or a pull request on this repository. 😊

## 📜 License

This project is licensed under the MIT license. You can use and modify it freely. ✅

