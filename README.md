 🎯 Career OS — AI Career Calculator

> An AI-powered career success platform. Enter your skills, get a success probability score, personalized roadmap, curated resources, and chat with an AI mentor — all in one app!

🌐 Live Site:  https://career-oh.netlify.app

---

 ✨ What This App Does

Career OS helps students and professionals figure out their career path using AI. Just enter your skills, how many hours a day you can study, and your timeline — and the app gives you:

- A **success probability score** (e.g. 73%)
- A **risk level** (Low / Medium / High)
- A **personalized AI mentor** chat
- A **week-by-week roadmap**
- **Curated resources** matched to your skills
- **University & scholarship** recommendations
- **Language learning** guides
- **Todo tracker** for your career goals


📁 File Structure

```
career-app/
│
├── 📄 index.html           ← Main HTML page
├── 📄 package.json         ← Project dependencies
├── 📄 vite.config.js       ← Build configuration
├── 📄 vercel.json          ← Vercel routing config
├── 📄 README.md            ← You are here!
│
├── 📁 src/
│   ├── 📄 App.jsx          ← Entire app (all screens + logic)
│   └── 📄 main.jsx         ← React entry point
│
└── 📁 api/
    └── 📄 claude.js        ← Backend API proxy
```



🤖 AI Setup

This app uses **Groq AI** (free, no credit card needed).

### Get your free Groq API key:
1. Go to **console.groq.com**
2. Sign up free
3. Click **API Keys** → **Create API Key**
4. Copy the key — starts with `gsk_...`

### Add key to App.jsx:
Open `src/App.jsx` and find this line:
```js
const KEY = "GROQ_KEY_HERE";
```
Replace with your key:
```js
const KEY = "gsk_your_actual_key_here";
```


🚀 How to Deploy

### Option A — Netlify (Drag & Drop, easiest)
1. Go to **netlify.com** → sign up free
2. Go to **netlify.com/drop**
3. Drag your project folder onto the page
4. Get instant live URL! ✅

 Option B — Vercel (GitHub, auto-deploy)

**Step 1 — Upload to GitHub:**
1. Go to **github.com** → New repository → name it `career-app`
2. Upload all files — make sure structure is correct:
   - `index.html`, `package.json`, `vite.config.js`, `vercel.json` → at ROOT
   - `App.jsx`, `main.jsx` → inside `src/` folder
   - `claude.js` → inside `api/` folder
3. Commit changes ✅

**Step 2 — Deploy on Vercel:**
1. Go to **vercel.com** → Sign up with GitHub
2. Click **Add New Project** → Import `career-app`
3. Click **Deploy** → wait 1 minute ✅

**Step 3 — Add API key on Vercel:**
1. Vercel → your project → **Settings** → **Environment Variables**
2. Add:
   - Name: `GROQ_API_KEY`
   - Value: your `gsk_...` key
   - Tick ✅ Production, Preview, Development
3. Click **Save** → **Redeploy** ✅



 📱 All Screens

| Screen | Description |
|--------|-------------|
| 🔐 **Login / Sign up** | Create account, saved in browser |
| 🧮 **Calculator** | Enter skills + hours + timeline → AI success score |
| 🤖 **AI Mentor Chat** | Chat with AI after running analysis |
| 🗺️ **Roadmap** | AI-generated week-by-week career plan |
| ✅ **To-Do** | Task tracker with priorities and progress |
| 📚 **Resources** | YouTube, courses, jobs, internships by skill |
| 🎓 **Higher Study** | Top universities + scholarships worldwide |
| 🌐 **Languages** | Apps, YouTube, certifications per language |
| 👤 **Profile** | Link LinkedIn, GitHub, Behance + 10 more |
| 🌙 **Theme** | Dark / Light mode toggle |
| 😹 **Memes** | Fun emoji reactions on milestones |



 🐛 Common Problems & Fixes

| Problem | Fix |
|---------|-----|
| **Blank white screen** | Press F12 → Console → screenshot the error |
| **AI not working** | Check API key is correct in App.jsx |
| **404 error on Vercel** | Files are in wrong folder — check structure above |
| **Build failed** | Make sure `package.json` is at ROOT level |
| **"Failed to fetch"** | You're on Netlify — key must be in App.jsx directly |

---

 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Build tool |
| Groq AI (Llama 3.3) | Free AI for mentor, analysis, roadmap |
| Vercel / Netlify | Hosting |
| CSS Variables | Dark/light theming |
| Plus Jakarta Sans | Font |


 🔄 How to Update Your Site

On Netlify:
1. Make changes to files
2. Go to Netlify → Deploys
3. Drag updated folder → instant redeploy ✅

On Vercel:
1. Update files on GitHub
2. Vercel auto-redeploys in 1 minute ✅


 💡 Customization Ideas

- Change app name → search `Career OS` in `App.jsx` and replace
- Change colors → edit CSS variables at top of `App.jsx`
- Add more resources → edit `RESOURCES` constant in `App.jsx`
- Add more universities → edit `UNIVERSITIES` constant in `App.jsx`
- Switch AI model → change `llama-3.3-70b-versatile` in `callClaude` function
