export function createBlurredCoverElement(elementToCover) {
    let blurredCoverElement = document.createElement("div");
    blurredCoverElement.setAttribute("class", "cover");
    blurredCoverElement.style.position = "absolute";

    // blurredCoverElement;
    // blurredCoverElement.style.top = "20px"; //1010
    // blurredCoverElement.style.right = "20px"; //2020
    // blurredCoverElement.appendChild(elementToCover);
    // return blurredCoverElement;

    //Gabi version
    let elementToCoverStyles = elementToCover.getBoundingClientRect();

    blurredCoverElement.style.height = `${elementToCoverStyles["height"]}px`;
    blurredCoverElement.style.width = `${elementToCoverStyles["width"]}px`;
    blurredCoverElement.style.top = `${
        elementToCoverStyles["top"] + window.scrollY
    }px`;
    blurredCoverElement.style.left = `${
        elementToCoverStyles["left"] + window.scrollX
    }px`;

    return blurredCoverElement;
}
