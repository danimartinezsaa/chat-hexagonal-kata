import { of } from 'rxjs';
import chats from '../../shared/chats.json';

 export const ChatRepository = {
    getChats$: () => {
        return of(chats.list);
    }
};