test('Generate uuid', () => {
  import('uuid-v4-wasm')
    .then(wasm => wasm.uuid())
    .then(uuid => console.log(uuid))
})
