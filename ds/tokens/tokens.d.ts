/* eslint-disable */
export type Token = `colors.${ColorToken}` | `spacing.${SpacingToken}` | `sizes.${SizeToken}` | `radii.${RadiusToken}` | `fonts.${FontToken}` | `fontWeights.${FontWeightToken}` | `fontSizes.${FontSizeToken}` | `lineHeights.${LineHeightToken}` | `zIndex.${ZIndexToken}` | `shadows.${ShadowToken}` | `durations.${DurationToken}` | `easings.${EasingToken}` | `animations.${AnimationToken}` | `breakpoints.${BreakpointToken}`

export type ColorPalette = "uiBg" | "surface1" | "surface2" | "text2" | "text3" | "text4" | "gold1" | "gold2" | "gold3" | "gold4" | "gold5" | "gold6" | "gold7" | "gold8" | "gold9" | "gold10" | "gold11" | "gold12" | "green1" | "green2" | "green3" | "green4" | "green5" | "green6" | "green7" | "green8" | "green9" | "green10" | "green11" | "green12" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "yellow1" | "yellow2" | "yellow3" | "yellow4" | "yellow5" | "yellow6" | "yellow7" | "yellow8" | "yellow9" | "yellow10" | "yellow11" | "yellow12" | "tomato1" | "tomato2" | "tomato3" | "tomato4" | "tomato5" | "tomato6" | "tomato7" | "tomato8" | "tomato9" | "tomato10" | "tomato11" | "tomato12" | "text1"

export type ColorToken = "uiBg" | "surface1" | "surface2" | "text2" | "text3" | "text4" | "gold1" | "gold2" | "gold3" | "gold4" | "gold5" | "gold6" | "gold7" | "gold8" | "gold9" | "gold10" | "gold11" | "gold12" | "green1" | "green2" | "green3" | "green4" | "green5" | "green6" | "green7" | "green8" | "green9" | "green10" | "green11" | "green12" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "yellow1" | "yellow2" | "yellow3" | "yellow4" | "yellow5" | "yellow6" | "yellow7" | "yellow8" | "yellow9" | "yellow10" | "yellow11" | "yellow12" | "tomato1" | "tomato2" | "tomato3" | "tomato4" | "tomato5" | "tomato6" | "tomato7" | "tomato8" | "tomato9" | "tomato10" | "tomato11" | "tomato12" | "text1" | "colorPalette"

export type SpacingToken = "none" | "3xs" | "2xs" | "xs" | "s" | "m" | "l" | "xl" | "2xl" | "3xl" | "-none" | "-3xs" | "-2xs" | "-xs" | "-s" | "-m" | "-l" | "-xl" | "-2xl" | "-3xl"

export type SizeToken = "prose" | "full" | "channel" | "screenW" | "screenH" | "desktop" | "breakpoint-bp1" | "breakpoint-bp2" | "breakpoint-bp3" | "breakpoint-bp4"

export type RadiusToken = "none" | "round" | "pill" | "card"

export type FontToken = "primary" | "serif" | "mono"

export type FontWeightToken = "bold" | "regular"

export type FontSizeToken = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8"

export type LineHeightToken = "tight" | "body" | "loose"

export type ZIndexToken = "under" | "over" | "init" | "nuclear"

export type ShadowToken = "focus"

export type DurationToken = "default"

export type EasingToken = "default"

export type AnimationToken = "skeleton"

export type BreakpointToken = "bp1" | "bp2" | "bp3" | "bp4"

export type Tokens = {
		colors: ColorToken
		spacing: SpacingToken
		sizes: SizeToken
		radii: RadiusToken
		fonts: FontToken
		fontWeights: FontWeightToken
		fontSizes: FontSizeToken
		lineHeights: LineHeightToken
		zIndex: ZIndexToken
		shadows: ShadowToken
		durations: DurationToken
		easings: EasingToken
		animations: AnimationToken
		breakpoints: BreakpointToken
} & { [token: string]: never }

export type TokenCategory = "aspectRatios" | "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "cursor" | "shadows" | "spacing" | "radii" | "borders" | "borderWidths" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"