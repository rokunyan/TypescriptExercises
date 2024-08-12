var zeroIndex: number[] = [];

function getZeroIndex(list : any[]){
    
    let length : number = list.length;

    for(let i = 0; i < length; i++){
        if(list[i] === 0){
            zeroIndex.push(i);
        }
    }

}

export const moveZeros = (list : any[]) => {
    getZeroIndex(list);

    let length: number = zeroIndex.length;
    let newList: any[] = [];
    let listLen: number = list.length;

    for(let i = 0; i< listLen; i++){
         
        if(list[i] === 0){} else newList.push(list[i]);
    }

    for(let i = 0; i< length; i++){
        newList.push(0);
    }

    console.log(newList);

}

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
