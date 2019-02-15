'use strict';
{

    window.alert("aaa");
    confirm("bbb");

    let i = 1;

    const showCurrentTime= () =>{
         console.log(new Date());
         setTimeout(showCurrentTime,1000);
         
        }
    showCurrentTime();
}