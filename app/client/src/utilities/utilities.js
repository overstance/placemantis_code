import {useEffect, useRef} from 'react';

export const usePreviousValue = (value) => {
    const ref = useRef();
   
    useEffect(() => {
       ref.current = value
    });
   
    return ref.current;
}

export const sortArray = (array) => {
    array.sort(function(a, b){
        if(a.title < b.title) { return -1; }
        if(a.title > b.title) { return 1; }
        return 0;
    }); 
}

export const shuffleArray = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}