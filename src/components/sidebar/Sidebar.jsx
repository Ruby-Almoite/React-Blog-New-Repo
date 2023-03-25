import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className ="sidebar">

        <div className="sidebarItem">
            <span className="sidebarTitle">About Me </span>
            <img
            src="https://images.pexels.com/photos/8872809/pexels-photo-8872809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="" />
            <p> 
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quod, fugiat eos, id quam iure ducimus 
                porro aspernatur aperiam ipsum sapiente, tempora reiciendis modi optio tenetur quas possimus saepe exercitationem?
            </p>
        </div>

                        <div className="sidebarItem">

                        <span className="sidebarTitle"> CATEGORIES </span>
                        <ul className="sidebarList">
                            <li className="sidebarListItem">Life</li>
                            <li className="sidebarListItem">Work</li>
                            <li className="sidebarListItem">Music</li>
                            <li className="sidebarListItem">Style</li>
                            <li className="sidebarListItem">Sport</li>
                            <li className="sidebarListItem">Tech</li>  
                        </ul>
                        </div>


                        <div className="sidebarItem">
                        <span className="sidebarTitle">FOLLOW US </span>
                            <div className="sidebarSocial">
                                        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                                        <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                                        <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                                        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                            </div>
                            </div>
                       
        
        </div>

  
  )
}
