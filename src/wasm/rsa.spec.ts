import RSASetup from 'wasm-rsa'

const rsaOne = RSASetup()

test('Generate rsa', () => {
  // Arrange
  const bits = 1024
  // Act
  const keys = rsaOne.generateRSAPrivate(bits)
  // Assert
  expect(keys).toHaveProperty('n')
  expect(keys).toHaveProperty('d')
  expect(keys).toHaveProperty('e')
})
