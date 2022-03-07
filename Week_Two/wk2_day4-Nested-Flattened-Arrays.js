// Nesting Arrays

var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];
    
// We can console.log the `8` in this array if we
// console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array

// function isPresent2d(array,value){
//     var resultCount = 0;

//     for (var i = 0; i < array.length; i++) {
//         var row = array[i]; 

//         for (let j = 0; j < array[i].length; j++) {
//             var col = array[i][j];
//             if (array[i][j]==value) {
//                 resultCount = resultCount + 1
//             }
//         }
//     }

//     if(resultCount==0){
//         return false
//     }
//     else{
//         return true
//     }
// } 

// console.log(isPresent2d(arr2d,0))

// Flattening Arrays
// complete the following function

function flatten(array) {
    var flat = [];
    // your code here
    for (var i = 0; i < array.length; i++) {
        var row = array[i]; 

        for (let j = 0; j < array[i].length; j++) {
            flat.push(array[i][j]);
        }
    }

    return flat;
}
    
var result = flatten( [ [2, 5, 8], [3, 6, 1], [5, 7, 7] ] );
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

