const { skipInit, nextSkipping, endSikp } = require("../function/init-function");

Feature('Skip- buttons');
Scenario('test Skip- buttons', ({ I }) => {
    skipInit(I);
    nextSkipping(I);
    I.tap('~LiveQueue, tab, 2 of 4');
    endSikp(I);
    I.tap('~Favourite, tab, 3 of 4');
    endSikp(I);
    I.tap('~Profile, tab, 4 of 4');
    endSikp(I);
})