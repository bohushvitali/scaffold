declare module '*.wasm' {
  const mod: (options: any) => Promise<WebAssembly.ResultObject>
  export default mod
}
