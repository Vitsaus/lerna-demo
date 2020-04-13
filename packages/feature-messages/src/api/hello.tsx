import {Message} from "../types/message";

export async function helloApi(): Promise<Message> {
    return new Promise<Message>((resolve) => {
        resolve({
            message: 'New message from api'
        });
    });
}
