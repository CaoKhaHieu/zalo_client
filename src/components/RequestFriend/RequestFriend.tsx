import { emit } from 'process';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllPeopleRequestRequest, getUserByIdRequest } from '../../redux/actions/UserAction';
import { RootState } from '../../redux/reducers';
import { Friend, FriendItem } from '../../types/UserType';
import styles from './RequestFriend.module.scss'

const RequestFriend = () => {
    const dispatch = useDispatch()

    const { userCurrent, peopleRequest }: any = useSelector<RootState>((state) => state.user);
    const { socket }: any = useSelector<RootState>((state) => state);

    useEffect(() => {
        dispatch(getAllPeopleRequestRequest(userCurrent._id))
    }, [userCurrent])

    const handleAcceptFriend = (item: FriendItem) => {
        const data = { userFrom: userCurrent._id, userTo: item.idUser._id };
        socket.emit('accept_request_friend', data)
    }

    const handleDontAcceptFriend = (item: FriendItem) => {
        const data = { userFrom: userCurrent._id, userTo: item.idUser._id };
        socket.emit('dont_accept_request_friend', data)
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
                    peopleRequest ? peopleRequest.map((item: FriendItem) => (<div className={styles.list_item} key={item._id}>
                        <div className={styles.avatar}>
                            <img src={item.idUser.avatar}></img>
                        </div>
                        <div className={styles.name}>
                            <span>{item.idUser.name}</span>
                        </div>
                        <div className={styles.btn}>
                            <button className={styles.delete} onClick={() => handleDontAcceptFriend(item)}>Bỏ qua</button>
                            <button className={styles.accept} onClick={() => handleAcceptFriend(item)}>Đồng ý</button>
                        </div>
                    </div>)) : ''
                }

            </div>
        </div>
    )
}

export default RequestFriend
