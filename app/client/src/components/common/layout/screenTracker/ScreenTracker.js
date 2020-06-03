import React, {useReducer, useEffect} from 'react';
import styles from './screenTracker.module.scss';
import Orientation from './orientation/Orientaion';
import Size from './size/Size';

const initialState = { 
    showOrientation: false,
    showSize: false,
    windowWidth: 0,
    windowHeight: 0
};

function reducer(state, { type, width, height }) {
    switch (type) {
        case "SET_WINDOW_DIMENSIONS":
            return {...state,
                windowWidth: width,
                windowHeight: height,
                showOrientation: height > width && (width > 480 || height > 480),
                showSize: (width < 480 && height < 480) || (width > 480 && height < 320)
            }
        case "TRACK_WINDOW_RESIZE":
            return {
                ...state, 
                windowWidth: width,
                windowHeight: height,
            }
        case "SHOW_ORIENTATION":
            return {
                ...state,
                showOrientation: true,
                showSize: false,
                windowWidth: width,
                windowHeight: height,
            }
        case "SHOW_SCREEN_SIZE":
            return {
                ...state,
                showSize: true,
                showOrientation: false,
                windowWidth: width,
                windowHeight: height
            }
        case "RESET": 
            return initialState;           
        default: return state;
    }
}


const ScreenTracker = props => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleResize = e => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        if (height > width && (width > 480 || height > 480) ) {
            // console.log(width, height, "dispatching orientation");
            dispatch({ type: "SHOW_ORIENTATION", width: width, height: height});
        } else if ((width < 480 && height < 480) || (width > 480 && height < 320)) {
            // console.log(width, height, "dispatching screen size");
            dispatch({ type: "SHOW_SCREEN_SIZE", width: width, height: height});
        } else if (width > height && width > 480) {
            // console.log(width, "dispatching reset");
            dispatch({ type: "RESET"});
        } else {
            // console.log(width, "dispatching track window size");
            dispatch({ type: "TRACK_WINDOW_RESIZE", width: width, height: height });
        }
    };
    
    useEffect (() => {
        window.addEventListener("resize", handleResize);

        const height = window.innerHeight;
        const width = window.innerWidth;

        dispatch({ type: "SET_WINDOW_DIMENSIONS", width: width, height: height });
        
        return () => {
          window.removeEventListener("resize", handleResize);
        }
    
    }, [state.windowWidth]);
    
    return (
        <div className={styles.screenTracker}>
            { state.showOrientation ?
                <Orientation/>
                :
                null
            }
            { state.showSize ?
                <Size />
                :
                null
            }
        </div>
    )
}

export default ScreenTracker;