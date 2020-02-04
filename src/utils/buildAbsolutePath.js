const path = require('path')

export default function buildAbsolutePath(relativePath) {
    return path.resolve(relativePath)
}