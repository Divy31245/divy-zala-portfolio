import LeftSidebar from "../components/sidebar-left/Sidebar-left";
import ContactForm from "../components/contactme/ContactForm";
export default function Contactme() {
  return (
    <main className="md:flex md:h-screen bg-blue-50">
      <LeftSidebar />
      <div className="hidden md:flex md:w-1/4 h-screen scrollbar-hide"></div>
      {/* <div className="md:w-3/4 md:grid md:grid-cols-2 md:grid-rows-3 md:gap-4 p-4 place-items-center"></div> */}
      <div className="flex flex-col w-full md:w-3/4 p-3">
          <ContactForm />
      </div>
    </main>
  );
}
