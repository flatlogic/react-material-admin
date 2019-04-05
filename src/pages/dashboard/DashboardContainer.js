import { compose, withState } from "recompose";

import DashboardView from "./Dashboard";

export default compose(
  withState("mainChartState", "setMainChartState", "monthly")
)(DashboardView);
