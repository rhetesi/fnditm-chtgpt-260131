import { loadItems } from './storage.js';
import { renderItemCard } from './itemCard.js';
import { initForm } from './itemForm.js';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('itemsContainer');

    if (!container) {
        console.error('itemsContainer nem található a DOM-ban');
        return;
    }

    /**
     * Összes rögzített tárgy kirajzolása kártyák formájában
     */
    function renderAllItems() {
        container.innerHTML = '';

        const items = loadItems();

        if (items.length === 0) {
            container.innerHTML = `
                <div class="col-12 text-center text-muted py-5">
                    <p class="mb-0">Jelenleg nincs rögzített talált tárgy.</p>
                </div>
            `;
            return;
        }

        items.forEach(item => {
            const card = renderItemCard(item);
            container.appendChild(card);
        });
    }

    // Új tárgy rögzítése utáni frissítés
    initForm(renderAllItems);

    // 👇 alapértelmezett betöltéskor kirajzoljuk a kártyákat
    renderAllItems();
});
