import React, { FormEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/reducers'
import styles from './TypeMessage.module.scss'

const TypeMessage = () => {
    const [message, setMessage] = useState<string>('')
    const { socket }: any = useSelector<RootState>(state => state)
    const { userCurrent }: any = useSelector<RootState>(state => state.user)
    const { chatWith, listMessage }: any = useSelector<RootState>(state => state.chat)
    const [focus, setFocus] = useState<boolean>(false)

    useEffect(() => {
        if (focus === true && listMessage[listMessage.length - 1].sender !== userCurrent._id) {
            console.log('focus: true')
            socket.emit('seen_message', chatWith.idConversation)
        }
    }, [focus])

    const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(message)
        const data = {
            idConversation: chatWith.idConversation,
            sender: userCurrent._id,
            message: message
        }
        console.log(data)
        setMessage('')
        socket.emit('send_message', data)
        // socket.emit('seen_message', chatWith.idConversation)
    }

    const handleFocus = () => {
        setFocus(true)
    }

    return (
        <form className={styles.type_message} onSubmit={(e) => handleSubmitForm(e)}>
            <div className={styles.top}>
                <div className={styles.list}>
                    <div className={styles.item}>
                        <span><i className="fal fa-icons"></i></span>
                    </div>
                    <div className={styles.item}>
                        <span><i className="fal fa-photo-video"></i></span>
                    </div>
                    <div className={styles.item}>
                        <span><i className="fal fa-file"></i></span>
                    </div>

                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.form}>
                    <input placeholder="Nhập tin nhắn ..." value={message} onChange={(e) => setMessage(e.target.value)} onFocus={() => handleFocus()} onBlur={() => setFocus(false)}></input>
                </div>
                <div className={styles.list}>
                    <div className={styles.item}>
                        <span><i className="fal fa-smile"></i></span>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.like}><i className="fas fa-thumbs-up"></i></span>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default TypeMessage
