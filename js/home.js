$(document).ready(function () {
            TweenLite.from('.firstCol', 2.5, {
                ease: Power2.easeOut,
                x: 400
            });
            TweenLite.to('.firstCol', 0, {
                ease: Power2.easeOut,
                x: 0
            });
            TweenLite.from('.fifthCol', 2.5, {
                ease: Power3.easeOut,
                x: -400
            });
            TweenLite.to('.fifthCol', 0, {
                ease: Power3.easeOut,
                x: 100
            });
            TweenLite.from('.secondColOne', 2.5, {
                ease: Power3.easeOut,
                x: 300,
                y: 100
            });
            TweenLite.to('.secondColOne', 0, {
                ease: Power3.easeOut,
                x: 100,
                y: 100
            });
            TweenLite.from('.secondColTwo', 2.5, {
                ease: Power3.easeOut,
                x: 300,
                y: 0
            });
            TweenLite.to('.secondColTwo', 0, {
                ease: Power3.easeOut,
                x: 100,
                y: 100
            });
            TweenLite.from('.thirdColOne', 2.5, {
                ease: Power3.easeOut,
                x: 0,
                y: 300
            });
            TweenLite.to('.thirdColOne', 0, {
                ease: Power3.easeOut,
                x: 100,
                y: 100
            });
            TweenLite.from('.thirdColThree', 2.5, {
                ease: Power3.easeOut,
                x: 0,
                y: -300
            });
            TweenLite.to('.thirdColThree', 0, {
                ease: Power3.easeOut,
                x: 100,
                y: 100
            });
            TweenLite.from('.fourthColOne', 2.5, {
                ease: Power3.easeOut,
                x: -300,
                y: 300
            });
            TweenLite.to('.fourthColOne', 0, {
                ease: Power3.easeOut,
                x: 100,
                y: 100
            });
            TweenLite.from('.fourthColTwo', 2.5, {
                ease: Power3.easeOut,
                x: -300,
                y: 0
            });
            TweenLite.to('.fourthColTwo', 0, {
                ease: Power3.easeOut,
                x: 100,
                y: 100
            });
    });