/**
 * By default, if not explicitly specified, the type of a generic type parameter
 * will be inferred from its usage. Sometimes this is not desirable when a type parameter
 * should only be used to _enforce_ typechecking.
 *
 * This type will turn an inferred type paramter `T` into a `never` by leverging the
 * compiler's deferral of evaluating unresolved conditional types
 *
 * https://github.com/Microsoft/TypeScript/issues/14829#issuecomment-504042546
 */
export type NoInfer<T> = [T][T extends unknown ? 0 : never];
