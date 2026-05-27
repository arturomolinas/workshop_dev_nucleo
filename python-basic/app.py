import os
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello():
    entorno = os.getenv('APP_ENV', 'Desarrollo')
    return f"Aplicación do it v2 en el entorno de: {entorno}\n"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
