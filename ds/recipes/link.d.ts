/* eslint-disable */
import type { ConditionalValue } from '../types'
import type { Pretty } from '../types/helpers'

type LinkVariant = {
  color: "primary" | "secondary" | "accent"
underline: boolean
}

type LinkVariantMap = {
  [key in keyof LinkVariant]: Array<LinkVariant[key]>
}

export type LinkVariantProps = {
  [key in keyof LinkVariant]?: ConditionalValue<LinkVariant[key]>
}

interface LinkRecipe {
  __type: LinkVariantProps
  (props?: LinkVariantProps): string
  variantMap: LinkVariantMap
  variantKeys: Array<keyof LinkVariant>
  splitVariantProps<Props extends LinkVariantProps>(props: Props): [LinkVariantProps, Pretty<Omit<Props, keyof LinkVariantProps>>]
}


export declare const link: LinkRecipe