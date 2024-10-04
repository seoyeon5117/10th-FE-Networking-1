import { CategoryBar } from "./components/CategoryBar.js";

document.addEventListener('DOMContentLoaded', () => {
    const index = document.getElementById('index');

    index.innerHTML = `
        ${CategoryBar()}
    `
})