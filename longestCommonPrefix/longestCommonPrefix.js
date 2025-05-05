function longestCommonPrefix(strings) {
  const prefixes = strings.reduce((acc, string) => {
    for (let c= 0; c < string.length; c++) {
      const prefix = string.substring(0, c+1)
      if (acc[prefix]) acc[prefix]++
      else acc[prefix] = 1
    }
    return acc
  }, {})
  const longestPrefix = Object.entries(prefixes).reduce((acc, [prefix, count]) => {
    if (
      (prefix.length > acc.prefix.length && count > 1) ||
      (prefix.length === acc.prefix.length && count > acc.count)
    ) return { prefix, count }
    return acc
  }, { prefix: '', count: 0 })
  return longestPrefix.prefix
}
console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix(["interstellar","internet","internal","interval"]))

