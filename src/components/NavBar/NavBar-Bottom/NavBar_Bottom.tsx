import React from "react";
import { useState } from "react";
import styles from "./NavBar-Bottom.module.scss";
import UpdateProfile from "./UpdateProfile/UpdateProfile";

const NavBar_Bottom = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <div className={styles.navbar_bottom}>
      <ul>
        <li>
          <i className="fal fa-cloud"></i>
        </li>
        <li>
          <i className="fal fa-star"></i>
        </li>
        <li onClick={() => setShowMenu(!showMenu)}>
          <i className="fal fa-cog"></i>

          {
            showMenu ? (<div className={styles.menu}>
              <div className={styles.top} onClick={handleClickOpen}>
                <span><i className="fal fa-user"></i></span>
                <span>Tài khoản</span>
              </div>
              <div className={styles.bottom}>
                Đăng xuất
              </div>
            </div>) : ''
          }

        </li>
      </ul>
      {
        open === true ? (<UpdateProfile open={open} handleClose={handleClose}></UpdateProfile>) : ''
      }
    </div>
  );
};

export default NavBar_Bottom;
