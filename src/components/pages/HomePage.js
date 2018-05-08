import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../elements/TopBar';
import TextBox from '../elements/TextBox';


class HomePage extends Component {
	render () {
		return (
			<div>
				<div>
					<TopBar/>
				</div>
				<div>
					<div style={styles.formatDiv}></div>
						<TextBox 
							title={'Should Fraternities Coeducate?'}
							body={testText}
						 />

					 <TextBox 
						title={'Zucker for President?'}
						body={testText}
					 />

					 <TextBox 
						title={'A novel take on the Ideology of Food Trucks'}
						body={testText}
					 />			
				</div>
			</div>	
		);
	}
}

const testText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

const styles = {
	formatDiv: {
		height: '40px'
	}
	
}


export default HomePage;