function findAddress(obj) {
    const street = obj.street ;
    const house = obj.house || "__";
    const society = obj.society || "__";
    
    return (street+','+house+','+society);

  

}


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

const ad = [2,-3];
console.log(sortMaker(ad));