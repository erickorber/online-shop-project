import React from 'react';
import '../css/QuantityDropdownSelector.css';

const QuantityDropdownSelector = ({ currentQuantity, changeQuantity, addToCartCSS = false }) => {
	
	const getSelectTagWithCustomCSS = (addCSS) => {
		if (addCSS) {
			return (
				<select className="custom-select quantity-selector" defaultValue={currentQuantity} onChange={changeQuantity}>
					<option value={1}>1</option>
					<option value={2}>2</option>
					<option value={3}>3</option>
					<option value={4}>4</option>
					<option value={5}>5</option>
					<option value={6}>6</option>
					<option value={7}>7</option>
					<option value={8}>8</option>
					<option value={9}>9</option>
				</select>
			);			
		} else {
			return (
				<select className="custom-select" defaultValue={currentQuantity} onChange={changeQuantity}>
					<option value={1}>1</option>
					<option value={2}>2</option>
					<option value={3}>3</option>
					<option value={4}>4</option>
					<option value={5}>5</option>
					<option value={6}>6</option>
					<option value={7}>7</option>
					<option value={8}>8</option>
					<option value={9}>9</option>
				</select>
			);
		}
	}

	return (getSelectTagWithCustomCSS(addToCartCSS));
}

export default QuantityDropdownSelector;