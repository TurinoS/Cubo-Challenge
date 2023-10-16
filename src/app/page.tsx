import About from "@/components/About";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
     <Header/>
      <main className="flex flex-col">
        <Banner />
        <Services />
        <About percentual={75} hour={33} cost={25}/>
      </main>
      <Footer />
    </>
     
  )
}
