import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

function UsernameMenu() {

  const {user, logout} = useAuth0();

  const getUserFallback = () => {
    const firstLetterFirstName = user?.name?.charAt(0);
    const firstLetterLastName = user?.name?.split(' ')[1]?.charAt(0);
    if (firstLetterFirstName && firstLetterLastName) {
      return firstLetterFirstName + firstLetterLastName;
    }

    return firstLetterFirstName;
  }

  return ( 
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
          <Avatar>
            <AvatarImage src={user?.picture} />
            <AvatarFallback>{getUserFallback()}</AvatarFallback>
           </Avatar>
           {user?.email}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>      
            <Link to="/user-profile" className="font-bold hover:text-orange-500">Perfil</Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>      
          <Button onClick={() => logout()} className="flex flex-1 font-bold bg-orange-500">Sair</Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
   );
}

export default UsernameMenu;