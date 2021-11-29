import { render, waitFor, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { ChatRepository } from '../repositories/chat.repository';
import { ChatList } from './ChatList';
import chats from '../../shared/chats.json';
import { of } from 'rxjs';

test('should display the name and the last message of each chat', async () => {

    const fakeChats = chats.list;

    const getChatsStub = jest.spyOn(ChatRepository, 'getChats$');
    
    getChatsStub.mockReturnValueOnce(of(fakeChats));

    act(() => {
        render(<ChatList/>)
    });

    await waitFor(() => {
        for (const chat of fakeChats) {
            expect(screen.getByText(chat.user)).toBeInTheDocument();
            expect(screen.getByText(chat.messages[chat.messages.length -1].body)).toBeInTheDocument();
        }
    })

});
