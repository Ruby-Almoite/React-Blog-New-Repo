import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import "./home.css"
import useFetch from "../../useFetch"



export default function Home() {
const {data :blogs, isPending, error} =useFetch ('http://localhost:8000/blogs')
  return (
<>
      <Header/>
      <div className ="home">

        <Posts />
        <Sidebar />

    </div>

</>
  )
}
