exports.config = {
  framework: 'jasmine',
  //seleniumAddress: null,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['test/e2e/**/*.js'],
  capabilities: {
    'browserName': 'firefox'
  },
  baseUrl: 'http://localhost:9001'
};
