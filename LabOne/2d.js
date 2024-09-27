const num = [25, 31, 42, 77];


let d =(num) =>{
    if(num < 70)
    {
        num = num *2;
        console.log(num);
    }
}

const newArr = num.map(d)