// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Any = any
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export type Func = Function
export type SafeSecondParam<V extends Func> = V extends ( arg0: Any, arg1: infer P, ...args: Any[] ) => Any
	? P
	: undefined
