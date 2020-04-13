import {User} from "../types/login";

export async function loginApi(): Promise<User> {
    return new Promise<User>((resolve) => {
        resolve({
            username: 'test'
        });
    });
}

export async function loginStatusApi(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
        resolve(true);
    });
}
