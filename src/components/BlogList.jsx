import BlogCard from "./BlogCard"
import { useEffect, useState } from "react"
const BlogList = () => {
    const styles = {
        grid: {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            padding: "20px"
        },
        h2: {
            textAlign: "center",
            padding: "20px",
            color: "gold",
            fontSize: "40px"
        }
        
    }
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        const url = "https://jsonplaceholder.typicode.com/posts"
       
        try {
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json()
            setPosts(data)
            setLoading(false)
            
        } catch (error) {
           console.log(error) 
           setLoading(false)
        }
    };

    useEffect(() => {
        fetchData()
    }, [])

  return (
    <div>
        <h2 style={styles.h2}>Blog List</h2>
        {loading && <p>Loading...</p>}
        <div style={styles.grid}>
            {posts.map((post) => (
                <BlogCard key={post.id} title={post.title} body={post.body} />
            ))}
        </div>
    </div>
  )
}

export default BlogList