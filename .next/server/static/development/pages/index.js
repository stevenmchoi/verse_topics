module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/stevenchoi/Documents/personal_projects/_practice/verse_topics/components/Header.js";


var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "About")));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/MyLayout.js":
/*!********************************!*\
  !*** ./components/MyLayout.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
var _jsxFileName = "/Users/stevenchoi/Documents/personal_projects/_practice/verse_topics/components/MyLayout.js";


var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: layoutStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);




 // const PostLink = (props) => (
// 	<li>
// 		<Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
// 			<a>{props.title}</a>
// 		</Link>
// 	</li>
// );
// const Index = () => (
// 	<Layout>
// 		<h1>My Blog</h1>
// 		<ul>
// 			<PostLink id="hello-nextjs" title="Hello Next.js" />
// 			<PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
// 			<PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
// 		</ul>
// 	</Layout>
// );
// // NextJS Tutorial: Fetching data
// // https://nextjs.org/learn/basics/fetching-data-for-pages
// const Index = (props) => (
// 	<Layout>
// 		<h1>Batman TV Shows</h1>
// 		<ul>
// 			{props.shows.map(({show}) => (
// 				<li key={show.id}>
// 					<Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
// 						<a>{show.name}</a>
// 					</Link>
// 				</li>
// 			))}
// 		</ul>
// 	</Layout>
// );
// Index.getInitialProps = async function() {
// 	const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
// 	const data = await res.json();
// 	console.log(`Show data fetched. Count: ${data.length}`);
// 	return {
// 		shows: data,
// 	};
// };
// export default Index;

function getPosts() {
  return [{
    id: 'hello-nextjs',
    title: 'Hello Next.js'
  }, {
    id: 'learn-nextjs',
    title: 'Learn Next.js is awesome'
  }, {
    id: 'deploy-nextjs',
    title: 'Deploy apps with ZEIT'
  }];
}

var PostLink = function PostLink(_ref) {
  var post = _ref.post;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    as: "/p/".concat(post.id),
    href: "/post?title=".concat(post.title)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, post.title)));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2078968477"
  }, "My Blog"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-2078968477"
  }, getPosts().map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PostLink, {
      key: post.id,
      post: post
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2078968477",
    css: "h1.jsx-2078968477,a.jsx-2078968477{font-family:'Arial';}ul.jsx-2078968477{padding:0;}li.jsx-2078968477{list-style:none;margin:5px 0;}a.jsx-2078968477{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-2078968477:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZW5jaG9pL0RvY3VtZW50cy9wZXJzb25hbF9wcm9qZWN0cy9fcHJhY3RpY2UvdmVyc2VfdG9waWNzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZFYyxBQUl5QixBQUlWLEFBSU0sQUFLSyxBQUtULFVBYmIsRUFjQSxJQVZjLElBUmQsU0FTQSxxQkFJWSxXQUNaIiwiZmlsZSI6Ii9Vc2Vycy9zdGV2ZW5jaG9pL0RvY3VtZW50cy9wZXJzb25hbF9wcm9qZWN0cy9fcHJhY3RpY2UvdmVyc2VfdG9waWNzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcblxuLy8gY29uc3QgUG9zdExpbmsgPSAocHJvcHMpID0+IChcbi8vIFx0PGxpPlxuLy8gXHRcdDxMaW5rIGFzPXtgL3AvJHtwcm9wcy5pZH1gfSBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwcm9wcy50aXRsZX1gfT5cbi8vIFx0XHRcdDxhPntwcm9wcy50aXRsZX08L2E+XG4vLyBcdFx0PC9MaW5rPlxuLy8gXHQ8L2xpPlxuLy8gKTtcblxuLy8gY29uc3QgSW5kZXggPSAoKSA9PiAoXG4vLyBcdDxMYXlvdXQ+XG4vLyBcdFx0PGgxPk15IEJsb2c8L2gxPlxuLy8gXHRcdDx1bD5cbi8vIFx0XHRcdDxQb3N0TGluayBpZD1cImhlbGxvLW5leHRqc1wiIHRpdGxlPVwiSGVsbG8gTmV4dC5qc1wiIC8+XG4vLyBcdFx0XHQ8UG9zdExpbmsgaWQ9XCJsZWFybi1uZXh0anNcIiB0aXRsZT1cIkxlYXJuIE5leHQuanMgaXMgYXdlc29tZVwiIC8+XG4vLyBcdFx0XHQ8UG9zdExpbmsgaWQ9XCJkZXBsb3ktbmV4dGpzXCIgdGl0bGU9XCJEZXBsb3kgYXBwcyB3aXRoIFplaXRcIiAvPlxuLy8gXHRcdDwvdWw+XG4vLyBcdDwvTGF5b3V0PlxuLy8gKTtcblxuLy8gLy8gTmV4dEpTIFR1dG9yaWFsOiBGZXRjaGluZyBkYXRhXG4vLyAvLyBodHRwczovL25leHRqcy5vcmcvbGVhcm4vYmFzaWNzL2ZldGNoaW5nLWRhdGEtZm9yLXBhZ2VzXG4vLyBjb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxuLy8gXHQ8TGF5b3V0PlxuLy8gXHRcdDxoMT5CYXRtYW4gVFYgU2hvd3M8L2gxPlxuLy8gXHRcdDx1bD5cbi8vIFx0XHRcdHtwcm9wcy5zaG93cy5tYXAoKHtzaG93fSkgPT4gKFxuLy8gXHRcdFx0XHQ8bGkga2V5PXtzaG93LmlkfT5cbi8vIFx0XHRcdFx0XHQ8TGluayBhcz17YC9wLyR7c2hvdy5pZH1gfSBocmVmPXtgL3Bvc3Q/aWQ9JHtzaG93LmlkfWB9PlxuLy8gXHRcdFx0XHRcdFx0PGE+e3Nob3cubmFtZX08L2E+XG4vLyBcdFx0XHRcdFx0PC9MaW5rPlxuLy8gXHRcdFx0XHQ8L2xpPlxuLy8gXHRcdFx0KSl9XG4vLyBcdFx0PC91bD5cbi8vIFx0PC9MYXlvdXQ+XG4vLyApO1xuXG4vLyBJbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbi8vIFx0Y29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJyk7XG4vLyBcdGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4vLyBcdGNvbnNvbGUubG9nKGBTaG93IGRhdGEgZmV0Y2hlZC4gQ291bnQ6ICR7ZGF0YS5sZW5ndGh9YCk7XG5cbi8vIFx0cmV0dXJuIHtcbi8vIFx0XHRzaG93czogZGF0YSxcbi8vIFx0fTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IEluZGV4O1xuXG5mdW5jdGlvbiBnZXRQb3N0cygpIHtcblx0cmV0dXJuIFtcblx0XHR7aWQ6ICdoZWxsby1uZXh0anMnLCB0aXRsZTogJ0hlbGxvIE5leHQuanMnfSxcblx0XHR7aWQ6ICdsZWFybi1uZXh0anMnLCB0aXRsZTogJ0xlYXJuIE5leHQuanMgaXMgYXdlc29tZSd9LFxuXHRcdHtpZDogJ2RlcGxveS1uZXh0anMnLCB0aXRsZTogJ0RlcGxveSBhcHBzIHdpdGggWkVJVCd9LFxuXHRdO1xufVxuXG5jb25zdCBQb3N0TGluayA9ICh7cG9zdH0pID0+IChcblx0PGxpPlxuXHRcdDxMaW5rIGFzPXtgL3AvJHtwb3N0LmlkfWB9IGhyZWY9e2AvcG9zdD90aXRsZT0ke3Bvc3QudGl0bGV9YH0+XG5cdFx0XHQ8YT57cG9zdC50aXRsZX08L2E+XG5cdFx0PC9MaW5rPlxuXHQ8L2xpPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuXHQ8TGF5b3V0PlxuXHRcdDxoMT5NeSBCbG9nPC9oMT5cblx0XHQ8dWw+XG5cdFx0XHR7Z2V0UG9zdHMoKS5tYXAoKHBvc3QpID0+IChcblx0XHRcdFx0PFBvc3RMaW5rIGtleT17cG9zdC5pZH0gcG9zdD17cG9zdH0gLz5cblx0XHRcdCkpfVxuXHRcdDwvdWw+XG5cdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0aDEsXG5cdFx0XHRhIHtcblx0XHRcdFx0Zm9udC1mYW1pbHk6ICdBcmlhbCc7XG5cdFx0XHR9XG5cblx0XHRcdHVsIHtcblx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdH1cblxuXHRcdFx0bGkge1xuXHRcdFx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdFx0XHRtYXJnaW46IDVweCAwO1xuXHRcdFx0fVxuXG5cdFx0XHRhIHtcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRjb2xvcjogYmx1ZTtcblx0XHRcdH1cblxuXHRcdFx0YTpob3ZlciB7XG5cdFx0XHRcdG9wYWNpdHk6IDAuNjtcblx0XHRcdH1cblx0XHRgfTwvc3R5bGU+XG5cdDwvTGF5b3V0PlxuKTtcbiJdfQ== */\n/*@ sourceURL=/Users/stevenchoi/Documents/personal_projects/_practice/verse_topics/pages/index.js */"
  }));
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map