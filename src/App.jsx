import { useSelector } from 'react-redux';

const App = () => {
	const counter = useSelector((state) => state);
	console.log(counter);

	return <div>app</div>;
};

export default App;