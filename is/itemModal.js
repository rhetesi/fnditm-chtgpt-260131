export function openModal(item) {
    const modalBody = document.getElementById('modalContent');

    modalBody.innerHTML = `
        <div class="row">
            <div class="col-md-5">
                ${item.image ? `<img src="${item.image}" class="modal-image">` : ''}
            </div>
            <div class="col-md-7">
                <p><strong>Azonosító:</strong> ${item.id}</p>
                <p><strong>Megnevezés:</strong> ${item.name}</p>
                <p><strong>Találás helye:</strong> ${item.location}</p>
                <p><strong>Találás ideje:</strong> ${new Date(item.foundAt).toLocaleString()}</p>
            </div>
        </div>
    `;

    new bootstrap.Modal(document.getElementById('itemModal')).show();
}
