import React, { useState } from "react";


//create your first component
const Home = () => {

	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState ([]);


	return (
		<div className="container">
			<h1> Cosas por hacer </h1>
			<ul>
				<li>
					<input
						type="text"
						onChange={(e) => setInputValue(e.target.value)}
						value={inputValue}
						onKeyPress={(e) => {
							if (e.key === "Enter") {
								setTodos(todos.concat([inputValue]));
								setInputValue("");
							}
						}}
						placeholder="Que necesito hacer el dia de hoy?"
					/>
				</li>
				{todos.map((item, index) => (
					<li key={index}>
						{item}{" "}
						<i className="fas fa-trash-alt"
							onClick={() => 
								setTodos(
									todos.filter(
										(t, currentIndex) =>
										index !== currentIndex
									)
								)
							}></i>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
