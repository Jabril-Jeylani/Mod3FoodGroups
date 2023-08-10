import React from "react";

function Index(props) {
	return (
		<div>
			<h1>Index</h1>
			<ul>
				<li>
					<a href="/fruits">Fruits</a>
				</li>
				<li>
					<a href="/vegetables">Vegetables</a>
				</li>
			</ul>
			{props.meats.map((meat, i) => (
				<a
					href={`/meats/${i}`}
					key={i}
				>
					{meat.name}
					<br />
					<br />
				</a>
			))}
            <a href="/meats/new">
                <button>New</button>
            </a>
		</div>
	);
}

export default Index;
