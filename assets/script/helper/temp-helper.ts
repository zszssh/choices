export default class TempHelper {

    private bookName: string;

    private static instance: TempHelper = null;

    public static getInstance(): TempHelper {
        if (this.instance) {
            return this.instance;
        } else {
            this.instance = new TempHelper();
            return this.instance;
        }
    }

    public setBookName(bookName: string): void {
        this.bookName = bookName;
    }

    public getBookName(): string {
        return this.bookName;
    }
}