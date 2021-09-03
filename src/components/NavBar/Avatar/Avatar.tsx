import React from "react";
import styles from "./Avatar.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers";

const Avatar = () => {
    const { userCurrent }: any = useSelector<RootState>((state) => state.user);

    return (
        <div className={styles.navbar_avatar}>
            <div className={styles.navbar_avatar_img}>
                {userCurrent && userCurrent.avatar ? (
                    <img src={userCurrent.avatar}></img>
                ) : (
                    <img src="https://res.cloudinary.com/caokhahieu/image/upload/v1630225166/zalo/anonymous_bujoil.jpg"></img>
                )}

                <div className={styles.navbar_avatar_img_dot}></div>
            </div>
        </div>
    );
};

export default Avatar;
