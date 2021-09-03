import React from 'react'
import styles from './ChatHeader.module.scss'
import avatar from '../../../asset/images/avatar.jpg'

const ChatHeader = () => {
    return (
        <div className={styles.header}>
            <div className={styles.avatar}>
                <div className={styles.img}>
                    <img src={avatar}></img>
                </div>
                <div className={styles.img}>
                    <img src={avatar}></img>
                </div>
                <div className={styles.img}>
                    <img src={avatar}></img>
                </div>
                <div className={styles.img}>
                    <img src={avatar}></img>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.name}>
                    <span>Cộng Đồng Front-end Việt Nam</span>
                </div>
                <div className={styles.member}>
                    <span><i className="fal fa-user"></i> 530 thành viên</span>
                </div>
            </div>
            <div className={styles.btn}>
                <div className={styles.add}>
                    <span><i className="fal fa-user-plus"></i></span>
                </div>
                <div className={styles.search}>
                    <span><i className="fal fa-search"></i></span>
                </div>
                <div className={styles.show}>
                    <span><i className="fal fa-bars"></i></span>
                </div>
            </div>
        </div>
    )
}

export default ChatHeader
