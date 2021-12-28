import logo from './logo.svg';
import './App.css';
import CeilName from './components/ceils/ceilName';
import CeilPlus from './components/ceils/ceilPlus';
import CeilPlan from './components/ceils/ceilPlan';
import CeilNeeded from './components/ceils/ceilNeeded';
import CeilWasted from './components/ceils/ceilWasted';
import CeilTotalWasted from './components/ceils/ceilTotalWasted';
import CeilTotalNeeded from './components/ceils/ceilTotalNeeded';
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
