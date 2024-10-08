import NewsList from "../NewsList/NewsList.js";
import GridView from "../GridView/GridView.js";

export default function MediaTab() {
    const mediaTab = renderMediaTab();
    setTimeout(() => {
        addMediaEventListener()
    }, 0);

    return mediaTab;
}

export function renderMediaTab() {
    return `
        <div class="mediaTab">
            <div class="tab allMediaTab">전체 언론사</div>
            <div class="tab subscribedMediaTab">내가 구독한 언론사</div>
        </div>
        <div class="selectView">
            <img class="newspaperIcon" src="../src/assets/list-view.svg" alt="">
            <img class="newspaperIcon" src="../src/assets/grid-view.svg" alt="">
        <div>
    `
}

export function handleClick(event) {
    const mediaTab = document.querySelectorAll('.tab')
    mediaTab.forEach((element) => element.classList.remove('selectedTab'));
    event.target.classList.add('selectedTab');
    
    // 탭 구현
    const tabContent = document.getElementById('tabContent');

    if(event.target.classList.contains('allMediaTab')) {
        tabContent.innerHTML = GridView();
    } else {
        tabContent.innerHTML = NewsList();
    }
}

// 이벤트 리스너 추가
export function addMediaEventListener() {
    const mediaTab = document.querySelectorAll('.tab');
    mediaTab.forEach((element) => element.addEventListener("click", handleClick));
    
    // 전체 언론사 기본 선택
    document.querySelector('.allMediaTab').click();
}