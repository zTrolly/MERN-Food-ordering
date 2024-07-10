import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const MobileNav = () => {

  const {user, logout, isAuthenticated, loginWithRedirect} = useAuth0();

  return ( <Sheet>
    <SheetTrigger>
     <Menu className="text-orange-500" size="32" />
    </SheetTrigger>

    <SheetContent className="space-y-3">
      {isAuthenticated ? (
        <div>
          <SheetTitle className="text-center"><span>Bem Vindo de volta, {user?.given_name}!</span></SheetTitle>
          <Separator className="mb-10" />
          <Link to="/user-profile" className="font-bold hover:text-orange-500 ">Perfil</Link>
          <Separator className="mb-5 mt-2"/>
          <SheetDescription className="flex">
            <Button onClick={() => logout()} className='flex-1 font-bold bg-gray-700 text-orange-500'>Sair</Button>
          </SheetDescription>
       </div>
       ) : (
        <>
        <SheetTitle className="text-center"><span>Bem Vindo(a) ao NLFoods</span></SheetTitle>
        <Separator />
        <SheetDescription className="flex">
          <Button onClick={async () => await loginWithRedirect()} className='flex-1 font-bold bg-orange-500'>Entrar</Button>
        </SheetDescription>
      </>
      )}
    </SheetContent>
  </Sheet> );
}
 
export default MobileNav;