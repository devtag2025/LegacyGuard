import Header from "../shared/header/Header";
import Footer from "../shared/footer/Footer";
export function PageLayout({ children, transparentHeader = false }) {
  return (
    <div className="min-h-screen bg-night flex flex-col">
      <Header transparent={transparentHeader} />
      {/* pt-16 md:pt-[70px] offsets the fixed header height */}
      <main className="flex-1 pt-16 md:pt-[70px]">
        {children}
      </main>
      <Footer />
    </div>
  );
}