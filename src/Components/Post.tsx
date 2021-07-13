import './Post.css'
type Payload = {
    setPostmode : any
}
const Post = (payload : Payload) => {
    return(
        <div className='post-container'>
            <div className='post' onClick={payload.setPostmode(true)}>
                <h3>title</h3>
                <p>content content...</p>
            </div>
            <div className='post'>
                <h3>title</h3>
                <p>content content...</p>
            </div>
        </div>
    )
}
export default Post;