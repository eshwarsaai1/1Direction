var addToCartBottons = document.getElementsByClassName('btn-primary')
for( var i=0; i<addToCartBottons.length; i++){
    var button = addToCartBottons[i]
    button.addEventListener('click', addToCartClicked)
}

function addToCartClicked(event){
    alert("Oops! Bookings not opened Yet")
}