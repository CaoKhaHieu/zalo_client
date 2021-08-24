import React from 'react'
import styles from './Avatar.module.scss'
import avatar from "../../../asset/images/avatar.jpg";

const Avatar = () => {
    return (
        <div className={styles.navbar_avatar}>
            <div className={styles.navbar_avatar_img}>
                <img src={avatar}></img>

                <div className={styles.navbar_avatar_img_dot}></div>
            </div>
        </div>
    )
}

export default Avatar
