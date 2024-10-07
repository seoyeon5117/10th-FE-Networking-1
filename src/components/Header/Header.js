import dateUtils from '../../utils/dateUtils.js';

export default function Header() {
    return `
        <div class="headerWrapper">
            <div class="headerTitle">
                <img class="newspaperIcon" src="../src/assets/newspaper.png" alt="">
                <h1 class="headerTitleText">뉴스스탠드</h1>
            </div>
            <div class="date">
                ${dateUtils.getCurrentDate()}
            </div>
        </div>
    `
}