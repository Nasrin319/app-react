import React,{ Component } from 'react';

import myData from './menu.json';

class SpecialOffers extends Component {

	
	render(){

		let data = myData.map((item,i)=>{
			if(i <2){
			return(
					
					<div className="card-container col-lg-4" key={item.id}>

						<div className="  MuiGrid-root food-card-l1 MuiGrid-container MuiGrid-direction-xs-column" description="A tender 13 oz. seasoned T-Bone steak served with two eggs, hash browns and bread" cuisine="American" preparation="4">
						
							<div className="image col-lg-12">
								<a href="#">
									<img className="item-image-l1" draggable="false" src={ item.image } />
								</a>
								<span className="label">Chief Special</span>
							</div>

							<div className="MuiGrid-root info  MuiGrid-direction-xs-column MuiGrid-justify-xs-space-between">
								<div className="title">{ item.title }</div>
							</div>
							<div className="sub-title">
								<a className="main" href="#">A'la Carte</a>
								<a className="sub" href="#">American</a>
								<a className="sub" href="#">Main Course</a>
							</div>
							<div className="MuiGrid-root info extra  MuiGrid-justify-xs-space-between">
								<span>
									<span className="tag light">
										<svg className="MuiSvgIcon-root icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
											<path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z">
												
											</path>
										</svg>4-6
										 Mins
									</span>
									<span className="tag dark">$16.99</span>
								</span>
								<span className="tag green light">Free Pickup</span>
							</div>
						</div>
					</div>
			)
		}
		});

		return(


				<div className="container">
					<div className="header-l2 col-md-12 text-left">
						<div className="title ">Special Offers</div>
						<div className="MuiGrid-root sub-title MuiGrid-container MuiGrid-justify-xs-space-between">
							<span className="text"></span>
						</div>
					</div>
					<div className="horizontal-list-scroll-bar-l1 scroll-bar">
						<div className="bar">
							<div className="cursor"></div>
						</div>
					</div>

					<div className="row" >
					
						{data}	
					</div>
				</div>
		)
	}
}

export default SpecialOffers;    
