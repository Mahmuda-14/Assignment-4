function findAddress(obj) {
    const street = person.name ;
    const house = person.age || "__";
    const society = person.email || "__";
    
    return (street+house+society);

  

}
let add = {
   street: 10,
   house: "15A",
   society: "Earth Perfect",

}

console.log(findAddress(add));

/*
const obj = {
    name: "mehedy",
    age:26,
    email:"abc@gmail.com"
}
Amar nam mehedy, amar boyos 26, amar email abc@gmail.com, amar bou nai. 
*/


// function printDetails(person){
//    if(typeof person !== "object"){
//        return "please provide me a valid object"
//    }else{
//        const name = person.name || "nai";
//        const age = person.age || "nai";
//        const email = person.email || "nai";
//        const bou = person.bou || "nai";
//        return name+age+email+bou;
//    }

// }

// const obj = {
//    name: "mehedy",
//    // age:26,
//    // email:"abc@gmail.com"
// }

// console.log(printDetails(obj))














// if ((obj.street != undefined) && (obj.house != undefined) && (obj.society != undefined)) {
//     let p = (obj.street + ',' + obj.house + ',' + obj.society)    // let p=Object.values(obj);
//     return p;
//  }
//  else if (obj.house == undefined) {
//     let q = (obj.street + ',' + '__' + ',' + obj.society);
//     return q;
//  }
//  else if ((obj.house == undefined) && (obj.society == undefined)) {
//     let s = (obj.street + ",__," + obj.society);
//     return s;

//  }