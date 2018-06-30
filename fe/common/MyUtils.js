let MyUtils={
    scrollTo: function (index, time) {
        let dd = document.documentElement,
            db = document.body,
            currentIndex = dd.scrollTop || db.scrollTop,
            count = (time ||1000) / 50,
            per = (index-currentIndex) / count;
        console.log(currentIndex,count,per);
        while (count) {
            dd.scrollTop == 0 ? db.scrollTop += per : dd.scrollTop += per;
            count -= 1;
        }
    },
    getTop: function (element) {
        let actualTop = element.offsetTop;
        let parent = element.offsetParent;
        while (parent != null) {
            actualTop += parent.offsetTop + (parent.offsetHeight - parent.clientHeight) / 2;
            parent = parent.offsetParent;
        }
        return actualTop;
    }
};
export default MyUtils;