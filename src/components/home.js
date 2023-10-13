import PostList from "./postList";

const Home = () =>{
    return (
        <div className="home">
            <h1>About</h1>
            <p>This is a demo app created in React to showcase the speed of SonicJs in comparison to a standard Node.js API.</p>
            <PostList url={process.env.REACT_APP_API_SONICJS} />
            {/* <PostList url={process.env.REACT_APP_API_SUPABASE} /> */}
        </div>
    )
}

export default Home;