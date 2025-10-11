// Cargar todo el contenido del DOM -- Ya sufrí con esto en algunos ejercicios de Javascipt :)
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".schedule-form");
    const tableBody = document.querySelector(".schedule-table tbody");

  // Event Listener para cuando se envie el "formulario"
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita que recargue la página

        // Obtiene los valores del formulario
        const date = document.querySelector("#date").value;
        const start = document.querySelector("#start").value;
        const end = document.querySelector("#end").value;
        const activity = document.querySelector("#activity").value || "—";
        const place = document.querySelector("#place").value || "—";
        const type = document.querySelector("#type").value || "—";
        const notes = document.querySelector("#notes").value || "—";
        const flagColor = document.querySelector("#flag").value;
        const isBusy = document.querySelector("#freebusy").checked;

    // Crear una nueva fila
        const newRow = document.createElement("tr");

    // Poner las respuestas en la fila nueva
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

        // Color de la "bandera"
        newRow.style.borderLeft = `6px solid ${flagColor}`;

        // Agrega la nueva fila a la tabla
        tableBody.appendChild(newRow);

        // Limpia las respuestas del formulario, para volverlo a llenar
        form.reset();
    });
});
