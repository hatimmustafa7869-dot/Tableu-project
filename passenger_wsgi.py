import sys
import os

# Add current project root to sys.path
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, BASE_DIR)

# Bulletproof WSGI loader for Hostinger / LiteSpeed / cPanel
try:
    from app import app as application
except Exception as exc:
    # Fallback to serving index.html directly instead of crashing LiteSpeed with 503
    def application(environ, start_response):
        req_path = environ.get('PATH_INFO', '').strip('/')
        if not req_path:
            file_name = 'index.html'
        elif not os.path.splitext(req_path)[1]:
            file_name = req_path + '.html'
        else:
            file_name = req_path

        target_file = os.path.join(BASE_DIR, file_name)
        if not os.path.exists(target_file):
            target_file = os.path.join(BASE_DIR, 'index.html')

        ext = os.path.splitext(target_file)[1].lower()
        mime_map = {
            '.html': 'text/html; charset=utf-8',
            '.css': 'text/css',
            '.js': 'application/javascript',
            '.json': 'application/json',
            '.svg': 'image/svg+xml',
            '.png': 'image/png'
        }
        content_type = mime_map.get(ext, 'text/html; charset=utf-8')

        try:
            with open(target_file, 'rb') as f:
                body = f.read()
            start_response('200 OK', [('Content-Type', content_type), ('Content-Length', str(len(body)))])
            return [body]
        except Exception:
            err_body = f"Health360 Server Initialization: {exc}".encode('utf-8')
            start_response('200 OK', [('Content-Type', 'text/plain'), ('Content-Length', str(len(err_body)))])
            return [err_body]
