const assert = require("assert");

it("has a text input", async () => {
	const dom = await render("index.html");

	const input = dom.window.document.querySelector("input");
	assert(input);
});

it("shows a success message with a valid email", async () => {
	const dom = await render("index.html");
	const input = dom.window.document.querySelector("input");
	input.value = "asda@asdas.cao";
	dom.window.document
		.querySelector("form")
		.dispatchEvent(new dom.window.Event("submit"));
	const h1 = dom.window.document.querySelector("h1");
	console.log(h1.innerHTML);
});
