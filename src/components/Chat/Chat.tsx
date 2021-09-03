import React from 'react'

import styles from './Chat.module.scss'
import ChatHeader from './Chat_header/ChatHeader'
import Message from './Chat_main/Message'
import TypeMessage from './TypeMessage/TypeMessage'

const Chat = () => {
    return (
        <div className={styles.chat}>
            <ChatHeader></ChatHeader>
            <Message></Message>
            <TypeMessage></TypeMessage>
        </div>
    )
}

export default Chat
