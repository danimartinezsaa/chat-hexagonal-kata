import { Observable } from "rxjs";
import { ChatRepository } from "../infrastructure/repositories/chat.repository";
import { Chat } from "./models/Chat";

const getChats$: () => Observable<Chat[]> = () => {
    return ChatRepository.getChats$();
}

export const chatsService = {
    getChats$,
}