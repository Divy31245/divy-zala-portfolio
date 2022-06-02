import Image from "next/dist/client/image";
const sections = [
  {
    id: 1,
    title: "HTML",
    subtitle: "Markup",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/888/888859.png",
    description:
      "HyperText Markup Language is the code that is used to structure a web page and its content. For example, content could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables",
  },
  {
    id: 2,
    title: "CSS",
    subtitle: "Styling",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/919/919826.png",
    description:
      "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.",
  },
  {
    id: 3,
    title: "Javascript",
    subtitle: "Interactive",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    description:
      "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc.",
  },
  {
    id: 4,
    title: "React",
    subtitle: "Dynamic",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/1125/1125008.png",
    description:
      "JavaScript library for building user interfaces, React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.      ",
  },
  {
    id: 5,
    title: "Next.js",
    subtitle: "Pre-rendering",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    description:
      "Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed. ",
  },
  {
    id: 6,
    title: "Node",
    subtitle: "Javascript",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/919/919825.png",
    description:
      " Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js is designed to build scalable network applications.",
  },
  {
    id: 7,
    title: "Express.js",
    subtitle: "Backend",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
    description:
      "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.",
  },
  {
    id: 8,
    title: "Tailwind CSS",
    subtitle: "Advanced styling",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
    description:
      "Tailwind CSS is basically a utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.",
  },
  {
    id: 9,
    title: "SQL Database",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/2772/2772165.png",
    description:
      "SQL is a domain-specific language used in programming and designed for managing data held in a relational database management system, or for stream processing in a relational data stream management system.",
  },
];

export default function ServicesSection() {
  return (
    <main className="w-full flex flex-col justify-center items-center p-8 space-y-4 ">
      <div>
        <h1 className="text-4xl text-blue-500 font-extrabold">My Skills</h1>
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-3  place-items-center p-4 h-full w-full ">
        {sections.map((section) => (
          <div
            key={section.id}
            className=" bg-white w-full border-2 border-blue-300 group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer p-4 "
          >
            <div className="flex justify-center items-center space-x-2">
              <Image src={section.imageUrl} height={175} width={200} alt="" />
              <div className="flex flex-col">
                <div className="text-xl font-bold">{section.title}</div>
                <div className="text-sm">{section.subtitle}</div>
              </div>
            </div>

            <div className="absolute flex items-center justify-center text-white bg-black w-full h-full opacity-0 transition-opacity duration-500 group-hover:opacity-80 top-0 place-items-center ">
              <div className="text-white text-xs">{section.description}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

{
  /* <div key={section.id} className=' top-0 h-full flex flex-col items-center justify-center border-2 border-blue-400 rounded-md shadow-md'>
<div>
    <Image src={section.imageUrl} height={175} width={200} alt="" />
</div>
<div className="text-sm">
  {section.description}
</div>
</div> */
}
