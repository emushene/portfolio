import React, { useRef, useState, FormEvent, useEffect } from "react";
import emailjs from "@emailjs/browser";
import contactpic from "../Hero/richard-mucene-devops-engineer-systems-administrator-background.png";

type Props = {};

const ContactPage = (props: Props) => {
  const [success, setSuccess] = useState<boolean>(false);
  const [failError, setFailError] = useState<boolean>(false);

  const serviceId = process.env.REACT_APP_PUBLIC_SERVICE_ID;
  const templateId = process.env.REACT_APP_PUBLIC_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setFailError(false);
    setSuccess(false);

    if (form.current) {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        () => {
          setSuccess(true);
          form.current?.reset(); // Use optional chaining here
        },
        (error) => {
          console.error("Failed to send email:", error);
          setFailError(true);
        }
      );
    } else {
      console.error("Form reference is null");
      setFailError(true);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (success || failError) {
      timer = setTimeout(() => {
        setSuccess(false);
        setFailError(false);
      }, 3000);
    }

    return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
  }, [success, failError]);

  return (
    <div
      className="flex flex-col items-center mt-8 mb-16 justify-center select-none md:ml-16 xl:ml-64 2xl:ml-64  
    gap-6 md:gap-24 md:flex-row xl:mr-20"
    >
      <div className="flex items-center justify-center flex-1">
        <div className="flex p-4 flex-col flex-wrap w-2/3 flex-1 ">
          <h1 className="text-5xl font-bold lg:text-6xl lg:max-w-md">
            Let's work together
          </h1>
          <div className="p-4">
            <h2 className="text-xl font-bold">Mail</h2>
            <span className="text-gray-500 cursor-pointer text-2xl">
              e.mushene@gmail.com
            </span>
          </div>
          <div className="p-4 text-xl">
            <h2 className="font-bold">Address</h2>
            <span className="text-gray-500 text-2xl">
              12 Minerva St, Kensington. Johannesburg 2094
            </span>
          </div>
          <div className="p-4 font-bold text-xl">
            <h2>Telephone</h2>
            <span className="text-gray-500 text-2xl">+27 72 620 3386</span>
          </div>
        </div>
        <div className="w-1/3"></div>
      </div>
      <div className="flex flex-1 w-full items-center justify-center flex-grow ">
        <form
          onSubmit={sendEmail}
          ref={form}
          className="min-w-[80%] gap-2 flex flex-col justify-between shadow sm:p-8"
        >
          <span className="text-teal-600">Dear Richard Mucene,</span>
          <textarea
            rows={12}
            placeholder="I am writing this message, regarding..."
            className="w-full p-2 border-gray-300 border rounded text-teal-900 focus:border-blue-300 focus:outline-none"
            name="user_message"
          />
          <span className="text-teal-600">My email address is:</span>
          <input
            type="email"
            required
            placeholder="email address"
            className="w-full border-gray-300 p-2 border rounded focus:border-blue-300 focus:outline-none"
            name="user_email"
          />
          <span className="text-teal-600">Regards, </span>
          <input
            type="text"
            required
            placeholder="name"
            className="sm:min-w-[90%] w-full p-2 border-gray-300 border rounded focus:border-blue-300 focus:outline-none"
            name="user_name"
          />
          <button className="px-4 py-2 mt-8 bg-gray-600 text-white rounded border-gray-300 hover:bg-green-500 hover:opacity-70">
            Send Message
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been successfully delivered to Richard
            </span>
          )}
          {failError && (
            <span className="text-red-600 font-semibold">
              Oops! Something went wrong. Please reach out to Richard by phone.
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
