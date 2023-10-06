import PostList from "./postList";

const Home = () =>{
    return (
        <div className="home">
            <h1>About</h1>
            <p>This is a demo app created in React to showcase the speed of SonicJs in comparison to a standard Node.js API.</p>
            <PostList />
        </div>
    )
}

export default Home;