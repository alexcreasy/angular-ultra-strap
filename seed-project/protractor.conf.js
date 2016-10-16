exports.config = {
  framework: 'jasmine',
  seleniumAddress: null,
  specs: ['test/e2e/**/*.js'],
  capabilities: {
    'browserName': 'phantomjs',
    'phantomjs.binary.path': require('phantomjs-prebuilt').path
  },
  baseUrl: 'http://localhost:9001'
};
