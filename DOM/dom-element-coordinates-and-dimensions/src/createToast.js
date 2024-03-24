export function createToast(element) {
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.style.position = "fixed";
    toast.style.top = "20px";
    toast.style.right = "20px";
    toast.appendChild(element);
    return toast;
}
