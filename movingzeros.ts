export const moveZeros = (list : any[]) => {
    
    let length: number = 0;
    let newList: any[] = [];
    let listLen: number = list.length;

    for(let i = 0; i< listLen; i++){
         
        if(list[i] === 0){
            length ++;
        } else newList.push(list[i]);
    }

    for(let i = 0; i< length; i++){
        newList.push(0);
    }

    console.log(newList);

}

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]);
