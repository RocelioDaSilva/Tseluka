interface FileResponse {
  success: boolean;
  message: string;
}

let _invoke: ((cmd: string, args?: any) => Promise<any>) | null = null

async function getInvoke() {
  if (!_invoke) {
    // If running on the server (SSR) the Tauri APIs are not available.
    if (typeof window === 'undefined') {
      _invoke = async () => {
        throw new Error('Tauri invoke is not available in the server/SSR environment')
      }
      return _invoke
    }

    try {
      // Use eval to avoid bundlers statically resolving the import during SSR builds.
      // This keeps the import runtime-only and prevents Next from attempting to
      // include the Tauri API on the server.
      // eslint-disable-next-line no-eval
      // @ts-ignore
      const mod = await eval("import('@tauri-apps/api/core')")
      _invoke = mod.invoke
    } catch (e) {
      // Dynamic import may fail in plain web builds; provide a safe stub.
      // Consumers should handle errors when Tauri is not present.
      // eslint-disable-next-line no-console
      console.warn('Tauri APIs not available; falling back to stub invoke', e)
      _invoke = async () => {
        throw new Error('Tauri invoke is not available in this environment')
      }
    }
  }
  return _invoke
}

export async function invoke(cmd: string, args?: any): Promise<any> {
  const inv = await getInvoke()
  return inv(cmd, args)
}

export const saveFile = async (path: string, contents: string): Promise<FileResponse> => {
  const inv = await getInvoke()
  return await inv('save_file', { path, contents })
}

export const readFile = async (path: string): Promise<string> => {
  const inv = await getInvoke()
  return await inv('read_file', { path })
}
