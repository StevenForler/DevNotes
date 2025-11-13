import Joke from "./joke"


export default function JokeOutput() {
	
	const jokes =[
		{
			id: 1,
			text: " I used to be a banker, but then I lost interest!",
			rating: 3
		},
		{
			id: 2,
			text:" I'm afraid for the calendar. Its days are numbered",
			rating: 4
		},
		{
			id: 3,
			text:" I used to be addicted to soap, but I'm clean now.",
			rating: 5
		},
		{
			id: 4,
			text:"I'm reading a book on anti-gravity. It's impossible to put it down!",
			rating: 1
		}
]
	const jokesComponents = jokes.map(joke => (	<Joke key={joke.id}	dadJoke={joke.text} rating ={joke.rating}/>
	)) // for each in line loop 

	return (
		<div className="">
			<h1>Dad Jokes</h1>
			{jokesComponents}
		</div>
	)
}