export const detectMob = () => {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ]

  return toMatch.some(toMatchItem => {
    return navigator.userAgent.match(toMatchItem)
  })
}

export const truncateString = (value: string, num: number) => {
  if (value.length <= num) {
    return value
  }
  return value.slice(0, num) + '...'
}

export function validateEmail(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export function truncateMiddleText(text: string, length: number) {
  if (text.lenght < 20) {
    return text
  } else {
    return `${text.slice(0, length)}...${text.slice(-length)}`
  }
}
