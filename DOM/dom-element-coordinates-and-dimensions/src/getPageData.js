export function getPageData() {
    // let result = {
    // windowHeight: window.innerHeight, //111
    // windowWidth: window.innerWidth, //222

    // documentHeight: document.documentElement.offsetHeight, //113
    // documentWidth: document.documentElement.offsetLeft, //224

    // currentScrollFromTop: window.scrollX, //2000
    // currentScrollFromLeft: window.scrollY, //1000
    // };
    // return result;
    //==========================================//

    //Gabi version//
    return {
        windowHeight: document.documentElement.clientHeight,
        windowWidth: document.documentElement.clientWidth,

        documentHeight: Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.body.clientHeight,
            document.documentElement.clientHeight
        ),
        documentWidth: Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.body.clientWidth,
            document.documentElement.clientWidth
        ),

        currentScrollFromTop: window.scrollY,
        currentScrollFromLeft: window.scrollX,
    };
}
