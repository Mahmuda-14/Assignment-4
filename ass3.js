// function sortMaker(arr) {

//     if ((arr[0] > 0) && (arr[1] > 0)) 
//     {

//         if (arr[0] < arr[1]) {
//             let element0 = arr[0];
//             let element1 = arr[1];
//             [element0, element1] = [element1, element0]
//             return (element0, element1);
//         }
//         else if (arr[0] > arr[1]) {
//             let element0 = arr[0];
//             let element1 = arr[1];
//             [element0, element1] = [element0, element1]
//             return (element0, element1);
//         }
//         else {
//             return "equal";
//         }
//     }
//     else 
//     {
//         return "Invalid Input";

//     }
// };

// const ad = [2, 4];
// console.log(sortMaker(ad));

function sortMaker(arr) {

    if (arr[0] > 0 && arr[1] > 0) {
        if (arr[0] < arr[1]) {
            
             return [arr[1],arr[0]];
        } else if (arr[0] > arr[1]) {
            return [arr[0], arr[1]];
        } else {
            return "equal";
        }
    } 
    else {
        return "Invalid Input";
    }
}

const ad = [2,3];
console.log(sortMaker(ad)); // Output: [4, 2]
