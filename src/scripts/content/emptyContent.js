let showEmpty = () => {
    let body_content = document.querySelector(".body-content");
    body_content.innerHTML = "";
    let h1 = document.createElement("h1");
    h1.className = "empty-title";
    h1.textContent = "Nothing to show here";
    body_content.appendChild(h1);
}

export { showEmpty }