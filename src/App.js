import logo from './logo.svg';
import './App.css';
import TableMain from './components/tableMain/tableMain';

function App() {
	return (
		<div className="wrapper">
			<header className="header"></header>
			<main id="page" className="page">
				<TableMain />
			</main>
			<footer className="footer"></footer>
		</div>
	);
}

export default App;
