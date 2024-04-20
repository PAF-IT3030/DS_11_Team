const CommentsCard = () => {
  return (
    <div>
        <div>
            <div className = 'flex items-center'>
                <div>
                </div>
                     <img className="h-9 w-9 rounded-full" src='https://img.freepik.com/free-photo/side-view-young-woman-shooting-with-projector_23-2149424927.jpg?w=360&t=st=1713608879~exp=1713609479~hmac=08f4db8d129cd6ceed384e2ce2c76b76ab9270d69ffcfb76de092f81d797fc0c' alt='' />
                </div>
                <div className = 'ml-3'>
                    <p>
                        <span className = 'font-semibold'>
                            Username
                        </span>
                        <span className= 'ml-2'>
                            Nice Post
                        </span>
                    </p>
                    <div className = 'flex items-center space-x-3 text-xs opacity-60 pt-2'>
                        <span>10 min ago</span>
                        <span>14 likes</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CommentsCard