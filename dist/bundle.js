/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./style/index.scss ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************!*\
  !*** ./index.ts ***!
  \******************/

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var particlesArray;
var mouse = {
    x: null,
    y: null,
    radius: (canvas.height / 80) * (canvas.width / 80)
};
window.addEventListener('mousemove', function (e) {
    mouse.x = e.x;
    mouse.y = e.y;
});
var Particle = /** @class */ (function () {
    function Particle(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }
    Particle.prototype.draw = function () {
        if (ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = '#8C5523';
            ctx.fill();
        }
    };
    Particle.prototype.update = function () {
        if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
        }
        if (mouse.x && mouse.y) {
            var dx = mouse.x - this.x;
            var dy = mouse.y - this.y;
            var distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouse.radius + this.size) {
                if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                    this.x += 10;
                }
                if (mouse.x > this.x && this.x > this.size * 10) {
                    this.x -= 10;
                }
                if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                    this.y += 10;
                }
                if (mouse.y > this.y && this.y > this.size * 10) {
                    this.y -= 10;
                }
            }
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
    };
    return Particle;
}());
function init() {
    particlesArray = [];
    var numberOfParticles = (canvas.height * canvas.width) / 19000;
    for (var i = 0; i < numberOfParticles; i++) {
        var size = (Math.random() * 5) + 1;
        var x = (Math.random() * ((innerWidth - size * 2) - (size * 2) + (size * 2)));
        var y = (Math.random() * ((innerHeight - size * 2) - (size * 2) + (size * 2)));
        var directionX = (Math.random() * 5) - 2.5;
        var directionY = (Math.random() * 5) - 2.5;
        var color = '#8c5523';
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}
function animate() {
    requestAnimationFrame(animate);
    ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (var i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    connect();
}
function connect() {
    var opacity = 1;
    for (var i = 0; i < particlesArray.length; i++) {
        for (var j = 0; j < particlesArray.length; j++) {
            var distance = (((particlesArray[i].x - particlesArray[j].x) * (particlesArray[i].x - particlesArray[j].x))
                - ((particlesArray[i].y - particlesArray[j].y) * (particlesArray[i].y - particlesArray[j].y)));
            if (distance < ((canvas.width / 7) * (canvas.height / 7)) && distance > 0) {
                if (ctx) {
                    opacity = 1 - distance / 2000;
                    ctx.strokeStyle = "rbga(140,58,31,".concat(opacity, ")");
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                    ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                    ctx.stroke();
                }
            }
        }
    }
}
init();
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});
animate();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map