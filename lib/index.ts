import { StyleMap, styles } from "./style"
import { InferLog, InferStyle, LogType, Output } from "./types"

const logs: LogType[] = ['info', 'log', 'warn', 'error']

function createLogger(logType: LogType) {
  return function(...outputs: Output[]) {
    let text = ''
    const _styles: string[] = []
    outputs.forEach(output => {
      text += output[0]
      _styles.push(output[1])
    })
    console[logType](text, ..._styles)
  }
}

function createClsty() {
  let cachedStyle = ''
  const clsty: any = (message: string) => {
    const style = cachedStyle;
    cachedStyle = ''
    return [`%c${message}`, style]
  }

  // setStyleMethod
  Object.entries(styles).forEach(([key, style]) => {
    Object.defineProperty(clsty, key, {
      get() {
        cachedStyle += style
        return clsty
      }
    })
  })

  // setLogMethod
  logs.forEach(type => clsty[type] = createLogger(type))
  return clsty as Clsty
}

type Clsty = InferStyle<StyleMap> & InferLog<typeof logs>

const clsty: Clsty = createClsty();

export default clsty


