import React from "react";

function Index(props) {
	return (
		<div>
			<h1>Index</h1>
            <ul>
                <li>
                    <a href='/meats'>Meats</a>
                </li>
                <li>
                    <a href='/fruits'>Fruits</a>
                </li>
            </ul>
			{props.vegetables.map((vegetable, i) => (
				<a
					href={`/vegetables/${i}`}
					key={i}
				>
					{vegetable.name}
					<br />
					<br />
				</a>
			))}
            <a href="/vegetables/new">
                <button>New</button>
            </a>
		</div>
	);
}

export default Index;
