🎯 Career OS — AI Career Calculator

An AI-powered career success platform. Enter your skills, get a success probability score, personalized roadmap, curated resources, and chat with an AI mentor — all in one app!

🌐 Live Site: 

📁 Exact File Structure
When you upload to GitHub, files MUST be in these exact locations:
your-repo/
│
├── 📄 index.html           ← ROOT level
├── 📄 package.json         ← ROOT level
├── 📄 vite.config.js       ← ROOT level
├── 📄 vercel.json          ← ROOT level
├── 📄 README.md            ← ROOT level
│
├── 📁 src/
│   ├── 📄 App.jsx          ← INSIDE src/ folder
│   └── 📄 main.jsx         ← INSIDE src/ folder
│
└── 📁 api/
    └── 📄 claude.js        ← INSIDE api/ folder

📄 What Each File Does
FileLocationPurposeindex.htmlrootThe main HTML page users seepackage.jsonrootTells Vercel what packages to installvite.config.jsrootTells Vercel how to build the appvercel.jsonrootTells Vercel how to handle routessrc/App.jsxsrc/The ENTIRE app — all screens and logicsrc/main.jsxsrc/Starts the React appapi/claude.jsapi/Secret backend that hides your API key

🚀 How to Deploy on Vercel (Step by Step)
Step 1 — Upload files to GitHub

Go to github.com → sign in
Click "+" → "New repository"
Name it career-app → click Create repository
Click "uploading an existing file"
Upload the 4 ROOT files: index.html, package.json, vite.config.js, vercel.json
Click Commit changes

Now create the src/ folder:

Click "Create new file"
In the filename box type: src/App.jsx
Open your App.jsx file → copy ALL the code → paste it in
Click Commit changes
Repeat for src/main.jsx

Now create the api/ folder:

Click "Create new file"
In the filename box type: api/claude.js
Open your claude.js file → copy ALL the code → paste it in
Click Commit changes


Step 2 — Deploy on Vercel

Go to vercel.com
Click Sign up with GitHub → allow access
Click "Add New Project"
Find your career-app repo → click Import
Don't change ANY settings
Click Deploy
Wait about 1 minute ✅
You get a live URL like career-app.vercel.app 🎉


Step 3 — Add API Key (makes AI work)
Get your key:

Go to console.anthropic.com
Sign up free
Click "API Keys" on the left
Click "Create Key" → give it a name → copy it
It looks like: sk-ant-api03-xxxxxxxxxxxx

Add it to Vercel:

In Vercel → click your project
Click Settings tab
Click Environment Variables
Fill in:

Name: ANTHROPIC_API_KEY
Value: paste your sk-ant-api03-xxx key


Click Save
Click Deployments tab → click Redeploy
Wait 30 seconds ✅


✨ App Features
ScreenWhat it does🔐 Login / Sign upCreate account, saved across sessions🧮 Career CalculatorEnter skills + hours/day + timeline → get AI success score🤖 AI Mentor ChatChat with Claude AI about your career🗺️ RoadmapAI generates a week-by-week plan just for you✅ To-Do TrackerAdd tasks, set priorities, track progress📚 ResourcesYouTube, courses, jobs, internships filtered by your skills🎓 Higher StudyTop universities worldwide with rankings + scholarships🌐 LanguagesPick a language → get apps, YouTube channels, certifications👤 ProfileLink LinkedIn, GitHub, Behance and 10+ platforms🌙 Dark / LightToggle theme with one click😹 Meme ReactionsFun emoji popups when you hit milestones

🔑 Getting an Anthropic API Key (Free)

Go to console.anthropic.com
Click Sign up
Verify your email
Go to API Keys → Create Key
Copy the key — starts with sk-ant-api03-
New accounts get free credits to start!


🐛 Common Problems & Fixes
ProblemFix404 errorFiles are in wrong folder — check structure aboveBlank white screenPress F12 → Console tab → screenshot the errorAI not workingAPI key not added or wrong — recheck Step 3Build failedMake sure package.json is at ROOT not inside a folder"Module not found"Make sure src/main.jsx and src/App.jsx exist

🔄 How to Update Your Site Later

Make changes to any file on GitHub
Go to Vercel → your project → Deployments
Click Redeploy
Done in 1 minute! ✅

Or even easier — connect GitHub to Vercel and it auto-deploys every time you push!

🛠️ Tech Stack

React 18 — UI framework
Vite — Build tool
Claude AI (Anthropic) — Powers the AI mentor, analysis and roadmap
Vercel — Hosting + serverless API
CSS Variables — Theming
Plus Jakarta Sans — Font


📞 Need Help?

Vercel docs: vercel.com/docs
Anthropic API: docs.anthropic.com
Ask Claude: just paste your error here! 😊


Built with ❤️ · Powered by Claude AI
