//Array num declared and populated
const num = [25, 31, 42, 77];

//Function d 
let d =(num) =>{
    //If Statement to see if parameter is smaller than 70
    if(num < 70)
    {
        //parameter is multiplied by 2
        num = num *2;
        //updated varirable printed to console
        console.log(num);
    }
}

//Invoke function & .map calls function on each element in the array
const newArr = num.map(d)