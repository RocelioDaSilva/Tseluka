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
      // Map common Tauri imports to a server-side shim to avoid server bundling errors.
      config.resolve.alias['@tauri-apps/api/tauri'] = path.resolve('./shims/tauri-server-shim.js')
      config.resolve.alias['@tauri-apps/api'] = path.resolve('./shims/tauri-server-shim.js')
      config.resolve.alias['@tauri-apps/api/core'] = path.resolve('./shims/tauri-server-shim.js')
    }
    return config
  }
}

export default nextConfig
