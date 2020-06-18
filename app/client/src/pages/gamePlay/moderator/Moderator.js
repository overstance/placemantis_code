import React from 'react';
import './moderator.scss';
import GameType from './dialogues/GameType';

const Moderator = props => {
    return(
        <div className="gameModerator">
            <div className="gameModeratorDialogues">
                <GameType 
                    type={props.gameType}
                    stage={props.gameStage}
                    scope={props.gameScope}
                    difficulty={props.gameDifficulty}
                    resume={props.resumeGame}
                    saved={props.savedGame}
                />
            </div>
        </div>
    )
}

export default Moderator;