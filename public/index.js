import Header from "../src/components/Header/Header.js";
import CreateRollingBar from "../src/components/RollingBar/CreateRollingBar.js"
import CategoryBar from "../src/components/CategoryBar/CategoryBar.js";

const header = document.getElementById('header');
const rollingBar = document.getElementById('rollingBar');
const categoryBar = document.getElementById('categoryBar');

header.innerHTML = Header();
rollingBar.innerHTML = CreateRollingBar();
categoryBar.innerHTML = CategoryBar();