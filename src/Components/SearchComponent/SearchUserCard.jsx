const SearchUserCard = () => {
  return (
    <div className = 'py-2 cursor-pointer'>
        <div className= 'flex items-center'>
            <img className= "w-10 h-10 rounded-full" src="https://www.google.com/imgres?q=meal%20kit&imgurl=https%3A%2F%2Fwww.greenqueen.com.hk%2Fwp-content%2Fuploads%2F2022%2F04%2FVegNews.MealBox.ElevenMadisonHome.jpg.jpg&imgrefurl=https%3A%2F%2Fwww.greenqueen.com.hk%2Feleven-madison-park-vegan-meal-kits%2F&docid=jHRolY1W7e6FWM&tbnid=JL6nqRJH4aZx9M&vet=12ahUKEwicl7XFtdCFAxWOsVYBHSS2DqoQM3oFCIMBEAA..i&w=2500&h=1958&hcb=2&ved=2ahUKEwicl7XFtdCFAxWOsVYBHSS2DqoQM3oFCIMBEAA" alt = ""/>
        <div className= 'ml-3'>
            <p>Full Name</p>
            <p className= 'opacity-70'>Username</p>
        </div>
        </div>
    </div>
  )
}

export default SearchUserCard