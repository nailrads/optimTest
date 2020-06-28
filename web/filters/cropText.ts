export default (sourceText: string, countLetter: number): string => {
    return countLetter <= sourceText.length ? `${sourceText.slice(0, countLetter).trim()}...` : sourceText;
}