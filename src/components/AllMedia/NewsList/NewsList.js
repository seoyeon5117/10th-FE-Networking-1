import CategoryBar from "../../CategoryBar/CategoryBar.js";

export default function NewsList() {
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

    return `<nav id="categoryBar">${CategoryBar(category, mediaNum)}</nav>
    <div class="pressNews"></div>`;
}