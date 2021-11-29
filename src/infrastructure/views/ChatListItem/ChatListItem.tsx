export const ChatListItem = ({name, lastMessage}: {name: string, lastMessage: string}) => {
    return (
        <div className="chat">
            <p className="chat__name">{name}</p>
            <p className="chat__last-message">{lastMessage}</p>
        </div>
    )
}