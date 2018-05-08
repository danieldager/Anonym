import React from 'react';
import PropTypes from 'prop-types';
import firebase from '../../firebase/firebase.js';

class NewAccountForm extends React.Component {
	constructor() {
		super();
		this.state = {
			anonym: '',
			email: '',
			password: '',
			currentAccount: [],
			error: null
		}
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({ ...this.state, [e.target.name]: e.target.value });
	}


	handleSubmit(e) {
		e.preventDefault();
		const itemsref = firebase.database().ref('items');
		const items = {
			anonym: this.state.anonym,
			email: this.state.email,
			password: this.state.password
		}
		
		itemsref.push(items);
		this.setState({
			anonym: '',
			email: '',
			password: ''
		});
	}
	
	componenDidMount() {
		const itemsRef = firebase.database('items');
		itemsRef.on('value', (snapshot) => {
			let items = snapshot.val();
			let newState = [];
			
			for (let item in items) {
				newState.push ({
					id: item,
					anonym: items[item].anonym,
					email: items[item].email,
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
			
			<label htmlfor='anonym' style={styles.formLabel}>
					Anonym:
				</label>
				<input 
						type='anonym' 
						id='anonym'
						name='anonym'
						placeholder='gadfly' 
						style={styles.formInput}
						
						value={this.state.anonym}
						onChange={this.handleChange}
				/>
				
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
					<button style={styles.formButton}>create account</button>
				</div>
					
			</form>
					
		);
	}
}

NewAccountForm.propTypes = {
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

export default NewAccountForm;