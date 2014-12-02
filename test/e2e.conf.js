exports.config = {
  capabilities: {
    browserName: 'chrome',
    maxInstances: 1,
    count: 1
  },
  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true
  },
  specs: [
    './e2e/demo-options.spec.js'
  ],
  baseUrl: 'http://common.xybersolve.com'
};