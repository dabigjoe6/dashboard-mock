
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Title from './Title';
import Divider from '@material-ui/core/Divider';

import EventAvailableIcon from '@material-ui/icons/EventAvailable';

const useStyles = makeStyles({
	depositContext: {
		flex: 1,
	},
});

export default function LoanStatus() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<div>
				<div style={{ display: 'flex', width: '100%', }}>
					<div style={{ display: 'flex', flex: 1, }}>
						<Typography component="p" variant="h6" style={{ fontSize: 13, fontWeight: 'initial' }}>
							LOAN STATUS
						</Typography>
					</div>
					<div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
						<EventAvailableIcon fontSize="large" color="#E6F2DE" />
					</div>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div style={{ flex: 1, display: 'flex' }}>
						<p style={{ fontSize: 9, margin: 0 }}>LOAN TYPE</p>
					</div>
					<div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
						<p style={{ fontSize: 9 }}>STATUS</p>
					</div>

				</div>
				<div style={{ display: 'flex', }}>
					<div style={{ display: 'flex', flex: 1, flexDirection: 'column', }}>
						<p style={{ fontSize: 9, margin: 0 }}>Rent</p>
						<div style={{ display: 'flex' }}>
							<p style={{ margin: 0, fontSize: 22, fontWeight: 'initial' }}>200,000.00</p>
							<p style={{ margin: 0, fontSize: 9 }}>NGN</p>
						</div>
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<p style={{ fontSize: 8, margin: 0 }}>Jul-2018</p>
							<p style={{ fontSize: 8, margin: 0 }}>Jun-2020</p>
						</div>
					</div>
					<div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
						<p style={{ fontSize: 10 }}>Finance</p>
					</div>
				</div>
				<Divider variant="middle" />
				<div style={{ display: 'flex', }}>
					<div style={{ display: 'flex', flex: 1, flexDirection: 'column', }}>
						<p style={{ fontSize: 9, margin: 0 }}>Personal Loan</p>
						<div style={{ display: 'flex' }}>
							<p style={{ margin: 0, fontSize: 22, fontWeight: 'initial' }}>250,000.00</p>
							<p style={{ margin: 0, fontSize: 9 }}>NGN</p>
						</div>
						<div style={{ display: 'flex', justifyContent: 'space-between' }}>
							<p style={{ fontSize: 8, margin: 0 }}>Jul-2018</p>
							<p style={{ fontSize: 8, margin: 0 }}>Jun-2020</p>
						</div>
					</div>
					<div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
						<p style={{ fontSize: 10 }}>Finance</p>
					</div>
				</div>
				<div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
					<p style={{ fontSize: 9 }}>View more</p>
				</div>
			</div>
		</React.Fragment >
	);
}