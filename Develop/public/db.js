const indexDB
window.indexedDB ||
window.mozIndexedDB ||
window.webkitIndexedDB ||
window.shimIndexedDB;

let db;
const request = indexedDB.open("budget", 1);

request.onupgradeneeded = ({ target }) => {
    let db target.result;
    db.createObjectStore("pending", { autoIncrement: true });
}