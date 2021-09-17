export interface IMessage {
    _id: string,
    idCoversation: string,
    sender: string,
    message: string,
    seen: boolean,
}
export interface User {
    _id: string,
    idUser: {
        _id: string,
        name: string,
        avatar: string
    }
}
export interface Conversation{
    _id: string,
    type: string,
    lastMessage: IMessage,
    members: User[],
    name?: string,
}