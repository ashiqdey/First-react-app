const isArrEmpty = (a) => {
    if(a !== undefined && a!==null && a.length>0){
        return false;
    }
    return true
}


const log = (m) => {
    console.log(m)
}

export {isArrEmpty,log}