import { HiGlobeAlt } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link
        to="/home"
        className="flex items-center gap-2 rounded-md font-bold transition-colors hover:bg-slate-700"
      >
        <HiGlobeAlt />
        YetAnotherPersonalWebsite
      </Link>
    </div>
  );
}

export default Logo;
