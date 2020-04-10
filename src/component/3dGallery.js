import React, {Component} from 'react';
import '../css/3dGallery.css';

class Sphere extends Component {
	constructor(props) {
		super(props);
		this.state = {
			elementArr: []
		}
	}
	render() {
		return (
			<div className="sphere-container">
				<div id="sphere">
					{this.state.elementArr}
				</div>
			</div>

		);
	}

	createElement(nums) {
		let elementArr = [];
		let contentArr = ['Σ','Ω','Γ','Π','β','γ','ξ','Ψ','ω','Ø','◢◤','卍','卐'];
		for (let i in [...Array(nums)]) {
			let content = contentArr[i%13];
			let spanContent = (<span>{content}</span>);
			if (i%12===9){
				spanContent = (<span> </span>);
			}
			let element = (
				<div key={i} className='initLi'>
					{spanContent}
				</div>);
			elementArr.push(element);
		}
		this.setState({elementArr: elementArr});
	}
	componentWillMount() {
		this.createElement(96);
	}
}

export {Sphere};
