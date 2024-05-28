const darbuotojai =[
    {
        vardas: 'fentas',
        pavarde: 'ivanovas',
        atlyginimas: 2052
    },

    {
        vardas: 'Juozapas',
        pavarde: 'vairuotuojas',
        atlyginimas: 3699
    }
]

function ok(obj, min){
    let idkidk = [];
    for(let i = 0; i < darbuotojai.length; i++){
        if(obj[i].atlyginimas > min){
            idkidk.push(obj[i]);
            console.log(idkidk)
        }
    }
}


ok(darbuotojai, 1000);