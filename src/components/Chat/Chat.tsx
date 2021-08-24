import React from 'react'
import styles from './Chat.module.scss'
import ChatHeader from './Chat_header/ChatHeader'

const Chat = () => {
    return (
        <div className={styles.chat}>
            <ChatHeader></ChatHeader>
        </div>
    )
}

export default Chat
