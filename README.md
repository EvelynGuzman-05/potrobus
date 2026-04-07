# PotroBus - Rastreador de Autobús Escolar

## Estructura
- `backend/` → API REST Python/Flask
- `web-admin/` → Panel administrador web

## Levantar proyecto
1. Backend: `cd backend && source venv/bin/activate && pip install -r requirements.txt && python app.py`
2. Web Admin: Abrir `web-admin/index.html` o usar Live Server

## API
- `GET /api/health` → Estado del servidor
- `GET /api/buses/<id_unidad>/positions` → Historial de posiciones de un camión
- `GET /api/buses/<id_unidad>/positions/latest` → Última posición de un camión
- `GET /api/buses/<id_unidad>/recorrido-activo` → Recorrido activo de un camión
- `POST /api/gps/position` → Guardar posición 
