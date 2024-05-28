const auto ={
    marke: 'bmw',
    hp: 600
}

function kopijuojam(obj, savybe, viska){

    const clone = {
        ...obj
    }

    clone[savybe] = viska

    console.log(clone)
    console.log(obj)
}

kopijuojam(auto, "hp", 0)