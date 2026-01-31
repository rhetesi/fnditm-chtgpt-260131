import { saveItem } from './storage.js';
import { generateObjectId } from './objectId.js';
import { fileToBase64 } from './imageHelper.js';

export function initForm(refreshCallback) {
    document.getElementById('itemForm').addEventListener('submit', async e => {
        e.preventDefault();

        const imageFile = image.files[0];
        const imageData = imageFile ? await fileToBase64(imageFile) : null;

        saveItem({
            id: generateObjectId(),
            name: name.value,
            location: location.value,
            foundAt: foundAt.value,
            image: imageData,
            description: '',
            attributes: {},
            finder: '',
            contact: ''
        });

        e.target.reset();
        refreshCallback();
    });
}
