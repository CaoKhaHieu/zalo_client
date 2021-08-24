import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faStar,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import styles from './NavBar-Bottom.module.scss'

const NavBar_Bottom = () => {
    return (
        <div className={styles.navbar_bottom}>
        <ul>
          <li>
            <FontAwesomeIcon icon={faCloud}></FontAwesomeIcon>
          </li>
          <li>
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          </li>
          <li>
            <FontAwesomeIcon icon={faCog}></FontAwesomeIcon>
          </li>
        </ul>
      </div>
    )
}

export default NavBar_Bottom
