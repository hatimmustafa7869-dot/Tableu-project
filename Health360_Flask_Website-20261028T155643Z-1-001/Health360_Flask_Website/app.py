from flask import Flask, render_template

app = Flask(__name__)

WORKBOOK = 'Health360ComprehensiveHealthcareRiskDiseaseAnalytics_17929898861220'
TABLEAU_BASE = f'https://public.tableau.com/views/{WORKBOOK}'
DASHBOARD_URL = f'{TABLEAU_BASE}/Dashboard1'
STORY_URL = f'{TABLEAU_BASE}/Story1'

@app.route('/')
def home():
    return render_template('index.html', page='home', title='Home')

@app.route('/about')
def about():
    return render_template('index.html', page='about', title='About')

@app.route('/dashboard')
def dashboard():
    return render_template('index.html', page='dashboard', title='Dashboard', tableau_url=DASHBOARD_URL)

@app.route('/story')
def story():
    return render_template('index.html', page='story', title='Story', tableau_url=STORY_URL)

@app.route('/faq')
def faq():
    return render_template('index.html', page='faq', title='FAQ')

if __name__ == '__main__':
    app.run(debug=True)
