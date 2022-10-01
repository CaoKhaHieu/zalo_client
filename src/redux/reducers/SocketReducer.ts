import { io } from "socket.io-client";

const ENDPOINT: string = "http://localhost:4000";
let socket: any = null

export const createSocket = () => {
    return socket = io(ENDPOINT);
    // return {}
}