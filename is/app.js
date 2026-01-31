import { loadItems } from './storage.js';
import { renderItemCard } from './itemCard.js';
import { initForm } from './itemForm.js';

const container = document.getElementById('itemsContainer');

function renderAll() {
    container.innerHTML = '';
    loadItems().forEach(item => {
        container.appendChild(renderItemCard(item));
    });
}

initForm(renderAll);
renderAll();
