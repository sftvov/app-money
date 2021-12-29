import CeilName from './ceils/ceilName';
import CeilPlus from './ceils/ceilPlus';
import CeilPlan from './ceils/ceilPlan';
import CeilNeeded from './ceils/ceilNeeded';
import CeilWasted from './ceils/ceilWasted';
import CeilTotalWasted from './ceils/ceilTotalWasted';
import CeilTotalNeeded from './ceils/ceilTotalNeeded';
import Buttons from './buttons/buttons';
import './tableMain.css';

function TableMain() {
	return (
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
	);
}
export default TableMain;
