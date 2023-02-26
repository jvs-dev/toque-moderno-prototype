const loading_window = document.querySelector(".loading_window")

function remove_window() {
    setTimeout(() => {
        loading_window.style.opacity = "0"
        setTimeout(() => {
            loading_window.style.display = "none"    
        }, 500);
    }, 1000);
}

window.addEventListener("load", remove_window())