document
.getElementById("contactForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const formData = new FormData(this);

    try {

        const response = await fetch(
            "https://script.google.com/macros/s/AKfycbzuk0a5rTah1lffhy9dKfxHk9fqd44RLGhBk6qtJK0PdTJl7m2K4b6lci10eawSLbAhTA/exec",
            {
                method: "POST",
                body: formData
            }
        );

        const text = await response.text();

        console.log(text);

        alert("Gửi thành công!");

        this.reset();

    } catch(error) {

        console.error(error);

        alert("Lỗi: " + error.message);
    }
});
