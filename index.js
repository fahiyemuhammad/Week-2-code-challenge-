const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Kojiro Ramen", restaurant: "Menya", image: "images/kojiro.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Naruto Ramen", restaurant: "Ramen-ya", image: "images/naruto.jpg", rating: 8,  comment:"Marvelous"},
    { id: 4, name: "Nirvana Ramen", restaurant:"Uchiha", image:"images/nirvana.jpg" ,rating:10, comment:"The best" },
    { id: 5, name: "gyukotsu Ramen", restaurant:"behkai", image:"images/gyukotsu.jpg",rating:3, comment:"Not so  good" }
 ];

 function displayRamens() {
    const menuDiv = document.getElementById("ramen-menu");     
    ramens.forEach(ramen => {
        let img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.classList.add("ramen-img");

        menuDiv.append(img);


        img.addEventListener("click",function handleClick(){
              const name = document.getElementsByTagName("p")[0]
               name.textContent = `Name:  ${ramen.name}`
              const restaurant = document.getElementsByTagName("p")[1]
              restaurant.textContent= ` Restaurant:  ${ramen.restaurant}`
              const rating = document.getElementsByTagName("p")[2]
              rating.textContent = `Rating:  ${ramen.rating} / 10`
              const comment = document.getElementsByTagName("p")[3]
              comment.textContent = `Comment:  ${ramen.comment}`
              const image = document.getElementById("ramen-img")
              image.src = ramen.image
              image.alt = ramen.name
              
        })
    });
    const form = document.getElementById("order-form");
    const submitButton = document.getElementById("submit-button");

    submitButton.addEventListener("click", function (event) {
        event.preventDefault();

        
        const newDishName = document.getElementById("dish-name").value;
        const newRestaurant = document.getElementById("restaurant-name").value;
        const newImage = document.getElementById("image").value;
        const newRating = document.getElementById("rating").value;
        const newComment = document.getElementById("comment").value;

        

        
        const newRamen = {
            name: newDishName,
            restaurant: newRestaurant,
            image: newImage,
            rating: newRating,
            comment: newComment
        };

    
        const newRamenImg = document.createElement("img");
        newRamenImg.src = newImage;
        newRamenImg.alt = newDishName;
        newRamenImg.classList.add("ramen-img");

        
        document.getElementById("ramen-menu").appendChild(newRamenImg);

        
        newRamenImg.addEventListener("click", function () {
            const name = document.getElementsByTagName("p")[0]
               name.textContent = `Name:  ${newRamen.name}`
              const restaurant = document.getElementsByTagName("p")[1]
              restaurant.textContent= ` Restaurant:  ${newRamen.restaurant}`
              const rating = document.getElementsByTagName("p")[2]
              rating.textContent = `Rating:  ${newRamen.rating} / 10`
              const comment = document.getElementsByTagName("p")[3]
              comment.textContent = `Comment:  ${newRamen.comment}`
              const image = document.getElementById("ramen-img")
              image.src = newRamen.image
              image.alt = newRamen.name
        });
        
            form.reset();
        
           
        
    });
}

window.onload = function main(){
    displayRamens();
    addSubmitListener();
};