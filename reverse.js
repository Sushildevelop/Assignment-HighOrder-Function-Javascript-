let input = "Shushil chaubey"
const reverse = setTimeout(function() {
    // split method to split the input string into an array  of character, 
    // reverse method to reverse the order of the elements in the array
    // join method to concatenate the reverses element back into a string.
    let revers = input.split("").reverse().join('');
    console.log(revers);

}, 2000);