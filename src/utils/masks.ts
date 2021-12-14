export const maskDate = (value: string) => {
  let res = value.replace(/\D/g, '').slice(0, 8)
  if (res.length >= 7) {
    return `${res.slice(0, 4)}/${res.slice(4, 6)}/${res.slice(6)}`
  } else if (res.length >= 5) {
    return `${res.slice(0, 4)}/${res.slice(4)}`
  }
  return res
}
