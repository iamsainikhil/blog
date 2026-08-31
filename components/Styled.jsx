import {forwardRef} from 'react'
import {Box} from 'theme-ui'

/**
 * Theme UI provided a `Styled` object for accessing elemental theme styles
 * like `Styled.h1`, `Styled.p`, etc. It was removed in newer versions of
 * theme-ui, so recreate it on top of `Box` using the `styles` variant.
 */
const themed = (tag) => {
  const Element = forwardRef((props, ref) => (
    <Box ref={ref} as={tag} variant={`styles.${tag}`} {...props} />
  ))
  Element.displayName = `Styled.${tag}`
  return Element
}

const Styled = {
  h1: themed('h1'),
  h2: themed('h2'),
  h3: themed('h3'),
  h4: themed('h4'),
  h5: themed('h5'),
  h6: themed('h6'),
  p: themed('p'),
  em: themed('em'),
  a: themed('a'),
  pre: themed('pre'),
  blockquote: themed('blockquote'),
  li: themed('li'),
  ul: themed('ul'),
  ol: themed('ol'),
  inlineCode: themed('inlineCode'),
  table: themed('table'),
  th: themed('th'),
  td: themed('td'),
}

export default Styled