import { extname } from 'path'
import { fileTypeFromFile } from 'file-type'
import mime from 'mime'

// TODO : Code quality checks
interface FileType {
  ext: string | null
  mime: string
}
// For now there are no custom mimetypes really needed, but if there are, put the following code before the export:
// mime.define({'text/x-abc': ['abc', 'abcd']});

/** Returns the file type and mime type of the given path with `file-type` and `mime` for fallback */
const getFileType = async (path: string): Promise<FileType> => {
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

export default getFileType
