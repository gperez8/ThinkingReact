import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

export default class ProductTable extends React.Component {
	constructor (props) {
		super(props);
	}

	render () {
		let row = [];
		let lastCategory = null;
		let listData = this.props.product;

		if (this.props.filterText !== '') {
			listData = listData.filter((element) => {
				
				let searched = this.props.filterText.toLowerCase();
				let name = element.name.toLowerCase();
				let price = element.price;
				return(
					name.includes(searched) ||
					price.includes(searched)
				);
			});
		}

		if (this.props.filterCheck) {
			listData = listData.filter((element) => {
				return(element.stocked);
			});
		}

		listData.forEach((product) => {
			if (product.category !== lastCategory) {
				row.push(
					<ProductCategoryRow 
						category = {product.category}
						key = {product.category}
					/>
				);
				lastCategory = product.category;
			}
			row.push(<ProductRow product={product} key={product.name}/>);
		});

		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{row}
				</tbody>
			</table>
		);
	}
}