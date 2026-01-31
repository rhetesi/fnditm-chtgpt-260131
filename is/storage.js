const KEY = 'foundItems';

export function loadItems() {
    return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function saveItem(item) {
    const items = loadItems();
    items.push(item);
    localStorage.setItem(KEY, JSON.stringify(items));
}

export function deleteItem(id) {
    const items = loadItems().filter(i => i.id !== id);
    localStorage.setItem(KEY, JSON.stringify(items));
}
