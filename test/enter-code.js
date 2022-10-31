
const cod = ['0', '1', '0', '1', '0', '1'];

Feature('Enter a Star Code');

Scenario('test Enter a Star Code', ({ I }) => {
    I.wait(5);
    I.tap({ xpath: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[7]' });
    I.wait(5);
    I.tap({ xpath: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView' });
    cod.forEach((i) => {
        I.wait(2);
        I.pressKey(i);
    })
    // opcion individual
    // I.pressKey('0');
    // I.pressKey('1');
    // I.pressKey('0');
    // I.pressKey('1');
    // I.pressKey('0');
    // I.pressKey('1');
    I.wait(3);
    I.tap('#android:id/button1');
    I.wait(2);
    pause();
})