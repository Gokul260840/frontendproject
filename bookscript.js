// Array of movie objects
let movies = [
	{
		title: "Jawan",
		image: "https://myhotposters.com/cdn/shop/products/mL6867_1024x1024.jpg?v=1693608262",
		info: "Action, Romance, Drama",
	},
	{
		title: "Jailer",
		image: "https://i.redd.it/i-made-a-fan-made-poster-for-jailer-v0-zngbvwftnpeb1.png?s=b66a6fec6be7d54f6dfd757b53a22ca692cc3a77",
		info: "Action,Drama,Romance",
	},
	{
		title: "Leo",
		image: "https://i.redd.it/leo-new-poster-v0-zaspx2hw7tob1.jpg?s=441d35de38b30f08878f523540e99fcb492b054b",
		info: "Action,Adventure",
	},
	{
		title: "Openn Heimer",
		image: "https://www.tallengestore.com/cdn/shop/products/Oppenheimer-ChristopherNolan-CillianMurphy-HollywoodMoviePoster_e80aa49c-2506-4087-8929-e4675239a696.jpg?v=1691369025",
		info: "Action,Adventure,Historial",
	},
	{
		title: "Kushi",
		image: "https://timesofindia.indiatimes.com/photo/91608543.cms",
		info: "Romance,Drama,",
	},
	{
		title: "Mark Antony",
		image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/1d3056162254289.63d289c6b529a.jpg",
		info: "Time travel,Adventure,Comedy",
	},
	{
		title: "Meg 2:the Trench",
		image: "https://m.media-amazon.com/images/M/MV5BMTM2NTU1ZTktNjc4YS00NjNhLWE4NmYtOTM2YjFjOGUzNmYzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
		info: "Historical,Adventure,Thriller",
	},
	{
		title: "Fast X",
		image: "https://www.themoviedb.org/t/p/original/4RqPyM4dTKh7jC4udvC4IDs0nRA.jpg",
		info: "Adventure,Racing,Family",
	},
	{
		title: "Good night",
		image: "https://m.media-amazon.com/images/M/MV5BMTJjN2NhY2EtYzZkOC00NDQ0LWFhMzEtNWZhYTFhNzNhNjllXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg",
		info: "Romance,Comedy,Family",
	},
];

// Function to display movies on the webpage
function displayMovies() {
	const movieGrid = document.querySelector(".movie-grid");
	movieGrid.innerHTML = "";
	for (let i = 0; i < movies.length; i++) {
		const movie = movies[i];
		const movieDiv = document.createElement("div");
		movieDiv.classList.add("movie");

		const movieImage = document.createElement("img");
		movieImage.src = movie.image;
		movieDiv.appendChild(movieImage);

		const movieTitle = document.createElement("h3");
		movieTitle.classList.add("movie-title");
		movieTitle.textContent = movie.title;
		movieDiv.appendChild(movieTitle);

		const movieInfo = document.createElement("p");
		movieInfo.classList.add("movie-info");
		movieInfo.textContent = movie.info;
		movieDiv.appendChild(movieInfo);

		const dateInput = document.createElement("input");
		dateInput.type = "date";
		dateInput.classList.add("date-input");
		movieDiv.appendChild(dateInput);
	
		const timeInput = document.createElement("input");
		timeInput.type = "time";
		timeInput.classList.add("time-input");
		movieDiv.appendChild(timeInput);

		const bookButton = document.createElement("button");
		bookButton.classList.add("btn-book");
		bookButton.textContent = "Book Now";
		bookButton.addEventListener("click", function() {
			var est=false;
			const date = dateInput.value;
			if(date==""){
				alert("Please enter a date");
			};
			const time = timeInput.value;
			if(time==""){
				alert("Please enter a time");
			};
			if(date!="" && time!=""){
				est=true;
			};
			if (est) {
				var email = localStorage.getItem("varemail");
				var ticket = `
				  <div style="text-align: center; border: 10px solid yellow; padding: 20px;">
					<h1 style="color: red">Profit's Movie Ticket Booking</h1>
					<h2>Booked Ticket Details</h2>
				  </div>
				  <div>
				   <h1>                                          
				   </h1>
				  </div>
				  <div style="text-align: left; border: 5px solid red; padding: 20px;">
					<h3 style="color: slateblue">Email: ${email}</h3>
					<h3 style="color: slateblue">Movie: ${movie.title}</h3>
					<h3 style="color: slateblue">Date: ${date}</h3>
					<h3 style="color: slateblue">Time: ${time}</h3>
				  </div>
				  <div>
				  <h1>
				  </h1>
				  </div>
				  <div style="text-align: center; border: 5px solid #050578; padding: 20px;">
				  	<h3 style="color: red; align: center;">Congrats! Discount Availed</h3>
				  	<h2 style="color:#ff0073">Thank you for booking</h2>
				  </div>
				`;			  
				const printWindow = window.open("", "PrintWindow", "width=800,height=800");
				printWindow.document.write(ticket);
				printWindow.document.close();
				printWindow.focus();
				printWindow.print();
				printWindow.close();
			  };			  
		  });
					
		movieDiv.appendChild(bookButton);
		movieGrid.appendChild(movieDiv);
	}
}

// Event listener to handle form submission
const searchForm = document.querySelector(".hero form");
searchForm.addEventListener("submit", function(event) {
	event.preventDefault();
	const searchInput = document.querySelector(".hero input[type='text']");
	const searchTerm = searchInput.value.toLowerCase();
	const filteredMovies = movies.filter(function(movie) {
		return movie.title.toLowerCase().includes(searchTerm);
	});
	movies = filteredMovies;
	displayMovies();
	searchInput.value = "";
});

// Call the displayMovies function initially to show all movies
displayMovies();