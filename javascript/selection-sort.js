// selection sort algorithm implementation 

selectionSort = function(unorderedArray) {
    for(let i = 0; i < unorderedArray.length - 1; i++) { 
            let lowestNumberIndex = i; 
            for(let j = i + 1; j < unorderedArray.length; j++) { 
                if(unorderedArray[j] < unorderedArray[lowestNumberIndex]) { 
                    lowestNumberIndex = j; 
                }
            }
            if(lowestNumberIndex != i) {
            let temp = unorderedArray[i];
            unorderedArray[i] = unorderedArray[lowestNumberIndex];
            unorderedArray[lowestNumberIndex] = temp; 
        }
    }
    return unorderedArray; 
}

unorderedArray1 = [1, 5, 7, 3, 5, 1, 8, 9];
unorderedArray2 = [10, 45, 63, 89, 102, 334, 89, 96, 1000]
unorderedArray3 = [87, 66, 454, 3214, 9856]

console.log(selectionSort(unorderedArray1));
console.log(selectionSort(unorderedArray2));
console.log(selectionSort(unorderedArray3));

// time complexity = O(n^2)