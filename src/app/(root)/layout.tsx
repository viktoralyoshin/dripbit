import Footer from "@/components/ui/Footer";
import UiNavbar from "@/components/ui/Navbar";
import { Divider, Spacer } from "@nextui-org/react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen bg-background">
      <UiNavbar />
      <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        {children}
      </main>
      <Spacer y={20}/>
      <Divider/>
      <Footer />
    </div>
  );
}
