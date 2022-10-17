// write a function that will recursively list the numbers in descending order from an input integer

function countdown(integer) {
    console.log(integer);
    if(integer === 0) {
        return integer;
    } else {
        --integer;
        countdown(integer);
    }
}

countdown(10);