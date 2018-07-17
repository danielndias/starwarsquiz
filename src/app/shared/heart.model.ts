export class Heart {
    
    constructor(
        public filled:boolean,
        public urlFilledHeart: string = '/assets/filledHeart.png',
        public urlEmptyHeart: string = '/assets/emptyHeart.png'
    ) {}

    public showHeart(): string {
        if (this.filled) {
            return this.urlFilledHeart;
        } else {
            return this.urlEmptyHeart;
        }
    }
}