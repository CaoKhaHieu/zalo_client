import React from 'react'
import styles from './CreateGroup.module.scss'
import '../../../../scss/dialog.scss'

import avatar from '../../../../asset/images/avatar.jpg'

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import Checkbox from '@material-ui/core/Checkbox';

const CreateGroup = ({ open, handleClose }: any) => {

    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: any) => {
        setChecked(event.target.checked);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent>
                <div className={styles.dialog}>
                    <div className={styles.title}>
                        <span>Tạo nhóm</span>
                        <div className={styles.close} onClick={() => handleClose()}>

                        </div>
                    </div>
                    <div className={styles.create}>
                        <div className={styles.camera}>
                            <span><i className="fal fa-camera"></i></span>
                        </div>
                        <div className={styles.phone}>
                            <input placeholder="Nhập tên nhóm"></input>
                        </div>
                    </div>
                    <div className={styles.search}>
                        <span>Thêm bạn vào nhóm</span>
                        <form>
                            <input placeholder="Số điện thoại hoặc email"></input>
                            <span><i className="fal fa-search"></i></span>
                        </form>
                    </div>

                    <div className={styles.main}>
                        <div className={styles.friends}>

                            <div className={styles.item}>
                                <div className={styles.item_title}>
                                    C
                                </div>
                                <div className={styles.list}>
                                    <div className={styles.list_item}>
                                        <div className={styles.checkbox}>
                                            <Checkbox
                                                color="primary"
                                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                                            />
                                        </div>
                                        <div className={styles.avatar}>
                                            <img src={avatar}></img>
                                        </div>
                                        <div className={styles.name}>
                                            Cao Kha Hieu
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.added}>
                            <div className={styles.count}>
                                Đã chọn <span>9/100</span>
                            </div>
                            <div className={styles.added_list}>
                                <div className={styles.added_list_item}>
                                    <div className={styles.avatar}>
                                        <img src={avatar}></img>
                                    </div>
                                    <div className={styles.name}>
                                        Cao Kha HieuCao Kha Hieu
                                    </div>
                                    <div className={styles.close}>
                                        <span>
                                            <i className="fal fa-times-circle"></i>
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className={styles.btn}>
                        <button className={`${styles.btn} ${styles.cancel}`}>Hủy</button>
                        <button className={`${styles.btn} ${styles.search}`}>Tạo nhóm</button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default CreateGroup
