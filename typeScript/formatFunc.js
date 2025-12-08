var theFunc = function (value) {
    if (typeof value === "number") {
        return "$" + value.toFixed(2);
    }
    else if (typeof value === "boolean") {
        return value ? "YES" : "NO";
    }
    else if (typeof value === "string") {
        if (value.length === 0) {
            return "";
        }
        return "".concat(value.charAt(0).toUpperCase()).concat(value.substring(1));
    }
    else {
        throw new Error("Invalid Input data");
    }
};
console.log(theFunc("vanshSharma"));
console.log(theFunc(19198));
console.log(theFunc(true));
