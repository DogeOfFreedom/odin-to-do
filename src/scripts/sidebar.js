let addButtonLogic = () => {
    let sidebar_options = document.querySelectorAll(".sidebar-option");
    for(let option of sidebar_options) {
        let child = document.querySelector(`#${option.id} button`);
        // Adds "//" when sidebar options are hovered over
        option.addEventListener("mouseover", () => {
            if(child.getAttribute("data-selected") === "false") {
                child.textContent = "// " + child.textContent; 
            }
        })
        option.addEventListener("mouseout", () => {
            if(child.getAttribute("data-selected") === "false") {
                child.textContent = child.textContent.slice(3);
            }
        })
        option.addEventListener("click", () => {
            // Remove the selected symbol from all other options
            for(let opt of sidebar_options) {
                let opt_child = document.querySelector(`#${opt.id} button`);
                opt_child.setAttribute("data-selected", "false");
                opt_child.classList.remove("highlighted");
                if(opt_child.textContent[0] === "/") {
                    opt_child.textContent = opt_child.textContent.slice(3);
                }
            }
            child.setAttribute("data-selected", "true");
            child.textContent = "// " + child.textContent; 
            child.classList.add("highlighted");
        })
    }
}

export { addButtonLogic }