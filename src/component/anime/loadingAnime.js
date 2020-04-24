import React, { Component } from 'react';
import '../../css/loadingAnime.css';

class Loading extends Component{
	constructor(props){
		super(props)
	}
	render() {
		return (
			<div className="spinner-box">
				<div className="solar-system">
					<div className="earth-orbit orbit">
						<div className="planet earth"> </div>
						<div className="venus-orbit orbit">
							<div className="planet venus"> </div>
							<div className="mercury-orbit orbit">
								<div className="planet mercury"> </div>
								<div className="sun"> </div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export {Loading};
