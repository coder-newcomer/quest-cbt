import { protocol } from 'electron'
import { readFile } from 'fs'
import { join } from 'path'
import { getFileType } from './filetype'
import { is } from '@electron-toolkit/utils'

const hostnameHandler = {
  desktopBackground: (): Promise<Response> => {
    return new Promise((resolve) => {
      const desktopBackgroundPath = is.dev
        ? join(__dirname, '../../src/assets/desktop-background.jpg') // Test image fallback URL when not in Windows
        : join(process.env.APPDATA || '', 'Microsoft', 'Windows', 'Themes', 'TranscodedWallpaper')
      readFile(desktopBackgroundPath, async (err, data) => {
        if (err) {
          resolve(
            new Response("Newly implemented for Windows only, otherwise it's a teapot", {
              status: 418
            })
          )
        } else {
          const fileType = await getFileType(desktopBackgroundPath)
          resolve(
            new Response(data, {
              headers: { 'Content-Type': fileType ? fileType.mime : 'image/jpeg' }
            })
          )
        }
      })
    })
  }
}

const protocolServer = (): void => {
  protocol.handle('app', async (req) => {
    const url = new URL(req.url)
    return await hostnameHandler[url.hostname]()
  })
}

export default protocolServer
