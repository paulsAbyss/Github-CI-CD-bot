export class FakeLLM {
    private reply = ''

    setReply(text: string) : void {
        this.reply = text
    }

    async complete(prompt: string ) : Promise<string> {
        return this.reply
    }
}