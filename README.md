# Movie Searching App 🎬

A modern, responsive web application to search for movies and view detailed information using the OMDb API. Built with HTML, CSS, and JavaScript, and deployed with Netlify Functions to securely handle API requests.

---
## 🚀 Live Demo

[👉 View Live Demo] (https://find-movie-info.netlify.app/)

---

## 📚 Features

- 🔍 Search any movie by title
- 🎞️ View official poster and basic movie details
- ⭐ IMDb rating display
- 🧬 Genre badges with clean styling
- 🧾 Short plot summary
- 📱 Fully responsive for all devices
- 🌐 Real-time data using [OMDb API](https://www.omdbapi.com/)
  
---

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3 (with responsive media queries), JavaScript (ES6)
- **API:** [OMDb API](https://www.omdbapi.com/)
- **Serverless Backend:** Netlify Functions (Node.js)
- **Deployment:** Netlify

---

## 📱 Responsive Design

The app is fully responsive and adapts to all screen sizes:
- **Mobile:** 344px – 430px
- **Tablet:** up to 768px, 912px
- **Small Desktop:** up to 1024px
- **Medium Desktop:** up to 1280px
- **Large Desktop:** 1281px and above
  
----

## ⚡ How It Works

1. **User enters a movie name** in the search bar.
2. **Frontend sends a request** to a Netlify Function endpoint.
3. **Netlify Function fetches data** from the OMDb API using a secure API key.
4. **Movie details are displayed** dynamically on the page.

---

## 📂 Project Structure

```
├── index.html
├── style.css
├── Movie.js
├── netlify/
│   └── functions/
│       └── movie.js / movie.mjs
├── .gitignore
├── netlify.toml
└── ...

----

## 📝 Getting Started (Development)

1. **Clone the repository:**
   ```
   git clone https://github.com/your-username/movie-searching-app.git
   cd movie-searching-app
   ```

2. **Install dependencies for Netlify Functions:**
   ```
   npm install
   ```

3. **Set up your OMDb API key:**
   - Create a `.env` file in the root (not committed to Git).
   - Add: `OMDB_API_KEY=your_api_key_here`

4. **Run locally with Netlify CLI (optional):**
   ```
   npm install -g netlify-cli
   netlify dev
   ```

---

## 🛡️ Security

- The OMDb API key is never exposed to the frontend.
- All API requests are proxied through a Netlify Function.

---

## 🙏 Acknowledgements

- [OMDb API](https://www.omdbapi.com/) for movie data.
- [Netlify](https://www.netlify.com/) for seamless deployment and serverless functions.

---

## 📣 License

This project is open-source and available under the [MIT License](LICENSE).

---
🙋‍♀️ Author
M. Lipsa Jena
💼 MERN Stack Developer | JavaScript Enthusiast
📍 India
🔗 Portfolio (https://lipsa-portfolio.netlify.app)
