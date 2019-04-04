import { compose, withState, withHandlers } from "recompose";

import IconsView from "./IconsView";

export default compose(
  withState("activeTabId", "setActiveTabId", 0),
  withHandlers({
    changeActiveTabId: props => (event, id) => {
      props.setActiveTabId(id);
    }
  })
)(IconsView);
