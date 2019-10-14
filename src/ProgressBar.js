import React, { Component } from 'react';

import Icon from '@material-ui/core/Icon';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';


const BorderLinearProgress = withStyles({
	root: {
		height: 10,
		backgroundColor: lighten('#ff6c5c', 0.5),
	},
	bar: {
		borderRadius: 20,
		backgroundColor: '#ff6c5c',
	},
})(LinearProgress);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
  },
}));



export default class ProgressBar extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		const classes = useStyles();
		return (

			<div>
				<div>
					<Icon className="fa fa-plus-square" color="action" />
				</div>
				<div>
					<BorderLinearProgress
						className={classes.margin}
						variant="determinate"
						color="secondary"
						value={50}
					/>
				</div>
				<div>

				</div>
			</div>
		)

	}
}