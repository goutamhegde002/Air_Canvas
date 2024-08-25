from flask import Flask, request, jsonify
import subprocess

app = Flask(__name__)

@app.route('/run-aircanvas', methods=['POST'])
def run_aircanvas():
    try:
        # Assuming your AirCanvas program is in a file named aircanvas.py
        result = subprocess.run(['python', 'aircanvas.py'], capture_output=True, text=True)
        return jsonify({"output": result.stdout})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)