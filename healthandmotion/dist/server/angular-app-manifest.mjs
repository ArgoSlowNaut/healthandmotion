
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'github.com/argoslawunaut/healthandmotion',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/github.com/argoslawunaut/healthandmotion"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1564, hash: '8e1af015101b00293a2fdd51d35f6f7bb405fa77995a7ec0981e6cd050120b87', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 916, hash: '7fbd22133b1a3ac0134cd35d07e27986b64bf737f8ddbca6ea565e09bfc53bc9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 11446, hash: 'dfdb98c17fe2b06b6ffacfce9c119ee8152af8f56110be86132204a2867ea2b5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-V4VEJNUI.css': {size: 73780, hash: 'Cd9FEyW0Xyg', text: () => import('./assets-chunks/styles-V4VEJNUI_css.mjs').then(m => m.default)}
  },
};
