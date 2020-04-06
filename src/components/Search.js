import React,{ Component } from 'react';

class Search extends Component {

	state = {
		query: '',
	}

	handleInputChange = () => {
		this.setState({
			query: this.search.value
		})
	}

	render(){

		return(
				<div className="container">
					<div className="row">
						<div className="col-md-1"></div>
						<div className="col-md-2">
							<div className="type-select-l2 row">
								<div className="marker">
								</div>
								<div className="item col-md-4">Delivery</div>
								<span className="seperator">or</span>
								<div className="item">Pickup</div>
							</div>
						</div>

						<div className="divider"></div>

						<div className="search col-lg-8">
							<div className="searchProducts-l1" aria-owns="use-autocomplete-demo-popup" role="combobox" aria-expanded="true">

									<div className="default-button-l1 small">
										<button className="MuiButtonBase-root MuiButton-root MuiButton-text jss140 jss167 button" tabIndex="0" type="button" >
											<span className="MuiButton-label">ALL</span>
											<span className="MuiTouchRipple-root"></span>
										</button>
									</div>
								    <input id="use-autocomplete-demo"  placeholder="Looking for something?"   ref={input => this.search = input}
								      onChange={this.handleInputChange}
								    />
								    <p>{this.state.query}</p>
									<a href="#">
										<svg className="MuiSvgIcon-root icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation">
											<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
										</svg>
									</a>
							</div>
						</div>
					</div>
				</div>
		)
	}
}

export default Search;    