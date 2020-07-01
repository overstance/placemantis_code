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
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const numberWithSpaces = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

