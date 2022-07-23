/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./style/index.scss":
/*!**************************!*\
  !*** ./style/index.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var particles_1 = __importDefault(__webpack_require__(/*! ./particles */ "./particles.ts"));
(0, particles_1.default)();


/***/ }),

/***/ "./particles.ts":
/*!**********************!*\
  !*** ./particles.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
function Particles() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // eslint-disable-next-line no-use-before-define
    var particlesArray;
    var mouse = {
        x: null,
        y: null,
        radius: (canvas.height / 80) * (canvas.width / 80),
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
                ctx.fillStyle = "rbga(12,222,123,1)";
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
    function connect() {
        var opacity = 1;
        for (var i = 0; i < particlesArray.length; i += 1) {
            // eslint-disable-next-line no-plusplus
            for (var j = 0; j < particlesArray.length; j++) {
                var distance = (particlesArray[i].x - particlesArray[j].x) *
                    (particlesArray[i].x - particlesArray[j].x) +
                    (particlesArray[i].y - particlesArray[j].y) *
                        (particlesArray[i].y - particlesArray[j].y);
                if (Math.abs(distance) < (canvas.width / 7) * (canvas.height / 7)) {
                    if (ctx) {
                        opacity = 1 - distance / 20000;
                        ctx.strokeStyle = "rbga(112,45,223,".concat(opacity, ")");
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
    function init() {
        particlesArray = [];
        var numberOfParticles = (canvas.height * canvas.width) / 5000;
        // eslint-disable-next-line no-plusplus
        for (var i = 0; i < numberOfParticles; i++) {
            var size = Math.random() * 5 + 1;
            var x = Math.random() * (window.innerWidth - size * 2 - size * 2 + size * 2);
            var y = Math.random() * (window.innerHeight - size * 2 - size * 2 + size * 2);
            var directionX = Math.random() * 5 - 2.5;
            var directionY = Math.random() * 5 - 2.5;
            var color = '#8c5523';
            particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
        }
    }
    function animate() {
        requestAnimationFrame(animate);
        ctx === null || ctx === void 0 ? void 0 : ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        for (var i = 0; i < particlesArray.length; i += 1) {
            particlesArray[i].update();
        }
        connect();
    }
    init();
    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });
    animate();
}
exports["default"] = Particles;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./style/index.scss");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map