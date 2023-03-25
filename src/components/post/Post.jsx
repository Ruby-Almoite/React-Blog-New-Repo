import "./post.css"

export default function post() {
  return (
    <div className ="posts">
      <img className ="postImg"
      src="https://images.pexels.com/photos/2293696/pexels-photo-2293696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
      alt=""/>
                <div className="postInfo">
                    <div className="postCats">
                        <span className="postCat">Music</span>
                        <span className="postCat">Life</span>
                    </div>
                    <span className="postTitle">
                        Lorem ipsum dolor sit amet 
                    </span>
                    <hr/>
                    <span className="postDate">1 hour ago</span>
                </div>
                <p className="postDesc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore suscipit architecto, 
                    veniam, quibusdam ducimus voluptatem ut esse itaque beatae quisquam, optio eveniet mollitia 
                    nulla quidem placeat eius blanditiis assumenda. Dolorem!  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore suscipit architecto, 
                    veniam, quibusdam ducimus voluptatem ut esse itaque beatae quisquam, optio eveniet mollitia 
                    nulla quidem placeat eius blanditiis assumenda. Dolorem!
                  
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore suscipit architecto, 
                    veniam, quibusdam ducimus voluptatem ut esse itaque beatae quisquam, optio eveniet mollitia 
                    nulla quidem placeat eius blanditiis assumenda. Dolorem!
                </p>
    </div>
  )
}
