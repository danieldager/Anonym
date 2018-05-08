import React from 'react';
import PropTypes from 'prop-types';
import firebase from '../../firebase/firebase.js';

class LoginForm extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			currentAccount: []
		}
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ ...this.state, [e.target.name]: e.target.value });
	}


	handleSubmit(e) {
		e.preventDefault();
		const itemsRef = firebase.database().ref('items');
		const items = {
			email: this.state.email,
			password: this.state.password
		}
		
		itemsRef.push(items);
		this.setState({
			email: '',
			password: ''
		});
	}
	
	componentDidMount() {
		const itemsRef = firebase.database().ref('items');
		itemsRef.on('value', (snapshot) => {
			let items = snapshot.val();
			let newState = [];
			
			for (let item in items) {
				newState.push ({
					id: item,
					email: items[item].username,
					password: items[item].password
				});
			}
					
			this.setState({
				items: newState
			});
		});
	}
	
	remove (itemId) {
		const itemRef = firebase.database().ref('/items/${itemId}');
		itemRef.remove();
	}


	render () {

		return (
			
			<form style={styles.form} onSubmit={this.handleSubmit}>
				<label htmlfor='email' style={styles.formLabel}>
					Email:
				</label>
				<input 
						type='email' 
						id='email'
						name='email'
						placeholder='john.doe@yale.edu' 
						style={styles.formInput}
						
						value={this.state.email}
						onChange={this.handleChange}
				/>
				
				<label htmlfor='password' style={styles.formLabel}>
					Password:
				</label>
				<input 
						type='password' 
						id='password'
						name='password'
						placeholder='make it secure'
						style={styles.formInput}
						
						value={this.state.password}
						onChange={this.handleChange}
				/>
				
				<div style={styles.buttons}> 
					<button style={styles.formButton}>submit</button>
					<button style={styles.formButton}>forgot your password?</button>
				</div>
				
				
			</form>
			
			
			
		);
	}
}

LoginForm.propTypes = {
	submit: PropTypes.func.isRequired
};

const styles= {
	
	form: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	
	formLabel: {
		fontSize: '20px',
		marginTop: '15px',	
	},
	
	formInput: {	
		fontSize: '20px',
		margin: '10px',
		padding: '10px',
		border: '0px',
		width: '500px',
		height: '40px',
		boxShadow: 'rgba(63, 63, 63, 0.08) 0 10px 20px 0',
	},
	
	buttons: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	
	formButton: {
		fontSize: '18px',
		paddingLeft: '20px',
		paddingRight: '20px',
		marginTop: '20px',
		marginLeft: '3px',
		marginRight: '3px',
		color: 'white',
		height: '40px',
		borderRadius: "6px",
		backgroundColor: '#282D4F',	
		boxShadow: 'rgba(63, 63, 63, 0.08) 0 10px 20px 0'
	},
	

}

export default LoginForm;