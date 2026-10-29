# Health360 — Flask + Tableau Public

A Flask website containing Home, About, Dashboard, Story and FAQ pages. The Dashboard and Story embed the previously published Tableau Public workbook via Tableau Embedding API v3.

## Folder structure

- `app.py` — Flask server and routes
- `templates/index.html` — page content and Tableau embeds
- `static/style.css` — responsive styling
- `requirements.txt` — Python dependencies

## Run locally

1. Install Python 3.10+.
2. Open a terminal in this folder.
3. Run `python -m pip install -r requirements.txt`.
4. Run `python app.py`.
5. Open http://127.0.0.1:5000/ in your browser.

## Deploy to Render

1. Upload the **contents** of this folder to a GitHub repository (maintain folder structure).
2. Create an account at https://render.com/ and connect GitHub.
3. Choose **New > Web Service**, select your repository.
4. Runtime: Python 3; Build command: `pip install -r requirements.txt`; Start command: `gunicorn app:app`.
5. Choose a suitable plan (Free, if offered), then **Deploy Web Service**.
6. Test `/`, `/about`, `/dashboard`, `/story`, `/faq` at the public URL.

## Tableau troubleshooting

- The viz source URLs are defined in `app.py` as `DASHBOARD_URL` and `STORY_URL`.
- The Tableau views must remain publicly accessible.
- If embedding fails, open the Tableau view in a browser, click **Share > Copy Embed Code**, and compare the official generated embed `src` to the URLs in `app.py`.
- JavaScript and an internet connection are needed to display the embedded visualizations.
- Tableau Public is not a real-time clinical database. Dashboards may show extracted data.
- Never publish identifiable private patient information to Tableau Public.
