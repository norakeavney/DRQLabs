//3a: Create an array of strings.
const stringArray = [];

//3b: Create an addTask function:
//i. It receives a string as a parameter called task
let addTask = (task)=>{
    //ii. It adds the task to the array
    stringArray.push(task);
    //iii. It prints a message in the console indicating the insertion.
    console.log(task + " Has been added to the array");
    //iv. It returns the number of elements in the array after the insertion.
    console.log("Elements in Array: " + stringArray.length);
    
}

//Call function
addTask("Bananas");

//3c: Create a listAllTasks function:
let listAllTasks = ()=>{
    //i. It iterates over all the tasks in the array.
    for (let i = 0; i < stringArray.length; i++) {
        //ii.  It prints each array item in the console.
        console.log(stringArray[i]);
        
    } 
}

//Call function
listAllTasks();

//3d: Create a deleteTask function:
//i. It receives a string as a parameter called task.
let deleteTask = (task)=>{
    //find the index of the specified task in the array
    let pos = stringArray.indexOf(task);

    //If the index is not equal to -1 : hence element exists within the array
    if(pos !== -1)
    {
        //ii. It removes that string from the array.
        stringArray.splice(pos, 1);

        //iii. It prints in console a message indicating the deletion
        console.log(task + " has been deleted from the array");

        //iv. It returns the number of elements in the array after the deletion.
        console.log("Elements in Array: " + stringArray.length);
    }
    //else statement to handle when task is not within the array
    else{
        console.log("Nope! Not here");
        console.log("Elements in Array: " + stringArray.length);
    }


}

//Call function - is included
deleteTask('Bananas');
//Call function - is not included
deleteTask('Eric');
