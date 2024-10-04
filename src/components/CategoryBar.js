export function CategoryBar() {
    const category = [
        '종합/경제',
        '방송/통신',
        'IT',
        '영자지',
        '스포츠/연예',
        '매거진/전문지',
        '지역'
    ];

    // 언론사 수 (임시값)
    const mediaNum = [
        '10',
        '20',
        '30',
        '40',
        '50',
        '60',
        '70',
    ]

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
        const categoryElements = document.querySelectorAll('.selected');
        categoryElements.forEach((element) => {
            element.classList.remove('selected');
        });

        const clickedWrapper = event.target.closest('.categoryWrapper')
        clickedWrapper.classList.add('selected'); // 선택한 categoryWrapper의 class에 selected를 추가

        selectedCategoryIndex = parseInt(clickedWrapper.id.replace('category-', '')); // 선택된 카테고리 인덱스 업데이트

        updateMediaCount(clickedWrapper);
    };

    // 언론사 수 업데이트
    function updateMediaCount(clickedWrapper) {
        currentMediaNum = 1; // 첫번째 언론사로 초기화

        const mediaCount = document.querySelectorAll('.mediaCount');
        const clickedMediaCount = clickedWrapper.querySelector('.mediaCount');

        mediaCount.forEach((element) => {
            if(element === clickedMediaCount) {
                clickedMediaCount.innerHTML = `${currentMediaNum}<span class="totalMediaCount">/${mediaNum[selectedCategoryIndex]}</span>`;
            } else {
                element.innerHTML = ''; // 나머지 카테고리의 언론사 수 초기화
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
        <nav class="categoryBar">${categories}</nav>
    `
}