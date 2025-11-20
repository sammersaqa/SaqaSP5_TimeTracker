**Name:** Sammer Saqa  
**Last Updated:** November 20, 2025  
**Exercise Name:** Time Tracker  
<!------------ Peer Review -------------->  
**Reviewed by:** [Xavier]  
<!-- **Notes:**  [Okay the only thing I see fix is the font for the report, and jeremy name, numbers/hours as I see you have the font-family: 'Rubik';, you just need to fix it to font-family: "Rubik", sans-serif; but besides that everything else works as it intend to work. ] --> [This has been fixed to the best of my ability to have it match up. Font sizes are a little different, but it matches the mock figma. If I put san-serif, the font completely changes that doesn't match the mock figma.]

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

### **Nov 20, 2025**
- Reviewed all code and confirmed that no data is hardcoded beyond the provided assets and starter content.
- Verified that all activity cards, timeframes, and data are dynamically rendered from the JSON file.
- Confirmed that the user profile and timeframe buttons are part of the provided static content and used as intended.
- Finalized font and size adjustments to best match both the live site and the Figma mockup.

### **Nov 19, 2025**
- Cleaned up JavaScript logic and verified dynamic rendering with `fetch()` and time range switching.
- Fixed padding issue in `.profile-bg`: `padding-bottom: 20rem` was blocked by `height: 500px`. Considered using `min-height` or removing fixed height.
- Corrected flex alignment in `.card-header`: removed `margin-right: 4rem` from `<h3>` to allow proper spacing.
- Adjusted ellipsis icon alignment using `align-self: center` and confirmed layout matches mockup.
- Verified that `.card-header` uses `display: flex; justify-content: space-between;` and that children are direct and clean.
- Used DevTools and temporary background colors to inspect layout behavior and confirm spacing.
- Ensured `card.innerHTML` structure in JavaScript matches expected layout for flex alignment.
- Preserved original sizing and design from Figma while correcting alignment issues.
- Adjusted all fonts and font sizes to the best of my ability to match the physical look of both my site and the Figma mockup.

### **Nov 18, 2025**
- Set up initial HTML, CSS, and JSON structure.
- Built the base layout and rendered activity cards with static data.
- Connected time range buttons and verified basic interactivity.
