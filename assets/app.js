/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/assets/js/app.js":
/*!*********************************!*\
  !*** ./source/assets/js/app.js ***!
  \*********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

var tag = document.createElement('script');

tag.src = 'https://www.youtube.com/player_api';

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var playerDefaults = { autoplay: 0, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 0, iv_load_policy: 3 };

var vid = [{ 'videoId': 'kSVwD7S5VGk', 'startSeconds': 0, 'endSeconds': 3 * 3600, 'suggestedQuality': 'hd720' }];

var randomVid = Math.floor(Math.random() * vid.length);
var currVid = randomVid;

var tv = void 0;

$('.hi em:last-of-type').html(vid.length);

window.onYouTubePlayerAPIReady = function () {
  tv = new YT.Player('tv', { events: { 'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange }, playerVars: playerDefaults });
};

function onPlayerReady() {
  tv.loadVideoById(vid[currVid]);
  tv.mute();
}

function onPlayerStateChange(e) {
  if (e.data === 1) {
    $('#tv').addClass('active');
    $('.hi em:nth-of-type(2)').html(currVid + 1);
  } else if (e.data === 2) {
    $('#tv').removeClass('active');
    if (currVid === vid.length - 1) {
      currVid = 0;
    } else {
      currVid++;
    }
    tv.loadVideoById(vid[currVid]);
    tv.seekTo(vid[currVid].startSeconds);
  }
}

function vidRescale() {

  var w = $(window).width() + 200,
      h = $(window).height() + 200;

  if (w / h > 16 / 9) {
    tv.setSize(w, w / 16 * 9);
    $('.tv .screen').css({ 'left': '0px' });
  } else {
    tv.setSize(h / 9 * 16, h);
    $('.tv .screen').css({ 'left': -($('.tv .screen').outerWidth() - w) / 2 });
  }
}

$(window).on('load resize', function () {
  vidRescale();
});

$('.hi span:first-of-type').on('click', function () {
  $('#tv').toggleClass('mute');
  $('.hi em:first-of-type').toggleClass('hidden');
  if ($('#tv').hasClass('mute')) {
    tv.mute();
  } else {
    tv.unMute();
  }
});

$('.hi span:last-of-type').on('click', function () {
  $('.hi em:nth-of-type(2)').html('~');
  tv.pauseVideo();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzQxMjEwMmI0YmIwNzg2NzE4MDAiLCJ3ZWJwYWNrOi8vLy4vc291cmNlL2Fzc2V0cy9qcy9hcHAuanMiXSwibmFtZXMiOlsidGFnIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiZmlyc3RTY3JpcHRUYWciLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJwbGF5ZXJEZWZhdWx0cyIsImF1dG9wbGF5IiwiYXV0b2hpZGUiLCJtb2Rlc3RicmFuZGluZyIsInJlbCIsInNob3dpbmZvIiwiY29udHJvbHMiLCJkaXNhYmxla2IiLCJlbmFibGVqc2FwaSIsIml2X2xvYWRfcG9saWN5IiwidmlkIiwicmFuZG9tVmlkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiY3VyclZpZCIsInR2IiwiJCIsImh0bWwiLCJ3aW5kb3ciLCJvbllvdVR1YmVQbGF5ZXJBUElSZWFkeSIsIllUIiwiUGxheWVyIiwiZXZlbnRzIiwib25QbGF5ZXJSZWFkeSIsIm9uUGxheWVyU3RhdGVDaGFuZ2UiLCJwbGF5ZXJWYXJzIiwibG9hZFZpZGVvQnlJZCIsIm11dGUiLCJlIiwiZGF0YSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJzZWVrVG8iLCJzdGFydFNlY29uZHMiLCJ2aWRSZXNjYWxlIiwidyIsIndpZHRoIiwiaCIsImhlaWdodCIsInNldFNpemUiLCJjc3MiLCJvdXRlcldpZHRoIiwib24iLCJ0b2dnbGVDbGFzcyIsImhhc0NsYXNzIiwidW5NdXRlIiwicGF1c2VWaWRlbyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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RUFBQyxRQUFRLEtBQVQsRUFBckI7QUFDRCxHQUhELE1BR087QUFDTHpCLE9BQUd3QixPQUFILENBQVdGLElBQUUsQ0FBRixHQUFJLEVBQWYsRUFBbUJBLENBQW5CO0FBQ0FyQixNQUFFLGFBQUYsRUFBaUJ3QixHQUFqQixDQUFxQixFQUFDLFFBQVEsRUFBRXhCLEVBQUUsYUFBRixFQUFpQnlCLFVBQWpCLEtBQThCTixDQUFoQyxJQUFtQyxDQUE1QyxFQUFyQjtBQUNEO0FBQ0Y7O0FBRURuQixFQUFFRSxNQUFGLEVBQVV3QixFQUFWLENBQWEsYUFBYixFQUE0QixZQUFVO0FBQ3BDUjtBQUNELENBRkQ7O0FBSUFsQixFQUFFLHdCQUFGLEVBQTRCMEIsRUFBNUIsQ0FBK0IsT0FBL0IsRUFBd0MsWUFBVTtBQUNoRDFCLElBQUUsS0FBRixFQUFTMkIsV0FBVCxDQUFxQixNQUFyQjtBQUNBM0IsSUFBRSxzQkFBRixFQUEwQjJCLFdBQTFCLENBQXNDLFFBQXRDO0FBQ0EsTUFBRzNCLEVBQUUsS0FBRixFQUFTNEIsUUFBVCxDQUFrQixNQUFsQixDQUFILEVBQTZCO0FBQzNCN0IsT0FBR1ksSUFBSDtBQUNELEdBRkQsTUFFTztBQUNMWixPQUFHOEIsTUFBSDtBQUNEO0FBQ0YsQ0FSRDs7QUFVQTdCLEVBQUUsdUJBQUYsRUFBMkIwQixFQUEzQixDQUE4QixPQUE5QixFQUF1QyxZQUFVO0FBQy9DMUIsSUFBRSx1QkFBRixFQUEyQkMsSUFBM0IsQ0FBZ0MsR0FBaEM7QUFDQUYsS0FBRytCLFVBQUg7QUFDRCxDQUhELEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Fzc2V0cy9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc291cmNlL2Fzc2V0cy9qcy9hcHAuanNcIik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMzQxMjEwMmI0YmIwNzg2NzE4MDAiLCJjb25zdCB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxudGFnLnNyYyA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9wbGF5ZXJfYXBpJztcblxuY29uc3QgZmlyc3RTY3JpcHRUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG5maXJzdFNjcmlwdFRhZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YWcsIGZpcnN0U2NyaXB0VGFnKTtcblxuY29uc3QgcGxheWVyRGVmYXVsdHMgPSB7YXV0b3BsYXk6IDAsIGF1dG9oaWRlOiAxLCBtb2Rlc3RicmFuZGluZzogMCwgcmVsOiAwLCBzaG93aW5mbzogMCwgY29udHJvbHM6IDAsIGRpc2FibGVrYjogMSwgZW5hYmxlanNhcGk6IDAsIGl2X2xvYWRfcG9saWN5OiAzfTtcblxuY29uc3QgdmlkID0gW1xuICAgICAgICAgICAgeyd2aWRlb0lkJzogJ2tTVndEN1M1VkdrJywgJ3N0YXJ0U2Vjb25kcyc6IDAsICdlbmRTZWNvbmRzJzogMyAqIDM2MDAsICdzdWdnZXN0ZWRRdWFsaXR5JzogJ2hkNzIwJ30sXG4gICAgICAgIF07XG5cbmNvbnN0IHJhbmRvbVZpZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZpZC5sZW5ndGgpO1xubGV0IGN1cnJWaWQgPSByYW5kb21WaWQ7XG5cbmxldCB0djtcblxuJCgnLmhpIGVtOmxhc3Qtb2YtdHlwZScpLmh0bWwodmlkLmxlbmd0aCk7XG5cbndpbmRvdy5vbllvdVR1YmVQbGF5ZXJBUElSZWFkeSA9IGZ1bmN0aW9uICgpe1xuICB0diA9IG5ldyBZVC5QbGF5ZXIoJ3R2Jywge2V2ZW50czogeydvblJlYWR5Jzogb25QbGF5ZXJSZWFkeSwgJ29uU3RhdGVDaGFuZ2UnOiBvblBsYXllclN0YXRlQ2hhbmdlfSwgcGxheWVyVmFyczogcGxheWVyRGVmYXVsdHN9KTtcbn1cblxuZnVuY3Rpb24gb25QbGF5ZXJSZWFkeSgpe1xuICB0di5sb2FkVmlkZW9CeUlkKHZpZFtjdXJyVmlkXSk7XG4gIHR2Lm11dGUoKTtcbn1cblxuZnVuY3Rpb24gb25QbGF5ZXJTdGF0ZUNoYW5nZShlKSB7XG4gIGlmIChlLmRhdGEgPT09IDEpe1xuICAgICQoJyN0dicpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAkKCcuaGkgZW06bnRoLW9mLXR5cGUoMiknKS5odG1sKGN1cnJWaWQgKyAxKTtcbiAgfSBlbHNlIGlmIChlLmRhdGEgPT09IDIpe1xuICAgICQoJyN0dicpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICBpZihjdXJyVmlkID09PSB2aWQubGVuZ3RoIC0gMSl7XG4gICAgICBjdXJyVmlkID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VyclZpZCsrOyAgXG4gICAgfVxuICAgIHR2LmxvYWRWaWRlb0J5SWQodmlkW2N1cnJWaWRdKTtcbiAgICB0di5zZWVrVG8odmlkW2N1cnJWaWRdLnN0YXJ0U2Vjb25kcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmlkUmVzY2FsZSgpe1xuXG4gIHZhciB3ID0gJCh3aW5kb3cpLndpZHRoKCkrMjAwLFxuICAgIGggPSAkKHdpbmRvdykuaGVpZ2h0KCkrMjAwO1xuXG4gIGlmICh3L2ggPiAxNi85KXtcbiAgICB0di5zZXRTaXplKHcsIHcvMTYqOSk7XG4gICAgJCgnLnR2IC5zY3JlZW4nKS5jc3MoeydsZWZ0JzogJzBweCd9KTtcbiAgfSBlbHNlIHtcbiAgICB0di5zZXRTaXplKGgvOSoxNiwgaCk7XG4gICAgJCgnLnR2IC5zY3JlZW4nKS5jc3MoeydsZWZ0JzogLSgkKCcudHYgLnNjcmVlbicpLm91dGVyV2lkdGgoKS13KS8yfSk7XG4gIH1cbn1cblxuJCh3aW5kb3cpLm9uKCdsb2FkIHJlc2l6ZScsIGZ1bmN0aW9uKCl7XG4gIHZpZFJlc2NhbGUoKTtcbn0pO1xuXG4kKCcuaGkgc3BhbjpmaXJzdC1vZi10eXBlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgJCgnI3R2JykudG9nZ2xlQ2xhc3MoJ211dGUnKTtcbiAgJCgnLmhpIGVtOmZpcnN0LW9mLXR5cGUnKS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XG4gIGlmKCQoJyN0dicpLmhhc0NsYXNzKCdtdXRlJykpe1xuICAgIHR2Lm11dGUoKTtcbiAgfSBlbHNlIHtcbiAgICB0di51bk11dGUoKTtcbiAgfVxufSk7XG5cbiQoJy5oaSBzcGFuOmxhc3Qtb2YtdHlwZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICQoJy5oaSBlbTpudGgtb2YtdHlwZSgyKScpLmh0bWwoJ34nKTtcbiAgdHYucGF1c2VWaWRlbygpO1xufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zb3VyY2UvYXNzZXRzL2pzL2FwcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=