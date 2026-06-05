document
.getElementById("contactForm")
.addEventListener("submit", async function(e){

    e.preventDefault();

    const formData = new FormData(this);

    try{

        await fetch(
            "https://script.google.com/macros/library/d/1y2ONHK1IaRL_o3O-3YOx4IcYUZR3wIrBNiq6S9JqcS3gq5tN3wEBJbVK/1",
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
