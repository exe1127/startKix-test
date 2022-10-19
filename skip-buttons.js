const skipinit = require("./function");
const nextSkipping = require("./function");
const endSikp = require("./function");

Scenario('test Skip- buttons', ({ I }) => {
    skipinit(I);
    nextSkipping(I);
    I.wait(1);
    I.tap('~LiveQueue, tab, 2 of 4')
    endSikp(I);
    I.tap('~Favourite, tab, 3 of 4');
    endSikp(I);
    I.tap('~Profile, tab, 4 of 4')
    endSikp(I);
})