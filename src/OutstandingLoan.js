
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Title from './Title';
import Divider from '@material-ui/core/Divider';
import AddBoxIcon from '@material-ui/icons/AddBox';
import TimerIcon from '@material-ui/icons/Timer';

import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';


const useStyles = makeStyles({
	depositContext: {
		flex: 1,
	},
});

export default function OutstandingLoan() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<div style={{ flexDirection: 'column', display: 'flex', height: '100%', width: '100%', }}>
				<div style={{ flex: 1, display: 'flex', justifyContent: 'center', }}>
					<div style={{ flex: 1, display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: 20 }}>
						<Typography variant="h6" style={{ fontSize: 11, fontWeight: 'initial', marginBottom: 15 }}>TOTAL OUTSTANDING LOAN</Typography>
						<div style={{ display: 'flex' }}>
							<Typography variant="h6" style={{ fontSize: 24, fontWeight: 'bold', marginRight: 5 }}>4,250,182.30</Typography>
							<Typography variant="h6" style={{ fontSize: 13, }}>NGN</Typography>
						</div>
					</div>
					<div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
						<Button variant="contained" style={{ backgroundColor: '#82C05C', fontWeight: 'initial', borderRadius: 0, textTransform: 'none' }}>
							+Request Loan
      			</Button>
					</div>

				</div>
				<Divider />
				<div style={{ flex: 3, display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
					<Typography variant="h6" style={{ fontSize: 12, fontWeight: 'initial', marginBottom: 15 }}>RUNNING LOAN(S)</Typography>
					{/* <ProgressBar /> */}
					<div style={{ display: 'flex', }}>
						<div style={{ display: 'flex', flex: 1 }}>
							<AddBoxIcon style={{ color: 'grey' }} />
						</div>
						<div style={{ display: 'flex', flex: 10, flexDirection: 'column' }} >
							<ProgressBar now={75} variant="success" style={{ width: '100%', height: '100%' }} label="Personal Loan(N200,000)" />
							<div style={{ display: 'flex', justifyContent: 'space-between' }}>
								<p style={{ margin: 0, fontSize: 9 }}>July 2018</p>
								<p style={{ margin: 0, fontSize: 9 }}>Tenor - 24 Months</p>
								<p style={{ margin: 0, fontSize: 9 }}>June 2020</p>
							</div>
						</div>
						<div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
							<TimerIcon style={{ color: 'red' }} />
						</div>
					</div>
					<div style={{ display: 'flex', }}>
						<div style={{ display: 'flex', flex: 1 }}>
							<AddBoxIcon style={{ color: 'grey' }} />
						</div>
						<div style={{ display: 'flex', flex: 10, flexDirection: 'column' }} >
							<ProgressBar now={50} variant="success" style={{ width: '100%', height: '100%' }} label="Rent Loan(N200,000)" />
							<div style={{ display: 'flex', justifyContent: 'space-between' }}>
								<p style={{ margin: 0, fontSize: 9 }}>February 2019</p>
								<p style={{ margin: 0, fontSize: 9 }}>Tenor - 13 Months</p>
								<p style={{ margin: 0, fontSize: 9 }}>February 2020</p>
							</div>
						</div>
						<div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
							<TimerIcon style={{ color: 'red' }} />
						</div>
					</div>
					<div style={{ display: 'flex', }}>
						<div style={{ display: 'flex', flex: 1 }}>
							<AddBoxIcon style={{ color: 'grey' }} />
						</div>
						<div style={{ display: 'flex', flex: 10, flexDirection: 'column' }} >
							<ProgressBar now={45} variant="success" style={{ width: '100%', height: '100%' }} label="Car Loan(N200,000)" />
							<div style={{ display: 'flex', justifyContent: 'space-between' }}>
								<p style={{ margin: 0, fontSize: 9 }}>July 2018</p>
								<p style={{ margin: 0, fontSize: 9 }}>Tenor - 24 Months</p>
								<p style={{ margin: 0, fontSize: 9 }}>June 2020</p>
							</div>
						</div>
						<div style={{ display: 'flex', flex: 1, justifyContent: 'center' }}>
							<TimerIcon style={{ color: 'red' }} />
						</div>
					</div>
					<div className={classes.seeMore} style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
						<Link color="primary" href="javascript:;" style={{ color: 'grey', fontSize: 11 }}>
							View more
        </Link>
					</div>
				</div>
			</div>
		</React.Fragment>

	);
}