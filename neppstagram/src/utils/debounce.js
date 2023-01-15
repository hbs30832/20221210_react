export function debounce(callback, delay) {
  let timer;
  if (timer) {
    clearTimeout(timer);
  }
  return (...args) => {
    setTimeout(() => {
      callback(args);
    }, delay);
  };
}
