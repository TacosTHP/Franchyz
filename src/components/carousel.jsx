import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import "../styles/carousel.scss";

function Carousel() {
	const currentUserId = useSelector((state) => state.userReducer.id);

	const [currentUser, setCurrentUser] = useState("");

	useEffect(() => {
		setCurrentUser(currentUserId);
	});
	console.log(currentUser);

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
								<p>Prends en main ton équipe</p>

								{currentUser === null ? (
									<Link to="/register">
										<button type="button" className="btn btn-primary">
											Inscriptionnn
										</button>
									</Link>
								) : (
									""
								)}
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="hero-image-2">
							<div className="hero-text-2">
								<h1 style={{color: "white"}}>FRANCHYZ</h1>
								<p>Prends en main ton équipe</p>
								<Link to="/register">
									<button type="button" className="btn btn-primary">
										{" "}
										Inscription{" "}
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="carousel-item">
						<div className="hero-image-3">
							<div className="hero-text-3">
								<h1 style={{color: "white"}}>FRANCHYZ</h1>
								<p>Prends en main ton équipe</p>
								<Link to="/register">
									<button type="button" className="btn btn-primary">
										{" "}
										Inscription{" "}
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
