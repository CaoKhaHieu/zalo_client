import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCommentAlt,
    faAddressBook,
    faBell,
    faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./NavBar-Top.module.scss";

const NavBar_Top = () => {
    return (
        <div className={styles.navbar_top}>
            <ul>
                <li className={`${styles.navbar_top} ${styles.navbar_top_active}`}>
                    <FontAwesomeIcon icon={faCommentAlt}></FontAwesomeIcon>
                    <div className={styles.navbar_top_alert}>5+</div>
                </li>
                <li>
                    <FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon>
                </li>
                <li>
                    <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                </li>
                <li>
                    <FontAwesomeIcon icon={faClipboardCheck}></FontAwesomeIcon>
                </li>
            </ul>
        </div>
    )
}

export default NavBar_Top
