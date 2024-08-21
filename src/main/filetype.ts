import { extname } from 'path'
import { fileTypeFromFile } from 'file-type'
import mime from 'mime'

interface FileType {
  ext: string | null
  mime: string
}

export const getFileType = async (path: string): Promise<FileType> => {
  const fileType = await fileTypeFromFile(path)
  if (fileType) {
    return {
      ext: fileType.ext,
      mime: fileType.mime
    }
  } else {
    return {
      ext: extname(path).slice(1) || null,
      mime: mime.getType(path) || 'application/octet-stream'
    }
  }
}
