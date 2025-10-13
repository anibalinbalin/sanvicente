const tokens = {
  "colors.uiBg": {
    "value": "var(--colors-slate1)",
    "variable": "var(--colors-ui-bg)"
  },
  "colors.surface1": {
    "value": "var(--colors-slate3)",
    "variable": "var(--colors-surface1)"
  },
  "colors.surface2": {
    "value": "var(--colors-slate12)",
    "variable": "var(--colors-surface2)"
  },
  "colors.text2": {
    "value": "var(--colors-slate11)",
    "variable": "var(--colors-text2)"
  },
  "colors.text3": {
    "value": "var(--colors-gold9)",
    "variable": "var(--colors-text3)"
  },
  "colors.text4": {
    "value": "var(--colors-slate1)",
    "variable": "var(--colors-text4)"
  },
  "spacing.none": {
    "value": 0,
    "variable": "var(--spacing-none)"
  },
  "spacing.3xs": {
    "value": "clamp(0.25rem, 0.15vw + 0.22rem, 0.31rem)",
    "variable": "var(--spacing-3xs)"
  },
  "spacing.2xs": {
    "value": "clamp(0.5rem, 0.3vw + 0.43rem, 0.63rem)",
    "variable": "var(--spacing-2xs)"
  },
  "spacing.xs": {
    "value": "clamp(0.75rem, 0.45vw + 0.65rem, 0.94rem)",
    "variable": "var(--spacing-xs)"
  },
  "spacing.s": {
    "value": "clamp(1rem, 0.6vw + 0.86rem, 1.25rem)",
    "variable": "var(--spacing-s)"
  },
  "spacing.m": {
    "value": "clamp(1.5rem, 0.9vw + 1.3rem, 1.88rem)",
    "variable": "var(--spacing-m)"
  },
  "spacing.l": {
    "value": "clamp(2rem, 1.2vw + 1.73rem, 2.5rem)",
    "variable": "var(--spacing-l)"
  },
  "spacing.xl": {
    "value": "clamp(3rem, 1.81vw + 2.59rem, 3.75rem)",
    "variable": "var(--spacing-xl)"
  },
  "spacing.2xl": {
    "value": "clamp(4rem, 2.41vw + 3.46rem, 5rem)",
    "variable": "var(--spacing-2xl)"
  },
  "spacing.3xl": {
    "value": "clamp(6rem, 3.61vw + 5.19rem, 7.5rem)",
    "variable": "var(--spacing-3xl)"
  },
  "sizes.prose": {
    "value": "60ch",
    "variable": "var(--sizes-prose)"
  },
  "sizes.full": {
    "value": "100%",
    "variable": "var(--sizes-full)"
  },
  "sizes.channel": {
    "value": "700px",
    "variable": "var(--sizes-channel)"
  },
  "sizes.screenW": {
    "value": "100vw",
    "variable": "var(--sizes-screen-w)"
  },
  "sizes.screenH": {
    "value": "100vh",
    "variable": "var(--sizes-screen-h)"
  },
  "sizes.desktop": {
    "value": "1440px",
    "variable": "var(--sizes-desktop)"
  },
  "sizes.breakpoint-bp1": {
    "value": "520px",
    "variable": "var(--sizes-breakpoint-bp1)"
  },
  "sizes.breakpoint-bp2": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-bp2)"
  },
  "sizes.breakpoint-bp3": {
    "value": "1040px",
    "variable": "var(--sizes-breakpoint-bp3)"
  },
  "sizes.breakpoint-bp4": {
    "value": "1800px",
    "variable": "var(--sizes-breakpoint-bp4)"
  },
  "radii.none": {
    "value": "0",
    "variable": "var(--radii-none)"
  },
  "radii.round": {
    "value": "50%",
    "variable": "var(--radii-round)"
  },
  "radii.pill": {
    "value": "9999px",
    "variable": "var(--radii-pill)"
  },
  "radii.card": {
    "value": "5px",
    "variable": "var(--radii-card)"
  },
  "fonts.primary": {
    "value": "var(--font-sans)",
    "variable": "var(--fonts-primary)"
  },
  "fonts.serif": {
    "value": "var(--font-serif)",
    "variable": "var(--fonts-serif)"
  },
  "fonts.mono": {
    "value": "var(--font-mono)",
    "variable": "var(--fonts-mono)"
  },
  "fontWeights.bold": {
    "value": "700",
    "variable": "var(--font-weights-bold)"
  },
  "fontWeights.regular": {
    "value": "400",
    "variable": "var(--font-weights-regular)"
  },
  "fontSizes.1": {
    "value": "clamp(0.81rem, 0.45vw + 0.71rem, 1rem)",
    "variable": "var(--font-sizes-1)"
  },
  "fontSizes.2": {
    "value": "clamp(1rem, 0.6vw + 0.86rem, 1.25rem)",
    "variable": "var(--font-sizes-2)"
  },
  "fontSizes.3": {
    "value": "clamp(1.25rem, 0.75vw + 1.08rem, 1.56rem)",
    "variable": "var(--font-sizes-3)"
  },
  "fontSizes.4": {
    "value": "clamp(1.56rem, 0.9vw + 1.36rem, 1.94rem)",
    "variable": "var(--font-sizes-4)"
  },
  "fontSizes.5": {
    "value": "clamp(1.94rem, 1.2vw + 1.67rem, 2.44rem)",
    "variable": "var(--font-sizes-5)"
  },
  "fontSizes.6": {
    "value": "clamp(2.44rem, 1.51vw + 2.1rem, 3.06rem)",
    "variable": "var(--font-sizes-6)"
  },
  "fontSizes.7": {
    "value": "clamp(3.06rem, 1.81vw + 2.66rem, 3.81rem)",
    "variable": "var(--font-sizes-7)"
  },
  "fontSizes.8": {
    "value": "clamp(3.81rem, 2.26vw + 3.3rem, 4.75rem)",
    "variable": "var(--font-sizes-8)"
  },
  "lineHeights.tight": {
    "value": "1",
    "variable": "var(--line-heights-tight)"
  },
  "lineHeights.body": {
    "value": "1.5",
    "variable": "var(--line-heights-body)"
  },
  "lineHeights.loose": {
    "value": "2",
    "variable": "var(--line-heights-loose)"
  },
  "zIndex.under": {
    "value": -1,
    "variable": "var(--z-index-under)"
  },
  "zIndex.over": {
    "value": 1,
    "variable": "var(--z-index-over)"
  },
  "zIndex.init": {
    "value": 0,
    "variable": "var(--z-index-init)"
  },
  "zIndex.nuclear": {
    "value": 9999,
    "variable": "var(--z-index-nuclear)"
  },
  "shadows.focus": {
    "value": "0 0 0 3px var(--colors-gold6)",
    "variable": "var(--shadows-focus)"
  },
  "durations.default": {
    "value": "225ms",
    "variable": "var(--durations-default)"
  },
  "easings.default": {
    "value": "cubic-bezier(0.4, 0, 0.2, 1)",
    "variable": "var(--easings-default)"
  },
  "animations.skeleton": {
    "value": "skeleton 8s ease-in-out infinite",
    "variable": "var(--animations-skeleton)"
  },
  "breakpoints.bp1": {
    "value": "520px",
    "variable": "var(--breakpoints-bp1)"
  },
  "breakpoints.bp2": {
    "value": "768px",
    "variable": "var(--breakpoints-bp2)"
  },
  "breakpoints.bp3": {
    "value": "1040px",
    "variable": "var(--breakpoints-bp3)"
  },
  "breakpoints.bp4": {
    "value": "1800px",
    "variable": "var(--breakpoints-bp4)"
  },
  "colors.gold1": {
    "value": "var(--colors-gold1)",
    "variable": "var(--colors-gold1)"
  },
  "colors.gold2": {
    "value": "var(--colors-gold2)",
    "variable": "var(--colors-gold2)"
  },
  "colors.gold3": {
    "value": "var(--colors-gold3)",
    "variable": "var(--colors-gold3)"
  },
  "colors.gold4": {
    "value": "var(--colors-gold4)",
    "variable": "var(--colors-gold4)"
  },
  "colors.gold5": {
    "value": "var(--colors-gold5)",
    "variable": "var(--colors-gold5)"
  },
  "colors.gold6": {
    "value": "var(--colors-gold6)",
    "variable": "var(--colors-gold6)"
  },
  "colors.gold7": {
    "value": "var(--colors-gold7)",
    "variable": "var(--colors-gold7)"
  },
  "colors.gold8": {
    "value": "var(--colors-gold8)",
    "variable": "var(--colors-gold8)"
  },
  "colors.gold9": {
    "value": "var(--colors-gold9)",
    "variable": "var(--colors-gold9)"
  },
  "colors.gold10": {
    "value": "var(--colors-gold10)",
    "variable": "var(--colors-gold10)"
  },
  "colors.gold11": {
    "value": "var(--colors-gold11)",
    "variable": "var(--colors-gold11)"
  },
  "colors.gold12": {
    "value": "var(--colors-gold12)",
    "variable": "var(--colors-gold12)"
  },
  "colors.green1": {
    "value": "var(--colors-green1)",
    "variable": "var(--colors-green1)"
  },
  "colors.green2": {
    "value": "var(--colors-green2)",
    "variable": "var(--colors-green2)"
  },
  "colors.green3": {
    "value": "var(--colors-green3)",
    "variable": "var(--colors-green3)"
  },
  "colors.green4": {
    "value": "var(--colors-green4)",
    "variable": "var(--colors-green4)"
  },
  "colors.green5": {
    "value": "var(--colors-green5)",
    "variable": "var(--colors-green5)"
  },
  "colors.green6": {
    "value": "var(--colors-green6)",
    "variable": "var(--colors-green6)"
  },
  "colors.green7": {
    "value": "var(--colors-green7)",
    "variable": "var(--colors-green7)"
  },
  "colors.green8": {
    "value": "var(--colors-green8)",
    "variable": "var(--colors-green8)"
  },
  "colors.green9": {
    "value": "var(--colors-green9)",
    "variable": "var(--colors-green9)"
  },
  "colors.green10": {
    "value": "var(--colors-green10)",
    "variable": "var(--colors-green10)"
  },
  "colors.green11": {
    "value": "var(--colors-green11)",
    "variable": "var(--colors-green11)"
  },
  "colors.green12": {
    "value": "var(--colors-green12)",
    "variable": "var(--colors-green12)"
  },
  "colors.slate1": {
    "value": "var(--colors-slate1)",
    "variable": "var(--colors-slate1)"
  },
  "colors.slate2": {
    "value": "var(--colors-slate2)",
    "variable": "var(--colors-slate2)"
  },
  "colors.slate3": {
    "value": "var(--colors-slate3)",
    "variable": "var(--colors-slate3)"
  },
  "colors.slate4": {
    "value": "var(--colors-slate4)",
    "variable": "var(--colors-slate4)"
  },
  "colors.slate5": {
    "value": "var(--colors-slate5)",
    "variable": "var(--colors-slate5)"
  },
  "colors.slate6": {
    "value": "var(--colors-slate6)",
    "variable": "var(--colors-slate6)"
  },
  "colors.slate7": {
    "value": "var(--colors-slate7)",
    "variable": "var(--colors-slate7)"
  },
  "colors.slate8": {
    "value": "var(--colors-slate8)",
    "variable": "var(--colors-slate8)"
  },
  "colors.slate9": {
    "value": "var(--colors-slate9)",
    "variable": "var(--colors-slate9)"
  },
  "colors.slate10": {
    "value": "var(--colors-slate10)",
    "variable": "var(--colors-slate10)"
  },
  "colors.slate11": {
    "value": "var(--colors-slate11)",
    "variable": "var(--colors-slate11)"
  },
  "colors.slate12": {
    "value": "var(--colors-slate12)",
    "variable": "var(--colors-slate12)"
  },
  "colors.yellow1": {
    "value": "var(--colors-yellow1)",
    "variable": "var(--colors-yellow1)"
  },
  "colors.yellow2": {
    "value": "var(--colors-yellow2)",
    "variable": "var(--colors-yellow2)"
  },
  "colors.yellow3": {
    "value": "var(--colors-yellow3)",
    "variable": "var(--colors-yellow3)"
  },
  "colors.yellow4": {
    "value": "var(--colors-yellow4)",
    "variable": "var(--colors-yellow4)"
  },
  "colors.yellow5": {
    "value": "var(--colors-yellow5)",
    "variable": "var(--colors-yellow5)"
  },
  "colors.yellow6": {
    "value": "var(--colors-yellow6)",
    "variable": "var(--colors-yellow6)"
  },
  "colors.yellow7": {
    "value": "var(--colors-yellow7)",
    "variable": "var(--colors-yellow7)"
  },
  "colors.yellow8": {
    "value": "var(--colors-yellow8)",
    "variable": "var(--colors-yellow8)"
  },
  "colors.yellow9": {
    "value": "var(--colors-yellow9)",
    "variable": "var(--colors-yellow9)"
  },
  "colors.yellow10": {
    "value": "var(--colors-yellow10)",
    "variable": "var(--colors-yellow10)"
  },
  "colors.yellow11": {
    "value": "var(--colors-yellow11)",
    "variable": "var(--colors-yellow11)"
  },
  "colors.yellow12": {
    "value": "var(--colors-yellow12)",
    "variable": "var(--colors-yellow12)"
  },
  "colors.tomato1": {
    "value": "var(--colors-tomato1)",
    "variable": "var(--colors-tomato1)"
  },
  "colors.tomato2": {
    "value": "var(--colors-tomato2)",
    "variable": "var(--colors-tomato2)"
  },
  "colors.tomato3": {
    "value": "var(--colors-tomato3)",
    "variable": "var(--colors-tomato3)"
  },
  "colors.tomato4": {
    "value": "var(--colors-tomato4)",
    "variable": "var(--colors-tomato4)"
  },
  "colors.tomato5": {
    "value": "var(--colors-tomato5)",
    "variable": "var(--colors-tomato5)"
  },
  "colors.tomato6": {
    "value": "var(--colors-tomato6)",
    "variable": "var(--colors-tomato6)"
  },
  "colors.tomato7": {
    "value": "var(--colors-tomato7)",
    "variable": "var(--colors-tomato7)"
  },
  "colors.tomato8": {
    "value": "var(--colors-tomato8)",
    "variable": "var(--colors-tomato8)"
  },
  "colors.tomato9": {
    "value": "var(--colors-tomato9)",
    "variable": "var(--colors-tomato9)"
  },
  "colors.tomato10": {
    "value": "var(--colors-tomato10)",
    "variable": "var(--colors-tomato10)"
  },
  "colors.tomato11": {
    "value": "var(--colors-tomato11)",
    "variable": "var(--colors-tomato11)"
  },
  "colors.tomato12": {
    "value": "var(--colors-tomato12)",
    "variable": "var(--colors-tomato12)"
  },
  "colors.text1": {
    "value": "var(--colors-text1)",
    "variable": "var(--colors-text1)"
  },
  "spacing.-none": {
    "value": "calc(var(--spacing-none) * -1)",
    "variable": "var(--spacing-none)"
  },
  "spacing.-3xs": {
    "value": "calc(var(--spacing-3xs) * -1)",
    "variable": "var(--spacing-3xs)"
  },
  "spacing.-2xs": {
    "value": "calc(var(--spacing-2xs) * -1)",
    "variable": "var(--spacing-2xs)"
  },
  "spacing.-xs": {
    "value": "calc(var(--spacing-xs) * -1)",
    "variable": "var(--spacing-xs)"
  },
  "spacing.-s": {
    "value": "calc(var(--spacing-s) * -1)",
    "variable": "var(--spacing-s)"
  },
  "spacing.-m": {
    "value": "calc(var(--spacing-m) * -1)",
    "variable": "var(--spacing-m)"
  },
  "spacing.-l": {
    "value": "calc(var(--spacing-l) * -1)",
    "variable": "var(--spacing-l)"
  },
  "spacing.-xl": {
    "value": "calc(var(--spacing-xl) * -1)",
    "variable": "var(--spacing-xl)"
  },
  "spacing.-2xl": {
    "value": "calc(var(--spacing-2xl) * -1)",
    "variable": "var(--spacing-2xl)"
  },
  "spacing.-3xl": {
    "value": "calc(var(--spacing-3xl) * -1)",
    "variable": "var(--spacing-3xl)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar