import React, { useState, ChangeEvent } from "react";
import styles from "./UpdateProfile.module.scss";
import "../../../../scss/dialog.scss";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/reducers";
import { getUserByIdRequest, updateAvatarRequest } from "../../../../redux/actions/UserAction";

interface Update {
    open: boolean,
    handleClose: () => void
}

const UpdateProfile = ({ open, handleClose }: Update) => {
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm();
    const { userCurrent }: any = useSelector<RootState>((state) => state.user);
    const [previewSource, setPreviewSource] = useState<any>("");
    const [image, setImage] = useState("");

    const onSubmit = async () => {
        let formData = new FormData()
        formData.append("image", image)
        formData.append("_id", userCurrent._id)

        await dispatch(updateAvatarRequest(formData))
        handleClose()
    };

    const handleFileInputChange = (e: any) => {
        setPreviewSource("");
        setImage(e.target.files[0]);

        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };

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
                        <span>Cập nhật thông tin</span>
                        <div className={styles.close} onClick={() => handleClose()}></div>
                    </div>
                    <div className={styles.img}>
                        <img src="https://cover.talk.zdn.vn/default"></img>
                    </div>
                    <div className={styles.avatar}>
                        <div className={styles.img}>
                            {previewSource.length > 0 ? (
                                <img src={previewSource} alt="Red dot" />
                            ) : (
                                <div>
                                    {userCurrent.avatar ? (
                                        <img src={userCurrent.avatar}></img>
                                    ) : (
                                        <img src="https://res.cloudinary.com/caokhahieu/image/upload/v1630225166/zalo/anonymous_bujoil.jpg"></img>
                                    )}
                                </div>
                            )}

                            <div className={styles.update}>
                                <label htmlFor="input_file">
                                    <i className="fal fa-camera"></i>
                                </label>
                                <input
                                    type="file"
                                    id="input_file"
                                    {...register("image")}
                                    defaultValue=""
                                    onChange={handleFileInputChange}
                                ></input>
                            </div>
                        </div>
                        <div className={styles.name}>
                            <span>{userCurrent.name}</span>
                            <div className={styles.update}>
                                <i className="fal fa-edit"></i>
                            </div>
                        </div>
                    </div>

                    <div className={styles.btn}>
                        <button className={`${styles.cancel}`}>Hủy</button>
                        <button type="submit" className={`${styles.search}`}>
                            Cập nhật
                        </button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateProfile;
