import './Post.css'

const Post = ({setPostmode}) => {
    return(
        <div className='post-container' >
            <h3 className='post-year'>2021</h3>
            <article className='post'>
                <div className='post-title' onClick={setPostmode(true)}>title</div>
                <div className='post-date'>07,14,2021</div>
            </article>
            <article className='post'>
                <div className='post-title' onClick={setPostmode(true)}>title</div>
                <div className='post-date'>07,14,2021</div>
            </article>
        </div>
    )
}
export default Post;