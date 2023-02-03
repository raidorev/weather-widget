export const debounce = <T extends (...args: any[]) => any>(
  fn: T,
  delay = 100,
) => {
  let timer: number | undefined

  const debounced = (...args: Parameters<T>) => {
    if (timer) {
      window.clearTimeout(timer)
    }
    timer = window.setTimeout(() => {
      fn(...args)
    }, delay)
  }

  debounced.cancel = () => {
    if (timer) {
      window.clearTimeout(timer)
    }
  }

  return debounced
}
