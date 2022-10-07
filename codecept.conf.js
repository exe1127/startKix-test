/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      app: __dirname + '/app/StarKix.apk',
      platform: 'Android',
      device: 'emulator-5554',
      // unicodeKeyboard: true,
      // resetKeyboard: true,
      desiredCapabilities: {
        automationName: 'UiAutomator2',
        appPackage: 'com.starkixltd',  // Package name of your app
        appActivity: 'com.starkixltd.MainActivity', // App activity of the app
        // unicodeKeyboard: true,
        // resetKeyboard: false
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'startKix-test'
}