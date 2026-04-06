const btnCheck = document.getElementById("btnCheck");
const output = document.getElementById("output");

btnCheck.addEventListener("click", async () => {
  try {
    const res = await fetch("http://127.0.0.1:5000/api/health");
    const data = await res.json();
    output.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    output.textContent = "Error conectando al backend: " + err;
  }
});