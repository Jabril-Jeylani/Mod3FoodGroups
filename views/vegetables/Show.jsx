import React from "react";

export default function Show({ vegetable, index }) {
	let { name, color, readyToEat } = vegetable;
	return (
		<div>
			<h1>Show</h1>
			<p>Name: {name}</p>
			<p>Color: {color}</p>
			<p>
				{readyToEat
					? "This vegetable is ready to eat"
					: "This vegetable is NOT ready to eat"}
			</p>
			<br />

			<form
				action={`/vegetables/${index}?_method=DELETE`}
				method="POST"
			>
				<button>Remove</button>
			</form>
			<a href="/vegetables">
				<button>Go Back</button>
			</a>
			<a href={`/vegetables/${index}/edit`}>
				<button>Edit</button>
			</a>
		</div>
	);
}
