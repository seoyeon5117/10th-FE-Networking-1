import RollingBar from "./RollingBar.js"

export default function CreateRollingBar() {
    const rollingBar1 = RollingBar({name: '연합뉴스', text: '[1보] 김기현·안철수·천하람·황교안, 與전대 본경선 진출'});
    const rollingBar2 = RollingBar();

    return `
        <div class="rollingBarWrapper">
            ${rollingBar1}
            ${rollingBar2}
        </div>
    `
}