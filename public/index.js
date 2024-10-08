import Header from "../src/components/Header/Header.js";
import CreateRollingBar from "../src/components/RollingBar/CreateRollingBar.js";
import MediaTab from "../src/components/MediaTab/MediaTab.js";

const header = document.getElementById('header');
const rollingBar = document.getElementById('rollingBar');
const mediaTab = document.getElementById('mediaTab');

header.innerHTML = Header();
rollingBar.innerHTML = CreateRollingBar();
mediaTab.innerHTML = MediaTab();