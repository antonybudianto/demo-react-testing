export function str2num(str) {
  let n = parseInt(str)
  if (isNaN(n)) {
    return 0
  }
  return n
}
