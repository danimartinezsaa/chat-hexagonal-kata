import { useEffect, useState } from "react"
import { chatsService } from "../../domain/chats.service";
import { Chat } from "../../domain/models/Chat";
import { ChatListItem } from "./ChatListItem/ChatListItem";


export const ChatList = () => {

    const [chats, setChats] = useState<Chat[]>([]);
    
    useEffect(() => {
       chatsService.getChats$().subscribe(setChats);
    }, []);

    return (
        <>
            {chats.map((chat) => <ChatListItem key={chat.id} name={chat.user} lastMessage={chat.messages[chat.messages.length -1].body}/>)} 
        </>
    )
}