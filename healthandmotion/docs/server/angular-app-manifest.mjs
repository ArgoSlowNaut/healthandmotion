
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1404, hash: '4c866d50f6d03913ee08ef762e5a4fcdba2a2a1ca61adf674433b8e0c28a6216', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 835, hash: '91351e0c7ed92d74b885aed5392fe52e389994f705793aecd34e187b23c014ec', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4398, hash: 'd4e6e22201ad4faabd1a4e0504ee61fa0c3a17f40fdbb0f1171e7a75c2a0617d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-F2IK2YRF.css': {size: 73939, hash: 'sOVvCNbEpPM', text: () => import('./assets-chunks/styles-F2IK2YRF_css.mjs').then(m => m.default)}
  },
};
