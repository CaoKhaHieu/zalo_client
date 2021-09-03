import React from 'react'
import styles from './Message.module.scss'
import avatar from '../../../asset/images/avatar.jpg'

const Message = () => {
    return (
        <div className={styles.chat}>
            <div className={styles.start_time}>
                <span>12:01 Hôm nay</span>
            </div>
            <div className={styles.chat_message}>
                <div className={styles.avatar}>
                    <img src={avatar}></img>
                </div>
                <div className={styles.main}>
                    <div className={styles.name}>
                        Cao Kha Hieu
                    </div>
                    <div className={styles.text}>
                        hiện mình sài cái trên á, còn cái đấy chưa sài bao giờ nha bạn
                        hiện mình sài cái trên á, còn cái đấy chưa sài bao giờ nha bạn
                        hiện mình sài cái trên á, còn cái đấy chưa sài bao giờ nha bạn
                    </div>
                    <div className={styles.time}>
                        16:04
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
