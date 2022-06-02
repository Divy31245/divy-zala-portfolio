import * as emailjs from "emailjs-com";
import Swal from "sweetalert2";
const SERVICE_ID = "service_fm083xj";
const TEMPLATE_ID = "template_lvm8jh4";
const USER_ID = "G3ScRSnkjakhbG8Jj";

export default function ContactForm() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      }
    );
    e.target.reset();
  };

  return (
    <main className="bottom-0">
      <div className="p-8 contactborder bg-[url('https://p0.pikist.com/photos/479/527/background-gradation-geomatri-form-blue-the-formation-of-design-decor-decorative.jpg')] bg-repeat-round">
        <form onSubmit={handleOnSubmit} className="flex flex-col items-center justify-center space-y-4">
          <div className="flex flex-col items-center justify-center w-full md:w-1/2 ">
            <h1 className="text-4xl font-extrabold text-white">Contact me!</h1>
            <p className="text-md font-bold text-white">
              If you have an application you are interested in developing that
              you need built or a project that needs coding. I&apos;d love to
              help with it.
            </p>
          </div>

          <label className="flex flex-col space-y-2 text-white w-full md:w-1/2  ">
            <span>Name</span>
            <input
              type="text"
              placeholder="Name"
              name="from_name"
              className="rounded-lg border-blue-300 active:border-blue-400 p-3 text-black"
            />
          </label>
          <label className="flex flex-col space-y-2 text-white w-full md:w-1/2 ">
            <span>Email</span>
            <input
              type="email"
              placeholder="Email"
              className="rounded-lg border-blue-300 active:border-blue-400 p-3 text-black"
            />
          </label>
          <label className="flex flex-col space-y-2 text-white w-full md:w-1/2 ">
            <span>Enter your message here</span>
            <textarea
              placeholder="Enter your message"
              rows={8}
              name="message"
              className="rounded-lg border-blue-300 active:border-blue-400 p-3 text-black"
            />
          </label>
          <button
            className="p-2 border-blue-400 text-blue-600 bg-white rounded-xl hover:bg-blue-500 hover:text-white mt-1 transtition-all duration-200"
            type="submit"
          >
            Get in touch
          </button>
        </form>
      </div>
    </main>
  );
}
