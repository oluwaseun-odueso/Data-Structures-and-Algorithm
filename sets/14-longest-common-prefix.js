/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // const minLength = strs.reduce(
  //   (currentMin, str) => Math.min(currentMin, str.length),
  //   Infinity
  // );

  // const resultArray = []
  // for (i = 0; i < minLength; i++) {
  //   if ((strs[0][i] === strs[1][i]) && (strs[0][i] === strs[2][i])) {
  //     resultArray.push(strs[0][i])
  //   }
  // }

  // // for (item of strs) {
  // // }

  // const result = resultArray.join("")

  // return result

  const minLength = strs.reduce(
    (currentMin, str) => Math.min(currentMin, str.length),
    Infinity,
  );

  // Try prefixes from longest to shortest possible length
  for (let prefixLength = minLength; prefixLength > 0; prefixLength--) {
    // Extract the candidate prefix from the first string
    const candidatePrefix = strs[0].slice(0, prefixLength);

    // Check if all strings start with this candidate prefix
    const isCommonPrefix = strs.every(
      (str) => str.slice(0, prefixLength) === candidatePrefix,
    );

    if (isCommonPrefix) {
      return candidatePrefix;
    }
  }

  // No common prefix found
  return "";
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// const strs = ["flower","flow","flight"]
// console.log((strs[0][0] === strs[1][0]) && (strs[0][0] === strs[2][0]))
