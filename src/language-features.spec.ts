test('map, filter, reduce', () => {
  expect([1, 2, 3].map(n => n * 3)).toEqual([3, 6, 9])
  expect([1, 2, 3].reduce((total, n) => total + n)).toEqual(6)
  expect([1, 2, 3].filter(n => n <= 2)).toEqual([1, 2])
})

test('head, tail', () => {
  const [head, ...tail] = [1, 2, 3]

  expect(head).toEqual(1)
  expect(tail).toEqual([2, 3])
})

test('last, initial', () => {
  const xs = [1, 2, 3]
  const [last, ...initial] = [...xs].reverse()
  initial.reverse()

  expect(last).toEqual(3)
  expect(initial).toEqual([1, 2])
})

test('curry', () => {
  const add = (a: any) => (b: any) => a + b
  const add2 = add(2)

  expect(add2(1)).toEqual(3)
  expect(add2.length).toEqual(1)
  expect(add2.toString()).toEqual('b => a + b')
})

test('partials', () => {
  const greet = (greeting: string, name: string) => `${greeting} ${name}`
  const sayHelloTo = (name: string) => greet('hello', name)

  expect(sayHelloTo('fred')).toEqual('hello fred')
})
