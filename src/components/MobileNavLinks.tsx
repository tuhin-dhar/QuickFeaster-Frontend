import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <>
      <Link
        to="/user-profile"
        className="flex bg-white items-center font-bold hover:text-custom"
      >
        My Profile
      </Link>
      <Link
        to="/order-status"
        className="flex bg-white items-center font-bold hover:text-custom"
      >
        Order Status
      </Link>
      <Link
        to="/manage-restaurant"
        className="flex bg-white items-center font-bold hover:text-custom"
      >
        My Restaurant
      </Link>
      <Button
        onClick={() => logout()}
        className="flex items-center bg-red-500 px-3 font-bold hover:bg-red-700"
      >
        Sign Out
      </Button>
    </>
  );
};

export default MobileNavLinks;
