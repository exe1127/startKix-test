/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      app: 'http://localhost',
      platform: 'Android',
      device: 'emulator-5554'
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'startKix-test'
}