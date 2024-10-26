import CategoryBar from "../../CategoryBar/CategoryBar.js";

export default function NewsList() {
    const category = [
        '서울경제',
        '시사인',
        '중앙일보',
        'KBS World',
        '아시아경제',
        '씨네21',
        'MBC',
        '한겨레',
        'SBS Biz'
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

    return `<nav id="categoryBar">${CategoryBar(category, mediaNum)}</nav>
    <div class="pressNews"></div>`;
}