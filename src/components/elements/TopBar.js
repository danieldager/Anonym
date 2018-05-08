import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/AnonymLogo.svg';
import Line from '../../images/Line.svg';

class TopBar extends Component {
	render () {
		return(
			<nav className="topBar" style={styles.topBar}>	

				<div clasName="leftTopBar" style={styles.leftTopBar}>	
					<img className="logoImage" src={Logo} alt="Anonym Logo" style={styles.logoImage}/>
					<p className="logoText" style={styles.logoText}>Write Freely</p>
				</div>

				<div className="rightTopBar" style={styles.rightTopBar}>
					<Link to="/home" style={styles.linkText}>Read</Link>
					<img src={Line} alt="line"/>
					<Link to="/login" style={styles.linkText}>Write</Link>
					<img src={Line} alt="line"/>
					<Link to="/login" style={styles.linkText}>Edit</Link>
					<img src={Line} alt="line"/>
					<Link to="/about" style={styles.linkText}>About</Link>	
				</div>	
			</nav>	
					
		);
	}
}
	

const styles = {
    topBar: {
    	position: "fixed",
		top: "0",
		left: "0",
		right: "0",
		width: "100%",
		height: "60px",
		boxShadow: 'rgba(63, 63, 63, 0.08) 0 10px 20px 0',
		marginBottom: '100px',
	
		display: "flex",
		flex: "1 1 auto",
		flexDirection: "row",
		justifyContent: "space-between",
    },
	
	
	leftTopBar: {
    	margin: "5px",
		
		display: "flex",
		flex: "1 1 1",
		flexDirection: "row",
    },
	
	
	logoImage: {
    	width: "50px",		
	},
	
	
	logoText: {
    	margin: "33px 0px 0px 5px",
		font: "Avenir",
		fontSize: "13px",
		color: "#282D4F"
    },

	
	rightTopBar: {
    	margin: "10px",
    	textAlign: "center",
		
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around"
    },
	
	
	linkText: {
    	margin: "10px",
		width: "50px",
		font: "'Avenir' 14px",
		color: "#282D4F"
    },


}

export default TopBar;