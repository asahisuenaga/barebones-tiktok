# 🧼 Barebones TikTok

**Barebones TikTok** is a simple Chrome extension for people who just want to **watch TikToks that were sent to them** — nothing more.

It removes everything distracting from TikTok and only allows direct video links (like `https://www.tiktok.com/@username/video/...`). All other pages (home, search, profile, etc.) are blocked and automatically redirected.

---

## 🎯 What It Does

- ✅ Only allows TikTok video pages to load  
- 🚫 Blocks & redirects everything else  
- 🧹 Hides sidebars, menus, comments, and distractions  
- 🧠 Keeps TikTok clean, quiet, and focused  

---

## 📦 How to Install

1. Download or clone this repo.
2. Go to `chrome://extensions/` in Chrome.
3. Turn on **Developer mode** (top right).
4. Click **“Load unpacked”**.
5. Select the folder with this extension.

Done! Now any TikTok page that isn’t a video will be blocked and redirected.

---

## 🔁 Change the Redirected Video

If someone visits a TikTok link that isn’t a video, they’ll get redirected to another site.

To change that website:

1. Open the file `background.js`
2. Find this line:

```js
url: "https://www.startup.horse"

## 🚫 Please Don’t Upload This

This extension is shared for **personal use only**.
Do not upload it to the Chrome Web Store, Edge Add-ons, or any public store **without permission**.
This is a focused tool made to help people avoid distractions — not something meant for commercial use.
**Please respect the intention.**

## Contributing

We welcome contributions to make Barebones TikTok even better! If you have suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
