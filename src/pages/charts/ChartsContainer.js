import { compose, withState, withHandlers } from "recompose";

import ChartsView from "./ChartsView";

export default compose(
  withState("activeIndex", "setActiveIndexId", 0),
  withHandlers({
      changeActiveIndexId: props => (event, id) => {
      props.setActiveIndexId(id);
    }
  })
)(ChartsView);
