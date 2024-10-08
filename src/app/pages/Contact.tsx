import { ChangeEvent, FormEvent, useState } from 'react';
import { Button } from '@mui/base';
import { LinkedIn } from '../shared/components/LinkedIn';
import { motion } from 'framer-motion';

export function Contact({ isPage = true }) {
  const [form, setForm] = useState({ email: '', name: '', message: '' });
  const linkedInUrl = 'https://www.linkedin.com/in/charcae-donaire-26b7a0183/';

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('form-name', 'contact');
    formData.append('email', form.email);
    formData.append('name', form.name);
    formData.append('message', form.message);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        alert('Thank you for your submission');
        setForm({
          email: '',
          name: '',
          message: '',
        });
      })
      .catch((error) => alert(error));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  if (isPage) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <motion.article
      className={
        isPage ? 'container mx-auto p-3 md:px-10 md:py-16 md:mt-72' : 'container mx-auto p-3 md:px-10 md:py-16'
      }
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { type: 'spring', duration: 3 } }}
    >
      <div className="flex flex-col md:flex-row overflow-x-auto">
        <div className="flex-1">
          <div className="text-fuchsia-700 text-xl sm:text-3xl md:text-4xl font-bold mb-3">
            Let's get <br />
            in touch.
          </div>
          <div className="text-md font-medium">
            Do you have an idea for something you want to <br /> create or a project you want to talk about?
          </div>
          <div className="text-md font-medium mt-16">
            You can reach out by emailing
            <div className="text-fuchsia-700 underline">
              <a href="mailto:charcaedonaire@outlook.com"> charcaedonaire@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="flex-none self-center text-2xl px-12 py-6">or</div>

        <div className="md:flex flex-1 md:justify-end font-normal">
          <form
            noValidate
            autoComplete="off"
            name="contact"
            onSubmit={(e) => handleSubmit(e)}
            className="md:w-11/12 lg:w-10/12"
            method="POST"
            data-netlify="true"
          >
            <div className="text-md md:text-xl font-medium mb-10">Drop me a message, and we can have a chat!</div>
            <input type="hidden" name="form-name" value="contact" />
            <div className="mt-6">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email <span className="text-zinc-400">(require)</span>
              </label>
              <input
                id="email"
                className="appearance-none border border-black w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mt-6">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Name <span className="text-zinc-400">(require)</span>
              </label>
              <input
                id="name"
                className="appearance-none border border-black w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                placeholder="Your name"
                autoComplete="off"
                value={form.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Message <span className="text-zinc-400">(require)</span>
              </label>
              <textarea
                id="message"
                className="appearance-none border border-black w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="message"
                placeholder="Write your message here..."
                value={form.message}
                onChange={(e) => handleChange(e)}
              />
            </div>

            <Button
              type="submit"
              className="bg-fuchsia-900 text-white px-5 md:px-10 py-3 font-bold text-sm md:text-lg rounded-full mt-12"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>

      {isPage && (
        <div className="container mx-auto">
          <div className="mt-24 mb-12 text-xl">
            Follow me <LinkedIn url={linkedInUrl} />
          </div>
        </div>
      )}
    </motion.article>
  );
}
