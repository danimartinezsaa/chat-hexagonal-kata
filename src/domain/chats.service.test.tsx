import { firstValueFrom, of } from 'rxjs';
import { ChatRepository } from '../infrastructure/repositories/chat.repository';
import chats from '../shared/chats.json';
import { chatsService } from './chats.service';

test('getChats$ should return the updated chat list', async () => {
    const fakeChats = chats.list;

    const repositoryStub = jest.spyOn(ChatRepository, 'getChats$');
    repositoryStub.mockReturnValueOnce(of(fakeChats));

    const receivedChats = await firstValueFrom(chatsService.getChats$());

    expect(receivedChats).toEqual(fakeChats);
});
