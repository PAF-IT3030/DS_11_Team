const SearchUserCard = () => {
  return (
    <div className = 'py-2 cursor-pointer'>
        <div className= 'flex items-center'>
            <img className= "w-10 h-10 rounded-full" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0khaUcbpblqXKUuxIpxyGB9VqRKmENQZWjbk8uXGEIg&s" 
            alt = ""/>
        <div className= 'ml-3'>
            <p>Full Name</p>
            <p className= 'opacity-70'>Username</p>
        </div>
        </div>
    </div>
  )
}

export default SearchUserCard