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
    className: "jsx-562581666"
  }, "My Blog"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-562581666"
  }, getPosts().map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PostLink, {
      key: post.id,
      post: post
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "562581666",
    css: "h1.jsx-562581666,ul.jsx-562581666,ul.jsx-562581666 li.jsx-562581666,ul.jsx-562581666 li.jsx-562581666 a.jsx-562581666,ul.jsx-562581666 li.jsx-562581666 a.post-link.jsx-562581666{font-family:'Arial';}ul.jsx-562581666,ul.jsx-562581666 li.jsx-562581666{padding:0;}ul.jsx-562581666,ul.jsx-562581666 li.jsx-562581666,ul.jsx-562581666 li.jsx-562581666 a.jsx-562581666{list-style:none;margin:5px 0;}ul.jsx-562581666 li.jsx-562581666,ul.jsx-562581666 li.jsx-562581666 a.jsx-562581666,ul.jsx-562581666 li.jsx-562581666 a.post-link.jsx-562581666{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-562581666:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zdGV2ZW5jaG9pL0RvY3VtZW50cy9wZXJzb25hbF9wcm9qZWN0cy9fcHJhY3RpY2UvdmVyc2VfdG9waWNzL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZFYyxBQU95QixBQUtWLEFBTU0sQUFPSyxBQUtULFVBakJiLEVBa0JBLElBWmMsSUFYZCxTQVlBLHFCQU1ZLFdBQ1oiLCJmaWxlIjoiL1VzZXJzL3N0ZXZlbmNob2kvRG9jdW1lbnRzL3BlcnNvbmFsX3Byb2plY3RzL19wcmFjdGljZS92ZXJzZV90b3BpY3MvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnO1xuXG4vLyBjb25zdCBQb3N0TGluayA9IChwcm9wcykgPT4gKFxuLy8gXHQ8bGk+XG4vLyBcdFx0PExpbmsgYXM9e2AvcC8ke3Byb3BzLmlkfWB9IGhyZWY9e2AvcG9zdD90aXRsZT0ke3Byb3BzLnRpdGxlfWB9PlxuLy8gXHRcdFx0PGE+e3Byb3BzLnRpdGxlfTwvYT5cbi8vIFx0XHQ8L0xpbms+XG4vLyBcdDwvbGk+XG4vLyApO1xuXG4vLyBjb25zdCBJbmRleCA9ICgpID0+IChcbi8vIFx0PExheW91dD5cbi8vIFx0XHQ8aDE+TXkgQmxvZzwvaDE+XG4vLyBcdFx0PHVsPlxuLy8gXHRcdFx0PFBvc3RMaW5rIGlkPVwiaGVsbG8tbmV4dGpzXCIgdGl0bGU9XCJIZWxsbyBOZXh0LmpzXCIgLz5cbi8vIFx0XHRcdDxQb3N0TGluayBpZD1cImxlYXJuLW5leHRqc1wiIHRpdGxlPVwiTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lXCIgLz5cbi8vIFx0XHRcdDxQb3N0TGluayBpZD1cImRlcGxveS1uZXh0anNcIiB0aXRsZT1cIkRlcGxveSBhcHBzIHdpdGggWmVpdFwiIC8+XG4vLyBcdFx0PC91bD5cbi8vIFx0PC9MYXlvdXQ+XG4vLyApO1xuXG4vLyAvLyBOZXh0SlMgVHV0b3JpYWw6IEZldGNoaW5nIGRhdGFcbi8vIC8vIGh0dHBzOi8vbmV4dGpzLm9yZy9sZWFybi9iYXNpY3MvZmV0Y2hpbmctZGF0YS1mb3ItcGFnZXNcbi8vIGNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiAoXG4vLyBcdDxMYXlvdXQ+XG4vLyBcdFx0PGgxPkJhdG1hbiBUViBTaG93czwvaDE+XG4vLyBcdFx0PHVsPlxuLy8gXHRcdFx0e3Byb3BzLnNob3dzLm1hcCgoe3Nob3d9KSA9PiAoXG4vLyBcdFx0XHRcdDxsaSBrZXk9e3Nob3cuaWR9PlxuLy8gXHRcdFx0XHRcdDxMaW5rIGFzPXtgL3AvJHtzaG93LmlkfWB9IGhyZWY9e2AvcG9zdD9pZD0ke3Nob3cuaWR9YH0+XG4vLyBcdFx0XHRcdFx0XHQ8YT57c2hvdy5uYW1lfTwvYT5cbi8vIFx0XHRcdFx0XHQ8L0xpbms+XG4vLyBcdFx0XHRcdDwvbGk+XG4vLyBcdFx0XHQpKX1cbi8vIFx0XHQ8L3VsPlxuLy8gXHQ8L0xheW91dD5cbi8vICk7XG5cbi8vIEluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuLy8gXHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zZWFyY2gvc2hvd3M/cT1iYXRtYW4nKTtcbi8vIFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbi8vIFx0Y29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKTtcblxuLy8gXHRyZXR1cm4ge1xuLy8gXHRcdHNob3dzOiBkYXRhLFxuLy8gXHR9O1xuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG5cbmZ1bmN0aW9uIGdldFBvc3RzKCkge1xuXHRyZXR1cm4gW1xuXHRcdHtpZDogJ2hlbGxvLW5leHRqcycsIHRpdGxlOiAnSGVsbG8gTmV4dC5qcyd9LFxuXHRcdHtpZDogJ2xlYXJuLW5leHRqcycsIHRpdGxlOiAnTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lJ30sXG5cdFx0e2lkOiAnZGVwbG95LW5leHRqcycsIHRpdGxlOiAnRGVwbG95IGFwcHMgd2l0aCBaRUlUJ30sXG5cdF07XG59XG5cbmNvbnN0IFBvc3RMaW5rID0gKHtwb3N0fSkgPT4gKFxuXHQ8bGk+XG5cdFx0PExpbmsgYXM9e2AvcC8ke3Bvc3QuaWR9YH0gaHJlZj17YC9wb3N0P3RpdGxlPSR7cG9zdC50aXRsZX1gfT5cblx0XHRcdDxhIGNsYXNzTmFtZT1cInBvc3QtbGlua1wiPntwb3N0LnRpdGxlfTwvYT5cblx0XHQ8L0xpbms+XG5cdDwvbGk+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG5cdDxMYXlvdXQ+XG5cdFx0PGgxPk15IEJsb2c8L2gxPlxuXHRcdDx1bD5cblx0XHRcdHtnZXRQb3N0cygpLm1hcCgocG9zdCkgPT4gKFxuXHRcdFx0XHQ8UG9zdExpbmsga2V5PXtwb3N0LmlkfSBwb3N0PXtwb3N0fSAvPlxuXHRcdFx0KSl9XG5cdFx0PC91bD5cblx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRoMSxcblx0XHRcdHVsLFxuXHRcdFx0dWwgbGksXG5cdFx0XHR1bCBsaSBhLFxuXHRcdFx0dWwgbGkgYS5wb3N0LWxpbmsge1xuXHRcdFx0XHRmb250LWZhbWlseTogJ0FyaWFsJztcblx0XHRcdH1cblxuXHRcdFx0dWwsXG5cdFx0XHR1bCBsaSB7XG5cdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHR9XG5cblx0XHRcdHVsLFxuXHRcdFx0dWwgbGksXG5cdFx0XHR1bCBsaSBhIHtcblx0XHRcdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0XHRcdFx0bWFyZ2luOiA1cHggMDtcblx0XHRcdH1cblxuXHRcdFx0dWwgbGksXG5cdFx0XHR1bCBsaSBhLFxuXHRcdFx0dWwgbGkgYS5wb3N0LWxpbmsge1xuXHRcdFx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdFx0XHRcdGNvbG9yOiBibHVlO1xuXHRcdFx0fVxuXG5cdFx0XHRhOmhvdmVyIHtcblx0XHRcdFx0b3BhY2l0eTogMC42O1xuXHRcdFx0fVxuXHRcdGB9PC9zdHlsZT5cblx0PC9MYXlvdXQ+XG4pO1xuIl19 */\n/*@ sourceURL=/Users/stevenchoi/Documents/personal_projects/_practice/verse_topics/pages/index.js */"
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
//# sourceMappingURL=index.js.966ebf0299fe72a6c019.hot-update.js.map