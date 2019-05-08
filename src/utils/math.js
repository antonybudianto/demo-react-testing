export function sum(...num) {
  return num.reduce((acc, curr) => acc + curr, 0)
}
