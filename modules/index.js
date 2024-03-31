document.addEventListener('DOMContentLoaded', function () {
    let username = localStorage.getItem('name');
    let logo = document.getElementById('logo');
    if (logo && username) {
        logo.textContent = username;
    } else {
        console.error("Logo element or username not found in local storage.");
    }
});


function logoutuser() {
    var logoutConfirmed = confirm("Are You Sure To Logout");
    if (logoutConfirmed) {
        window.location.href = "form.html";
        return;
    }
}


async function getdata() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
        data.forEach(element => {
            div.innerHTML +=
                ` <div class="card mx-2" >
                <img src="${element.image}" class="card-img-top mt-2" alt="...">
                <div class="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h5 class="card-title card-heading">${element.title}</h5>
                        <h5 class="card-title">Price $${element.price}</h5>
                        <p class="card-text">${element.description}</p>
                        <p class="card-text"><span class="text-dark fw-bold">Category: </span>${element.title}</p>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="star-rating">
                        ${generateStarRating(element.rating.rate)}
                        <span>${element.rating.rate}/5</span>
                    </div>
                       
                    </div>
                </div>
            </div>
        `
        });
    }
    catch {

    }
}

getdata();

let div = document.getElementById('userData');


function generateStarRating(rate) {
    const fullStar = '\u2605';
    const emptyStar = '\u2606';
    const maxStars = 5;

    const fullStarsCount = Math.floor(rate);
    const emptyStarsCount = maxStars - fullStarsCount;

    let stars = '';

    // Add full stars
    for (let i = 0; i < fullStarsCount; i++) {
        stars += `<span class="star">${fullStar}</span>`;
    }

    // Add empty stars
    for (let i = 0; i < emptyStarsCount; i++) {
        stars += `<span class="star">${emptyStar}</span>`;
    }

    return stars;
}


var user = localStorage.getItem('name');
if(!user){
    window.location.href = 'form.html';
}
