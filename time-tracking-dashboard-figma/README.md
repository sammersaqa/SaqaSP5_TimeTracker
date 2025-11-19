**Name:** Sammer Saqa  
**Last Updated:** November 19, 2025  
**Exercise Name:** Time Tracker  
<!------------ Peer Review -------------->  
**Reviewed by:** [Insert Name Here]  
**Notes:**  [Please put review here]

---

# Figma  
[Time Tracking Dashboard Mockup](https://www.figma.com/design/ZaxV04EMrLatCav3a9Gmio/time-tracking-dashboard?node-id=0-1&p=f&t=6GJ6AU75hUrMQcs0-0)

# GitHub  
[Project Repository](https://github.com/sammersaqa/SaqaSP5_TimeTracker.git)

---

## What I Did

- Built a dashboard that shows time spent on activities like Work, Play, Study, etc.
- Used `fetch()` to load data from a JSON file and display it dynamically.
- Rendered each activity card with current and previous hours for daily, weekly, or monthly views.
- Added buttons to toggle between time ranges.
- Styled the layout with CSS to match the Figma mockup and ensure visual clarity.

---

## Updates

### **Nov 19, 2025**
- Cleaned up JavaScript logic and verified dynamic rendering with `fetch()` and time range switching.
- Fixed padding issue in `.profile-bg`: `padding-bottom: 20rem` was blocked by `height: 500px`. Considered using `min-height` or removing fixed height.
- Corrected flex alignment in `.card-header`: removed `margin-right: 4rem` from `<h3>` to allow proper spacing.
- Adjusted ellipsis icon alignment using `align-self: center` and confirmed layout matches mockup.
- Verified that `.card-header` uses `display: flex; justify-content: space-between;` and that children are direct and clean.
- Used DevTools and temporary background colors to inspect layout behavior and confirm spacing.
- Ensured `card.innerHTML` structure in JavaScript matches expected layout for flex alignment.
- Preserved original sizing and design from Figma while correcting alignment issues.

### **Nov 18, 2025**
- Set up initial HTML, CSS, and JSON structure.
- Built the base layout and rendered activity cards with static data.
- Connected time range buttons and verified basic interactivity.
