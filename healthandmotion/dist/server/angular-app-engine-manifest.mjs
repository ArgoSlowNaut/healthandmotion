
export default {
  basePath: 'github.com/argoslawunaut/healthandmotion',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
