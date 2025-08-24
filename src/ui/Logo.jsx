import { HiGlobeAlt } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link
        to="/home"
        className="flex items-center gap-2 font-bold transition-colors hover:bg-slate-700 rounded-md"
      >
        <HiGlobeAlt />
        YetAnotherPersonalWebpage
      </Link>
    </div>
  );
}

export default Logo;
