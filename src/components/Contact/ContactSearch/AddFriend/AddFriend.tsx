import React, { useEffect } from "react";
import styles from "./AddFriend.module.scss";
import "../../../../scss/dialog.scss";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

import { useForm } from "react-hook-form";
import { phone, User } from "../../../../types/UserType";
import { useDispatch, useSelector } from "react-redux";
import {
    getUserByIdRequest,
    searchUserRequest,
} from "../../../../redux/actions/UserAction";
import { RootState } from "../../../../redux/reducers";
import { useState } from "react";
import { io } from "socket.io-client";

const AddFriend = ({ open, handleClose }: any) => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const [addFriend, setAddFriend] = useState<boolean>(false);

    const { resultSearch, error, userCurrent }: any = useSelector<RootState>(
        (state) => state.user
    );
    const { socket }: any = useSelector<RootState>((state) => state);

    const onSubmit = (data: phone) => {
        dispatch(searchUserRequest(data));
    };

    useEffect(() => {
        socket.on('add_friend_success', () => {
            setAddFriend(true)
        })
        socket.on('delete_request_friend_success', () => {
            setAddFriend(false)
        })
    }, [])

    useEffect(() => {
        if (resultSearch) {
            const userExists = userCurrent.myRequest.find(
                (x: any) => x._id === resultSearch._id
            );

            if (userExists) {
                setAddFriend(true);
            } else {
                setAddFriend(false);
            }
        }
    }, [userCurrent, resultSearch]);

    const handleAddFriend = () => {
        const userFrom = {
            _id: userCurrent._id,
            name: userCurrent.name,
            avatar:
                userCurrent.avatar ||
                "https://res.cloudinary.com/caokhahieu/image/upload/v1630225166/zalo/anonymous_bujoil.jpg",
        };
        const userTo = {
            _id: resultSearch._id,
            name: resultSearch.name,
            avatar:
                resultSearch.avatar ||
                "https://res.cloudinary.com/caokhahieu/image/upload/v1630225166/zalo/anonymous_bujoil.jpg",
        };
        const data = { userFrom, userTo };
        socket.emit("add_friend", data);
    };

    const handleDeleteRequestFriend = () => {
        const userFrom = {
            _id: userCurrent._id,
            name: userCurrent.name,
            avatar:
                userCurrent.avatar ||
                "https://res.cloudinary.com/caokhahieu/image/upload/v1630225166/zalo/anonymous_bujoil.jpg",
        };
        const userTo = {
            _id: resultSearch._id,
            name: resultSearch.name,
            avatar:
                resultSearch.avatar ||
                "https://res.cloudinary.com/caokhahieu/image/upload/v1630225166/zalo/anonymous_bujoil.jpg",
        };
        const data = { userFrom, userTo };
        socket.emit("delete_request_friend", data);
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent>
                <form className={styles.dialog} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.title}>
                        <span>Thêm bạn</span>
                        <div className={styles.close} onClick={() => handleClose()}></div>
                    </div>
                    <div>
                        <input
                            placeholder="Số điện thoại hoặc email"
                            {...register("phone")}
                        ></input>
                    </div>

                    <div className={styles.results}>
                        {resultSearch ? (
                            <>
                                <div className={styles.lastresults}>Kết quả tìm kiếm</div>
                                <div className={styles.item}>
                                    {
                                        <div className={styles.avatar}>
                                            {resultSearch.avatar ? (
                                                <img src={resultSearch.avatar}></img>
                                            ) : (
                                                <img src="https://res.cloudinary.com/caokhahieu/image/upload/v1630225166/zalo/anonymous_bujoil.jpg"></img>
                                            )}
                                        </div>
                                    }
                                    <div className={styles.info}>
                                        <div className={styles.name}> {resultSearch.name}</div>
                                        <div className={styles.phone}> {resultSearch.phone}</div>
                                    </div>

                                    {/* cần phải check resultSearch._id có tồn tại trong request hay không */}
                                    <div
                                        className={styles.addfriend}
                                    >
                                        {addFriend ? (
                                            <span onClick={() => handleDeleteRequestFriend()}>Hủy lời mời kết bạn</span>
                                        ) : (
                                            <span onClick={() => handleAddFriend()}>Kết bạn</span>
                                        )}
                                    </div>
                                </div>
                            </>
                        ) : (
                            ""
                        )}
                        {error ? (
                            <>
                                <div>
                                    <span className={styles.error}>{error}</span>
                                </div>
                            </>
                        ) : (
                            ""
                        )}
                    </div>

                    <div className={styles.btn}>
                        <button className={`${styles.btn} ${styles.cancel}`}>Hủy</button>
                        <button className={`${styles.btn} ${styles.search}`}>
                            Tìm Kiếm
                        </button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddFriend;
