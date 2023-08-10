import React from "react";

function Index(props) {
	return (
		<div>
			<h1>Index</h1>
			<ul>
				<li>
					<a href="/meats">Meats</a>
				</li>
				<li>
					<a href="/vegetables">Vegetables</a>
				</li>
			</ul>
			{props.fruits.map((fruit, i) => (
				<a
					href={`/fruits/${i}`}
					key={i}
				>
					{fruit.name}
					<br />
					<br />
				</a>
			))}
            <a href="/fruits/new">
                <button>New</button>
            </a>
		</div>
	);
}

export default Index;
