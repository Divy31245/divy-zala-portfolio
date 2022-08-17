import LeftSidebar from "../components/sidebar-left/LeftSidebar";

import ServicesSection from "../components/Services/Main-services";
export default function Services() {
  return (
    <main className="md:flex md:h-screen bg-blue-50">
      <LeftSidebar />
      <div className="hidden md:flex md:w-1/4 h-screen scrollbar-hide"></div>
      {/* <div className="md:w-3/4 md:grid md:grid-cols-2 md:grid-rows-3 md:gap-4 p-4 place-items-center"></div> */}
      <div className="flex flex-col w-full md:w-3/4">
        <ServicesSection />
      </div>
    </main>
  );
}
