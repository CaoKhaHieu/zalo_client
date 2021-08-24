import React from 'react'
import styles from './AddFriend.module.scss'
import '../../../../scss/dialog.scss'

import avatar from '../../../../asset/images/avatar.jpg'

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

const AddFriend = ({ open, handleClose }: any) => {
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
                        <span>Thêm bạn</span>
                        <div className={styles.close} onClick={() => handleClose()}>

                        </div>
                    </div>
                    <form>
                        <input placeholder="Số điện thoại hoặc email"></input>
                    </form>

                    <div className={styles.results}>
                        <div className={styles.lastresults}>Kết quả gần nhất</div>
                        <div className={styles.item}>
                            <div className={styles.avatar}>
                                <img src={avatar}></img>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.name}>
                                    Cao Kha Hieu
                                </div>
                                <div className={styles.phone}>
                                    0327904925
                                </div>
                            </div>
                            <div className={styles.close}>

                            </div>
                        </div>
                    </div>

                    <div className={styles.btn}>
                        <button className={`${styles.btn} ${styles.cancel}`}>Hủy</button>
                        <button className={`${styles.btn} ${styles.search}`}>Tìm Kiếm</button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default AddFriend
