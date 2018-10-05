import Link from 'next/link';
// import main from '../assets/styles/main.css';

const Index = () => (
	<div>
		<Link href="/about">
			<div>About Page</div>
		</Link>
		<p>Hello Next.js</p>
	</div>
);

export default Index;
