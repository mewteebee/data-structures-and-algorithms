// write a function to find the intersection of two arrays

let arr1 = [1, 2, 5, 6, 8, 9, 4];
let arr2 = [1, 4, 8, 3, 5];

let intersectionOfArrays = function(arr1, arr2) {
    let intersectionArr = [];
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            if(arr1[i] === arr2[j]){
                intersectionArr.push(arr1[i]);
            }
        }
    }  
    return intersectionArr
}

console.log(intersectionOfArrays(arr1, arr2));

// function to find the intersection of two arrays, my first implementation did not work due to unnecessary array.length mathematics, however the logic was still valid. 