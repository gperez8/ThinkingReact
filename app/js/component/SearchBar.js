import React from 'react';

export default class SearchBar extends React.Component {
	
	construtor (props) {
		this.handleChangeText=this.handleChangeTexts.bind(this);
		this.handleChangeCheck=this.handleChangeChecks.bind(this);
		console.log(props);
	}

	handleChangeText(e) {
		this.props.onInputText(e.target.value);
	}

	handleChangeCheck(e) {
		this.props.onInputCheck(e.target.checked);
	}

	render () {
		return(
			<form>
				<input type='text' 
					value={this.props.filterText}
					onChange={this.handleChangeText.bind(this)}
				/>
				<p> 
					<input type='checkbox'
						value={this.props.filterCheck} 
						onChange={this.handleChangeCheck.bind(this)}
					/>
					Only show product in stock
				</p>
			</form>
		);
	}
}