import React from 'react';

import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

export default function StepBar() {
	return (
		<React.Fragment>
			<div style={{ width: '100%' }}>
				<ProgressBar
					percent={50}
					filledBackground="#d2d2d2"
				>
					<Step transition="scale">
						{({ accomplished }) => (
							<div style={{ position: 'relative', top: 4, textAlign: 'center' }}>
								<img
									style={{ filter: `grayscale(${accomplished ? 0 : 100}%)`, margin: 0 }}
									width="30"
									src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Ski_trail_rating_symbol-green_circle.svg"
								/>
								<p style={{ margin: 0, fontSize: 9 }}>Line 1</p>
							</div>
						)}
					</Step>
					<Step transition="scale">
						{({ accomplished }) => (
							<div style={{ position: 'relative', top: 4, textAlign: 'center' }}>
								<img
									style={{ filter: `grayscale(${accomplished ? 0 : 100}%)`, margin: 0 }}
									width="30"
									src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Ski_trail_rating_symbol-green_circle.svg"
								/>
								<p style={{ margin: 0, fontSize: 9 }}>Line 2</p>
							</div>
						)}
					</Step>
					<Step transition="scale">
						{({ accomplished }) => (
							<div style={{ position: 'relative', top: 4, textAlign: 'center' }}>
								<img
									style={{ filter: `grayscale(${accomplished ? 0 : 100}%)`, margin: 0 }}
									width="30"
									src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Ski_trail_rating_symbol-green_circle.svg"
								/>
								<p style={{ margin: 0, fontSize: 9 }}>HR</p>
							</div>
						)}
					</Step>
					<Step transition="scale">
						{({ accomplished }) => (
							<div style={{ position: 'relative', top: 4, textAlign: 'center' }}>
								<img
									style={{ filter: `grayscale(${accomplished ? 0 : 100}%)`, margin: 0 }}
									width="30"
									src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Ski_trail_rating_symbol-green_circle.svg"
								/>
								<p style={{ margin: 0, fontSize: 9 }}>Audit</p>
							</div>
						)}
					</Step>
					<Step transition="scale">
						{({ accomplished }) => (
							<div style={{ position: 'relative', top: 4, textAlign: 'center' }}>
								<img
									style={{ filter: `grayscale(${accomplished ? 0 : 100}%)`, margin: 0 }}
									width="30"
									src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Ski_trail_rating_symbol-green_circle.svg"
								/>
								<p style={{ margin: 0, fontSize: 9 }}>CEO</p>
							</div>
						)}
					</Step>
					<Step transition="scale">
						{({ accomplished }) => (
							<div style={{ position: 'relative', top: 4, textAlign: 'center' }}>
								<img
									style={{ filter: `grayscale(${accomplished ? 0 : 100}%)`, margin: 0 }}
									width="30"
									src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Ski_trail_rating_symbol-green_circle.svg"
								/>
								<p style={{ margin: 0, fontSize: 9 }}>CFO</p>
							</div>
						)}
					</Step>
					<Step transition="scale">
						{({ accomplished }) => (
							<div style={{ position: 'relative', top: 4, textAlign: 'center' }}>
								<img
									style={{ filter: `grayscale(${accomplished ? 0 : 100}%)`, margin: 0 }}
									width="30"
									src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Ski_trail_rating_symbol-green_circle.svg"
								/>
								<p style={{ margin: 0, fontSize: 9 }}>Staff</p>
							</div>
						)}
					</Step>
					<Step transition="scale">
						{({ accomplished }) => (
							<div style={{ position: 'relative', top: 4, textAlign: 'center' }}>
								<img
									style={{ filter: `grayscale(${accomplished ? 0 : 100}%)`, margin: 0 }}
									width="30"
									src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Ski_trail_rating_symbol-green_circle.svg"
								/>
								<p style={{ margin: 0, fontSize: 9 }}>Finance</p>
							</div>
						)}
					</Step>
					<Step transition="scale">
						{({ accomplished }) => (
							<div style={{ position: 'relative', top: 4, textAlign: 'center' }}>
								<img
									style={{ filter: `grayscale(${accomplished ? 0 : 100}%)`, margin: 0 }}
									width="30"
									src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Ski_trail_rating_symbol-green_circle.svg"
								/>
								<p style={{ margin: 0, fontSize: 9 }}>Completed</p>
							</div>
						)}
					</Step>
				</ProgressBar>
			</div>

		</React.Fragment>
	)
}