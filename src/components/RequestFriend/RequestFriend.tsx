import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { acceptFriendRequest, getUserByIdRequest } from '../../redux/actions/UserAction';
import { RootState } from '../../redux/reducers';
import { Friend } from '../../types/UserType';
import styles from './RequestFriend.module.scss'

const RequestFriend = () => {
    const dispatch = useDispatch()

    const { userCurrent }: any = useSelector<RootState>(
        (state) => state.user
    );

    const handleAcceptFriend = (item: Friend) => {
        console.log(item)
        dispatch(acceptFriendRequest(item))
    }

    return (
        <div className={styles.request}>
            <div className={styles.title}>
                <span>Danh sách kết bạn</span>
            </div>
            <div className={styles.list}>
                <div className={styles.list_title}>
                    <span>Lời mời kết bạn ({`${userCurrent.peopleRequest.length}`})</span>
                </div>

                {
                    userCurrent.peopleRequest.map((item: any) => (<div className={styles.list_item} key={item._id}>
                        <div className={styles.avatar}>
                            <img src={item.avatar}></img>
                        </div>
                        <div className={styles.name}>
                            <span>{item.name}</span>
                        </div>
                        <div className={styles.btn}>
                            <button className={styles.delete}>Bỏ qua</button>
                            <button className={styles.accept} onClick={() => handleAcceptFriend(item)}>Đồng ý</button>
                        </div>
                    </div>))
                }

            </div>
        </div>
    )
}

export default RequestFriend
