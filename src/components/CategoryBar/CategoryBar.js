export default function CategoryBar(category, mediaNum) {

    let selectedCategoryIndex = 0;
    let currentMediaNum = 1;

    const categories = category.map((element, index) => {
        return `<div id="category-${index}" class="categoryWrapper ${index === selectedCategoryIndex ? 'selected' : ''}">
            <span class="category">
                ${element}
            </span>
            <span class="mediaCount">
                ${currentMediaNum}<span class="totalMediaCount">/${mediaNum[selectedCategoryIndex]}</span>
            </span>
        </div>`
    }).join('');

    function handleClick(event) {
        // 모든 selected class 제거
        const categoryElements = document.querySelectorAll('.categoryWrapper'); // 전체 카테고리 요소를 가져옴
        categoryElements[selectedCategoryIndex].classList.remove('selected'); // 이전에 선택된 카테고리 인덱스를 이용해 selected class 제거

        const clickedWrapper = event.target.closest('.categoryWrapper')
        clickedWrapper.classList.add('selected'); // 선택한 categoryWrapper의 class에 selected를 추가

        selectedCategoryIndex = parseInt(clickedWrapper.id.replace('category-', '')); // 선택된 카테고리 인덱스 업데이트

        updateMediaCount(clickedWrapper);
    };

    /**
     * 언론사 수 업데이트
     * @param {Node} clickedWrapper 선택된 카테고리 가져와서 해당 카테고리의 언론사 수를 가져오기 위해
     */
    function updateMediaCount(clickedWrapper) {
        currentMediaNum = 1; // 첫번째 언론사로 초기화

        const mediaCount = document.querySelectorAll('.mediaCount'); 
        const clickedMediaCount = clickedWrapper.querySelector('.mediaCount'); // 선택한 언론

        mediaCount.forEach((element) => {
            if(element === clickedMediaCount) {
                clickedMediaCount.innerHTML = `${currentMediaNum}<span class="totalMediaCount">/${mediaNum[selectedCategoryIndex]}</span>`;
            } else {
                element.innerHTML = ''; // 나머지 카테고리의 언론사 수 제거
            }
        })
    };

    // 렌더링 후 이벤트 리스너 추가
    setTimeout(() => {
        const categoryElements = document.querySelectorAll('.categoryWrapper');
        categoryElements.forEach((element) => element.addEventListener("click", handleClick));
        
        updateMediaCount(categoryElements[selectedCategoryIndex]);
    })

    return `
        <div class="categoryBar">${categories}</div>
    `
}