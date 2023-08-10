import React from 'react'

function New() {
    return (
        <div>
            <h1>New</h1>
            <form action='/meats' method='POST'>

                <label htmlFor='name'>Name:</label><br />
                <input type='text' id='name' name='name'></input><br /><br /><br />

                <label htmlFor='state'>State:</label><br />
                <input type='text' id='state' name='state'></input><br /><br />

                <label htmlFor='ready'>Ready To Eat:</label>
                <input type='checkbox' id='ready' name='readyToEat'></input><br /><br /><br />

                <button>Submit</button>
            </form>
            <a href="/meats/">
                <button>Go Back</button>
            </a>
        </div>
    )
}

export default New;