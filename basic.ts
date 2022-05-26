let cl = console.log;

cl('hello');

// function add(n1:number, n2:number, showResult: boolean){
//     if(showResult === true){
//         cl(n1 + n2);
//     }else{
//         return n1 + n2;
//     }
// }

// let num1: number = 20;
// let num2: number = 500;
// let printResult: boolean = true;

// let result = add(num1, num2, printResult);
// cl(result);// undefined as no return value

// add(num1, num2, printResult); //[520]

function add(n1:number, n2:number, showResult: boolean, phrase :string){
        if(showResult === true){
            // cl(phrase + n1 + n2);//[The result is 20500]
            cl(`${phrase} ${n1 + n2}`)
        }else{
            return n1 + n2;
        }
    }
    
    let num1: number = 20;
    let num2: number = 500;
    let printResult: boolean = true;
    let text = "The result is";
    
    add(num1, num2, printResult, text); //[the result is 520]

    //Type Inference
    // If we declare a property and assign a value to it, typeScript will assign a datatype to that property, this is called as Inference

    let x = 20;
    // x = 'Hello';//error will be shown

    // let y;
    // y = 30;
    // y = true;
    // y = 'hello';//typeof y is any

    let y:number;
    y = 50;
    // y = false;//Error will be showm