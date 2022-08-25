function isNumber(value){
    return !(isNaN(value) || typeof value === "boolean" || value === null)
}