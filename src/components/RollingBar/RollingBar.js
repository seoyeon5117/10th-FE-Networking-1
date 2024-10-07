export default function RollingBar(content = {}) {
    if(!content.name) {
        content.name = '오류'
    }

    if(!content.text) {
        content.text = '데이터가 로딩에 오류가 발생했습니다.'
    }
    
    return `
        <div class="rollingBar">
            <div class="rollingBarMedia">${content.name}</div>
            <div class="rollingBarContent">${content.text}</div>
        </div>
    `
}