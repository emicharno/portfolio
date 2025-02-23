// STEP 1
console.log("IT’S ALIVE!");

function $$ (selector, context = document) {
	return Array.from(context.querySelectorAll(selector));
}

// // STEP 2
// // 2.1
// let navLinks = $$("nav a");

// // 2.2
// let currentLink = navLinks.find(a => a.host === location.host && a.pathname === location.pathname)

// // 2.3
// if (currentLink) { // or if (currentLink !== undefined)
// 	currentLink.classList.add("current");
// }

// STEP 3

// step 3.1
let pages = [
	{url: "", title: "Home"},
    {url: "contact/", title: "Contact"},
	{url: "projects/", title: "Projects"},
    {url: "resume/", title: "Resume"},
    {url: "https://github.com/emicharno/", title: "GitHub"},
];

let nav = document.createElement("nav");
document.body.prepend(nav);

//initializing variable before the for loop to check if we are on the home page
//const keyword makes the variable immutable so it cannot be reassigned
//variables that do not change should be declared with const (also use capital letters as the convention)
const ARE_WE_HOME = document.documentElement.classList.contains("home");

// for (let p of pages) {
// 	let url = p.url;
// 	let title = p.title;

// 	// Create link and add it to nav 
//     if (!ARE_WE_HOME && !url.startsWith("http")) {
//         url = "../" + url;
//     }

// 	nav.insertAdjacentHTML("beforeend", `<a href="${ url }">${ title }</a>` );
// }

// step 3.2
// TODO: Comment out the `for (let p of pages) {...}` loop you made in step 3.1 and uncomment the for loop below! I have helped you restructure the loop a bit in a way that may be confusing from the lab instructions

for (let p of pages) {
	let url = p.url;
	let title = p.title;

    // Create correct relative link and add it to nav  
    if (!ARE_WE_HOME && !url.startsWith("http")) {
        url = "../" + url;
    }

    let a = document.createElement("a");
    a.href = url;
    a.textContent = title;
    
    if (a.host === location.host && a.pathname === location.pathname) {
        a.classList.add("current");
    }

    if (a.host !== location.host) {
        a.target = "_blank";
    }

    nav.append(a);
}

// STEP 4
// step 4.1

// step 4.2
document.body.insertAdjacentHTML("afterbegin", `
	<label class="color-scheme">
		Theme:
		<select>
			<option value="light dark">Auto</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
		</select>
	</label>`
);

// step 4.3
// TODO: Inside your styles.css file, add styling to move the switcher with class .color-scheme to the top right corner. There is nothing to do in this file in this step

// step 4.4
let select = document.querySelector("TODO: FILL IN SELECTOR");

select.addEventListener("input", function (event) {
	console.log("color scheme changed to", event.target.value);

    // TODO: use document.documentElement.style.setProperty to set the color scheme here! (hint: take a look at the handout)

    // TODO: (step 4.5.1) uncomment the line below!
    // localStorage.colorScheme = event.target.value;
});


// step 4.5 (continued)
// Reminder: uncomment line inside the event listener for 4.5.1
if ("colorScheme" in localStorage) {
    // TODO: set color scheme to the stored local value (hint: look at handout)
}

// STEP 5 (OPTIONAL)
// Note: This is an optional part of the lab! If you want to do it, uncomment the lines below and fill in the TODOs. Otherwise, leave the lines commented out.

// TODO: Inside the /contact/index.html, remove the enctype and method attributes from the <form> element. Remove the "Email" label and input as well.

// TODO: uncomment below to select the form element!
// let form = document.querySelector("form");

// form?.addEventListener("TODO: FILL IN EVENT WE ARE WAITING FOR", function (event) {
//     event.preventDefault();
//     let data = new FormData(form);

    // let url = form.action + "?";
    // for (let [name, value] of data) {
	//     url += (name + "=" + value + "&")
	//     console.log(name, value);
    // }

        // TODO: open url here!
// })




