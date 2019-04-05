import { compose, withState } from 'recompose';

import WidgetView from './WidgetView';

export default compose(
  withState('moreButtonRef', 'setMoreButtonRef', null),
  withState('isMoreMenuOpen', 'setMoreMenuOpen', false),
)(WidgetView);