import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI as electron } from '@electron-toolkit/preload'
import logger from '../main/logger'

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
const exposeToGlobal = (APIs: object): void => {
  Object.keys(APIs).forEach((e) => {
    if (process.contextIsolated) {
      try {
        contextBridge.exposeInMainWorld(e, APIs[e])
      } catch (error) {
        console.error(error)
      }
    } else {
      window[e] = APIs[e]
    }
  })
}

// Custom APIs for renderer
const api = { logger }
if (ipcRenderer.sendSync('isDev')) {
  logger(process, { label: 'preload' })
}
exposeToGlobal({ electron, api })
