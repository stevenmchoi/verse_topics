webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
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
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "post-link"
  }, post.title)));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1631495499"
  }, "My Blog"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-1631495499"
  }, getPosts().map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PostLink, {
      key: post.id,
      post: post
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1631495499",
    css: "h1.jsx-1631495499,ul.jsx-1631495499 li.jsx-1631495499 a.jsx-1631495499,ul.jsx-1631495499 li.jsx-1631495499 a.post-link.jsx-1631495499{font-family:'Arial';}ul.jsx-1631495499{padding:0;}ul.jsx-1631495499,ul.jsx-1631495499 li.jsx-1631495499{list-style:none;margin:5px 0;}a.jsx-1631495499,.post-link.jsx-1631495499{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-1631495499:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZW5jaG9pL0RvY3VtZW50cy9wZXJzb25hbF9wcm9qZWN0cy9fcHJhY3RpY2UvdmVyc2VfdG9waWNzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZFYyxBQUt5QixBQUlWLEFBS00sQUFNSyxBQUtULFVBZmIsRUFnQkEsSUFYYyxJQVRkLFNBVUEscUJBS1ksV0FDWiIsImZpbGUiOiIvVXNlcnMvc3RldmVuY2hvaS9Eb2N1bWVudHMvcGVyc29uYWxfcHJvamVjdHMvX3ByYWN0aWNlL3ZlcnNlX3RvcGljcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5cbi8vIGNvbnN0IFBvc3RMaW5rID0gKHByb3BzKSA9PiAoXG4vLyBcdDxsaT5cbi8vIFx0XHQ8TGluayBhcz17YC9wLyR7cHJvcHMuaWR9YH0gaHJlZj17YC9wb3N0P3RpdGxlPSR7cHJvcHMudGl0bGV9YH0+XG4vLyBcdFx0XHQ8YT57cHJvcHMudGl0bGV9PC9hPlxuLy8gXHRcdDwvTGluaz5cbi8vIFx0PC9saT5cbi8vICk7XG5cbi8vIGNvbnN0IEluZGV4ID0gKCkgPT4gKFxuLy8gXHQ8TGF5b3V0PlxuLy8gXHRcdDxoMT5NeSBCbG9nPC9oMT5cbi8vIFx0XHQ8dWw+XG4vLyBcdFx0XHQ8UG9zdExpbmsgaWQ9XCJoZWxsby1uZXh0anNcIiB0aXRsZT1cIkhlbGxvIE5leHQuanNcIiAvPlxuLy8gXHRcdFx0PFBvc3RMaW5rIGlkPVwibGVhcm4tbmV4dGpzXCIgdGl0bGU9XCJMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWVcIiAvPlxuLy8gXHRcdFx0PFBvc3RMaW5rIGlkPVwiZGVwbG95LW5leHRqc1wiIHRpdGxlPVwiRGVwbG95IGFwcHMgd2l0aCBaZWl0XCIgLz5cbi8vIFx0XHQ8L3VsPlxuLy8gXHQ8L0xheW91dD5cbi8vICk7XG5cbi8vIC8vIE5leHRKUyBUdXRvcmlhbDogRmV0Y2hpbmcgZGF0YVxuLy8gLy8gaHR0cHM6Ly9uZXh0anMub3JnL2xlYXJuL2Jhc2ljcy9mZXRjaGluZy1kYXRhLWZvci1wYWdlc1xuLy8gY29uc3QgSW5kZXggPSAocHJvcHMpID0+IChcbi8vIFx0PExheW91dD5cbi8vIFx0XHQ8aDE+QmF0bWFuIFRWIFNob3dzPC9oMT5cbi8vIFx0XHQ8dWw+XG4vLyBcdFx0XHR7cHJvcHMuc2hvd3MubWFwKCh7c2hvd30pID0+IChcbi8vIFx0XHRcdFx0PGxpIGtleT17c2hvdy5pZH0+XG4vLyBcdFx0XHRcdFx0PExpbmsgYXM9e2AvcC8ke3Nob3cuaWR9YH0gaHJlZj17YC9wb3N0P2lkPSR7c2hvdy5pZH1gfT5cbi8vIFx0XHRcdFx0XHRcdDxhPntzaG93Lm5hbWV9PC9hPlxuLy8gXHRcdFx0XHRcdDwvTGluaz5cbi8vIFx0XHRcdFx0PC9saT5cbi8vIFx0XHRcdCkpfVxuLy8gXHRcdDwvdWw+XG4vLyBcdDwvTGF5b3V0PlxuLy8gKTtcblxuLy8gSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4vLyBcdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpO1xuLy8gXHRjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuLy8gXHRjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApO1xuXG4vLyBcdHJldHVybiB7XG4vLyBcdFx0c2hvd3M6IGRhdGEsXG4vLyBcdH07XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBJbmRleDtcblxuZnVuY3Rpb24gZ2V0UG9zdHMoKSB7XG5cdHJldHVybiBbXG5cdFx0e2lkOiAnaGVsbG8tbmV4dGpzJywgdGl0bGU6ICdIZWxsbyBOZXh0LmpzJ30sXG5cdFx0e2lkOiAnbGVhcm4tbmV4dGpzJywgdGl0bGU6ICdMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWUnfSxcblx0XHR7aWQ6ICdkZXBsb3ktbmV4dGpzJywgdGl0bGU6ICdEZXBsb3kgYXBwcyB3aXRoIFpFSVQnfSxcblx0XTtcbn1cblxuY29uc3QgUG9zdExpbmsgPSAoe3Bvc3R9KSA9PiAoXG5cdDxsaT5cblx0XHQ8TGluayBhcz17YC9wLyR7cG9zdC5pZH1gfSBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwb3N0LnRpdGxlfWB9PlxuXHRcdFx0PGEgY2xhc3NOYW1lPVwicG9zdC1saW5rXCI+e3Bvc3QudGl0bGV9PC9hPlxuXHRcdDwvTGluaz5cblx0PC9saT5cbik7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcblx0PExheW91dD5cblx0XHQ8aDE+TXkgQmxvZzwvaDE+XG5cdFx0PHVsPlxuXHRcdFx0e2dldFBvc3RzKCkubWFwKChwb3N0KSA9PiAoXG5cdFx0XHRcdDxQb3N0TGluayBrZXk9e3Bvc3QuaWR9IHBvc3Q9e3Bvc3R9IC8+XG5cdFx0XHQpKX1cblx0XHQ8L3VsPlxuXHRcdDxzdHlsZSBqc3g+e2Bcblx0XHRcdGgxLFxuXHRcdFx0dWwgbGkgYSxcblx0XHRcdHVsIGxpIGEucG9zdC1saW5rIHtcblx0XHRcdFx0Zm9udC1mYW1pbHk6ICdBcmlhbCc7XG5cdFx0XHR9XG5cblx0XHRcdHVsIHtcblx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdH1cblxuXHRcdFx0dWwsXG5cdFx0XHR1bCBsaSB7XG5cdFx0XHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0XHRcdG1hcmdpbjogNXB4IDA7XG5cdFx0XHR9XG5cblx0XHRcdGEsXG5cdFx0XHQucG9zdC1saW5rIHtcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdFx0XHRjb2xvcjogYmx1ZTtcblx0XHRcdH1cblxuXHRcdFx0YTpob3ZlciB7XG5cdFx0XHRcdG9wYWNpdHk6IDAuNjtcblx0XHRcdH1cblx0XHRgfTwvc3R5bGU+XG5cdDwvTGF5b3V0PlxuKTtcbiJdfQ== */\n/*@ sourceURL=/Users/stevenchoi/Documents/personal_projects/_practice/verse_topics/pages/index.js */"
  }));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.94bd40c6af05a98ae741.hot-update.js.map