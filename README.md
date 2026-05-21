# STEM Abacus Academy Website (Woraiyur, Trichy)

A premium, modern, and highly interactive single-page marketing website built for **STEM Abacus Woraiyur** (associated with Smart Enliven Memory). This site is fully responsive, SEO-optimized, and optimized for free-forever static hosting on **GitHub Pages**.

## Features Included

1.  **Immersive Hero Banner**: Large banner featuring the academy's official slogan: *"The beautiful thing about learning is that nobody can take it away from you."*
2.  **USP Grid**: Highlighting key academy strengths: clean classrooms, individual attention, expert faculty led by Bhuvaneshwari Mam, and flexible hybrid (offline/online) sessions.
3.  **Interactive Course Switcher**: Allows parents to filter academic courses (Mental Abacus, Speed Maths, Phonics, Handwriting) and instantly read through detailed syllabi, schedules, and estimated fees.
4.  **Student Registration Steps**: A visual, step-by-step onboarding timeline highlighting the journey for new students, featuring direct action links (form scrolling, WhatsApp chat, and telephone triggers) and an interactive **Welcome Kit Modal** detailing student materials.
5.  **Interactive Program Calculator (Advisor)**: An automated recommendation engine where parents choose their child's age and focus area to instantly get course levels, duration, frequency, and estimated fees.
6.  **WhatsApp Integration & Inquiry Form**: Direct, customized WhatsApp chat links and a sleek registration inquiry form with a submission checkmark panel.
7.  **Simulated Google Map Coordinates**: Detailed contact card containing physical addresses, multiple phone lines (+91 98656 78338, +91 93841 78338), official Instagram links (@stem_abacus_woraiyur), and a custom-styled Google Map canvas.

---

## Technical Architecture

*   **HTML5**: Clean semantic outline with unique element IDs designed for browser testing.
*   **CSS3**: Smart Indigo Blue & Warm Golden Amber color scheme. Clean layout patterns using Flexbox/Grid, fluid animations, custom card hovers, glassmorphism headers, and interactive modals.
*   **JavaScript**: Vanilla ES6 scroll event listeners, responsive menu toggles, program recommendation calculator, inquiry form submittal feedback, tab filter toggles, welcome modal state controller, and intersection observers for scroll entrance reveals.

---

## How to Host for Free on GitHub Pages

This website is built entirely using static client-side files (`index.html`, `styles.css`, `app.js`), meaning it is **100% free to host** on **GitHub Pages** with zero hosting costs or maintenance fees.

### Step 1: Create a GitHub Repository
1.  Log in to your GitHub account (or create one for free at [github.com](https://github.com)).
2.  Click the **+** (New) button in the upper right and select **New repository**.
3.  Set the Repository Name to `stem-abacus` (or any name you prefer).
4.  Set the repository visibility to **Public** (required for free GitHub Pages).
5.  Leave "Initialize this repository with..." options unchecked.
6.  Click **Create repository**.

### Step 2: Initialize Git and Commit Code Locally
Open PowerShell or your preferred terminal in this project folder (`C:\Users\suraj\.gemini\antigravity\scratch\stem-abacus`) and run:

```bash
# Initialize git repository
git init

# Add all project files
git add .

# Make the initial commit
git commit -m "Initial commit: STEM Abacus Academy Website"
```

### Step 3: Link and Push to GitHub
Copy the remote repository URL from your new GitHub page (e.g., `https://github.com/your-username/stem-abacus.git`) and run the following in your terminal:

```bash
# Rename the default branch to main
git branch -M main

# Add the remote repository address
git remote add origin https://github.com/your-username/stem-abacus.git

# Push your code online
git push -u origin main
```

### Step 4: Activate GitHub Pages
1.  Go to your repository page on GitHub.
2.  Click on the **Settings** tab.
3.  On the left navigation menu, scroll down to the **Code and automation** section and click on **Pages**.
4.  Under **Build and deployment**, set the source to **Deploy from a branch**.
5.  Under **Branch**, click the dropdown that says `None` and choose `main` (leave the folder as `/ (root)`).
6.  Click the **Save** button.
7.  Wait about 1 to 2 minutes. Refresh the page, and GitHub will display a message at the top of the Pages section:
    > **Your site is live at** `https://your-username.github.io/stem-abacus/`

---

## Local Development & Testing

To preview the website locally on your computer before publishing:
1.  Double-click `index.html` to open it directly in any browser.
2.  Alternatively, serve it using python's built-in server (in your terminal):
    ```bash
    python -m http.server 8000
    ```
    And navigate to `http://localhost:8000` in your web browser.
