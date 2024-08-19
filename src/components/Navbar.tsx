import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <Link className="transition-all duration-300 opacity-80 hover:opacity-100" to={"search"}>
        Search
      </Link>
      <Link className="transition-all duration-300 opacity-80 hover:opacity-100" to={"rank"}>
        Rank
      </Link>
    </div>
  );
};

export default Navbar;
