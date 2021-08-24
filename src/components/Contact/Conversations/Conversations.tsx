import React from 'react'
import styles from './Conversations.module.scss'

const Conversations = () => {
    return (
        <div className={styles.conversations}>
            <div className={styles.conversations_item}>
                <div className={styles.avatar}>
                    <img src='https://s120-ava-talk.zadn.vn/1/d/d/1/2/120/3bd506a0a19a3c09f9ea990bf4d0d4e5.jpg'></img>
                </div>
                <div className={styles.main}>
                    <div className={styles.main_top}>
                        <div className={styles.name}>
                            Trần Anh Trúc
                        </div>
                        <div className={styles.info}>
                            20 phút
                        </div>
                    </div>
                    <div className={styles.main_bottom}>
                        <div className={styles.lastmessage}>
                            Hiii :)))
                        </div>
                        <div className={styles.newmessage}>
                            5+
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conversations
