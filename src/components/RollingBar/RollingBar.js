export default function RollingBar(content = {}, index, headlineNum) {
    let list = [];

    for(let i = index ; i < index+headlineNum ; i++){
        if(!content[i].officeName) {
            content[i].officeName = '오류'
        }

        if(!content[i].title) {
            content[i].title = '데이터 로딩 중 오류가 발생했습니다.'
        }
        
        list.push(`
            <div id=${content[i]._id} class="rollingBarList rolling-${i}">
                <div class="rollingBarMedia">${content[i].officeName}</div>
                <div class="rollingBarContent">${content[i].title}</div>
            </div>
        `);
    }

    return `
        <div id="rollingBarId" class="rollingBar">
            <div class="rollingBarText">
                ${list.join('')}
            </div>
        </div>
    `
}