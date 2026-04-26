export async function invoke() {
  throw new Error('Tauri API is not available during server-side build')
}

export const listen = () => {
  // no-op on server
  return () => {}
}

export default { invoke, listen }
