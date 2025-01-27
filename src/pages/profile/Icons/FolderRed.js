import React from 'react';
import { withStyles } from '@mui/styles';
import FolderRedLight from '../../../images/profile/FolderRedLight.svg';

const styles = (theme) => ({
    root: {
        position: 'relative',
        marginRight: 20,
        backgroundImage: `url(${FolderRedLight})`,
        backgroundSize: 'cover',
        height: 115,
        width: 153,
    },
    folderContent: {
        position: 'absolute',
        bottom: 6,
        left: 12,
        color: '#fff',
    },
    folderTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    folderValue: {
        fontSize: 13,
        fontWeight: 500,
    },
    folderLabel: {
        fontSize: 10,
        fontWeight: 500,
    },
    parag: {
        margin: 0
    }
})

const Forlder = ({ classes, color, title, value, label }) => {
    return (
        <div className={classes.root}>
            <div className={classes.folderContent}>
                <span className={classes.folderTitle}>{title}</span>
                <p className={classes.parag}>
                    <span className={classes.folderValue}>{value}</span>{' '}
                    <span className={classes.folderLabel}>{label}</span>
                </p>
            </div>
        </div>
    )
}

export default withStyles(styles)(Forlder);