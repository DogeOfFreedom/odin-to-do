let modifyName = (projects, name) => { // Array of html elements
    for(let i = 0; i < projects.length; i++) {
        if(projects[i].id === `${name}-btn`) {
            let projs = projects.slice(i);
            return modifyName(projs, name + "-0");
        }
    }
    return name;
}

