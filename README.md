# The Best Advisory website


## Published website
- https://kahaav.github.io/the-best-advisory-website/
- https://kahaav.github.io/the-best-advisory-website/design-system/

## Install Git & Sign up to GitHub
1. Download Git for Windows/Mac
    - https://git-scm.com/install/windows
    - https://git-scm.com/install/mac
2. Run the installer & keep the default options
3. Open terminal & verify the installation
    - git --version
4. Sign up for GitHub using Google or Apple
    - https://github.com/signup
5. Configure Git identity
    - git config --global user.name "Client Name"
    - git config --global user.email "client@email.com"
6. Authenticate GitHub
    - git push (first time it prompts authentication)
7. Clone repository
    - git clone https://github.com/kahaav/the-best-advisory-website.git
    - cd cd the-best-advisory-website
    - git status

## Install Node.js and npm
1. Download Node.js for Windows/Mac
    - https://nodejs.org/en/download
2. Install Node.js and restart terminal
3. Open terminal & verify the installation
    - node --version
    - npm --version

## Install dependencies and run Vite
1. Install dependencies inside the project folder
    - npm install
2. Run the Vite development server
    - npm run dev
3. Open browser and confirm that Vite starts without errors
    - http://localhost:5173/
4. To stop, run Ctrl + C inside terminal

## Install Visual Studio Code + Claude Code extension
1. Download VSCode for Windows/Mac
    - https://code.visualstudio.com
2. Run the installer and launch the VSCode
3. Open the-best-advisory-website project in VSCode
4. Open Extensions panel and search for 'Claude Code' by Anthropic
5. Click Install
6. Open Claude Code panel in VSCode
7. Follow the authentication prompts

## Publish with Claude Code
Ask Claude, e.g. **"publish my work"** or **"we are done, push the changes"** or something similar.

Claude checks the code, writes a commit message and pushes. The site updates in a few minutes.

## Roll back with Claude Code
Ask Claude, e.g. **"undo the last publish"** or **"the site is broken, go back"**.
  
Claude reverts the latest publish and pushes, so the previous version goes live again.
