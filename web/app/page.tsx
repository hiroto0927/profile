import Header from "@/src/components/ui/header";
import MainContent from "@/src/components/features/main-content";
import Footer from "@/src/components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
