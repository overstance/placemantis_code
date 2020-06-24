import React, {useReducer, useEffect} from 'react';
import './screenTracker.scss';
import Orientation from './Orientation';
import Size from './Size';

const initialState = { 
    showOrientation: false,
    showSize: false,
    windowWidth: 0,
    windowHeight: 0,
};

function reducer(state, { type, width, height }) {
    switch (type) {
        case "SET_WINDOW_DIMENSIONS":
            return {...state,
                windowWidth: width,
                windowHeight: height,
                showOrientation: height > width && (width > 480 || height > 480),
                showSize: (width < 480 && height < 480) || (width > 480 && height < 300)
            }
        case "TRACK_WINDOW_RESIZE":
            return {
                ...state, 
                windowWidth: width,
                windowHeight: height
            }
        case "SHOW_ORIENTATION":
            return {
                ...state,
                showOrientation: true,
                showSize: false,
                windowWidth: width,
                windowHeight: height
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
        const width = document.documentElement.clientWidth;
        const height = document.documentElement.clientHeight;

        if (height > width && (width > 480 || height > 480) ) {
            // console.log(width, height, "dispatching orientation");
            dispatch({ type: "SHOW_ORIENTATION", width: width, height: height});
        } else if ((width < 480 && height < 480) || (width > 480 && height < 300)) {
            // console.log(width, height, "dispatching screen size");
            dispatch({ type: "SHOW_SCREEN_SIZE", width: width, height: height});
        } else if (width > height && width > 480) {
            // console.log(width, "dispatching reset");
            dispatch({ type: "RESET"});
        } else {
            // console.log(width, "dispatching track window size");
            dispatch({ type: "TRACK_WINDOW_RESIZE", width: width, height: height});
        }
    };
    
    useEffect (() => {
        window.addEventListener("resize", handleResize);

        const height = document.documentElement.clientHeight;
        const width = document.documentElement.clientWidth;

        dispatch({ type: "SET_WINDOW_DIMENSIONS", width: width, height: height });
        
        return () => {
          window.removeEventListener("resize", handleResize);
        }
    }, []);
    
    return (
        state.showOrientation || state.showSize ?
        <div className="screenTracker">
            { state.showOrientation ? <Orientation windowWidth={state.windowWidth}/> : null }
            { state.showSize ? <Size /> : null }
        </div>
        :
        null
    )
}

export default ScreenTracker;