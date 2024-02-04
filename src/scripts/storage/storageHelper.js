let getById = (arr, id) => {
    for(let obj of arr) {
        if(obj.id === id) {
            return note;
        }
    }
}

let modifyName = (arr, name) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].id === name) {
            let arr_modified = arr.slice(i+1);
            return modifyName(arr_modified, name + "-0");
        }
    }
    return name;
}

export { getById, modifyName }