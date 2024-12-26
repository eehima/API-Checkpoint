

const BlogCard = ({title, body}) => {
    const style = {
        card: {
            width: "350px",
            height: "350px",
            border: "2px solid black",
            borderRadius: "15px",
            padding: "10px",
            margin: "10px",
            backgroundColor: "black",
            color: "gold"
        }
    }
  return (
    <div style={style.card}>
        <h4>Title: {title}</h4>
        <p>Body: {body}</p>
    </div>
  )
}

export default BlogCard