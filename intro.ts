let cl = console.log;

let btn = document.getElementById('btn');
let num1 = document.getElementById('num1')! as HTMLInputElement;
let num2 = document.getElementById('num2')! as HTMLInputElement;

function add(n1, n2){
    // return n1 + n2;
    // if(typeof n1 === 'number' && typeof n2 === 'number'){
    //     return n1 + n2;
    // }else{
    //     throw new Error('Invalid Inputs');
    // }
    return n1 + n2;
}



btn.addEventListener('click', () => {
    cl(add(parseInt(num1.value), Number(num2.value)));
})


let x:number = 10;
cl(typeof x);

// x = false;

let canDrive:boolean =  true;
cl(typeof canDrive);

// canDrive = 10;

let anyValue:any = 400;
cl(typeof anyValue);

anyValue = "hello ";

cl(typeof anyValue);

anyValue ={
    fname: 'Varsh',
    lname: 'Dadhale',
}
cl(typeof anyValue);

anyValue =[10,20,30];
cl(typeof anyValue);
