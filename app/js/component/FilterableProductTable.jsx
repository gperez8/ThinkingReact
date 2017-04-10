import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
	
	constructor (props) {
		super(props);
		this.state = {
			filter : '',
			inStockOnly: false, 
		};
		console.log('list ->', props.product);
	}

	handleOnInputText(e) {
		this.setState({
			filter: e
		});
	}

	handleOnInputCheck(e) {
		this.setState({
			inStockOnly: e
		});
	}

	render () {
		return(
			<div>	
				<SearchBar
					filterText={this.state.filter}
					filterCheck={this.state.inStockOnly} 
					onInputText={this.handleOnInputText.bind(this)}
					onInputCheck={this.handleOnInputCheck.bind(this)}
				/>
				<ProductTable 
					product={this.props.product}
					filterText={this.state.filter}
					filterCheck={this.state.inStockOnly}
				/>
			</div>
		);
	}
}

let list = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(<FilterableProductTable product={list}/>, document.getElementById('app'));