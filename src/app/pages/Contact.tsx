import { Input } from '@mui/base';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <motion.article
      className="container mx-auto px-10 py-16"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", duration: 3 } }
      }}
    >
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <div className="text-fuchsia-700 text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            Let's get <br />in touch.
          </div>
          <div className="font-medium">
            Do you have an idea for something you want to <br /> create or a project you want to talk about?
          </div>
          <div className="font-medium mt-16">
            You can reach out by emailing
            <div className="text-fuchsia-700 underline">
              <a href="mailto:charcaedonaire@outlook.com"> charcaedonaire@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="flex-none self-center text-2xl px-12">or</div>

        <div className="flex-1 font-normal">
          <div className="mt-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email <span className="text-zinc-400">(require)</span>
            </label>
            <input className="appearance-none border border-black w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Your email" />
          </div>
          <div className="mt-6">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name <span className="text-zinc-400">(require)</span>
            </label>
            <input className="appearance-none border border-black w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your name" />
          </div>
          <div className="mt-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Message <span className="text-zinc-400">(require)</span>
            </label>
            <textarea className="appearance-none border border-black w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Write your message here..." />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
