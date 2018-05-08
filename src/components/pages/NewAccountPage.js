import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../elements/TopBar';
import NewAccountForm from '../forms/NewAccountForm';
import Logo from '../../images/AnonymLogo.png';


class NewAccountPage extends React.Component {

	render() {
		return (
			<div className="NewAccountForm" style={styles.LoginPage}>
				
				<TopBar/>
				
				<div className="NewAccountForm" style={styles.LoginForm}>
					<img src={Logo} alt="Anonym Logo" style={styles.logoImage}/>
					<NewAccountForm submit={this.submit} />	
					
					<div style={styles.linkDiv}>
						<Link to='/login' style={styles.linkText}>
							already have an account? 
						</Link>	
					</div>
				</div>
				
			</div>
		
		); 
	}
}

const styles = {
 
	LoginPage: {
		display: "flex",
		flexDirection: "column",
	},
	
	LoginForm: {
		fontColor: "#282D4F",
		textAlign: "center",
		marginTop: "100px"
	},

	logoImage: {
    	width: "125px",	
		marginBottom: "15px",
		borderRadius: "17px",
		boxShadow: 'rgba(63, 63, 63, 0.08) 0 10px 20px 0',	
	},
	
	linkText: {
		alignText: "center",
		font: "'Avenir'",
		fontSize: '17px',
		color: "#282D4F"
    },
	
	linkDiv: {
		marginTop: "17px",
	},
}



export default NewAccountPage;