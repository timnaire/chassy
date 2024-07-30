import { motion } from "framer-motion";
import { fadeInVariant } from "../shared/animations/fade-in.variant";

export function About() {
  return (
    <article className="container mx-auto mt-36">
      <div className="flex justify-center">
        <span className="text-5xl font-bold">
          Get to know <span className="text-fuchsia-900">ME</span>
        </span>
      </div>

      {/* Avatar here */}
      <div>

      </div>

      <div className="text-4xl font-bold mt-12">
        WHY <span className="text-5xl text-fuchsia-900 font-bold">ME?</span>
      </div>

      <div className="flex justify-center text-3xl mt-6 mt-80 mb-24">
        My Strong &nbsp; <span className="text-fuchsia-900 font-bold">WORK ETHICS</span>
      </div>

      <div className="grid grid-cols-3 gap-24 mb-12">
        <motion.div
          className="bg-fuchsia-50 p-14 rounded-3xl"
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
          className="bg-fuchsia-50 p-14 rounded-3xl"
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
          className="bg-fuchsia-50 p-14 rounded-3xl"
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

      <div className="text-4xl font-bold mt-12 mb-24">
        Work <span className="text-5xl text-fuchsia-900 font-bold">Recognition</span>
      </div>

      <div className="mb-24">
        <motion.div
          className="flex justify-around"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInVariant}
        >
          <img src="https://placehold.co/400x350" alt="work-recognition" className="origin-bottom -rotate-3 rounded-3xl" />
          <div className="text-xl font-medium w-46 self-center mb-24">
            I was honored as one of the <br /> <span className="text-fuchsia-900 font-bold">top team leaders</span>
          </div>
        </motion.div>

        <div className="flex justify-around mt-24">
          <div className="text-xl font-medium w-46 self-center mb-24">
            I achieved recognition as the <br /> <span className="text-fuchsia-900 font-bold">Team Lead of the Quarter</span>
          </div>
          <img src="https://placehold.co/400x350" alt="work-recognition" className="origin-bottom rotate-3 rounded-3xl" />
        </div>

        <div className="flex justify-around mt-24">
          <img src="https://placehold.co/400x350" alt="work-recognition" className="origin-bottom -rotate-3 rounded-3xl" />
          <div className="text-xl font-medium w-46 self-center mb-24">
            I received an award for being <span className="text-fuchsia-900 font-bold">the best <br /> agent overall</span>
            , achieving our goals, <br /> and maintaining a perfect 100% <br /> quality score consistently. Prior to <br /> being
            a team leader.
          </div>
        </div>
      </div>

      <div className="flex justify-center text-3xl mt-6 mt-80 mb-24">
        View My &nbsp; <span className="text-fuchsia-900 font-bold">RESUME here.</span>
      </div>
    </article>
  );
}
