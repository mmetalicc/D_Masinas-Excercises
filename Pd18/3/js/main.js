const knyga1 ={
    autorius: "Oleg Nechiporenko",
    name : "Dejavu",
    puslapiai : 160
}

const knyga2 ={
    autorius: "Cormac McCarthy",
    name : "Blood Meridian",
    puslapiai : 337
}

const knyga3 ={
    autorius: "Lovecraft",
    name : "The Call of Cthulhu",
    puslapiai : 800
}

function hz(obj) {
    console.log(obj.autorius);
    console.log(obj.name);
    console.log(obj.puslapiai);
};

hz(knyga1)
hz(knyga2)
hz(knyga3)