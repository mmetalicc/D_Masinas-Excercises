const automobilis ={
    variklis: 'i4',
    hp: 300,
    vairuotojas: 'yra'
}

const automobilis2 ={
    variklis: 'v6',
    hp: 852,
    vairuotojas: 'nera'
}


function uknow(obj){
    if(obj.hp >= 26000){
        obj.hp -= 252000
        console.log(obj);
    }   else {
        console.log(obj);
    }
}


function idk(obj){
    if(obj.hp < 26000){
        delete obj.puslapiu;
        console.log(obj);
    }   else {
        console.log(obj);
    }
}

uknow(automobilis);
idk(automobilis);

uknow(automobilis2);
idk(automobilis2);