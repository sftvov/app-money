import logo from './logo.svg';
import './App.css';
import CeilName from './components/ceilName';
import CeilPlus from './components/ceilPlus';
import CeilPlan from './components/ceilPlan';
import CeilNeeded from './components/ceilNeeded';
import CeilWasted from './components/ceilWasted';
import CeilTotalWasted from './components/ceilTotalWasted';
import CeilTotalNeeded from './components/ceilTotalNeeded';
import Buttons from './components/buttons';

function App() {
	return (
		<div className="wrapper">
			<header className="header"></header>
			<main id="page" className="page">
				<section className="table _container">
					<CeilName />
					<CeilPlus />
					<CeilPlan />
					<CeilNeeded />
					<CeilName />
					<CeilPlus />
					<CeilName />
					<CeilWasted />
					<Buttons />
					<CeilTotalWasted />
					<CeilTotalNeeded />
				</section>
			</main>
			<footer className="footer"></footer>
		</div>
	);
}

export default App;
