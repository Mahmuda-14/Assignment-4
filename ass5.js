// function canPay(changeArray, totalDue) {

  
//     if (changeArray.length!=0) {
//         for (let i = 0; i < changeArray.length; i++) {
//             let sum = 0;
//             const element = changeArray[i];
//             sum = sum + element;
//             if (sum >= totalDue) {
//                 return true;
//             }
//             else {
//                 return false;
//             }
//         }
//     }
//     else {
//         return "put valid array";
//     }

// }



// const p = [1,5,5];
// console.log(canPay(p, 10));  


function canPay(changeArray, totalDue) {
    if (changeArray.length != 0) {
        let sum = 0; // Move the sum variable outside the loop
        for (let i = 0; i < changeArray.length; i++) {
            const element = changeArray[i];
            sum = sum + element;
            if (sum >= totalDue) {
                return true;
            }
        }
        return false; // Return false after checking all elements
    } else {
        return "put valid array";
    }
}

const p = [1, 5, 5];
console.log(canPay(p, 10));
