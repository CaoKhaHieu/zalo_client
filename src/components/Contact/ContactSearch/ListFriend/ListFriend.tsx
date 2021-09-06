import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllFriendRequest } from '../../../../redux/actions/UserAction'
import { RootState } from '../../../../redux/reducers'
import { Friend, FriendItem } from '../../../../types/UserType'
import styles from './ListFriend.module.scss'
import ShowOption from './ShowOption'

type showOption = {
    id: string,
    status: boolean
}
const ListFriend = () => {
    const dispatch = useDispatch()
    const { userCurrent, friends }: any = useSelector<RootState>(state => state.user)
    const { socket }: any = useSelector<RootState>((state) => state);
    const [showOption, setShowOption] = useState<showOption>({
        id: '',
        status: false
    })

    useEffect(() => {
        dispatch(getAllFriendRequest(userCurrent._id))
    }, [userCurrent])


    const handleShowOption = (itemId: string) => {
        setShowOption({
            id: itemId,
            status: !showOption.status
        })
    }
    const handleUnFriend = (item: FriendItem) => {
        const data = { userFrom: userCurrent._id, userTo: item.idUser._id };
        console.log(data)
        socket.emit('un_friend', data)
    }
    return (
        <div className={styles.listfriend}>
            <div className={styles.title}>
                <span>Bạn bè (10)</span>
            </div>
            {
                friends ? friends.map((item: FriendItem) => (<div className={styles.listfriend_item}>
                    <div className={styles.avatar}>
                        <img src={item.idUser.avatar}></img>
                        <div className={styles.dot}></div>
                    </div>
                    <div className={styles.main}>
                        <div className={styles.main_top}>
                            <div className={styles.name}>
                                {item.idUser.name}
                            </div>
                        </div>
                    </div>
                    <div className={styles.option} onClick={() => handleShowOption(item._id)}>
                        <i className="fal fa-ellipsis-h"></i>

                        {
                            showOption.status === true && showOption.id === item._id ? (<div className={styles.unfriend}>
                                <li onClick={() => handleUnFriend(item)}><span>Hủy kết bạn</span></li>
                            </div>) : ''
                        }
                    </div>
                </div>)) : ''
            }
        </div>
    )
}

export default ListFriend
