/* eslint-disable */
export type Token = "colors.uiBg" | "colors.surface1" | "colors.surface2" | "colors.text2" | "colors.text3" | "colors.text4" | "spacing.none" | "spacing.3xs" | "spacing.2xs" | "spacing.xs" | "spacing.s" | "spacing.m" | "spacing.l" | "spacing.xl" | "spacing.2xl" | "spacing.3xl" | "sizes.prose" | "sizes.full" | "sizes.channel" | "sizes.screenW" | "sizes.screenH" | "sizes.desktop" | "sizes.breakpoint-bp1" | "sizes.breakpoint-bp2" | "sizes.breakpoint-bp3" | "sizes.breakpoint-bp4" | "radii.none" | "radii.round" | "radii.pill" | "radii.card" | "fonts.primary" | "fonts.serif" | "fonts.mono" | "fontWeights.bold" | "fontWeights.regular" | "fontSizes.1" | "fontSizes.2" | "fontSizes.3" | "fontSizes.4" | "fontSizes.5" | "fontSizes.6" | "fontSizes.7" | "fontSizes.8" | "lineHeights.tight" | "lineHeights.body" | "lineHeights.loose" | "zIndex.under" | "zIndex.over" | "zIndex.init" | "zIndex.nuclear" | "shadows.focus" | "durations.default" | "easings.default" | "animations.skeleton" | "breakpoints.bp1" | "breakpoints.bp2" | "breakpoints.bp3" | "breakpoints.bp4" | "colors.gold1" | "colors.gold2" | "colors.gold3" | "colors.gold4" | "colors.gold5" | "colors.gold6" | "colors.gold7" | "colors.gold8" | "colors.gold9" | "colors.gold10" | "colors.gold11" | "colors.gold12" | "colors.green1" | "colors.green2" | "colors.green3" | "colors.green4" | "colors.green5" | "colors.green6" | "colors.green7" | "colors.green8" | "colors.green9" | "colors.green10" | "colors.green11" | "colors.green12" | "colors.slate1" | "colors.slate2" | "colors.slate3" | "colors.slate4" | "colors.slate5" | "colors.slate6" | "colors.slate7" | "colors.slate8" | "colors.slate9" | "colors.slate10" | "colors.slate11" | "colors.slate12" | "colors.yellow1" | "colors.yellow2" | "colors.yellow3" | "colors.yellow4" | "colors.yellow5" | "colors.yellow6" | "colors.yellow7" | "colors.yellow8" | "colors.yellow9" | "colors.yellow10" | "colors.yellow11" | "colors.yellow12" | "colors.tomato1" | "colors.tomato2" | "colors.tomato3" | "colors.tomato4" | "colors.tomato5" | "colors.tomato6" | "colors.tomato7" | "colors.tomato8" | "colors.tomato9" | "colors.tomato10" | "colors.tomato11" | "colors.tomato12" | "colors.text1" | "spacing.-none" | "spacing.-3xs" | "spacing.-2xs" | "spacing.-xs" | "spacing.-s" | "spacing.-m" | "spacing.-l" | "spacing.-xl" | "spacing.-2xl" | "spacing.-3xl"

export type ColorToken = "uiBg" | "surface1" | "surface2" | "text2" | "text3" | "text4" | "gold1" | "gold2" | "gold3" | "gold4" | "gold5" | "gold6" | "gold7" | "gold8" | "gold9" | "gold10" | "gold11" | "gold12" | "green1" | "green2" | "green3" | "green4" | "green5" | "green6" | "green7" | "green8" | "green9" | "green10" | "green11" | "green12" | "slate1" | "slate2" | "slate3" | "slate4" | "slate5" | "slate6" | "slate7" | "slate8" | "slate9" | "slate10" | "slate11" | "slate12" | "yellow1" | "yellow2" | "yellow3" | "yellow4" | "yellow5" | "yellow6" | "yellow7" | "yellow8" | "yellow9" | "yellow10" | "yellow11" | "yellow12" | "tomato1" | "tomato2" | "tomato3" | "tomato4" | "tomato5" | "tomato6" | "tomato7" | "tomato8" | "tomato9" | "tomato10" | "tomato11" | "tomato12" | "text1"

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

export type TokenCategory = "zIndex" | "opacity" | "colors" | "fonts" | "fontSizes" | "fontWeights" | "lineHeights" | "letterSpacings" | "sizes" | "shadows" | "spacing" | "radii" | "borders" | "durations" | "easings" | "animations" | "blurs" | "gradients" | "breakpoints" | "assets"