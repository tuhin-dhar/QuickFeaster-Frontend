import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <span className="flex space-x-2 items">
      {isAuthenticated ? (
        <>
          <Link
            to="/order-status"
            className="font-bold text-custom hover:text-customLight"
          >
            Order Status
          </Link>
          <UsernameMenu />
        </>
      ) : (
        <div className="flex gap-4">
          <Button
            variant={"ghost"}
            className="font-bold text-white hover:text-custom hover:bg-white"
            onClick={async () => await loginWithRedirect()}
          >
            Sign In
          </Button>
          <Button
            variant={"ghost"}
            className="font-bold hover:text-white hover:text-custom bg-white"
          >
            Sign Up{" "}
          </Button>
        </div>
      )}
    </span>
  );
};

export default MainNav;
