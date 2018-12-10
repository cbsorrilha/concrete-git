export const imports = {
  'index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "index" */ 'index.mdx'),
  'client/components/atoms/__docs__/button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "client-components-atoms-docs-button" */ 'client/components/atoms/__docs__/button.mdx'),
  'client/components/atoms/__docs__/card.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "client-components-atoms-docs-card" */ 'client/components/atoms/__docs__/card.mdx'),
  'client/components/atoms/__docs__/flex-container.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "client-components-atoms-docs-flex-container" */ 'client/components/atoms/__docs__/flex-container.mdx'),
  'client/components/atoms/__docs__/flex-item.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "client-components-atoms-docs-flex-item" */ 'client/components/atoms/__docs__/flex-item.mdx'),
  'client/components/atoms/__docs__/grid-container.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "client-components-atoms-docs-grid-container" */ 'client/components/atoms/__docs__/grid-container.mdx'),
  'client/components/atoms/__docs__/grid-item.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "client-components-atoms-docs-grid-item" */ 'client/components/atoms/__docs__/grid-item.mdx'),
}
