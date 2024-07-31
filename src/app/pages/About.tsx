import { motion } from "framer-motion";
import { fadeInVariant } from "../shared/animations/fade-in.variant";

export function About() {

  return (
    <article className="container mx-auto mt-36">
      <div className="about-me flex justify-center">
        <span className="text-5xl font-bold">
          Get to know <span className="text-fuchsia-900">ME</span>
        </span>
      </div>

      {/* Avatar here */}
      <div className="flex flex-col text-xl font-medium">
        <div className="hidden lg:block mt-36 text-center mb-12">
          They call me "<span className="text-fuchsia-900 font-bold">CHAS</span>"
        </div>
        <div className="flex justify-center">
          <div className="hidden lg:flex flex-col justify-between mr-12 w-72 text-right ">
            <div className="relative start-16">
              I'm <span className="text-fuchsia-900 font-bold">4'1</span>
            </div>
            <div>
              I have a <span className="text-fuchsia-900 font-bold">twin</span> brother
            </div>
            <div>
              I'm <span className="text-fuchsia-900 font-bold">keen</span> to details
            </div>
            <div className="relative start-16">
              <span className="text-fuchsia-900 font-bold">Matcha</span> drink addict
            </div>
          </div>
          <div className="mt-24 bg-sky-500 rounded-full md:hidden">
            <img src="https://placehold.co/250x250" alt="profile-avatar" className="rounded-full" />
          </div>
          <div className="mt-24 lg:my-0 bg-sky-500 rounded-full hidden md:flex">
            <img src="https://placehold.co/400x400" alt="profile-avatar" className="rounded-full" />
          </div>
          <div className="hidden lg:flex flex-col justify-between ml-12 w-72">
            <div className="relative end-16">
              I live in Cebu, <span className="text-fuchsia-900 font-bold">Philippines</span>
            </div>
            <div>
              I'm a <span className="text-fuchsia-900 font-bold">Career Shifter</span>
            </div>
            <div>
              You can catch me <span className="text-fuchsia-900 font-bold">playing</span> mobile games
            </div>
            <div className="relative end-16">
              "<span className="text-fuchsia-900 font-bold">Service</span>" is my love language
            </div>
          </div>
        </div>
        <div className="hidden lg:block mb-36 text-center mt-12">
          I prefer <span className="text-fuchsia-900 font-bold">quite</span> places
        </div>

        <div className="text-center mt-12 lg:hidden">
          <div className="my-3">They call me "<span className="text-fuchsia-900 font-bold">CHAS</span>"</div>
          <div className="my-3">I'm <span className="text-fuchsia-900 font-bold">4'1</span></div>
          <div className="my-3">I have a <span className="text-fuchsia-900 font-bold">twin</span> brother</div>
          <div className="my-3">I'm <span className="text-fuchsia-900 font-bold">keen</span> to details</div>
          <div className="my-3"><span className="text-fuchsia-900 font-bold">Matcha</span> drink addict</div>
          <div className="my-3">I live in Cebu, <span className="text-fuchsia-900 font-bold">Philippines</span></div>
          <div className="my-3">I'm a <span className="text-fuchsia-900 font-bold">Career Shifter</span></div>
          <div className="my-3">You can catch me <span className="text-fuchsia-900 font-bold">playing</span> mobile games</div>
          <div className="my-3">"<span className="text-fuchsia-900 font-bold">Service</span>" is my love language</div>
        </div>
      </div>

      <div className="flex justify-center md:justify-start items-center text-4xl font-bold mt-12 mb-6">
        WHY <span className="text-5xl text-fuchsia-900 font-bold ml-2">ME?</span>
      </div>

      <div className="flex flex-col items-center md:flex-row justify-center text-3xl mt-6 mb-24">
        My Strong <span className="text-fuchsia-900 font-bold ml-2">WORK ETHICS</span>
      </div>

      <div className="grid grid-rows-3 md:grid-rows-none md:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-24 mb-12">
        <motion.div
          className="bg-fuchsia-50 p-14 rounded-3xl mx-5 md:mx-0"
          custom={1}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInVariant}
        >
          <div className="font-bold mb-12">Reliability & Responsibility</div>
          <div className="font-medium">
            Ensuring deadlines are met and outcomes owned. I'm not just a partnet; Im your go-to ally for achieving excellence in every endeavor.
          </div>
        </motion.div>

        <motion.div
          className="bg-fuchsia-50 p-14 rounded-3xl mx-5 md:mx-0"
          custom={2}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInVariant}>
          <div className="font-bold mb-12">Leadership</div>
          <div className="font-medium">
            Goes beyond the ordinary. Every decision and action is direccted towards securing success for both of us.
          </div>
        </motion.div>

        <motion.div
          className="bg-fuchsia-50 p-14 rounded-3xl mx-5 md:mx-0"
          custom={3}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInVariant}>
          <div className="font-bold mb-12">Professionalism</div>
          <div className="font-medium">
            Where respect and integrity thrive. Let's build a professional relationship, and a positive attitude are the keys to our shared success.
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col items-center md:flex-row text-4xl font-bold mt-12 mb-24">
        Work <span className="text-5xl text-fuchsia-900 font-bold ml-2">Recognition</span>
      </div>

      <div className="mb-24">
        <motion.div
          className="grid grid-rows-1 md:grid-cols-2 flex justify-center"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInVariant}
        >
          <div className="flex justify-center">
            <img
              src="https://placehold.co/300x450"
              alt="work-recognition"
              className="origin-bottom -rotate-3 rounded-3xl" />
          </div>
          <div className="flex justify-center text-xl font-medium self-center text-center md:text-left mt-16 md:mt-0 mb-24">
            <div className="w-72 ">
              I was honored as one of the <span className="text-fuchsia-900 font-bold">top team leaders</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-rows-1 md:grid-cols-2 flex justify-center mt-24"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInVariant}
        >
          <div className="flex justify-center md:order-last">
            <img
              src="https://placehold.co/300x450"
              alt="work-recognition"
              className="origin-bottom rotate-3 rounded-3xl order-1" />
          </div>
          <div className="md:order-first flex justify-center text-xl font-medium self-center text-center mt-16  md:text-left mb-24">
            <div className="w-72 md:w-80">
              I achieved recognition as the <span className="text-fuchsia-900 font-bold">Team Lead of the Quarter</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-rows-1 md:grid-cols-2 flex justify-center mt-24"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInVariant}
        >
          <div className="flex justify-center">
            <img
              src="https://placehold.co/300x450"
              alt="work-recognition"
              className="origin-bottom -rotate-3 rounded-3xl" />
          </div>

          <div className="flex justify-center text-xl font-medium self-center md:text-left mt-16 md:mt-0 mb-24">
            <div className="w-72 md:w-96">
              I received an award for being <span className="text-fuchsia-900 font-bold">the best agent overall</span>
              , achieving our goals, and maintaining a perfect 100% quality score consistently. Prior to being a team leader.
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center text-3xl mt-6 mt-80 mb-24">
        View My <span className="text-fuchsia-900 font-bold ml-2">RESUME here.</span>
      </div>
    </article>
  );
}
