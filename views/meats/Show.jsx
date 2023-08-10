import React from "react";

export default function Show({ meat, index }) {
	let { name, state, readyToEat } = meat;
	return (
		<div>
			<h1>Show</h1>
			<p>Name: {name}</p>
			<p>State: {state}</p>
			<p>
				{readyToEat
					? "This meat is ready to eat"
					: "This meat is NOT ready to eat"}
			</p>
			<br />

			<form
				action={`/meats/${index}?_method=DELETE`}
				method="POST"
			>
				<button>Remove</button>
			</form>
			<a href="/meats">
				<button>Go Back</button>
			</a>
			<a href={`/meats/${index}/edit`}>
				<button>Edit</button>
			</a>
		</div>
	);
}
