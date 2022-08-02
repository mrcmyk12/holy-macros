import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div>
			<nav class="navbar navbar-expand-lg bg-light">
				<div class="container-fluid">
					<Link to={"/"}>Holy-Macros</Link>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div
						class="collapse navbar-collapse"
						id="navbarSupportedContent">
						<ul class="navbar-nav me-auto mb-2 mb-lg-0">
							<Link to={"/diary"}>
								<li class="nav-item">
									<a
										class="nav-link active"
										aria-current="page"
										href="#">
										Meal Diary
									</a>
								</li>
							</Link>
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#">
									Add Meal
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#">
									Health News
								</a>
							</li>
							<Link to={"/options"}>
								<li class="nav-item">
									<a
										class="nav-link active"
										aria-current="page"
										href="#">
										Options
									</a>
								</li>
							</Link>
							<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#">
									Login
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
