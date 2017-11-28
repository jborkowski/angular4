import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'title'
})
export class TitlePipe implements PipeTransform {
    transform(value: string, arg?: any) {
        if (!value)
            return null;
        
        let words = value.split(" ");
        words[0].toUpperCase;
        return words.map(this.match).join(" ");
    }

    match = (word: string) => {
        switch (word.toLowerCase()) {
            case 'the':
            case 'of':
                return word.toLowerCase();
            default:
                return this.capitalizeWord(word);
        }
    }

    capitalizeWord = (word: string) => {
        if (word.length < 2)
            return word;

        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
}