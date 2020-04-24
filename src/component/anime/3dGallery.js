import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import '../../css/3dGallery.css';
import {Shining} from "./shining";

class Sphere extends Component {
	constructor(props) {
		super(props);
		this.state = {
			elementArr: []
		};
	}
	render() {
		return (
			<div className="sphere-container" ref='sphereContainer'>
				<div id="sphere">
					{this.state.elementArr}
				</div>
				<div className="hikari-container" ref="shining">
				</div>
			</div>

		);
	}

	// 创建96个div元素
	createElement(nums) {
		let elementArr = [];
		let contentArr = ['Σ','Ω','Γ','Π','β','γ','ξ','Ψ','ω','Ø','◢◤','卍','卐'];
		for (let i in [...Array(nums)]) {
			// 就按余数随便填充
			let content = contentArr[i%contentArr.length];
			let spanContent;
			if (i%12===9){
				spanContent = (<span> </span>);
			}else {
				spanContent = (<span>{content}</span>);
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
	// 挂载完成之后淡入，挂载光影组件，淡入
	componentDidMount() {
		window.setTimeout(()=>{
			this.refs.sphereContainer.style.opacity =1
		},1000);
		window.setTimeout(()=>{
			ReactDOM.render(<Shining/>,this.refs.shining)
			this.refs.shining.style.opacity=1;
		},4000);
	}
}

export {Sphere};
