const btnCheck = document.getElementById("btnCheck");
const output = document.getElementById("output");
const btnLatest = document.getElementById("btnLatest");
const btnHistory = document.getElementById("btnHistory");
const btnSendGps = document.getElementById("btnSendGps");
const BASE = "http://127.0.0.1:5000";

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
    body: JSON.stringify({ id_recorrido: 1, lat: 27.9269, lng: -110.8946 })
  });
  const data = await res.json();
  output.textContent = JSON.stringify(data, null, 2);
});