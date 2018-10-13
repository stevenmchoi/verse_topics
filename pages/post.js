// import {withRouter} from 'next/router';
import Layout from '../components/MyLayout';
import fetch from 'isomorphic-unfetch';

// const PostPage = withRouter((props) => (
// 	<Layout>
// 		<h1>{props.router.query.title}</h1>
// 		<p>This is the blog post content.</p>
// 	</Layout>
// ));

// export default PostPage;

const Post = (props) => (
	<Layout>
		<h1>{props.show.name}</h1>
		<p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
		<img src={props.show.image.medium} />
	</Layout>
);

Post.getInitialProps = async function(context) {
	const {id} = context.query;
	const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
	const show = await res.json();

	console.log(`Fetched show: ${show.name}`);

	return {show};
};

export default Post;
