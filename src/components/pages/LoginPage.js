import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../elements/TopBar';
import LoginForm from '../forms/LoginForm';
import Logo from '../../images/AnonymLogo.png';


class LoginPage extends React.Component {

	submit = (data) => {
		console.log(data);
	}

	render() {
		return (
			<div className="LoginPage" style={styles.LoginPage}>
				
				<TopBar/>
				
				<div className="LoginForm" style={styles.LoginForm}>
					<img src={Logo} alt="Anonym Logo" style={styles.logoImage}/>
					<LoginForm submit={this.submit} />	
					
					<div style={styles.linkDiv}>
						<Link to='/newaccount' style={styles.linkText}>
							don't have an account? 
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



export default LoginPage;