# 🏀 Bella Vista Hoopers - Live Basketball Game Tracker

A professional, real-time basketball statistics tracker with live spectator view, dark mode, and comprehensive game management.

**Live Demo:** `https://YOUR-USERNAME.github.io/basketball-tracker/`

## ✨ New Features (v2.5)

### 1. 🌙 Dark Mode
- Toggle between light and dark themes
- Perfect for dim gym environments
- Saves your preference
- Click **"🌙 Dark Mode"** button in the scoreboard

### 2. 📡 Live Spectator View
- **Spectators can watch live scores** without accessing the tracker
- Real-time updates (within 1 second)
- Works on any device (phone, tablet, computer)
- Beautiful, distraction-free interface
- Shows scores, stats, MVP, and quarter info

**Spectator URL:** `spectator.html`

### 3. 🏆 Best Player of the Game (MVP)
- Select the game's best player
- Shows in final score view
- Displays in cast mode with full stats
- Visible to spectators

### 4. 🔄 Quick Swap Substitutions
- One-click player substitutions
- **"↑ Start"** button for bench players
- **"↓ Bench"** button for starting players
- No drag-and-drop needed

## 📋 Complete Feature List

### Game Management
- ⚙️ Setup screen with team and player customization
- 📅 Auto-saves game data to localStorage
- ↶ Undo last 50 actions
- 🗑️ Clear and start new game
- 📄 Export game summary to CSV

### Statistics Tracking
- Points, Rebounds, Assists, Steals, Blocks, Fouls
- Quick score buttons (+1, +2, +3 points)
- Track stats by quarter or view totals
- Team fouls per quarter
- Real-time score updates

### Display Modes
- 📺 Cast Mode - Full-screen scoreboard for displays
- 📡 Live Spectator View - Read-only for viewers
- 🌙 Dark Mode - Easy on the eyes
- 📱 Mobile-friendly responsive design

### Player Management
- Drag-and-drop between starting lineup and bench
- Quick swap buttons for instant substitutions
- Track up to 15+ players per team
- Configurable number of quarters (1-8)

## 🚀 Quick Start

### For Tracking Games

1. Open `index.html`
2. Fill in game details and player names
3. Click **"Start Game"**
4. Track stats in real-time
5. Enable **"📡 Live: ON"** for spectators
6. Export summary when done

### For Spectators

1. Open `spectator.html` in any browser
2. Watch live scores and stats
3. No login required
4. Works on any device

## 🔧 Setup Instructions

### Basic Setup (No Live Updates)
Works immediately - no setup needed!
- All features work except live spectator view
- Data saved locally on your device

### Advanced Setup (With Live Updates)
Enables real-time spectator viewing:

1. **Create Firebase Project** (5 minutes)
   - See `FIREBASE_SETUP.md` for detailed instructions
   - Completely free for typical usage

2. **Update Firebase Config**
   - Replace config in `index.html` (line ~2302)
   - Replace config in `spectator.html` (line ~367)

3. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Configure Firebase"
   git push origin main
   ```

4. **Share Spectator URL**
   ```
   https://YOUR-USERNAME.github.io/basketball-tracker/spectator.html
   ```

## 📱 Using on Mobile Devices

### iOS (iPhone/iPad)
1. Upload HTML files to iCloud Drive or email to yourself
2. **DO NOT** open directly (will show preview mode)
3. **Instead:** Access via GitHub Pages URL
4. Add to Home Screen for quick access

### Android
1. Access via GitHub Pages URL
2. Add to Home Screen in Chrome
3. Works like a native app

### Best Practice
Always use the **GitHub Pages URL** for reliable mobile access.

## 🎮 How to Use

### Starting a Game
1. Enter game name and team names
2. List players (one per line)
3. First 5 players = starting lineup
4. Rest go to bench
5. Set number of quarters (default: 4)

### During the Game
- **Click +/- buttons** to update stats
- **Quick score buttons** for fast point tracking
- **Swap button** for quick substitutions
- **Drag players** between starting/bench
- **Switch quarters** using quarter selector
- **Undo mistakes** with Undo button

### Live Spectator Mode
1. Click **"📡 Live: OFF"** to turn it ON
2. Share spectator URL with viewers
3. Stats update in real-time (1-2 second delay)
4. Turn OFF when game ends to save data usage

### After the Game
1. Switch to **"Total"** quarter view
2. Select **Best Player of the Game**
3. Click **"📄 Export Game Summary"**
4. Cast final scores to display
5. Clear data or start new game

## 🎯 Tips & Tricks

### Faster Stat Tracking
- Use **Quick Score buttons** (+1, +2, +3) for points
- Keep quarter view on current quarter
- Use **Quick Swap** instead of drag-and-drop

### For Spectators
- Works best on phones in portrait mode
- Auto-refreshes every 1-2 seconds
- No editing possible (read-only)
- Connection status shown at bottom

### Dark Mode
- Great for evening games
- Easier on eyes in dark gyms
- Saves battery on OLED screens
- Preference saved automatically

### Cast Mode
- Full-screen scoreboard
- Perfect for TV displays
- Auto-updates every 2 seconds
- Shows MVP when viewing Total

## 🏆 Best Player Selection

The MVP feature appears after the game:
1. Switch to **"Total"** quarter view
2. Click the dropdown under "🏆 Best Player of the Game"
3. Select the player
4. Shows in exports and cast mode
5. Visible to spectators viewing final

## 📊 Export Format

CSV export includes:
- Game summary (name, date, winner)
- Final scores
- Best Player of the Game
- Complete player statistics
- Per-player totals

Perfect for:
- Season stat tracking
- League records
- Social media posts
- Post-game analysis

## 🔒 Privacy & Data

- **All data stored locally** in browser (localStorage)
- **No account required**
- **No tracking or analytics**
- **Firebase only used for live updates** (optional)
- **You control your data** - export or delete anytime

## 🆘 Troubleshooting

### Stats Not Saving
- Check if browser allows localStorage
- Don't use Private/Incognito mode
- Clear browser cache if issues persist

### Live Updates Not Working
- Check Firebase configuration
- Ensure Live Updates is ON
- Check internet connection
- See `FIREBASE_SETUP.md` for detailed help

### Mobile Issues
- Use GitHub Pages URL (not direct file)
- Allow JavaScript in browser
- Ensure stable internet connection
- Try different browser if problems persist

### Dark Mode Stuck
- Click toggle button
- Clear localStorage: `localStorage.clear()`
- Refresh page

## 🎨 Customization

Want to customize? Edit the CSS variables in `index.html`:
```css
:root {
    --bg-gradient-start: #667eea;  /* Background color */
    --text-primary: #2d3748;        /* Text color */
    /* ... more variables ... */
}
```

## 📄 Files Included

- `index.html` - Main tracker interface
- `spectator.html` - Live spectator view
- `FIREBASE_SETUP.md` - Firebase configuration guide
- `README.md` - This file

## 🔄 Version History

- **v2.5** - Added Dark Mode and Live Spectator View
- **v2.4** - Quick Swap substitution buttons
- **v2.3** - MVP selection feature
- **v2.2** - Cast mode enhancements
- **v2.1** - Mobile responsiveness
- **v2.0** - Complete rewrite with modern features

## 💡 Future Ideas

Want more features? Here are possibilities:
- Shot tracking (FG%, 3PT%, FT%)
- Game timer/clock
- Play-by-play log
- Player season stats across games
- Plus/minus tracking
- Shot charts
- Voice commands
- Multi-game tournament mode

## 📞 Support

Having issues?
1. Check `FIREBASE_SETUP.md` for live updates help
2. Clear browser cache and try again
3. Try a different browser
4. Check browser console for errors (F12)

## 📜 License

Free to use for personal and league purposes.

---

**Made with ❤️ for Bella Vista Hoopers**

*Track games professionally. View live anywhere. Stay organized.*
