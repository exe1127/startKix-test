const loginInit = (I) => {
    I.wait(10);
    //capturas de pantalla en determinado momento
    //I.saveElementScreenshot({ xpath:'/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout'},'debug2.png');
    I.tap({ xpath: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.Button/android.widget.TextView' });
    I.wait(2);

}
const skipInit = (I) => {
    I.wait(5);
    I.tap({ xpath: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView' });
    I.wait(2);
}

const nextSkipping = (I) => {
    I.tap('#com.android.permissioncontroller:id/permission_deny_button');
    I.tap('#com.android.permissioncontroller:id/permission_deny_button');
    I.tap('#com.android.permissioncontroller:id/permission_deny_button');
}

const endSikp = (I) => {
    I.wait(1);
    I.tap({ xpath: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.view.ViewGroup/android.widget.ImageView' });
    I.wait(1);
}

module.exports = { loginInit, skipInit, nextSkipping, endSikp }