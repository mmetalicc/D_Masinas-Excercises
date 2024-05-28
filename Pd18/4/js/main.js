const zmogus ={
    Vardas: 'Denisas Masinas',
    ugis: '180cm',
    metai: 18
}

function print(obj) {
    for(const info in obj){
        console.log(info, obj[info]);
    }
}

print(zmogus)