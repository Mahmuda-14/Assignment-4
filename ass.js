function cubeNumber(number) {
    if (Number.isInteger(number) == true) {
        let cube = Math.pow(number, 3);

        return cube;

    }
    else {
        return "Invalid type"
    }


}



function matchFinder(string1, string2) {

    if (typeof (string1) == typeof (string2)) {
        if (string1.includes(string2)) {
            return true;

        }
        else {
            return false;
        }
    }

    else {
        return "Invalid string input";
    }
}




function sortMaker(arr) {

    if (arr[0] > 0 && arr[1] > 0) 
    {
        if (arr[0] < arr[1]) 
        {

            return [arr[1], arr[0]];
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




function findAddress(obj) {
    const street = obj.street ;
    const house = obj.house || "__";
    const society = obj.society || "__";
    
    return (street+','+house+','+society);

  

}



function canPay(changeArray, totalDue) {

    let sum = 0;
    if (changeArray.length!=0) 
    {
        for (let i = 0; i < changeArray.length; i++) 
        {
          
            const element = changeArray[i];
            sum = sum + element;
            if (sum >= totalDue) {
                return true;
            }
            else {
                return false;
            }
        }
    }
    else {
        return "Put valid array";
    }

}
