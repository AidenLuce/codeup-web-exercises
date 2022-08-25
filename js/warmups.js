/** 8-25-2022 */

let array = [5,10,15]
function arrayAverage(array){
    let total = 0
    for(let i = 0; i <array.length; i++){
        if(!isNumber((array[i]))){return false;}
        total += array[i];
    }
    return total/array.length
}

let stringArray = ['Jabba', 'Darth Maul', 'Hondo'];

    function longestString(arrayOfStrings){
        let longest = '';
        for (let i = 0; i < arrayOfStrings.length; i++){
            if (arrayOfStrings[i].length > longest.length) longest = arrayOfStrings[i];
        }
        return longest
    }

