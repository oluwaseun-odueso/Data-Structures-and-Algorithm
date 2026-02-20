/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    // reverse the positions of the vowels
    // keep the consonants in their original

    // Find the first vowel from the left
    // Find the first vowel from the right
    // Swap these two vowels
    // Continue this process moving inward
    
    // const vowels = 'aeiouAEIOU'
    // const charArray = s.split('')

    // let leftPointer = 0
    // let rightPointer = s.length - 1

    // while (leftPointer < rightPointer) {
    //     while (leftPointer < rightPointer && !vowels.includes(charArray[leftPointer])) {
    //         leftPointer++
    //     }

    //     while (leftPointer < rightPointer && !vowels.includes(charArray[rightPointer])) {
    //         rightPointer--
    //     }

    //     if (leftPointer < rightPointer) {
    //         [charArray[leftPointer], charArray[rightPointer]] = [charArray[rightPointer], charArray[leftPointer]]
    //         leftPointer++
    //         rightPointer--
    //     }
    // }

    // return charArray.join("")

    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    const charArray = s.split('')

    let leftPointer = 0
    let rightPointer = s.length - 1

    while (leftPointer < rightPointer) {
        while (leftPointer < rightPointer && !vowels.has(charArray[leftPointer])) {
            leftPointer++
        }

        while (leftPointer < rightPointer && !vowels.has(charArray[rightPointer])) {
            rightPointer--
        }

        if (leftPointer < rightPointer) {
            [charArray[leftPointer], charArray[rightPointer]] = [charArray[rightPointer], charArray[leftPointer]]
            leftPointer++
            rightPointer--
        }
    }

    return charArray.join("")
};

console.log(reverseVowels("IceCreAm"))