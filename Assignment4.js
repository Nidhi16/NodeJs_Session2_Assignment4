// Creating function outerFunc which has nested inner function innerFunc
function outerFunc(outerParam) {
    var innerFunc = function(innerParam) {
        alert("Value of outer parameter is: " + outerParam);
        console.log("Value of outer parameter is: " + outerParam);
        alert("Value of inner parameter is: " + innerParam);
        console.log("Value of inner parameter is: " + innerParam);
    };
    // calling inner function inside outer function
    innerFunc(4);
}

// calling outer function
outerFunc(5);