import PostList from "./postList";

const SonicJs = () => {
  return (
    <>
      <h1>SonicJs</h1>
      <p>
        This demo uses SonicJs's demo site here:{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://demo.sonicjs.com/admin"
        >
          https://demo.sonicjs.com/admint
        </a>.
      </p>
      <PostList url={process.env.REACT_APP_API_SONICJS} />
    </>
  );
};

export default SonicJs;
