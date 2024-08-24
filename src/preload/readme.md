# Preload.js

There will be small changes in this file, usually for exposing (like import) certain [main process API](../main) to [renderer](../renderer). It'll be looks like this:

```ts
import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { api1, api2, api3 } from '../main/path/to/module'

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
const api = { logger } // Add other APIs to renderer here
if (ipcRenderer.sendSync('isDev')) {
  logger(process, { label: 'preload' })
}
exposeToGlobal({ electron, api })
```
