import { splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const linkFn = createRecipe('link', {}, [])

const variantKeys = [
  "color",
  "underline"
]

function splitVariantProps(props) {
  return splitProps(props, variantKeys)
}

export const link = Object.assign(linkFn, {
  __recipe__: true,
  variantKeys,
  variantMap: {
  "color": [
    "primary",
    "secondary",
    "accent"
  ],
  "underline": [
    "true"
  ]
},
  splitVariantProps,
})