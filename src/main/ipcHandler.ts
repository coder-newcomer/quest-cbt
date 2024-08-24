import { is } from '@electron-toolkit/utils'
import { ipcMain } from 'electron'

const ipcHandler = (): void => {
  ipcMain.on('isDev', (event) => {
    event.returnValue = is.dev
  })
}

export default ipcHandler
