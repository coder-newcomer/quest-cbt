interface LogOptions {
  /** Log type. (Default: `log`) */
  type?: 'debug' | 'log' | 'info' | 'warn' | 'error' // It uses `console.log()` similarly. Use `throw` instead of `trace`.
  /** Label for the log, can be function, class, module, etc. (Default: `'Logger'`) */
  label?: string
  /** Use emoji as icons instead of `TYPE`. (Default: `false`) */
  useIcon?: boolean
  /** Save log to file path. (Future implementation) */
  logToFilePath?: string
}

const icons = {
  debug: '🪲',
  log: '📝',
  info: 'ℹ️',
  warn: '⚠️',
  error: '🛑'
} as const

// @ts-ignore Not yet implemented
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const logToFile = (filePath: string, message: string): void => {
  // Placeholder for future implementation
  // You could use `fs.appendFileSync` here to log messages to a file
  console.warn('Logging to file is not implemented yet')
}

const logger = (msg: unknown, options?: LogOptions): void => {
  /** Default options if not defined */
  const _options = {
    type: options?.type || 'log',
    label: options?.type || 'log',
    useIcon: options?.useIcon || false,
    logToFilePath: options?.logToFilePath || null
  }
  // Log to console
  console[_options.type](
    _options.useIcon ? icons[_options.type] : _options.type.toUpperCase(),
    `[${_options.label}]`,
    msg
  )
  // Log to file if `logToFilePath` is defined
  if (_options.logToFilePath) {
    //logToFile(logToFilePath, formattedMessage)
  }
}

export default logger
