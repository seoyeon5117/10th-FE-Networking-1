import Header from "../src/components/Header/Header.js";
import CategoryBar from "../src/components/CategoryBar/CategoryBar.js";

const header = document.getElementById('header');
const categoryBar = document.getElementById('categoryBar');

header.innerHTML = Header();
categoryBar.innerHTML = CategoryBar();