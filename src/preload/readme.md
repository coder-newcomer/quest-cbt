# Preload.js

There will be small changes in this file, usually for exposing (like import) certain [main process API](../main) to [renderer](../renderer). It'll be like this:

```ts
import { contextBridge } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { api1, api2, api3 } from '../main/path/to/module'

// Custom APIs for renderer (add the APIs here)
const api = { ap1, api2, api3 }

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window['electron'] = electronAPI
  window['api'] = api
}

```
