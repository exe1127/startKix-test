const loginInit =require('./init-function');

const login = (I) => {
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
    I.wait(2);
}

module.exports = login