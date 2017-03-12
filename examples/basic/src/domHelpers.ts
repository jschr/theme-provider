export const preventDefault = (next: () => void) => (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault()
  next()
}

export const target = (next: (value: any) => void) =>
  (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    event.preventDefault()
    next(event.target.value)
  }
