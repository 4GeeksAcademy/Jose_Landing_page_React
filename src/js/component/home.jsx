import React from "react";

import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {

	const cardList = [
		{ title: "Pizza", image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", text: "Your favorite pizza places here!" },
		{ title: "Sushi", image: "https://images.pexels.com/photos/6531076/pexels-photo-6531076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", text: "Your favorite sushi places here!" },
		{ title: "Hamburguesas", image: "https://images.pexels.com/photos/1474930/pexels-photo-1474930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", text: "Your favorite hamburguers here!" },
		{ title: "Batidos", image: "https://images.pexels.com/photos/1251210/pexels-photo-1251210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", text: "Your favorite smoothie places here!" }
	];

	return (
		<>
			<NavBar />

			<div className="container mt-5">
				<Jumbotron />
			</div>

			<div className="container mt-5 mb-5">
				<div className="row">
					{cardList.map((item, index) => {
						return (
							<div className="col-12 col-md-3">
								<Card item={item} />
							</div>
						)
					})}
				</div>
			</div>

			<Footer />
		</>
	);
}

export default Home;