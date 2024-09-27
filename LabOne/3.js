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
    console.log("Elements in Array: " + stringArray.length);
    
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

//3d
//(i)
let deleteTask = (task)=>{
    //ii
    let pos = stringArray.indexOf(task);

    if(pos !== -1)
    {
        stringArray.splice(pos, 1);

        //iii
        console.log(task + " has been deleted from the array");

        //iv
        console.log("Elements in Array: " + stringArray.length);
    }
    else{
        console.log("Nope! Not here");
        console.log("Elements in Array: " + stringArray.length);
    }


}

deleteTask('Bananas');
deleteTask('Eric');
