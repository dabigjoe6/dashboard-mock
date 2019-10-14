
import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Title from './Title';
import Divider from '@material-ui/core/Divider';

import ProgressBar from './ProgressBar.js';

const useStyles = makeStyles({
	depositContext: {
		flex: 1,
	},
});

export default function Outstanding() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<div style={{ flexDirection: 'column', display: 'flex', height: '100%', width: '100%',}}>
				<div style={{ flex: 1, display: 'flex', justifyContent: 'center',}}>
					<div style={{ flex: 1, display: 'flex', alignItems: 'center', flexDirection: 'column', paddingTop: 20 }}>
						<Typography variant="h6" style={{ fontSize: 11, fontWeight: 'initial', marginBottom: 15 }}>TOTAL OUTSTANDING LOAN</Typography>
						<div style={{ display: 'flex' }}>
							<Typography variant="h6" style={{ fontSize: 24, fontWeight: 'bold', marginRight: 5 }}>4,250,182.30</Typography>
							<Typography variant="h6" style={{ fontSize: 13, }}>NGN</Typography>
						</div>
					</div>
					<div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
						<Button variant="contained" style={{ backgroundColor: '#82C05C', fontWeight: 'initial', borderRadius: 0, textTransform: 'none' }}>
							+Request Loan
      			</Button>
					</div>

				</div>
				<Divider />
				<div style={{ flex: 3,  }}>
				<Typography variant="h6" style={{ fontSize: 12, fontWeight: 'initial', marginBottom: 15 }}>RUNNING LOAN(S)</Typography>
				{/* <ProgressBar /> */}
				</div>
				<Divider />
			</div>
		</React.Fragment>

	);
}