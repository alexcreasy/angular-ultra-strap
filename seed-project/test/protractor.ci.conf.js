exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  specs: ['//e2e/**/*.js'],
  capabilities: {
    'browserName': 'firefox'
  },
  baseUrl: 'http://localhost:9001'
};
