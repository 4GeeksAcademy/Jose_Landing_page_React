import React from "react";

import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer.jsx";

//create your first component
const Home = () => {

	const cardList = [
		{ title: "Café con Macarons", image: "https://cdn.pixabay.com/photo/2021/12/06/21/34/sweets-6851675_640.jpg", text: "Tu mejor cafetería online!" },
		{ title: "Café con churros", image: "https://cdn.pixabay.com/photo/2017/03/30/15/46/churros-2188869_640.jpg", text: "Tu mejor cafetería online!" },
		{ title: "Café y desayuno completo", image: "https://cdn.pixabay.com/photo/2020/04/22/22/08/cafe-5080266_640.jpg", text: "Tu mejor cafetería online!" },
		{ title: "Café solo", image: "https://cdn.pixabay.com/photo/2019/12/02/11/23/drink-4667507_640.jpg", text: "Tu mejor cafetería online!" }
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