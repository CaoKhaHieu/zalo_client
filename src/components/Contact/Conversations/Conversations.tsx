import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllConversationByUserRequest, getAllMessageByConversationRequest, saveInfoChatWith } from '../../../redux/actions/ChatAction'
import { showChat } from '../../../redux/actions/OptionLayoutAction'
import { RootState } from '../../../redux/reducers'
import { Conversation, User } from '../../../types/ChatType'
import styles from './Conversations.module.scss'

const Conversations = () => {
    const dispatch = useDispatch()
    const { userCurrent }: any = useSelector<RootState>((state) => state.user);
    const { listConversation, listMessage }: any = useSelector<RootState>(state => state.chat)
    const { socket }: any = useSelector<RootState>((state) => state);

    useEffect(() => {
        const arrIdConversation: string[] = []
        listConversation.map((item: Conversation) => arrIdConversation.push(item._id))

        socket.emit('join_all_conversation', arrIdConversation)
    }, [listConversation])

    useEffect(() => {
        socket.on('new_message', () => {
            dispatch(getAllConversationByUserRequest(userCurrent._id))
        })
    })

    useEffect(() => {
        socket.on("seen_message", () => {
            dispatch(getAllConversationByUserRequest(userCurrent._id))
        });
    }, []);

    useEffect(() => {
        dispatch(getAllConversationByUserRequest(userCurrent._id))
    }, [userCurrent, listMessage])

    const handleChat = async (item: User, idConversation: string) => {
        const newStateChatWith = {
            _id: '',
            idUser: item.idUser,
            idConversation: idConversation
        }
        await dispatch(getAllMessageByConversationRequest(idConversation))
        await dispatch(saveInfoChatWith(newStateChatWith))
        await dispatch(showChat())
        socket.emit('seen_message', idConversation)
    }

    const renderSingleConversation = (conversation: Conversation) => {
        const chatWithUser = conversation.members.filter((item: User) => item.idUser._id !== userCurrent._id)[0]

        return <div className={styles.conversations_item} onClick={() => handleChat(chatWithUser, conversation._id)}>
            <div className={styles.avatar}>
                <img src={chatWithUser.idUser.avatar}></img>
            </div>
            <div className={styles.main}>
                <div className={styles.main_top}>
                    <div className={styles.name}>
                        {chatWithUser.idUser.name}
                    </div>
                    <div className={styles.info}>
                        20 phút
                    </div>
                </div>
                <div className={styles.main_bottom}>
                    {
                        // CHECK USER NAO GUI TIN NHAN & CHECK SEEN TRUE OR FALSE
                        conversation.lastMessage.sender === userCurrent._id ? (
                            <div className={styles.lastmessage}>
                                Bạn: {conversation.lastMessage.message}
                            </div>) : (
                            <div className={conversation.lastMessage.seen ? (`${styles.lastmessage}`) : (`${styles.lastmessage} ${styles.not_seen}`)}>
                                {conversation.lastMessage.message}
                            </div>
                        )
                    }
                    <div className={styles.newmessage}>
                        5+
                    </div>
                </div>
            </div>
        </div>
    }

    return (
        <div className={styles.conversations}>
            {
                listConversation.map((conversation: Conversation) => conversation.type === 'single' ? renderSingleConversation(conversation) : '')
            }
        </div>
    )
}

export default Conversations
