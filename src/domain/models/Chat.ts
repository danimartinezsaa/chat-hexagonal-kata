export interface Chat {
    readonly id: string,
    readonly user: string,
    readonly messages: ChatMessage[],
}

export interface ChatMessage {
    readonly author: string,
    readonly body: string,
}