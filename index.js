const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Kojiro Ramen", restaurant: "Menya", image: "images/kojiro.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Naruto Ramen", restaurant: "Ramen-ya", image: "images/naruto.jpg", rating: 8,  comment:"Marvelous"},
    { id: 4, name: "Nirvana Ramen", restaurant:"Uchiha", image:"images/nirvana.jpg" ,rating:10, comment:"The best" },
    { id: 5, name: "gyukotsu Ramen", restaurant:"behkai", image:"images/gyukotsu.jpg",rating:3, comment:"Not so  good" }
 ];

 function displayRamens() {
    const menuDiv = document.getElementById("ramen-menu");
     const form = document.getElementById("order-form")
    ramens.forEach(ramen => {
        let img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.classList.add("ramen-img");

        menuDiv.append(img);


        img.addEventListener("click",function handleClick(){
              const restaurant = document.getElementsByTagName("p")[0]
              restaurant.textContent= ` Restaurant:  ${ramen.restaurant}`
              const rating = document.getElementsByTagName("p")[1]
              rating.textContent = `Rating:  ${ramen.rating} / 10`
              const comment = document.getElementsByTagName("p")[2]
              comment.textContent = `Comment:  ${ramen.comment}`
              const image = document.getElementById("ramen-img")
              image.src = ramen.image
              image.alt = ramen.name
              
        })

         form.addEventListener("submit",function addSubmitListener(event){
            event.preventDefault();
             const NewdishName = document.getElementById("dish-name").value
             ramens.name = NewdishName
             const Newrestaurant = document.getElementById("restaurant-name").value
             ramens.restaurant = Newrestaurant 
             const NewImage = document.getElementById("image").value
             ramens.image = NewImage
             const NewRating = document.getElementById("rating").value
             ramens.rating = NewRating
             const NewComment = document.getElementById("comment").value
             ramens.comment = NewComment
    
            
            const newRamenImg = document.createElement("img");
            newRamenImg.src = NewImage
            newRamenImg.alt = NewdishName;
            newRamenImg.classList.add("ramen-img");

            document.getElementById("ramen-menu").appendChild(newRamenImg);
    
        
            newRamenImg.addEventListener("click", function () {
                const restaurant = document.getElementsByTagName("p")[0]
                restaurant.textContent= ` Restaurant:  ${Newrestaurant}`
                const rating = document.getElementsByTagName("p")[1]
                rating.textContent = `Rating:  ${NewRating} / 10`
                const comment = document.getElementsByTagName("p")[2]
                comment.textContent = `Comment:  ${NewComment}`
                const image = document.getElementById("ramen-img")
                image.src = NewImage
                image.alt = NewdishName
            });
    
        
            form.reset();
        });
           
        
    });
}




        



window.onload = function main(){
    displayRamens();
    addSubmitListener();
};