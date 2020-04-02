import React from 'react'
import {
    Grid,
    Box,
    InputAdornment,
    TextField as Input,
} from '@material-ui/core'
import Widget from '../../components/Widget'
import { Button } from '../../components/Wrappers'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Toolbar from '@material-ui/core/Toolbar'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import Avatar from '@material-ui/core/Avatar'
import DeleteIcon from '@material-ui/icons/Delete'
import FilterListIcon from '@material-ui/icons/FilterList'
import { lighten, makeStyles } from '@material-ui/core/styles'

import profile from '../../images/profile.jpg'

import { Typography } from '../../components/Wrappers'
import Chip from '@material-ui/core/Chip'

// Icons
import {
    Add as AddIcon,
    GetApp as DownloadIcon,
    FilterList as FilterIcon,
    Search as SearchIcon,
    Create as CreateIcon,
    HelpOutline as HelpIcon,
} from '@material-ui/icons'

function createData(
    id,
    name,
    role,
    companyName,
    email,
    status,
    created,
    actions
) {
    return { id, name, role, companyName, email, status, created, actions }
}

const rows = [
    createData(
        0,
        'Ivan Grud',
        'Admin',
        'Flatlogic',
        'Ivan_flatlogic@gmail.com',
        'Active',
        '09-02-2020'
    ),
    createData(
        1,
        'Ivan Grud',
        'Admin',
        'Flatlogic',
        'Ivan_flatlogic@gmail.com',
        'Active',
        '09-02-2020'
    ),
    createData(
        2,
        'Ivan Grud',
        'Admin',
        'Flatlogic',
        'Ivan_flatlogic@gmail.com',
        'Active',
        '09-02-2020'
    ),
    createData(
        3,
        'Ivan Grud',
        'Admin',
        'Flatlogic',
        'Ivan_flatlogic@gmail.com',
        'Active',
        '09-02-2020'
    ),
    createData(
        4,
        'Ivan Grud',
        'Admin',
        'Flatlogic',
        'Ivan_flatlogic@gmail.com',
        'Active',
        '09-02-2020'
    ),
    createData(
        5,
        'Ivan Grud',
        'Admin',
        'Flatlogic',
        'Ivan_flatlogic@gmail.com',
        'Active',
        '09-02-2020'
    ),
    createData(
        6,
        'Ivan Grud',
        'Admin',
        'Flatlogic',
        'Ivan_flatlogic@gmail.com',
        'Active',
        '09-02-2020'
    ),
    createData(
        7,
        'Ivan Grud',
        'Admin',
        'Flatlogic',
        'Ivan_flatlogic@gmail.com',
        'Active',
        '09-02-2020'
    ),
    createData(
        8,
        'Ivan Grud',
        'Admin',
        'Flatlogic',
        'Ivan_flatlogic@gmail.com',
        'Active',
        '09-02-2020'
    ),
    createData(
        9,
        'Ivan Grud',
        'Admin',
        'Flatlogic',
        'Ivan_flatlogic@gmail.com',
        'Active',
        '09-02-2020'
    ),
]

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1
    }
    if (b[orderBy] > a[orderBy]) {
        return 1
    }
    return 0
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy)
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index])
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0])
        if (order !== 0) return order
        return a[1] - b[1]
    })
    return stabilizedThis.map(el => el[0])
}

const headCells = [
    { id: 'id', numeric: true, disablePadding: true, label: 'ID' },
    { id: 'name', numeric: true, disablePadding: false, label: 'NAME' },
    { id: 'role', numeric: true, disablePadding: false, label: 'ROLE' },
    {
        id: 'companyName',
        numeric: true,
        disablePadding: false,
        label: 'COMPANY NAME',
    },
    { id: 'email', numeric: true, disablePadding: false, label: 'EMAIL' },
    { id: 'status', numeric: true, disablePadding: false, label: 'STATUS' },
    {
        id: 'created',
        numeric: false,
        disablePadding: false,
        label: 'CREATED AT',
    },
    { id: 'actions', numeric: true, disablePadding: false, label: 'ACTIONS' },
]

function EnhancedTableHead(props) {
    const {
        classes,
        onSelectAllClick,
        order,
        orderBy,
        numSelected,
        rowCount,
        onRequestSort,
    } = props
    const createSortHandler = property => event => {
        onRequestSort(event, property)
    }

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={
                            numSelected > 0 && numSelected < rowCount
                        }
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'select all desserts' }}
                    />
                </TableCell>
                {headCells.map(headCell => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'left' : 'right'}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            <Typography
                                noWrap
                                weight={'medium'}
                                variant={'body2'}
                            >
                                {headCell.label}
                            </Typography>
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

const useToolbarStyles = makeStyles(theme => ({
    root: {
        paddingLeft: theme.spacing(2),
        paddingleft: theme.spacing(1),
    },
    highlight:
        theme.palette.type === 'light'
            ? {
                  color: theme.palette.secondary.main,
                  backgroundColor: lighten(theme.palette.secondary.light, 0.85),
              }
            : {
                  color: theme.palette.text.primary,
                  backgroundColor: theme.palette.secondary.dark,
              },
    title: {
        flex: '1 1 100%',
    },
}))

const EnhancedTableToolbar = props => {
    const classes = useToolbarStyles()
    const { numSelected } = props

    return (
        <Toolbar>
            <Typography color="inherit" variant="subtitle1">
                {numSelected} selected
            </Typography>

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton aria-label="filter list">
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    )
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}))

const UserList = () => {
    const [order, setOrder] = React.useState('asc')
    const [orderBy, setOrderBy] = React.useState('calories')
    const [selected, setSelected] = React.useState([])
    const [page, setPage] = React.useState(0)
    const [dense, setDense] = React.useState(false)
    const [rowsPerPage, setRowsPerPage] = React.useState(5)

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc'
        setOrder(isAsc ? 'desc' : 'asc')
        setOrderBy(property)
    }

    const handleSelectAllClick = event => {
        if (event.target.checked) {
            const newSelecteds = rows.map(n => n.name)
            setSelected(newSelecteds)
            return
        }
        setSelected([])
    }

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name)
        let newSelected = []

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name)
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1))
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1))
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            )
        }

        setSelected(newSelected)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    const handleChangeDense = event => {
        setDense(event.target.checked)
    }

    const isSelected = name => selected.indexOf(name) !== -1

    const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Widget inheritHeight>
                    <Box
                        justifyContent={'space-between'}
                        display={'flex'}
                        alignItems={'flex-start'}
                    >
                        <Box>
                            <Button variant={'contained'} color={'success'}>
                                <Box mr={1} display={'flex'}>
                                    <AddIcon />
                                </Box>
                                Add
                            </Button>
                            <Button
                                variant={'outlined'}
                                color={'primary'}
                                style={{ marginLeft: 16 }}
                            >
                                <FilterIcon />
                                Filters
                            </Button>
                        </Box>
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            alignItems={'flex-end'}
                        >
                            <Button variant={'outlined'} color={'secondary'}>
                                <Box display={'flex'} mr={1}>
                                    <DownloadIcon />
                                </Box>
                                Download
                            </Button>
                            <Input
                                id="search-field"
                                label="Search"
                                margin="dense"
                                variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Box>
                    </Box>
                </Widget>
            </Grid>
            <Grid item xs={12}>
                <Widget inheritHeight noBodyPadding>
                    <TableContainer>
                        <Table
                            aria-labelledby="tableTitle"
                            size={dense ? 'small' : 'medium'}
                            aria-label="enhanced table"
                        >
                            <EnhancedTableHead
                                numSelected={selected.length}
                                order={order}
                                orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={rows.length}
                            />
                            <TableBody>
                                {stableSort(rows, getComparator(order, orderBy))
                                    .slice(
                                        page * rowsPerPage,
                                        page * rowsPerPage + rowsPerPage
                                    )
                                    .map((row, index) => {
                                        const isItemSelected = isSelected(
                                            row.id
                                        )
                                        const labelId = `enhanced-table-checkbox-${index}`

                                        return (
                                            <TableRow
                                                hover
                                                onClick={event =>
                                                    handleClick(event, row.name)
                                                }
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={row.id}
                                                selected={isItemSelected}
                                            >
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        checked={isItemSelected}
                                                        inputProps={{
                                                            'aria-labelledby': labelId,
                                                        }}
                                                    />
                                                </TableCell>
                                                <TableCell
                                                    component="th"
                                                    id={labelId}
                                                    scope="row"
                                                    padding="none"
                                                >
                                                    <Typography
                                                        variant={'body2'}
                                                    >
                                                        {row.id}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell align="left">
                                                    <Box
                                                        display={'flex'}
                                                        alignItems={'center'}
                                                    >
                                                        <Avatar
                                                            alt={'name'}
                                                            src={profile}
                                                            style={{
                                                                marginRight: 15,
                                                            }}
                                                        />
                                                        <Typography
                                                            variant={'body2'}
                                                            noWrap
                                                        >
                                                            {row.name}
                                                        </Typography>
                                                    </Box>
                                                </TableCell>
                                                <TableCell align="left">
                                                    <Typography
                                                        variant={'body2'}
                                                    >
                                                        {row.role}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell align="left">
                                                    <Typography
                                                        variant={'body2'}
                                                    >
                                                        {row.companyName}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell align="left">
                                                    <Typography
                                                        variant={'body2'}
                                                    >
                                                        {row.email}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell align="left">
                                                    <Typography
                                                        variant={'body2'}
                                                    >
                                                        <Chip
                                                            color={'secondary'}
                                                            label={row.status}
                                                            style={{
                                                                color: '#fff',
                                                                height: 16,
                                                                fontSize: 11,
                                                                fontWeight:
                                                                    'bold',
                                                            }}
                                                        />
                                                    </Typography>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Typography
                                                        variant={'body2'}
                                                    >
                                                        {row.created}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell align="left">
                                                    <Box display={'flex'}>
                                                        <IconButton
                                                            color={'primary'}
                                                        >
                                                            <CreateIcon />
                                                        </IconButton>
                                                        <IconButton
                                                            color={'primary'}
                                                        >
                                                            <HelpIcon />
                                                        </IconButton>
                                                        <IconButton
                                                            color={'primary'}
                                                        >
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </Box>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })}
                                {emptyRows > 0 && (
                                    <TableRow
                                        style={{
                                            height:
                                                (dense ? 33 : 53) * emptyRows,
                                        }}
                                    >
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                </Widget>
            </Grid>
        </Grid>
    )
}

export default UserList
