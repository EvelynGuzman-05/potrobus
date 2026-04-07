console.log('Leaflet disponible:', typeof L !== 'undefined');

const btnCheck = document.getElementById("btnCheck");
const output = document.getElementById("output");
const btnLatest = document.getElementById("btnLatest");
const btnHistory = document.getElementById("btnHistory");
const btnSendGps = document.getElementById("btnSendGps");
const BASE = "http://127.0.0.1:5000";

let map = null;
let marker = null;

btnCheck.addEventListener("click", async () => {
  try {
    const res = await fetch("http://127.0.0.1:5000/api/health");
    const data = await res.json();
    output.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    output.textContent = "Error conectando al backend: " + err;
  }
});


btnLatest.addEventListener("click", async () => {
  const res = await fetch(`${BASE}/api/buses/1/positions/latest`);
  const data = await res.json();
  output.textContent = JSON.stringify(data, null, 2);
});

btnHistory.addEventListener("click", async () => {
  const res = await fetch(`${BASE}/api/buses/1/positions`);
  const data = await res.json();
  output.textContent = JSON.stringify(data, null, 2);
});

btnSendGps.addEventListener("click", async () => {
  const res = await fetch(`${BASE}/api/gps/position`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id_recorrido: 1, lat: 27.9675427, lng: -110.9185287 })
  });
  const data = await res.json();
  output.textContent = JSON.stringify(data, null, 2);
});

const btnMap = document.getElementById("btnMap");
btnMap.addEventListener("click", async () => {
    if (!map) {
        map = L.map('map').setView([27.9675427,-110.9185287], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap'
        }).addTo(map);
        

        marker = L.marker([28.0094, -110.9108]).addTo(map)
            .bindPopup('Bus 1 - Esperando GPS...');
    }
    

    try {
        const res = await fetch(`${BASE}/api/buses/1/positions/latest`);
        const pos = await res.json();
        console.log("Posición mapa:", pos);  // DEBUG
        
        if (pos.lat && pos.lng) {
            if (marker) map.removeLayer(marker);
            

            marker = L.marker([pos.lat, pos.lng]).addTo(map)
                .bindPopup(`Bus 1<br>${new Date(pos.fecha_captura).toLocaleString('es-MX')}`);
            
            map.setView([parseFloat(pos.lat), parseFloat(pos.lng)], 16);
            output.textContent = `📍 Actualizado: ${parseFloat(pos.lat).toFixed(5)}, ${parseFloat(pos.lng).toFixed(5)}`;
        } else {
            output.textContent = "Sin posición GPS aún. Envía GPS primero.";
        }
    } catch (e) {
        console.error("Error mapa:", e);
        output.textContent = "Error mapa: " + e;
    }
});