export function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => ReturnType<T> | void {
  let lastCallTime = 0;
  return (...args: Parameters<T>): ReturnType<T> | void => {
    const now = new Date().getTime();
    if (now - lastCallTime < delay) {
      return;
    }
    lastCallTime = now;
    return func(...args);
  };
}
