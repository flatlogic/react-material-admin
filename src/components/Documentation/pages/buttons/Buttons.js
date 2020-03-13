import React from 'react'
import { Box, Grid } from '@material-ui/core'
import { withRouter } from 'react-router-dom'

//components
import Widget from '../../../Widget'
import { Typography, Button } from '../../../Wrappers'
import Code from '../../../Code'

const Pages = props => {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Widget disableWidgetMenu>
                        <Typography variant={'h6'}>Buttons</Typography>
                        <Typography style={{ marginBottom: 16 }}>
                            Button's variants:
                        </Typography>
                        <Button
                            variant={'contained'}
                            style={{ marginRight: 8 }}
                        >
                            contained
                        </Button>
                        <Button variant={'outlined'} style={{ marginRight: 8 }}>
                            outlined
                        </Button>
                        <Button>text</Button>
                        <Typography style={{ marginBottom: 16, marginTop: 16 }}>
                            Code:
                        </Typography>
                        <Code row inline>
                            {`
<Button variant={"contained"}>contained</Button>
<Button variant={"outlined"}>outlined</Button>
<Button>text</Button>
                            `}
                        </Code>
                        <Typography style={{ marginBottom: 16 }}>
                            Button's colors:
                        </Typography>
                        <Box display={'flex'} flexWrap="wrap">
                            <Box mt={1} mr={1}>
                                <Button variant="contained">default</Button>
                            </Box>
                            <Box mt={1} mr={1}>
                                <Button color="primary" variant="contained">
                                    primary
                                </Button>
                            </Box>
                            <Box mt={1} mr={1}>
                                <Button color="secondary" variant="contained">
                                    secondary
                                </Button>
                            </Box>
                            <Box mt={1} mr={1}>
                                <Button color="warning" variant="contained">
                                    warning
                                </Button>
                            </Box>
                            <Box mt={1} mr={1}>
                                <Button color="success" variant="contained">
                                    success
                                </Button>
                            </Box>
                            <Box mt={1} mr={1}>
                                <Button variant="contained" color="info">
                                    info
                                </Button>
                            </Box>
                        </Box>
                        <Typography style={{ marginBottom: 16, marginTop: 16 }}>
                            Code:
                        </Typography>
                        <Code row inline>
                            {`
<Button variant="contained">default</Button>
<Button
  color="primary"
  variant="contained"
>
  primary
</Button>
<Button
  color="secondary"
  variant="contained"
>
  secondary
</Button>
<Button
  color="warning"
  variant="contained"
>
  warning
</Button>
<Button
  color="success"
  variant="contained"
>
  success
</Button>
<Button variant="contained" color="info">
  info
</Button>
                            `}
                        </Code>
                    </Widget>
                </Grid>
            </Grid>
        </>
    )
}

export default withRouter(Pages)
