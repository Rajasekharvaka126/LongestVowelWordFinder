function longestWordWithMostVowels(sentence) {
    // Function to count vowels in a word
    const countVowels = (word) => {
        return word.split('').reduce((acc, char) => 'aeiou'.includes(char) ? acc + 1 : acc, 0);
    };

    // Clean the sentence
    const cleanedSentence = sentence.replace(/[^a-z\s]/g, '');

    // Split the sentence into words
    const words = cleanedSentence.split(' ');

    let longestWord = '';
    let maxVowels = 0;

    for (let word of words) {
        if (word.length > longestWord.length || (word.length === longestWord.length && countVowels(word) > maxVowels)) {
            longestWord = word;
            maxVowels = countVowels(word);
        }
    }

    return longestWord;
}
console.log(longestWordWithMostVowels("Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"));
