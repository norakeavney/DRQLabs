//3a
const stringArray = [];

//3b 
//(i)
let addTask = (task)=>{
    //(ii)
    stringArray.push(task);
    //(iii)
    console.log(task + " Has been added to the array");
    //(iv)
    console.log("Elements in Array: " + stringArray.length)
    
}

addTask("Bananas");

//3c
let listAllTasks = ()=>{
    //i
    for (let i = 0; i < stringArray.length; i++) {
        //ii
        console.log(stringArray[i]);
        
    } 
}

listAllTasks();