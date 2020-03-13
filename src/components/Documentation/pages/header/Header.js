import React from 'react'
import { Grid } from '@material-ui/core'
import { withRouter } from 'react-router-dom'

//components
import Widget from '../../../Widget'
import { Typography } from '../../../Wrappers'
import Code from '../../../Code'

const Pages = props => {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Widget disableWidgetMenu>
                        <Typography variant={'h6'}>Header</Typography>
                        <Typography style={{ marginBottom: 16 }}>
                            Header is the wrapper of native Material UI <Code inline>AppBar</Code> component. That contains <Code inline>Menu List, Search, Notifications dropdown</Code>. It's also responsive.
                        </Typography>
                        <Typography style={{marginBottom: 16}}>
                            You can easly try it:
                        </Typography>
                        <Code inline row>
                            {`<Header history="props.history">`}
                        </Code>
                        <Typography style={{marginTop: 16}}>
                            <Code inline>
                                history
                            </Code>
                            prop contains <Code inline>withRouter</Code> wrapper <Code inline>history</Code> prop, that shows the history of your website visiting.
                        </Typography>
                    </Widget>
                </Grid>
            </Grid>
        </>
    )
}

export default withRouter(Pages)
