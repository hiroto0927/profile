import Header from "@/src/components/ui/header";
import Footer from "@/src/components/ui/footer";
import MainContent from "@/src/components/features/main-content";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
