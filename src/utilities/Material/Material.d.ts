/**
 * Material CreateInfo
 */
export type MaterialCreateInfo = 
    MaterialGlass
  | MaterialFabric
;


// Material Glass types

/**
 * Material: Glass
 */
interface MaterialGlass {
  material: 'glass',
  tint: Color,
  opacity: AlphaChanel,
}


// Material Fabric types

/**
 * Material: Fabric
 */
interface MaterialFabric {
  material: 'fabric',
  color: Color,
}

// Common types
type Color = string


// Define range of numbers, useful for typechecking rgb, opacity and
// other types where only a subset of float32 is okay to use
// Read more on https://catchts.com/range-numbers
// currently copy/pasta from there
type MAXIMUM_ALLOWED_BOUNDARY = 256

type ComputeRange<
    N extends number,
    Result extends Array<unknown> = [],
    > =
    (Result['length'] extends N
        ? Result
        : ComputeRange<N, [...Result, Result['length']]>
    )

type Octal = ComputeRange<MAXIMUM_ALLOWED_BOUNDARY>[number] // 0 - 255

type Digits = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

type AlphaChanel =`0.${ComputeRange<999>[number]}` | '1.0'

type AssertAlpha<Alpha extends number> = `${Alpha}` extends AlphaChanel ? Alpha : never;

type RGBA<Alpha extends number = 1.0> = [Octal, Octal, Octal, AssertAlpha<Alpha>?]

type RGB = [Octal, Octal, Octal]