from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

"""Ruta de prueba para verificar que la conexión está 'sana'
Devuelve un JSON con el estado del servicio."""
@app.route("/api/health")
def health():
    return jsonify({"status": "ok", "service": "potrobus-backend"})


"""Rutas para gestionar autobuses"""
@app.route("/api/buses", methods=["GET"])
def list_buses():
    # TODO: devolver lista de autobuses
    return jsonify([])

@app.route("/api/buses", methods=["POST"])
def create_bus():
    # TODO: crear autobús
    data = request.json
    return jsonify(data), 201


"""Rutas para gestionar rutas y posiciones GPS de los autobuses"""
@app.route("/api/buses/<int:bus_id>/positions", methods=["GET"])
def get_bus_positions(bus_id):
    # TODO: historial de posiciones
    return jsonify([])

@app.route("/api/gps/position", methods=["POST"])
def ingest_position():
    # TODO: recibir lat/lng del bus
    data = request.json
    return jsonify(data), 201

if __name__ == "__main__":
    app.run(debug=True)