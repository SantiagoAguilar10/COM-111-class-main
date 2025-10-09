// Cargar todo el contenido del DOM -- Ya sufrí con esto en algunos ejercicios de Javascipt :)
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".schedule-form");
    const tableBody = document.querySelector(".schedule-table tbody");

  // Escucha el evento de envío del formulario
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita que recargue la página

        // Obtiene los valores de los campos del formulario
        const date = document.querySelector("#date").value;
        const start = document.querySelector("#start").value;
        const end = document.querySelector("#end").value;
        const activity = document.querySelector("#activity").value || "—";
        const place = document.querySelector("#place").value || "—";
        const type = document.querySelector("#type").value || "—";
        const notes = document.querySelector("#notes").value || "—";
        const flagColor = document.querySelector("#flag").value;
        const isBusy = document.querySelector("#freebusy").checked;

    // Crea una nueva fila
        const newRow = document.createElement("tr");

    // Inserta el contenido en la fila
        newRow.innerHTML = `
        <td>${date}</td>
        <td>${start}</td>
        <td>${end}</td>
        <td>${activity}</td>
        <td>${place}</td>
        <td>${type}</td>
        <td>${notes}</td>
        <td class="status ${isBusy ? "busy" : "free"}">
            ${isBusy ? "🔴 Busy" : "✅ Free"}
        </td>
        `;

        // Aplica color de bandera al borde izquierdo de la fila
        newRow.style.borderLeft = `6px solid ${flagColor}`;

        // Agrega la nueva fila a la tabla
        tableBody.appendChild(newRow);

        // Limpia el formulario
        form.reset();
    });
});
