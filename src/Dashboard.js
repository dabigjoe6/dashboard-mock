import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import Outstanding from './Outstanding.js';
import LoanStatus from './LoanStatus.js';
import LoanPayOff from './LoanPayOff.js';
import PendingLoans from './PendingLoans.js';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
      </Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	toolbar: {
		paddingRight: 24, // keep right padding when drawer closed
	},
	toolbarIcon: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},
	appBar: {
		backgroundColor: 'white',
		zIndex: theme.zIndex.drawer - 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	menuButtonHidden: {
		display: 'none',
	},
	title: {
		flexGrow: 1,
	},
	brandName: {
		color: 'red',
		fontSize: 30,
		fontWeight: 'initial'

	},
	drawerPaper: {
		color: 'white',
		backgroundColor: '#63666a',
		minWidth: 300,
		paddingLeft: 10,
		paddingRight: 10,
		position: 'relative',
		whiteSpace: 'nowrap',
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerPaperClose: {
		overflowX: 'hidden',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		width: theme.spacing(7),
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9),
		},
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: '100vh',
		overflow: 'auto',
	},
	container: {
		paddingTop: theme.spacing(6),
		paddingBottom: theme.spacing(4),
	},
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
	},
	fixedHeight: {
		height: 240,
	},
}));

export default function Dashboard() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(true);
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
				<Toolbar className={classes.toolbar}>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
					>
						<MenuIcon />
					</IconButton>
					<div className={classes.title} />
					<Typography component="h1" variant="h6" color="inherit" noWrap className={classes.brandName}>
						Converge
          </Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				classes={{
					paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
				}}
				open={open}
			>
				<div className={classes.toolbarIcon}>
					<ListItem button>
						<ListItemIcon>
							<DashboardIcon style={{ color: 'white',  }} />
						</ListItemIcon>
						<ListItemText primary="Dashboard" />
					</ListItem>

				</div>
				<Divider  style={{ backgroundColor: 'white', }} />
				<List >{mainListItems}</List>
				<List >{secondaryListItems}</List>
			</Drawer>
			<main className={classes.content}>
				<div className={classes.appBarSpacer} />
				<Container maxWidth="lg" className={classes.container}>
					<Grid container spacing={3}>
						<Grid container xs={8} spacing={4}>
							<Grid xs={8} item>
								<Paper className={classes.paper} style={{ height: '100%' }}>
									<Outstanding />
								</Paper>
							</Grid>
							<Grid xs={4} container spacing={3} >
								<Grid xs={12} item>
									<Paper style={{ padding: 10 }}>
										<LoanStatus />
									</Paper>
								</Grid>
								<Grid xs={12} item>
									<Paper style={{ padding: 10 }}>
										<LoanPayOff />
									</Paper>
								</Grid>
							</Grid>
							<Grid xs={12} item>
								<Paper className={classes.paper}>
									<PendingLoans />
								</Paper>
							</Grid>

							{/* <Grid item xs={12} md={4} lg={3}>
								<Paper className={fixedHeightPaper}>
									<Deposits />
								</Paper>
							</Grid>
							<Grid item xs={12}>
								<Paper className={classes.paper}>
									<Orders />
								</Paper>
							</Grid> */}
						</Grid>
						<Grid item xs={4} style={{  }}>
							<div style={{ display: 'flex', flex: 1, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#F6F4FF' }} >
								<div style={{ flex: 1, backgroundColor: 'red' }}>
									<img src="https://via.placeholder.com/600x600" style={{ width: '100%', height: '100%'}} />
								</div>
								<div style={{ display: 'flex', flex: 1, paddingTop: 20, paddingRight: 10, paddingLeft: 10 }}>
									<Paper style={{ padding: 10 }}>
										<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 15 }}>
											<p style={{ margin: 0, fontSize: 8 }}>NOTIFICATIONS</p>
											<p style={{ margin: 0, fontSize: 8, color: '#FDBD4C' }}>Mark all as read</p>
										</div>
										<div style={{ marginBottom: 10, display: 'flex', width: '100%', backgroundColor: '#F6F4FF', alignItems: 'center', padding: 10, borderRadius: 10 }}>
											<CheckCircleIcon />
											<div>
												<p style={{ margin: 0, fontSize: 8 }}>Your personal loan payoff of N2,000,000 has been approved by HR</p>
												<p style={{ margin: 0, fontSize: 8 }}>a day ago</p>
											</div>
										</div>
										<div style={{ marginBottom: 10, display: 'flex', width: '100%', backgroundColor: '#F6F4FF', alignItems: 'center', padding: 10, borderRadius: 10 }}>
											<CancelIcon />
											<div>
												<p style={{ margin: 0, fontSize: 8 }}>Your personal loan payoff of N2,000,000 has been approved by HR</p>
												<p style={{ margin: 0, fontSize: 8 }}>a day ago</p>
											</div>
										</div>
										<div style={{ marginBottom: 10, display: 'flex', width: '100%', alignItems: 'center', padding: 10, }}>
											<CancelIcon />
											<div>
												<p style={{ margin: 0, fontSize: 8 }}>Your next loan repayment is two weeks away</p>
												<p style={{ margin: 0, fontSize: 8 }}>a week ago</p>
											</div>
										</div>
										<div style={{ marginBottom: 10, display: 'flex', width: '100%', alignItems: 'center', padding: 10, }}>
											<CancelIcon />
											<div>
												<p style={{ margin: 0, fontSize: 8 }}>Your next loan repayment is two weeks away</p>
												<p style={{ margin: 0, fontSize: 8 }}>a week ago</p>
											</div>
										</div>
									</Paper>
								</div>
							</div>
						</Grid>
					</Grid>
				</Container>
				<Copyright />
			</main>
		</div>
	);
}