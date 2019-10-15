
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Title from './Title';
import StepBar from './StepBar.js'./StepBar.js/index.js
import Divider from '@material-ui/core/Divider';
import CancelIcon from '@material-ui/icons/Cancel';



const useStyles = makeStyles(theme => ({
	seeMore: {
		marginTop: theme.spacing(3),
	},
}));

export default function Orders() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Title style={{ marginBottom: 5 }}>PENDING APPROVAL LOANS</Title>
			<div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
				<div style={{ flex: 3, display: 'flex', flexDirection: 'column', borderWidth: 1, borderColor: '#00000020', borderStyle: 'solid', borderRadius: 5, lineHeight: 1.2, paddingTop: 10, paddingBottom: 10, paddingRight: 5, paddingLeft: 5 }}>
					<p style={{ margin: 0, fontSize: 12, fontWeight: 'lighter', letterSpacing: 1 }}>Personal Loan: N200,000</p>
					<p style={{ margin: 0, fontSize: 9, fontWeight: 'lighter', }}>Tenure Jul, 2018 - Jun, 2020</p>
					<p style={{ margin: 0, fontSize: 9, fontWeight: 'lighter', color: 'red', letterSpacing: 2 }}>Awaiting Approval: CFO</p>
				</div>
				<div style={{ flex: 7, display: 'flex', borderWidth: 1, borderColor: '#00000020', borderStyle: 'solid', paddingTop: 16, paddingBottom: 28, paddingRight: 30, paddingLeft: 30, borderRadius: 5 }}>
					<StepBar />
				</div>
				<div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
					<CancelIcon style={{ color: 'red' }} />
				</div>
			</div>
			<div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
				<div style={{ flex: 3, display: 'flex', flexDirection: 'column', borderWidth: 1, borderColor: '#00000020', borderStyle: 'solid', borderRadius: 5, lineHeight: 1.2, paddingTop: 10, paddingBottom: 10, paddingRight: 5, paddingLeft: 5 }}>
					<p style={{ margin: 0, fontSize: 12, fontWeight: 'lighter', letterSpacing: 1 }}>Car Loan: N200,000</p>
					<p style={{ margin: 0, fontSize: 9, fontWeight: 'lighter', }}>Tenure Jul, 2018 - Jun, 2020</p>
					<p style={{ margin: 0, fontSize: 9, fontWeight: 'lighter', color: 'red', letterSpacing: 2 }}>Awaiting Approval: CFO</p>
				</div>
				<div style={{ flex: 7, display: 'flex', borderWidth: 1, borderColor: '#00000020', borderStyle: 'solid', paddingTop: 16, paddingBottom: 28, paddingRight: 30, paddingLeft: 30, borderRadius: 5 }}>
					<StepBar />
				</div>
				<div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
					<CancelIcon style={{ color: 'red' }} />
				</div>
			</div>
			<div className={classes.seeMore} style={{ display: 'flex', justifyContent: 'flex-end', width: '100%'}}>
				<Link color="primary" href="javascript:;" style={{ color: 'grey', fontSize: 11 }}>
					View more
        </Link>
			</div>
		</React.Fragment>
	);
}