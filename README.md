# 🧙‍♂️ Frontend Wizards — Stage 0 Task  
### Profile Card Component (HTML • CSS • JavaScript)

This project is built as part of the **HNG Frontend Wizards — Stage 0** task.  
It showcases a simple, semantic, and responsive **Profile Card** built with plain HTML, CSS, and vanilla JavaScript.

---

## 📋 Overview

The Profile Card displays a user’s essential details including:
- Name
- Short bio
- Current time (in milliseconds)
- Avatar image
- Social links
- Hobbies
- Dislikes

All visible elements include `data-testid` attributes for automated testing and accessibility compliance.

---

## ✨ Features

✅ **Semantic HTML5 structure** using `<article>`, `<header>`, `<section>`, `<nav>`, and `<figure>`  
✅ **Responsive layout** — adapts to mobile, tablet, and desktop using Flexbox  
✅ **Accessible design** with descriptive alt text, focusable links, and proper color contrast  
✅ **Live time rendering** using `Date.now()`  
✅ **Modern minimalist dark theme**

---

## 🧠 Accessibility & Semantics

The page is fully semantic and accessible:
- Avatar uses `<figure>` and `<img>` with descriptive `alt` text.
- Social links open safely in new tabs using `target="_blank"` and `rel="noopener noreferrer"`.
- All text content is wrapped in meaningful tags (`<h2>`, `<p>`, `<ul>`, `<li>`).
- Visible keyboard focus styles ensure good navigation for users relying on keyboard input.

---

## 🧩 Folder Structure

project-folder/
├── index.html
├── styles.css
└── script.js

yaml
Copy code

---

## ⚙️ How It Works

- The script uses `Date.now()` to fetch the current timestamp in milliseconds.
- The value is displayed in the `<span data-testid="test-user-time">` element.
- (Optional enhancement) You can enable auto-updating time by adding:
  ```js
  setInterval(updateTime, 1000);


🧱 How to Run Locally
Clone the repository

git clone https://github.com/<your-username>/frontend-wizards-stage0-profile-card.git

Open the folder

bash

cd frontend-wizards-stage0-profile-card
Run locally

Simply open index.html in your browser.

That’s it — no build tools required! 🚀

🌐 Live Demo
🔗 Live Site: [Your Netlify or GitHub Pages URL here]
📦 GitHub Repository: [Your GitHub Repo URL here]

🧾 Data Test IDs (for automated testing)

Element	data-testid
Card Container	test-profile-card
User Name	test-user-name
User Bio	test-user-bio
Current Time	test-user-time
Avatar	test-user-avatar
Social Links Container	test-user-social-links
Twitter Link	test-user-social-twitter
GitHub Link	test-user-social-github
LinkedIn Link	test-user-social-linkedin
Facebook Link	test-user-social-facebook
Hobbies List	test-user-hobbies
Dislikes List	test-user-dislikes

👨‍💻 Author
Emediong Joseph Bassey
Frontend Developer | HNG Intern
🐦 Twitter
💻 GitHub

🪄 License
This project is open-source and available under the MIT License.