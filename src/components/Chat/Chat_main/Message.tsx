import React, { useEffect } from "react";
import styles from "./Message.module.scss";
import avatar from "../../../asset/images/avatar.jpg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/reducers";
import {
    getAllMessageByConversationRequest,
    pushNewMesssgeToListMessage,
} from "../../../redux/actions/ChatAction";
import { Conversation, IMessage } from "../../../types/ChatType";

const Message = () => {
    const dispatch = useDispatch();
    const { chatWith, listMessage }: any = useSelector<RootState>(
        (state) => state.chat
    );
    const { socket }: any = useSelector<RootState>((state) => state);
    const { userCurrent }: any = useSelector<RootState>((state) => state.user);

    useEffect(() => {
        socket.on("seen_message", () => {
            dispatch(getAllMessageByConversationRequest(chatWith.idConversation))
        });
    }, []);

    useEffect(() => {
        socket.emit("join_conversation", chatWith.idConversation);
        socket.on("new_message", (newMessage: IMessage) => {
            console.log(newMessage);
            dispatch(pushNewMesssgeToListMessage(newMessage));
        });
    }, [chatWith]);

    useEffect(() => {
        var element: any = document.querySelector(`.${styles.listMessage}`)
        element.scrollTop = element.scrollHeight;
    })

    return (
        <div className={styles.chat}>
            <div className={styles.listMessage}>
                {
                    listMessage.map((item: IMessage, index: number, arr: IMessage[]) =>
                        // CHECK SENDER IS CURRENT_USER OR SOMEONE
                        item.sender === userCurrent._id ? (
                            <div className={styles.listMessage_item_me}>
                                {
                                    // HIDE AVATAR IF MESSAGE HAVE SENDER === PREVIOUS SENDER
                                    index > 0 && item.sender === arr[index - 1].sender ? (
                                        <div className={`${styles.avatar}`} style={{ opacity: '0' }}>
                                            <img src={chatWith.idUser.avatar}></img>
                                        </div>) :
                                        (
                                            <div className={styles.avatar}>
                                                <img src={userCurrent.avatar}></img>
                                            </div>
                                        )
                                }

                                {
                                    index === listMessage.length - 1 ? (<div className={styles.main}>
                                        <div className={styles.text}>{item.message}</div>
                                        <div className={styles.more}>
                                            <span className={styles.time}>14:05</span>
                                            {
                                                item.seen ? (
                                                    <span className={styles.status}>Đã xem</span>
                                                ) : (
                                                    <span className={styles.status}>Đã nhận</span>
                                                )
                                            }
                                        </div>
                                    </div>) : (<div className={styles.main}>
                                        <div className={styles.text}>{item.message}</div>

                                    </div>)
                                }
                            </div>
                        ) : (
                            <div className={styles.listMessage_item}>
                                {
                                    // HIDE AVATAR IF MESSAGE HAVE SENDER === PREVIOUS SENDER
                                    index > 0 && item.sender === arr[index - 1].sender ? (
                                        <div className={`${styles.avatar}`} style={{ opacity: '0' }}>
                                            <img src={chatWith.idUser.avatar}></img>
                                        </div>
                                        ) :
                                            (
                                                <div className={styles.avatar}>
                                                    <img src={chatWith.idUser.avatar}></img>
                                                </div>
                                            )
                                    }
                                    {
                                        index === listMessage.length - 1 ? (<div className={styles.main}>
                                            <div className={styles.text}>{item.message}</div>
                                        </div>) : (<div className={styles.main}>
                                            <div className={styles.text}>{item.message}</div>

                                        </div>)
                                    }
                                </div>
                            )
                    )
                }
            </div>
        </div>
    );
};

export default Message;
