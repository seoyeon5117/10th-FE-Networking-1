import RollingBar from "./RollingBar.js";
import data from "../../data/headline.json" with {type: "json"};

const HeadlineNum = 5;

export default function CreateRollingBar() {
    addEventListener("DOMContentLoaded", () => {
        const rollingBar = document.getElementById("rollingBar");
        rollingBar.innerHTML = initialRollingBar();

        // rollingBar 1, 2 구분
        document.querySelectorAll(".rollingBar").forEach((element, index) => {
            index += 1;
            element.classList.add('rollingBar' + index);
        })
        
        document.querySelectorAll('.rollingBar').forEach((element, index) => {
            console.log(element);
            const items = element.querySelectorAll('.rollingBarList');
            index = index * HeadlineNum;
            updateClasses(items, index);
            index++;
            setInterval(() => {
                index = (index + 1) % HeadlineNum;
                updateClasses(items, index);
            }, 5000);
        });
    })
}

export function initialRollingBar() {
    const rollingBar1 = RollingBar(data, 0, HeadlineNum);
    const rollingBar2 = RollingBar(data, HeadlineNum*1, HeadlineNum);

    return `
        <div class="rollingBarWrapper">
            ${rollingBar1}
            ${rollingBar2}
        </div>
    `
}

export function updateClasses(items, index) {
    items.forEach((item, i) => {
        item.classList.remove('prev', 'current', 'next');
        if (i === (index - 1 + HeadlineNum) % HeadlineNum) {
            item.classList.add('prev');
        } else if (i === index) {
            item.classList.add('current');
        } else if (i === (index + 1) % HeadlineNum) {
            item.classList.add('next');
        }
    })
}