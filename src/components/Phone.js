import React,{ Component } from 'react';

import myData from './menu.json';

class Salad extends Component {

	
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


				<div class="MuiGrid-root mobile-app-promotion-l1 app-promotion MuiGrid-container MuiGrid-item MuiGrid-align-items-xs-center MuiGrid-justify-xs-center"><div class="full-image"><div class="lazyload-placeholder"></div></div><div class="single-image before"><img src="/static/media/ios-mobile-app-promotion.82550d23.jpg"></div><div class="body"><div><span class="small upper color-MediumGray">Cross Platform</span></div><div><span class="small">native</span>&nbsp;<span class="small upper bold">Mobile Application</span></div><div><span class="small bold color-Main">Android</span><span class="small bold">,</span>&nbsp;<span class="small bold color-Secondary">iOS</span></div><div class="logo-l1 logo" style="width: 109.44px; height: 36px;" width="280"><svg viewBox="0 0 1215.9407 389.2327"><title>Logo</title><path d="M0,0S37.6062,61.8682,236.9593,92.6c0,0,63.4856,12.5354,86.13,73.5949,0,0-26.2839-31.945-103.518-27.497S45.6935,96.6438,0,0Z" style="fill: rgb(1, 1, 1);"></path><path d="M70.7643,125.3539s33.7647,35.5843,182.9762,29.3166c0,0,48.3219,0,84.3106,39.628,0,0-15.366-7.2786-65.3053-3.0328,0,0-13.3442.4044-39.4258,4.8525C233.32,196.1182,131.4194,214.5169,70.7643,125.3539Z" style="fill: rgb(1, 100, 96);"></path><path d="M306.2356,229.5718a98.4054,98.4054,0,1,1-185.2184-47.335A157.0349,157.0349,0,0,1,95.2,161.5211a135.7154,135.7154,0,0,0-17.56,67.0594c0,73.8091,58.2953,133.6432,130.2059,133.6432S338.0511,302.39,338.0511,228.5805q0-4.9569-.3519-9.8238a49.6594,49.6594,0,0,0-14.0028,3.3724S315.9126,225.5131,306.2356,229.5718Z" style="fill: rgb(1, 1, 1);"></path><path d="M265.2971,244.04a59.3669,59.3669,0,1,1-109.2059-44.1028,153.154,153.154,0,0,1-28.9156-13.8295,91.3561,91.3561,0,1,0,172.0088,44.9658c-11.6684,4.8638-25.2112,10.31-30.4016,11.6332C268.7828,242.7069,267.5461,243.2825,265.2971,244.04Z" style="fill: rgb(1, 100, 96);"></path><path d="M284.068,202.0033c-28.71,9.3-58.8354,12.5354-58.8354,12.5354-50.5459,4.8524-60.6551-2.2241-60.6551-2.2241,37.404,29.9233,75.8189,28.508,75.8189,28.508,16.9834-.2022,27.6992-5.2568,27.6992-5.2568,10.3113-2.6284,52.1634-20.8249,52.1634-20.8249,22.0379-8.4917,31.5406,1.2131,31.5406,1.2131C328.9528,188.0526,284.068,202.0033,284.068,202.0033Z" style="fill: rgb(1, 1, 1);"></path><path d="M463.5574,118.7q-45.3493,0-76.0488,35.53h-.6235V126.179l-1.2466-1.2461H363.198q-1.4025,0-1.87,3.7392v256.82q0,3.1158,1.87,3.74h23.064l1.2466-1.2461V353.7024l-.6235-59.2187h.6235q28.6713,35.5313,75.4253,35.5312h1.2466a103.9154,103.9154,0,0,0,46.7514-11.2207q56.1014-31.6333,56.1016-93.502v-2.4941q0-25.5557-13.7139-50.4912Q521.9962,118.701,463.5574,118.7Zm64.2051,148.98q-24.3113,37.4-64.2051,37.4-21.6628,0-42.3882-13.7129-34.2853-27.4261-34.2841-67.3222,0-20.7246,13.09-43.6348,25.2458-36.7764,62.3349-36.7773,28.829,0,51.7383,20.57,25.5564,30.0776,25.5572,60.4648Q539.6058,246.7991,527.7625,267.68Z" style="fill: rgb(1, 1, 1);"></path><path d="M684.2229,119.1663q-36.6225,0-65.4516,18.0771-42.39,35.3775-42.3877,84.1524a117.1228,117.1228,0,0,0,17.4536,61.7119q33.6606,47.376,86.6455,47.375a102.3967,102.3967,0,0,0,41.7647-8.7276q38.9574-18.854,54.2314-58.5947v-.623l-1.2471-1.2471H747.805q-22.9087,44.26-68.5684,44.2578-25.8706,0-47.375-16.83-27.43-26.9589-27.4272-54.2314c0-1.2471.4135-1.87,1.2465-1.87H782.0892l1.87-1.2471q0-21.3486-7.4805-45.5049Q748.27,119.1673,684.2229,119.1663Zm68.5684,91.01H606.304l-.6231-.624q0-6.23,3.1167-14.96,19.4789-51.1128,71.0621-51.1153,33.5039,0,54.8545,24.3106,17.9193,24.0014,19.3242,41.1416Z" style="fill: rgb(1, 1, 1);"></path><path d="M975.3274,124.4651q-1.4017,0-1.87,3.74v24.3106h-.623q-29.921-34.2817-72.9326-34.2842h-.6231q-35.9985,0-64.2051,20.57-41.7656,35.8448-41.7646,85.3994,0,26.6471,13.7138,53.6074Q840.37,329.55,896.7854,329.5471h.6231q47.997,0,75.4258-33.6611h.623v46.1279l-.623,44.8819,1.87,1.87h23.0635l1.247-1.2471V125.7112l-1.247-1.2461Zm-1.87,101.6055q0,20.4184-12.4668,41.1416-24.7778,37.4-63.582,37.4013-21.1949,0-41.1406-12.4677-34.91-26.0231-34.9082-67.3213,0-27.27,18.7011-53.6084,22.2832-28.05,57.9717-28.0508,19.4781,0,39.8936,12.4668,35.5313,28.3652,35.5312,65.4521Z" style="fill: rgb(1, 1, 1);"></path><path d="M1037.6624,232.6165h176.4082l1.87-1.2471q0-21.3486-7.4805-45.5049-16.63-39.3214-45.7209-55.454a93.652,93.652,0,0,0-18.668-10.0586C1115.6287,110.2631,1089.7536,94.5,1089.7536,94.5c-43.0643-26.9052-46.7809-38.6721-46.7809-38.6721,9.7662,39.58,33.9131,61.58,40.8923,67.2579a115.6293,115.6293,0,0,0-33.1128,14.1578q-42.39,35.3775-42.3877,84.1524a117.1234,117.1234,0,0,0,17.4541,61.7119q33.6608,47.376,86.6456,47.375a102.3959,102.3959,0,0,0,41.7646-8.7276q38.9575-18.854,54.2314-58.5947v-.623l-1.247-1.2471h-27.4268q-22.9086,44.26-68.5683,44.2578-25.8707,0-47.375-16.83-27.4293-26.9589-27.4278-54.2314Q1036.4153,232.616,1037.6624,232.6165Zm3.1162-38.0244q19.4794-51.1128,71.0625-51.1153,33.5038,0,54.8545,24.3106,17.9195,24.0014,19.3242,41.1416l-1.2471,1.247H1038.2854l-.623-.624Q1037.6624,203.3221,1040.7786,194.5921Z" style="fill: rgb(1, 1, 1);"></path></svg></div><div><span class="small bold upper color-Secondary">Hybrid Design</span>&nbsp;<span class="small color-MediumGray">Mobile first</span></div><div><span class="small bold upper color-Main">Installable</span>&nbsp;<span class="small upper">Web Application</span></div><div><span class="large upper color-MediumGray">For Any Size Restaurant</span></div><div class="MuiGrid-root form-l2 MuiGrid-container MuiGrid-align-items-xs-center MuiGrid-justify-xs-center"><div class="MuiFormControl-root MuiTextField-root text-field-l1 phone"><div class="MuiInputBase-root MuiInput-root MuiInput-underline input-container input-container MuiInputBase-formControl MuiInput-formControl"><input aria-invalid="false" placeholder="e.g. +18774667373" type="text" class="MuiInputBase-input MuiInput-input" value=""></div></div><div class="default-button-l1 large button-container"><button class="MuiButtonBase-root MuiButton-root MuiButton-text jss140 jss167 button" tabindex="0" type="button" style="background-color: rgb(0, 0, 0); color: rgb(245, 245, 245); border-color: rgb(0, 0, 0);"><span class="MuiButton-label"><span class="large">Text Me</span>&nbsp;<span class="small">demo App</span></span><span class="MuiTouchRipple-root"></span></button></div></div></div><div class="single-image after"><img src="/static/media/android-mobile-app-promotion.91f42da8.jpg"></div></div>
		)
	}
}

export default Salad;    
