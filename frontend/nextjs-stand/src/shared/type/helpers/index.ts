type Brand<Base, B> = {
  __brand: B
  __base: Base
}

export type Branded<Base, B> = Base & Brand<Base, B>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type BrandBase<T> = T extends Brand<infer Base, any> ? Base : never
