function strToBinary(str) {
  let result = ''
  for (const char of str) {
    const codeNumber = char.charCodeAt(0)
    const binaryNumber = codeNumber.toString(2)
    result += binaryNumber
  }
  return result
}