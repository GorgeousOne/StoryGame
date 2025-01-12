import type { JoinMessage } from "./messageTypes";
import { connect, sendMessage, addEventHandler } from "./websocketService";

export { addEventHandler };

const url = import.meta.env.VITE_API_URL;

export function sendJoinMessage(username: string, roomCode: string, type: "join" | "create") {
    const data: JoinMessage = {
        type: "join",
        error: false,
        message: "",
        name: username,
        room: roomCode,
        joinType: type,
    }

    connect(url).then(() => {
        sendMessage(data);
    }).catch(() => {
        console.log("something whent wrong");
    });
}

export function sendSubmitStoryMessage(story: string) {
    const data = {
        type: "submit_story",
        error: false,
        story: story,
    }
    sendMessage(data);
}