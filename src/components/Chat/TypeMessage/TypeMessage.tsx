import React from 'react'
import styles from './TypeMessage.module.scss'

const TypeMessage = () => {
    return (
        <div className={styles.type_message}>
            <div className={styles.top}>
                <div className={styles.list}>
                    <div className={styles.item}>
                        <span><i className="fal fa-icons"></i></span>
                    </div>
                    <div className={styles.item}>
                        <span><i className="fal fa-photo-video"></i></span>
                    </div>
                    <div className={styles.item}>
                        <span><i className="fal fa-file"></i></span>
                    </div>

                </div>
            </div>
            <div className={styles.bottom}>
                <form className={styles.form}>
                    <input placeholder="Nhập tin nhắn ..."></input>
                </form>
                <div className={styles.list}>
                    <div className={styles.item}>
                        <span><i className="fal fa-smile"></i></span>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.like}><i className="fas fa-thumbs-up"></i></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TypeMessage
