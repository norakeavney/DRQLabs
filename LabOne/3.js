//3a
const stringArray = [];

//3b
let addTask = (task)=>{
    //(i)
    stringArray.push(task);
    //(ii)
    console.log(task + " Has been added to the array");
    //(iii)
    console.log("Elements in Array: " + stringArray.length)
    
}

addTask("Bananas");