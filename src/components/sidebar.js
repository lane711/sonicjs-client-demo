import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div
      class="d-flex flex-column flex-shrink-0 p-3 text-white"
      style={{ width: 100 + "%" }}
    >
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      >
        <span class="fs-4">🔥 API Framework Comparison</span>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/sonicjs">
            SonicJs
          </Link>
        </li>

        <li class="nav-item">
          <Link className="nav-link" to="/supabase">
            Supabase
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
