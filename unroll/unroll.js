function unroll(squareArray) {
    let unrollArray= [];

    while(squareArray.length > 0){
        //get top row
        if (squareArray.length !== 0){
            unrollArray = [...unrollArray, squareArray.shift()];
        }        

        //get right coloumn
        if (squareArray.length !== 0){
            unrollArray = [...unrollArray, squareArray.map(row => row.pop())];
        }

        //get bottom row in reverse
        if (squareArray.length !== 0){
            unrollArray = [...unrollArray, squareArray.pop().reverse()];
        }

        //get left column
        if (squareArray.length !== 0){
            unrollArray = [...unrollArray, squareArray.map(row => row.shift()).reverse()];
        }
    }
    //returning an array with no sub elements
    return unrollArray.flat(1);
}



module.exports = unroll;
