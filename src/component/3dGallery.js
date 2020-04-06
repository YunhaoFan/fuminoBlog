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
		for (let i in [...Array(nums)]) {
			let element = (
				<div key={i} className='initLi'>
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
