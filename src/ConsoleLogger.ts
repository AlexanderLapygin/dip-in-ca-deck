export class ConsoleLogger {
  error(message: string): void {
    console.error(message)
  }

  info(message: string): void {
    console.info(message)
  }

  trace(message: string): void {
    console.log(message)
  }

}
