import React, {useState, useEffect} from 'react';
import styles from './home.module.scss';
import HomeMain from './homeMain/HomeMain';
import SelectType from './homeSelect/SelectType';
import SelectScope from './homeSelect/SelectScope';
import SelectStage from './homeSelect/SelectStage';
import SelectDifficulty from './homeSelect/SelectDifficulty';
import ResumeMission from './homeSelect/ResumeMission';

// savedMission, isAuthenticated, audioOn, and avatarType:
// are props coming in from global state


const Home = props => {
    const [currentView, setCurrentView] = useState('HomeMain');
    const [previousView, setPreviousView] = useState('');
    const [missionType, setMissionType] = useState('');
    const [missionScope, setMissionScope] = useState('');
    const [missionStage, setMissionStage] = useState('');
    const [missionDifficulty, setMissionDifficulty] = useState('');
    const [startOrResumeMission, setStartOrResumeMission] = useState(false);
    // savedMission state below is used for testing purpose only,
    // retrieve the value of savedMission from global state
    const [savedMission] = useState(false);

    let gameData;
    if (savedMission) {
        gameData = {
            savedMission: savedMission,
            resumeMission: true
        }
    } else {
        gameData = {
            type: missionType,
            scope: missionScope,
            stage: missionStage,
            difficulty: missionDifficulty
        }
    }


    useEffect(() => {

        if (startOrResumeMission) {
            console.log(gameData); 
            props.history.push('/game_play');           
        }
        
    }, [startOrResumeMission]);

    const optionStartMission = () => {
        if (savedMission) {
            setCurrentView('ResumeMission');
            setPreviousView('HomeMain');
        } else {
            setCurrentView('SelectType');
            setPreviousView('HomeMain');
        }       
    }

    const optionAudio = () => {
        // Launch a global action to alter audioOn state
        console.log('audio button clicked');     
    }
    
    const optionResume = () => {
        setStartOrResumeMission(true);      
    }

    const optionStartNew = () => {  
        setCurrentView('SelectType');
        setPreviousView('HomeMain');    
    }

    const optionGoBack = () => {
        if (currentView === 'SelectType' && previousView === 'HomeMain') {
            setCurrentView('HomeMain');
            setPreviousView('');
        } else if (currentView === 'SelectScope' && previousView === 'SelectType') {
            setCurrentView('SelectType');
            setPreviousView('HomeMain');
        } else if (currentView === 'SelectStage' && previousView === 'SelectScope') {
            setCurrentView('SelectScope');
            setPreviousView('SelectType');
        } else if (currentView === 'SelectDifficulty' && previousView === 'SelectStage') {
            setCurrentView('SelectStage');
            setPreviousView('SelectScope');
        } else if (currentView === 'SelectDifficulty' && previousView === 'SelectType') {
            setCurrentView('SelectType');
            setPreviousView('HomeMain');
        } else if (currentView === 'SelectDifficulty' && previousView === 'SelectScope') {
            setCurrentView('SelectScope');
            setPreviousView('SelectType');
        } else {
            setCurrentView('HomeMain');
            setPreviousView('');
        }
        
    }

    const optionSingleMission = () => {
        setCurrentView('SelectScope');
        setPreviousView('SelectType');
        setMissionType('Single');
    }

    const optionMultilevelMission = () => {
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectType');
        setMissionType('Multilevel');

    }

    const optionContinental = () => {
        setMissionScope('Continental');
        setCurrentView('SelectStage');
        setPreviousView('SelectScope');       
    }

    const optionSubcontinental = () => {
        setMissionScope('Subcontinental');
        setCurrentView('SelectStage');
        setPreviousView('SelectScope');
    }

    const optionBicontinental = () => {
        setMissionScope('Bicontinental');
        setCurrentView('SelectStage');
        setPreviousView('SelectScope');
    }

    const optionAfrica = () => {
        setMissionStage('Africa');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionOceania = () => {
        setMissionStage('Oceania');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionEurope = () => {
        setMissionStage('Europe');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionNorthAmerica = () => {
        setMissionStage('NorthAmerica');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionAsia = () => {
        setMissionStage('Asia');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionSouthAmerica = () => {
        setMissionStage('SouthAmerica');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionSEurope = () => {
        setMissionStage('SEurope');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionSCAsia = () => {
        setMissionStage('SCAsia');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionWCAfrica = () => {
        setMissionStage('WCAfrica');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionCaribbean = () => {
        setMissionStage('Caribbean');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionSAfrica = () => {
        setMissionStage('SAfrica');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionIndiesAfrica = () => {
        setMissionStage('IndiesAfrica');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionAsiaOceania = () => {
        setMissionStage('AsiaOceania');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionAfricaAsia = () => {
        setMissionStage('AfricaAsia');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectStage');
    }

    const optionGlobal = () => {
        setMissionScope('Global');
        setCurrentView('SelectDifficulty');
        setPreviousView('SelectScope');
    }

    const optionSimple = () => {
        setMissionDifficulty('Simple');
        setStartOrResumeMission(true);
    }

    const optionHard = () => {
        setMissionDifficulty('Hard');
        setStartOrResumeMission(true);
    }



    let pageContent = 
    <HomeMain 
        /* isAuthenticated */ 
        /* audioOn */
        startMissionSelected={optionStartMission}
        audioSelected={optionAudio}
        /* avatarType="Reed" */
    />

    if (currentView === 'HomeMain') {
        // setCurrentView('HomeMain');
        pageContent = 
        <HomeMain 
            /* isAuthenticated */ 
            /* audioOn */
            startMissionSelected={optionStartMission}
            audioSelected={optionAudio}
            /* avatarType="Reed" */
        />
    }

    if (currentView === 'SelectType') {
        pageContent = 
        <SelectType 
            goBackSelected={optionGoBack}
            singleSelected={optionSingleMission}
            multilevelSelected={optionMultilevelMission}
        />
    }

    if (currentView === 'SelectScope') {
        pageContent =
        <SelectScope 
            goBackSelected={optionGoBack}
            continentalSelected={optionContinental}
            subcontinentalSelected={optionSubcontinental}
            bicontinentalSelected={optionBicontinental}
            globalSelected={optionGlobal}
        />
    }

    if (currentView === 'SelectStage') {       
        pageContent =
        <SelectStage 
            missionScope={missionScope}
            goBackSelected={optionGoBack}
            africaSelected={optionAfrica}
            oceaniaSelected={optionOceania}
            europeSelected={optionEurope}
            northAmericaSelected={optionNorthAmerica}
            asiaSelected={optionAsia}
            southAmericaSelected={optionSouthAmerica}
            sEuropeSelected={optionSEurope}
            scAsiaSelected={optionSCAsia}
            wcAfricaSelected={optionWCAfrica}
            caribbeanSelected={optionCaribbean}
            sAfricaSelected={optionSAfrica}
            indiesAfricaSelected={optionIndiesAfrica}
            asiaOceaniaSelected={optionAsiaOceania}
            africaAsiaSelected={optionAfricaAsia}
        />
    }

    if (currentView === 'SelectDifficulty') {
        pageContent =
        <SelectDifficulty 
            goBackSelected={optionGoBack}
            simpleSelected={optionSimple}
            hardSelected={optionHard}
        />
    }

    if (currentView === 'ResumeMission') {
        pageContent =
        <ResumeMission 
            goBackSelected={optionGoBack}
            resumeSelected={optionResume}
            startNewSelected={optionStartNew}
        />
    }
    
    return(
        <div className={styles.home}>
            {pageContent}
        </div>
    )  
}

export default Home;