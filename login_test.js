const { sendKeys } = require("wd/lib/element-commands");
const { default: $ } = require("webdriverio/build/commands/browser/$");
const loginInit = require("./function");

Feature('login');

/* Scenario('test login', ({ I }) => {
    loginInit(I);
    I.fillField('#email', 'aaa');
    I.wait(2);
    I.fillField('#password', 'aaa');
    I.wait(2);
    I.tap({ xpath: '//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.Button' })
    I.wait(5);

}) */;

/* Scenario('test Skip- search participant', ({ I }) => {
    skipinit(I);
    nextSkipping(I);
    I.wait(1);
    // search name
    I.fillField('#search', 'rodri');
    I.wait(2);
    I.tap({ xpath: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.ImageView' });
    I.wait(2);
    I.tap({ xpath: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ImageView' });
    I.wait(5);
}) */



Scenario('test login "real account-vero"', ({ I }) => {
    I.wait(1);
    loginInit(I);
    I.fillField('#email', 'veronica1@nonerds.com');
    I.wait(2);
    I.fillField('#password', 'Testtest2');
    I.wait(2);
    I.tap({ xpath: '//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.Button' })
    I.wait(5);
    I.tap("#com.android.permissioncontroller:id/permission_allow_foreground_only_button");
    I.wait(2);
    I.tap("#com.android.permissioncontroller:id/permission_allow_foreground_only_button");
    I.wait(2);
    I.tap("#com.android.permissioncontroller:id/permission_allow_button");
    I.wait(5);
    pause();
});