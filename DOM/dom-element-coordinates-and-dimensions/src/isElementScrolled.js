//♣2. Function "isElementScrolled" - Write function isElementScrolled which detects horizontal and vertical scroll and returns a special object with such data.
//This function takes one parameter: element - any DOM element or null or undefined.
//let result = {
//scrollTop: 100, // a number in pixels of content scrolled in the top, zero if there is no scroll
//scrollLeft: 100, // a number in pixels of content scrolled in the left, zero if there is no scroll
//isScrolled: true; //if there is a horizontal or vertical scroll;
// 'false': if there are no scroll at all;};//
//If element is null or undefined, the function should return an object with null in all properties

export function isElementScrolled(element) {
    // let result = {
    //     scrollTop: null,
    //     scrollLeft: null,
    //     isScrolled: null, //true
    // };
    // if ((element && element != null) || element != undefined) {
    //     result.scrollTop = Math.round(element.scrollTop);
    //     result.scrollLeft = Math.round(element.scrollLeft);
    //     if (element.offsetWidth || element.offsetHeight) {
    //         result.isScrolled = true;
    //     } else {
    //         result.isScrolled = false;
    //     }
    //     return result;
    // } else {
    //     return result;
    // }

    //Gabi version
    if (element === null || element === undefined) {
        return {
            scrollTop: null,
            scrollLeft: null,
            isScrolled: null,
        };
    }

    return {
        scrollTop: element.scrollTop,
        scrollLeft: element.scrollLeft,
        isScrolled:
            element.scrollTop > 0 || element.scrollLeft > 0 ? true : false,
    };
}
