//[pk] i really like how compartmentalized your code is!! very clean and organized!!

//[pk] good approach to hiding by manipulating classList!
window.addEventListener("hashchange", ev => {
	const id = window.location.hash.slice(1)
	const data = document.querySelectorAll(".hideMe,.userData")
	if (id === "title") {
		//when click on 'Title'
		data.forEach(item => {
			item.classList.toggle("hideMe", false)
		})
	} else {
		// when click on the user number(1/2/3)
		data.forEach(item => {
			let element = item.id.slice(1)
			if (element !== id) {
				item.classList.toggle("hideMe", true)
			}
			//[pk] functionality problem: if you click "2", then "1", they are all hidden!
		})
	}
})

// Display Users
function renderUsers(user) {
	let num = 1
	const html = user.map(ul => {
		return `
               <div class="container">
                    <div class="navigation">
                        <a href="#${ul.id}">${num++} </a>
                    </div>

                    <div id="#${ul.id}" class="userData">
                        <div>${ul.fullName}</div>
                        <div>${ul.email} </div>
                        <img src=${ul.avatar} />
                    </div>
                </div>
           `
	})
	const usersList = document.querySelector("#main")
	usersList.innerHTML = html
}

//Fetch Users data
function getData() {
	//[pk] you could make this a bit terser by putting the API in a variable!
	const user1 = fetch(
		"https://acme-users-api-rev.herokuapp.com/api/users/random"
	)
	const user2 = fetch(
		"https://acme-users-api-rev.herokuapp.com/api/users/random"
	)
	const user3 = fetch(
		"https://acme-users-api-rev.herokuapp.com/api/users/random"
	)

	Promise.all([user1, user2, user3])
		.then(response => Promise.all(response.map(r => r.json())))
		.then(result => renderUsers(result))
}

getData()
