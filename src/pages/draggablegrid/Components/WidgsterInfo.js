import React from 'react';
import { withStyles } from '@mui/styles';

import { Typography } from "../../../components/Wrappers";

const styles = (theme) => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
  },
})

const WidgsterInfo = ({ classes }) => {
  return (
    <Typography block={'div'}>
      <p>
          <strong>Widgster</strong> is a plugin that allows to easily implement basic widget functions that
          lots of our customers have requested. For now it has the following essential
          widget features:
      </p>
      <ul>
        <li><strong>Collapse/Expand</strong> - all widgets can be collapsed to fill only header&apos;s
            vertical
            space;
        </li>
        <li><strong>Close</strong> - closable. Any widget may be removed by clicking the close btn;</li>
        <li><strong>Full Screen</strong> - an option to make widget fill the whole window (just like OS);</li>
        <li><strong>Ajax Load</strong> - the hottest option allowing to load/reload widget content
            asynchronously. You just
            need to provide an url to fetch the data from. With loader delivered.
        </li>
      </ul>
      <p>It&apos;s available under MIT license, check out
          <a className={classes.link} href="https://github.com/flatlogic/widgster" target="_blank" rel="noopener noreferrer"> github </a>
          to find it.</p>
      <p>
          Test it out!
      </p>
    </Typography>
  )
}
export default withStyles(styles)(WidgsterInfo)