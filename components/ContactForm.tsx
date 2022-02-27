import React from "react";
import { some } from "lodash";
const ContactForm = () => {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = React.useState(false);
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const sendMessage = async () => {
    const response = await fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(state),
    });
    const data = await response.json();

    return data;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    sendMessage()
      .then(() => {
        setSent(true);
        setState({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <form
      className="mt-4 space-y-6"
      action="#"
      method="POST"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={state?.name}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Your name"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Your Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={state?.email}
            autoComplete="email"
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Your email address"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            autoComplete="message"
            required
            value={state?.message}
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Your message"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={!state?.name || !state?.email || !state?.message}
          className={`transition-all group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white hover:bg-seagreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
            sent ? "bg-green-600" : "bg-dark_pink"
          } `}
        >
          {sent ? "Message Sent, Thanks" : "Hit me up!"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
