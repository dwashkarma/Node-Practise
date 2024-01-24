const data = ["dwash", "karma", "puldev", "mandal", "waterflow"];
console.log("Array:", data);
//length method; => gives the length or the size of the array;
console.log("Length of Array is :", data.length);

//toString() method; =>converts the array into a string;
console.log(data.toString());

//at() method; => gives the value at the given index acts same as []
console.log("Array at(2):", data.at(2));

//join() method; => join the array with the given value; behaves like a toString but with a different value
console.log(data.join("/"));

//pop()  method;  => pop or remove the last element of the array;
console.log(data.pop());
//after pop method
console.log("After the pop method,data:", data);

//push() => push the data or insert the data into the array at the last index and returns the length of the array
console.log(data.push("push"));

//after the push;
console.log("After the push method,data:", data);

//shift() => Removes the first index element of the Array
console.log("Shift:", data.shift());
//After the shift method of array;
console.log("After the shift():", data);

//unshift(); =>add the value at the first index of the element and returns the length of the array
console.log("UnShift method :", data.unshift("unShift"));
console.log(data);

//concat() => creates a new array by merging or concating the existing arrays
let newArry = ["new", "concat", "array"];
let concatArr = data.concat(newArry);
console.log("newArray after cnocat():", concatArr);

//copyWithin() => copies array elements to the another position of the array, overwrites the existing  values;

// Copy to index 2, the elements from index 0 to 2:
console.log("After copyWithin", concatArr.copyWithin(2, 0, 2));

//flat() => creates a new array with sub-array elements concatenated to a specified depth.
const flatArray = [[1, 2], [2, 3], 4, 5];
console.log("Flat array:", flatArray.flat());
console.log(flatArray);

//splice() => add an item or element to an array;
console.log("ConcatArray:", concatArr);
// or remove the element of the array from the index to number of element.
console.log(concatArr.splice(4, 2)); // from the index 4 and remove the 2 elemet.
console.log("ConcatArr", concatArr);

//toSpliced(); => doesnot change the original array and creates a new array
console.log("toSpliced():", concatArr.toSpliced(0, 2));
//the original array is not changed.
console.log("ConcatArr:", concatArr);

//slice() =>
console.log("Slice():", concatArr.slice(2, 4));
console.log("ConcatArr:", concatArr);
