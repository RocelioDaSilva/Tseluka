import path from 'path'
import base from './config/next.config.mjs'

const nextConfig = {
  ...base,
  webpack(config, options) {
    if (typeof base.webpack === 'function') {
      config = base.webpack(config, options) || config
    }
    if (options.isServer) {
      config.resolve = config.resolve || {}
      config.resolve.alias = config.resolve.alias || {}
      config.resolve.alias['@tauri-apps/api/tauri'] = path.resolve('./shims/tauri-server-shim.js')
    }
    return config
  }
}

export default nextConfig
