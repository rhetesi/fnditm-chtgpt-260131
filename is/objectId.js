export function generateObjectId() {
    const timestamp = Math.floor(Date.now() / 1000).toString(16);
    return timestamp +
        'xxxxxxxxxxxxxxxx'
            .replace(/[x]/g, () => (Math.random() * 16 | 0).toString(16));
}
