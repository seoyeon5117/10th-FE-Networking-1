import AllMediaGridView from "../AllMedia/GridView/GridView.js";
import AllMediaNewsList from "../AllMedia/NewsList/NewsList.js";
import SubscribedGridView from "../SubscribedMedia/GridView/GridView.js";
import SubscribedNewsList from "../SubscribedMedia/NewsList/NewsList.js";

let tab = 'allMediaTab';
let view = 'gridView';

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
            <svg class="viewIcon listView" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="svgPath" d="M19 5V19H5V5H19ZM20.1 3H3.9C3.4 3 3 3.4 3 3.9V20.1C3 20.5 3.4 21 3.9 21H20.1C20.5 21 21 20.5 21 20.1V3.9C21 3.4 20.5 3 20.1 3ZM11 7H17V9H11V7ZM11 11H17V13H11V11ZM11 15H17V17H11V15ZM7 7H9V9H7V7ZM7 11H9V13H7V11ZM7 15H9V17H7V15Z" fill="#879298"/>
            </svg>
            <svg class="viewIcon gridView" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="svgPath" d="M3 11V3H11V11H3ZM3 21V13H11V21H3ZM13 11V3H21V11H13ZM13 21V13H21V21H13ZM5 9H9V5H5V9ZM15 9H19V5H15V9ZM15 19H19V15H15V19ZM5 19H9V15H5V19Z" fill="#879298"/>
            </svg>
        <div>
    `
}

/**전체 언론사 - 내가 구독한 언론사 클릭 이벤트*/
export function handleTabClick(event) {
    const mediaTab = document.querySelectorAll('.tab')
    mediaTab.forEach((element) => element.classList.remove('selectedTab'));
    event.target.classList.add('selectedTab');

    if(event.target.classList.contains('allMediaTab')){
        tab = 'allMediaTab';
    } else {
        tab = 'subscribedMediaTab';
    }

    selectTabView();
}

/**그리드 - 리스트 클릭 이벤트*/
export function handleViewClick(event) {
    const viewIcon = document.querySelectorAll('.viewIcon');
    viewIcon.forEach((element) => {
        element.classList.remove('selectedIcon');
        element.classList.add('unselectedIcon');
    });
    event.target.closest('.viewIcon').classList.remove('unselectedIcon');
    event.target.closest('.viewIcon').classList.add('selectedIcon');
    
    if(event.target.closest('.viewIcon').classList.contains('gridView')){
        view = 'gridView';
    } else {
        view = 'newsList';
    }

    selectTabView();
}

function selectTabView() {
    // 탭 구현
    const tabContent = document.getElementById('tabContent');

    if(tab === 'allMediaTab'){
        if(view === 'gridView'){
            tabContent.innerHTML = AllMediaGridView();
        } else {
            tabContent.innerHTML = AllMediaNewsList();
        }
    } else {
        if(view === 'gridView'){
            tabContent.innerHTML = SubscribedGridView();
        } else {
            tabContent.innerHTML = SubscribedNewsList();
        }
    }
    changeIconColor();
}

/** 아이콘 색 변경 */
export function changeIconColor() {
    // 파란색 -> 회색
    document.querySelectorAll('.selectedIcon').forEach(element => element.querySelector('.svgPath').setAttribute("fill", "#4362D0"));
    
    // 회색 -> 파란색
    document.querySelectorAll('.unselectedIcon').forEach(element => element.querySelector('.svgPath').setAttribute("fill", "#879298"));
}

// 이벤트 리스너 추가
export function addMediaEventListener() {
    // 전체 언론사 - 내가 구독한 언론사
    const mediaTab = document.querySelectorAll('.tab');
    mediaTab.forEach((element) => element.addEventListener("click", handleTabClick));
    
    // 그리드 - 리스트
    const icon = document.querySelectorAll('.viewIcon');
    icon.forEach((element) => element.addEventListener("click", handleViewClick));

    
    // 초기 전체 언론사, 그리드뷰 기본 선택
    initialUpdate();
}

export function initialUpdate() {
    const mediaTab = document.querySelectorAll('.allMediaTab')
    mediaTab.forEach((element) => element.classList.add('selectedTab'));

    const viewIcon = document.querySelectorAll('.gridView');
    viewIcon.forEach((element) => element.classList.add('selectedIcon'));

    selectTabView();
}