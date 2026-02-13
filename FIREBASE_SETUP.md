# Firebase Setup Guide for Live Updates

## What You'll Need
- A Google account (free)
- 5-10 minutes

## Step-by-Step Setup

### 1. Create a Firebase Project

1. Go to https://console.firebase.google.com/
2. Click "Add project" or "Create a project"
3. Enter project name: `basketball-tracker` (or any name)
4. Click "Continue"
5. Disable Google Analytics (not needed) or leave it on
6. Click "Create project"
7. Wait for project to be ready, then click "Continue"

### 2. Get Your Firebase Configuration

1. In your Firebase project, click the **gear icon** ⚙️ next to "Project Overview"
2. Click "Project settings"
3. Scroll down to "Your apps" section
4. Click the **Web icon** `</>` (it says "Add an app to get started")
5. Enter app nickname: `Basketball Tracker`
6. Click "Register app"
7. You'll see a code block with `firebaseConfig` - **COPY THIS**
8. Click "Continue to console"

### 3. Enable Realtime Database

1. In the left sidebar, click **"Build"** → **"Realtime Database"**
2. Click "Create Database"
3. Choose location (select closest to you)
4. Start in **"Test mode"** (we'll secure it later)
5. Click "Enable"

### 4. Update Your Code

You need to replace the Firebase config in **TWO files**:

#### File 1: `index.html` (Main Tracker)
Find this section (around line 2302):
```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT.firebaseio.com",
    projectId: "YOUR_PROJECT",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

Replace with YOUR config that looks like:
```javascript
const firebaseConfig = {
    apiKey: "AIzaSyC...",
    authDomain: "basketball-tracker-12345.firebaseapp.com",
    databaseURL: "https://basketball-tracker-12345.firebaseio.com",
    projectId: "basketball-tracker-12345",
    storageBucket: "basketball-tracker-12345.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abc123..."
};
```

#### File 2: `spectator.html` (Spectator View)
Find the same section and replace it with the SAME config.

### 5. Commit and Push to GitHub

```bash
cd /Users/newopswerks/perso/Bella-Vista-Live-Basketball-Game-Tracker
git add .
git commit -m "Add Firebase live updates"
git push origin main
```

Wait 1-2 minutes for GitHub Pages to update.

### 6. Test Live Updates

1. Open your main tracker: `https://YOUR-USERNAME.github.io/basketball-tracker/`
2. Start a game
3. Click the **"📡 Live: OFF"** button to turn it **ON**
4. Open spectator view in a new tab: `https://YOUR-USERNAME.github.io/basketball-tracker/spectator.html`
5. Update scores in the main tracker
6. Watch them appear live on the spectator view!

## How to Share with Spectators

Give them this URL:
```
https://YOUR-USERNAME.github.io/basketball-tracker/spectator.html
```

They can view from:
- Any phone (iPhone, Android)
- Tablets
- Computers
- TVs with a browser

## Security Settings (Optional but Recommended)

After testing, secure your database:

1. Go to Firebase Console → Realtime Database → Rules
2. Replace the rules with:
```json
{
  "rules": {
    "liveGame": {
      ".read": true,
      ".write": false
    }
  }
}
```
This allows anyone to READ but only you can WRITE.

3. Click "Publish"

To allow writing from your app, you'll need to authenticate, but for now, this works fine.

## Troubleshooting

### "Firebase initialization failed"
- Double-check you copied the ENTIRE config
- Make sure you replaced it in BOTH files
- Check the browser console for specific errors

### "No active game found"
- Make sure Live Updates is ON in the main tracker
- Update some stats to trigger a push
- Refresh the spectator page

### Spectator not updating
- Check internet connection
- Make sure main tracker has Live Updates ON
- Check Firebase Console → Realtime Database to see if data exists

### Database URL error
- Make sure you selected "Realtime Database" not "Firestore"
- The databaseURL should end with `.firebaseio.com`

## Free Tier Limits

Firebase's free plan ("Spark") includes:
- **1 GB stored** - Enough for thousands of games
- **10 GB/month downloads** - Enough for ~100 simultaneous viewers
- **100 simultaneous connections** - Perfect for your needs

You won't hit these limits for personal use!

## Cost Estimate
- Small league (< 50 viewers per game): **$0/month**
- Medium league (50-100 viewers): **$0/month**
- Large events (100+ viewers): May need paid plan (~$25/month)

For most use cases, you'll stay within the free tier.
