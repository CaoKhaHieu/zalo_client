import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../redux/reducers'
import { Friend } from '../../../../types/UserType'
import styles from './ListFriend.module.scss'

const ListFriend = () => {
    const { userCurrent }: any = useSelector<RootState>(state => state.user)

    return (
        <div className={styles.listfriend}>
            <div className={styles.title}>
                <span>Bạn bè (10)</span>
            </div>
            {
                userCurrent.friends.map((item: Friend) => (<div className={styles.listfriend_item}>
                    <div className={styles.avatar}>
                        <img src={item.avatar}></img>
                        <div className={styles.dot}></div>
                    </div>
                    <div className={styles.main}>
                        <div className={styles.main_top}>
                            <div className={styles.name}>
                                {item.name}
                            </div>
                        </div>
                    </div>
                    <div className={styles.option}>
                        <i className="fal fa-ellipsis-h"></i>
                    </div>
                </div>))
            }
        </div>
    )
}

export default ListFriend
