import sys
import os

# Add current project directory to sys.path
INTERP = os.path.expanduser("~/virtualenv/health360/bin/python")
if os.path.exists(INTERP):
    sys.executable = INTERP

sys.path.insert(0, os.path.dirname(__file__))

# Import Flask app and alias as 'application' (WSGI standard required by Passenger / LiteSpeed / Hostinger)
from app import app as application
