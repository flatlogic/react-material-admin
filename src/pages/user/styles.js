import { makeStyles } from '@material-ui/styles'

export default makeStyles(theme => ({
    icon: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        '& .MuiSvgIcon-root': {
            marginRight: 5,
        },
    },
    stepCompleted: {
        color: 'green'
    }
}))
