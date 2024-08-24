import { protocol } from 'electron'
import { readFile } from 'fs'
import { join } from 'path'

import getFileType from './filetype'

const hostnameHandler = {
  desktopBackground: (): Promise<Response> => {
    return new Promise((resolve) => {
      const desktopBackgroundPath = join(
        process.env.APPDATA || '',
        'Microsoft',
        'Windows',
        'Themes',
        'TranscodedWallpaper'
      )
      readFile(desktopBackgroundPath, async (err, data) => {
        if (err) {
          const statusText = "Newly implemented for Windows only, otherwise it's a teapot"
          resolve(
            new Response(statusText, {
              status: 418,
              statusText: statusText
            })
          )
        } else {
          const fileType = await getFileType(desktopBackgroundPath)
          resolve(
            new Response(data, {
              headers: { 'Content-Type': fileType.mime || 'image/jpeg' }
            })
          )
        }
      })
    })
  },
  responseTest: (): Promise<Response> => {
    return new Promise((resolve) => {
      resolve(new Response('test'))
    })
  }
}

const protocolServer = (): void => {
  protocol.handle('app', async (req) => {
    const url = new URL(req.url)
    if (Object.keys(hostnameHandler).includes(url.hostname)) {
      return await hostnameHandler[url.hostname](url)
    } else {
      return new Response('Not found', {
        status: 404
      })
    }
  })
}

export default protocolServer
