const removeFromArray = function(array, ...theArgs) {
    for (const Arg of theArgs) {
        array=array.filter((item)=> item!==Arg)
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
