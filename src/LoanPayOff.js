
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Title from './Title';
import Divider from '@material-ui/core/Divider';

import EventBusy from '@material-ui/icons/EventBusy';


const useStyles = makeStyles({
	depositContext: {
		flex: 1,
	},
});

export default function LoanPayOff() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<div style={{ height: 200, paddingLeft: 15, width: 270 }}>
				<div style={{ display: 'flex', width: '100%', }}>
					<div style={{ display: 'flex', flex: 1, }}>
						<Typography component="p" variant="h6" style={{ fontSize: 13, fontWeight: 'initial' }}>
							LOAN PAYOFF
					</Typography>
					</div>
					<div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
						<EventBusy fontSize="large" style={{ color: 'red' }} />
					</div>
				</div>
				<div style={{ display: 'flex' }}>
					<div style={{ flex: 1, display: 'flex' }}></div>
					<div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
						<p style={{ fontSize: 9 }}>STATUS</p>
					</div>
				</div>
				<div style={{ display: 'flex', }}>
					<div style={{ display: 'flex', flex: 1, flexDirection: 'column', }}>
						<p style={{ fontSize: 9, margin: 0 }}>Personal Loan</p>
						<div style={{ display: 'flex' }}>
							<p style={{ margin: 0, fontSize: 16, fontWeight: 'bold' }}>100,000.00</p>
							<p style={{ margin: 0, fontSize: 7 }}>NGN</p>
						</div>

					</div>
					<div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
						<p style={{ fontSize: 12 }}>FINCON</p>
					</div>
				</div>
				<Divider variant="middle" style={{ marginTop: 10, marginBottom: 10 }} />
				<div style={{ display: 'flex', }}>
					<div style={{ display: 'flex', flex: 1, flexDirection: 'column', }}>
						<p style={{ fontSize: 9, margin: 0 }}>Personal Loan</p>
						<div style={{ display: 'flex' }}>
							<p style={{ margin: 0, fontSize: 16, fontWeight: 'bold' }}>100,000.00</p>
							<p style={{ margin: 0, fontSize: 7 }}>NGN</p>
						</div>

					</div>
					<div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
						<p style={{ fontSize: 12 }}>HR</p>
					</div>
				</div>
				<div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
					<p style={{ fontSize: 9 }}>View more</p>
				</div>
			</div>
		</React.Fragment >
	);
}