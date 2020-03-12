import React from 'react'
import { Grid, Box } from '@material-ui/core'
import Widget from '../../components/Widget'
import { Button } from '../../components/Wrappers'

// Icons
import { Add as AddIcon, GetApp as DownloadIcon } from '@material-ui/icons'

const UserList = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Widget>
                    <Box
                        justifyContent={'space-between'}
                        display={'flex'}
                        alignItems={'flex-start'}
                    >
                        <Button variant={'contained'} color={'success'}>
                            <Box mr={1} display={"flex"}>
                                <AddIcon />
                            </Box>
                            Add
                        </Button>
                        <Button variant={"outlined"} color={"secondary"}><Box display={"flex"} mr={1}>
                            <DownloadIcon/>
                        </Box>Download</Button>
                    </Box>
                </Widget>
            </Grid>
        </Grid>
    )
}

export default UserList
