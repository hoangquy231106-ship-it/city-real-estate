document
.getElementById("contactForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const formData = new FormData(this);

    try{

        await fetch(
            "https://script.google.com/macros/s/AKfycbzuk0a5rTah1lffhy9dKfxHk9fqd44RLGhBk6qtJK0PdTJl7m2K4b6lci10eawSLbAhTA/exec",
            {
                method:"POST",
                body:formData
            }
        );

        alert(
            "Yêu cầu đã được gửi thành công!"
        );

        this.reset();

    }catch(error){

        alert(
            "Không thể gửi yêu cầu. Vui lòng thử lại."
        );

        console.error(error);
    }
});