function unroll(squareArray) {
    let unrollArray= [];

    while(squareArray.length > 0){
        //get top row
        unrollArray = [...unrollArray, squareArray.shift()];
        //get right coloumn
        unrollArray = [...unrollArray, squareArray.map(row => row.pop())];

        //get bottom row in reverse
        unrollArray = [...unrollArray, squareArray.pop().reverse()];

        //get left column
        unrollArray = [...unrollArray, squareArray.map(row => row.shift()).reverse()];
    }
    //returning an array with no sub elements
    return unrollArray.flat(1);
}

module.exports = unroll;
