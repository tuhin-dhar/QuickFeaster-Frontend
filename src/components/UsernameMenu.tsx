import { DropdownMenu, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { CircleUserRound } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex text-white items-center px-3 font-bold hover:text-dark gap-2 ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0">
        <CircleUserRound />
        {user?.email}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="space-y-2 text-custom hover:border-none">
        <DropdownMenuItem className="hover:border-none hover:bg-slate-300">
          <Link to="/user-profile" className="font-bold ">
            My Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:border-none hover:bg-slate-300">
          <Link to="/manage-restaurant" className="font-bold ">
            My Restaurant
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem className="flex">
          <Button
            onClick={() => logout()}
            className="flex flex-1 bont-bold bg-custom hover:bg-red-500 hover:text-black hover:border-none"
          >
            Sign Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;
