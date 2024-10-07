const dateUtils = {
    getCurrentDate() {
        const today = new Date();
        const year = today.getFullYear(); // 년
        const month = ('00' + (today.getMonth() + 1)).slice(-2); // 월
        const day = ('0' + today.getDate()).slice(-2); // 일

        const dayOfWeek = dateUtils.getDayOfWeek(year+'-'+month+'-'+day); // 요일

        const date = year + ". " + month + ". " + day + ". " + dayOfWeek;

        return date;
    },

    /**
     * 요일 가져오는 함수
     */
    getDayOfWeek (YYYYMMDD) {
        const week = ['일', '월', '화', '수', '목', '금', '토'];
        const dayOfWeek = week[new Date(YYYYMMDD).getDay()];

        return dayOfWeek + "요일";
    }
};

export default dateUtils;