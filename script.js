/*jshint esversion: 6*/

// Define Our Variables
const onOffBtn = document.querySelector('.on-off');
const onOffCircle = document.querySelector('.switch-circle');
const navItems = [...document.querySelectorAll('.nav-link')];
const lightImgs = [...document.querySelectorAll('.light-color')];
let lastLigntOn = null; // To save last light-color was on

// Define Our Function
function navLoop() {
    navItems.forEach((colorItem, index) => {
        colorItem.addEventListener('click', function () {
            lightImgs.forEach((light, lIndex) => {
                if (lIndex == index) {
                    if (!lightImgs[lIndex].classList.contains('light-active')) {
                        lightImgs[lIndex].classList.add('light-active');
                        lastLigntOn = light;
                    }
                } else {
                    if (lightImgs[lIndex].classList.contains('light-active')) {
                        lightImgs[lIndex].classList.remove('light-active');
                    }
                }
            });
            if (!onOffBtn.classList.contains('btn-acitve')) {
                onOffBtn.classList.add('btn-active');
            }
            if (!onOffCircle.classList.contains('circle-active')) {
                onOffCircle.classList.add('circle-active');
            }
        });
    });
}

// Add Event Listeners
onOffBtn.addEventListener('click', function () {

    // When light is off, then the 'click' will turn it on
    if (!onOffBtn.classList.contains('btn-active')) {
        if (lastLigntOn) {
            lastLigntOn.classList.add('light-active');
        } else {
            lightImgs[0].classList.add('light-active');
        }
    }

    // When light is on, then the 'click' will turn it off
    if (onOffBtn.classList.contains('btn-active')) {
        lightImgs.forEach((light) => {
            if (light.classList.contains('light-active')) {
                light.classList.remove('light-active');
            }
        });
    }
    onOffBtn.classList.toggle('btn-active');
    onOffCircle.classList.toggle('circle-active');
});

document.addEventListener('DOMContentLoaded', function () {
    navLoop();
});
