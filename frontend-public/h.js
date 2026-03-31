export function h(tag, props, ...children) {
  if (typeof tag === 'function') return tag(props)

  const attrs = props
    ? Object.entries(props)
        .map(([k, v]) => `${k}="${v}"`)
        .join(' ')
    : ''

  return `<${tag} ${attrs}>${children.join('')}</${tag}>`
}
