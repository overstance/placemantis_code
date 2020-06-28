import React from 'react';
import styles from './player.module.scss';
import SouthernAfrica from './stages/SouthernAfrica';

const Player = props => {
    return(
        <div className={styles.player}>
            <div className={styles.stage}>
                <div className={styles.map}> 
                    <SouthernAfrica />
                </div>
                <div className={styles.hud}> 
                    <div className={styles.toolBar}>
                        <div className={styles.leftTools}>

                        </div>
                        {/* <div></div> */}
                        <div className={styles.rightTools}>

                        </div>
                    </div>
                    <div className={styles.propertiesBar}>
                        <div className={styles.hints}>

                        </div>
                        {/* <div></div> */}
                        <div className={styles.ranking}>
                            
                        </div>
                    </div>
                </div>               
            </div>
            <div className={styles.particulars}>
                <div className={styles.stageId}>

                </div>
                <div className={styles.score}>

                </div>
            </div>
            <div className={styles.activity}>
                <div className={styles.timer}>

                </div>
                <div className={styles.options}>

                </div>
                <div className={styles.round}>

                </div>
            </div>
        </div>
    )
}

export default Player;