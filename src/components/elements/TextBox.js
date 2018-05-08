import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TextBox extends Component {
	render () {
		return(
			<div style={styles.textBox}>
				<div style={styles.titleBox}>
					<p style={styles.titleText}>{this.props.title}</p>
				</div>
				<div style={styles.bodyBox}>
					<p style={styles.bodyText}>{this.props.body}</p>
				</div>
			</div>
		);
	}
}

const styles = {
	textBox: {
		
		alignItems: 'center',
		marginTop: '30px',
		marginLeft: '35px',
		left: "0",
		right: "0",
		width: "78%",
		height: "150px",
		boxShadow: 'rgba(63, 63, 63, 0.08) 0 10px 20px 0',
	

	},
	
	titleBox: {
		
		height: '40px',
		paddingTop: '6px',
		paddingLeft: '10px',
		
		boxShadow: 'rgba(63, 63, 63, 0.08) 0 10px 20px 0',
		
	},
	
	titleText: {
		
		fontSize: '20px',
		color: "#282D4F"
		
		
	},
	
	bodyBox: {
		padding: '10px',
		
	}
}


export default TextBox; 