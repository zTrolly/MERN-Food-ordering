import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

type Props = {
 children: React.ReactNode;
 displayHeader?: boolean;
  displayFooter?: boolean;
  displayHero?: boolean;
}
export const Layout = ({children, displayFooter = true, displayHeader = true, displayHero = true }: Props) => {
  return ( 
    <div className="flex flex-col min-h-screen">
      {displayHeader && <Header />}
      {displayHero && <Hero />}
      <main className="container mx-auto py-10 flex-1">
        {children}
      </main>
      {displayFooter && <Footer />}
     </div>
  );
}