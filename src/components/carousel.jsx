import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import "../styles/carousel.scss";
import {useSelector} from "react-redux";

function Carousel() {
	return (
		<>
			<div
				id="carouselExampleSlidesOnly"
				className="carousel slide h-50"
				data-ride="carousel"
			>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<div className="hero-image-1">
							<div className="hero-text-1">
								<h1 style={{color: "white"}}>FRANCHYZ</h1>
								<h3 className="whitetext text-uppercase">
									team management the easy way
								</h3>
								<Link to="/register">
									<button type="button" className="btn btn-primary">
										Start now
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="hero-image-2">
							<div className="hero-text-2">
								<h1 style={{color: "white"}}>FRANCHYZ</h1>
								<h3 className="whitetext text-uppercase">
									team management the easy way
								</h3>
								<Link to="/register">
									<button type="button" className="btn btn-primary">
										Start now
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="hero-image-3">
							<div className="hero-text-3">
								<h1 style={{color: "white"}}>FRANCHYZ</h1>
								<h3 className="whitetext text-uppercase">
									team management the easy way
								</h3>
								<Link to="/register">
									<button type="button" className="btn btn-primary">
										Start now
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Carousel;
