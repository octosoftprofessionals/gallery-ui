export const truncateString = (value: string, num: number) => {
  if (value.length <= num) {
    return value
  }
  return value.slice(0, num) + '...'
}

export function validateEmail(email: string) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export function truncateMiddleText(text: string) {
  if (text.lenght < 20) {
    return text
  } else {
    return `${text.slice(0, 8)}...${text.slice(-8)}`
  }
}

export function truncateMiddleTextShort(text: string) {
  if (text.lenght < 20) {
    return text
  } else {
    return `${text.slice(0, 5)}...${text.slice(-5)}`
  }
}
