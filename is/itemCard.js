import { deleteItem } from './storage.js';
import { openModal } from './itemModal.js';

export function renderItemCard(item) {
    const col = document.createElement('div');
    col.className = 'col-md-4';

    col.innerHTML = `
        <div class="card h-100 shadow-sm">
            ${item.image ? `<img src="${item.image}" class="card-img-top">` : ''}
            <div class="card-body">
                <div class="item-id">${item.id}</div>
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${new Date(item.foundAt).toLocaleString()}</p>
            </div>
            <div class="card-footer d-flex justify-content-between">
                <button class="btn btn-sm btn-outline-success">Kiadás</button>
                <button class="btn btn-sm btn-outline-secondary">Raktár</button>
                <button class="btn btn-sm btn-outline-danger">Törlés</button>
            </div>
        </div>
    `;

    col.querySelector('.card').onclick = () => openModal(item);
    col.querySelector('.btn-outline-danger').onclick = e => {
        e.stopPropagation();
        deleteItem(item.id);
        col.remove();
    };

    return col;
}
