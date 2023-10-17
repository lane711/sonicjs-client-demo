import PostList from "./postList";

const Supabase = () => {
  return (
    <>
      <h1>Supabase</h1>
      <p>This demo uses the Supabase platform with a single simple edge function to query the data from Postgres.</p>
      <PostList url={process.env.REACT_APP_API_SUPABASE} />
    </>
  )
};

export default Supabase;
