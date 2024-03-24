//♣1. Function "isElementVisible"- Write a function isElementVisible which defines is element visible or not.
//This function takes one parameter: element - any DOM element or null or undefined.
//The function should return true if there is a DOM element in the element parameter and it is visible on the page.
//The function should return false if element is null.
//The function should return false if element is undefined.

export function isElementVisible(element) {
    if ((element && element != null) || element != undefined) {
        if (!element.offsetWidth && !element.offsetHeight) {
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}
