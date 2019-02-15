'use strict';
{
    let number;
    try{
        if (!number){
            throw new Error("変数numberが定義されていません！")
        }
        let result = 100*number;
        console.log(result);
    }catch(e){
        console.log(e.message);
    }
}

{
    function div(a,b){
    try{
        if(b==0){
            throw new Error("0で割ることはできません");
        }
        let result = a/b;
        console.log(result);
    }catch(e){
        console.log(e.message);
    }
}
div(5,0)
}