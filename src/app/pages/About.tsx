import { motion } from 'framer-motion';
import { fadeInVariant } from '../shared/animations/fade-in.variant';
import { Highlight } from '../shared/components/Highlight';
import { TitleAndDescription } from '../shared/components/TitleAndDescription';
import { Breakpoints } from '../core/models/constants';
import { useIsMobile } from '../shared/hooks/useIsMobile';
import MyPic from './../../assets/images/MyPic.png';
import GetToKnowMe from './../../assets/images/get_to_know_me.png';
import NotebookLaptop from './../../assets/images/notebook_laptop.png';
import WorkRecogniation1 from './../../assets/images/image_1.png';
import WorkRecogniation2 from './../../assets/images/image_2.png';
import WorkRecogniation3 from './../../assets/images/image_3.png';
import MyResume from './../../assets/pdf/Charcae_Donaire_Resume.pdf';

const motionProps = {
  initial: 'offscreen',
  whileInView: 'onscreen',
  viewport: { once: true, amount: 0.5 },
  variants: fadeInVariant,
};

export function About() {
  const { isMobile } = useIsMobile({ breakpoint: Breakpoints.SM });
  const wrWidth = isMobile ? 350 : 500;
  const wrHeight = isMobile ? 450 : 650;

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  return (
    <motion.article
      className="container mx-auto mt-36"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { type: 'spring', duration: 3 } }}
    >
      <div className="about-me flex justify-center">
        {/* <span className="text-5xl font-bold">
          Get to know <span className="text-fuchsia-900">ME</span>
        </span> */}
        <img src={GetToKnowMe} alt="Get to know me" />
      </div>

      {/* Avatar here */}
      <div className="flex flex-col text-xl font-medium">
        <div className="hidden lg:block mt-36 text-center mb-12">
          <Highlight text='They call me "CHAS"' highlight="CHAS" />
        </div>
        <div className="flex justify-center">
          <div className="hidden lg:flex flex-col justify-between mr-12 w-72 text-right ">
            <div className="relative start-16">
              <Highlight text="I'm 4'1" highlight="4'1" />
            </div>
            <div>
              <Highlight text="I have a twin brother" highlight="twin" />
            </div>
            <div>
              <Highlight text="I'm keen to details" highlight="keen" />
            </div>
            <div className="relative start-16">
              <Highlight text="Matcha drink addict" highlight="Matcha" />
            </div>
          </div>
          <div className="mt-24 bg-fuchsia-500 rounded-full md:hidden">
            <img src={MyPic} height={250} width={250} alt="profile-avatar" className="rounded-full" />
          </div>
          <div className="mt-24 lg:my-0 bg-fuchsia-500 rounded-full hidden md:flex">
            <img src={MyPic} height={400} width={400} alt="profile-avatar" className="rounded-full" />
          </div>
          <div className="hidden lg:flex flex-col justify-between ml-12 w-72">
            <div className="relative end-16">
              <Highlight text="I live in Cebu, Philippines" highlight="Philippines" />
            </div>
            <div>
              <Highlight text="I'm a Career Shifter" highlight="Career Shifter" />
            </div>
            <div>
              <Highlight text="You can catch me playing mobile games" highlight="playing" />
            </div>
            <div className="relative end-16">
              <Highlight text='"Service" is my love language' highlight="Service" />
            </div>
          </div>
        </div>
        <div className="hidden lg:block mb-36 text-center mt-12">
          <Highlight text="I prefer quite places" highlight="quite" />
        </div>

        <div className="text-center mt-12 lg:hidden">
          <div className="my-3">
            <Highlight text='They call me "CHAS"' highlight="CHAS" />
          </div>
          <div className="my-3">
            <Highlight text="I'm 4'1" highlight="4'1" />
          </div>
          <div className="my-3">
            <Highlight text="I have a twin brother" highlight="twin" />
          </div>
          <div className="my-3">
            <Highlight text="I'm keen to details" highlight="keen" />
          </div>
          <div className="my-3">
            <Highlight text="Matcha drink addict" highlight="Matcha" />
          </div>
          <div className="my-3">
            <Highlight text="I live in Cebu, Philippines" highlight="Philippines" />
          </div>
          <div className="my-3">
            <Highlight text="I'm a Career Shifter" highlight="Career Shifter" />
          </div>
          <div className="my-3">
            <Highlight text="You can catch me playing mobile games" highlight="playing" />
          </div>
          <div className="my-3">
            <Highlight text='"Service" is my love language' highlight="Service" />
          </div>
        </div>
      </div>

      <div className="flex justify-center md:justify-start items-center text-4xl font-bold mt-12 mb-6">
        WHY <span className="text-5xl text-fuchsia-900 font-bold ml-2">ME?</span>
      </div>

      <div className="flex flex-col items-center md:flex-row justify-center text-3xl mt-6 mb-24">
        My Strong <span className="text-fuchsia-900 font-bold ml-2">WORK ETHICS</span>
      </div>

      <div className="grid grid-rows-3 md:grid-rows-none md:grid-cols-2 lg:grid-cols-3 gap-12 xl:gap-24">
        <motion.div className="bg-fuchsia-50 p-14 rounded-3xl mx-5 md:mx-0" custom={1} {...motionProps}>
          <TitleAndDescription
            title="Reliability & Responsibility"
            description="Ensuring deadlines are met and outcomes owned. I'm not just a partnet; Im your go-to ally for achieving excellence in every endeavor."
          />
        </motion.div>

        <motion.div className="bg-fuchsia-50 p-14 rounded-3xl mx-5 md:mx-0" custom={2} {...motionProps}>
          <TitleAndDescription
            title="Leadership"
            description="Goes beyond the ordinary. Every decision and action is direccted towards securing success for both of us."
          />
        </motion.div>

        <motion.div className="bg-fuchsia-50 p-14 rounded-3xl mx-5 md:mx-0" custom={3} {...motionProps}>
          <TitleAndDescription
            title="Professionalism"
            description="Where respect and integrity thrive. Let's build a professional relationship, and a positive attitude are the keys to our shared success."
          />
        </motion.div>
      </div>

      <motion.div className="flex justify-center" {...motionProps}>
        <img src={NotebookLaptop} height={600} width={750} alt="notebook-laptop" loading="lazy" />
      </motion.div>

      <div className="flex flex-col items-center md:flex-row text-4xl font-bold mt-12 mb-24">
        Work <span className="text-5xl text-fuchsia-900 font-bold ml-2">Recognition</span>
      </div>

      <div className="mb-24">
        <motion.div className="grid grid-rows-1 md:grid-cols-2 flex justify-center" {...motionProps}>
          <div className="flex justify-center">
            <img
              src={WorkRecogniation1}
              height={wrHeight}
              width={wrWidth}
              alt="work-recognition-1"
              loading="lazy"
              className="origin-bottom -rotate-3 rounded-3xl"
            />
          </div>
          <div className="flex justify-center text-xl font-medium self-center text-center md:text-left mt-16 md:mt-0 mb-24">
            <div className="w-72">
              <Highlight text="I was honored as one of the top team leader" highlight="top team leader" />
            </div>
          </div>
        </motion.div>

        <motion.div className="grid grid-rows-1 md:grid-cols-2 flex justify-center mt-24" {...motionProps}>
          <div className="flex justify-center md:order-last">
            <img
              src={WorkRecogniation2}
              height={wrHeight}
              width={wrWidth}
              alt="work-recognition-2"
              loading="lazy"
              className="rotate-3 rounded-3xl order-1"
            />
          </div>
          <div className="md:order-first flex justify-center text-xl font-medium self-center text-center mt-16  md:text-left mb-24">
            <div className="w-72 md:w-80">
              <Highlight
                text="I achieved recognition as the Team Lead of the Quarter"
                highlight="Team Lead of the Quarter"
              />
            </div>
          </div>
        </motion.div>

        <motion.div className="grid grid-rows-1 md:grid-cols-2 flex justify-center mt-24" {...motionProps}>
          <div className="flex justify-center">
            <img
              src={WorkRecogniation3}
              height={wrHeight}
              width={wrWidth}
              alt="work-recognition-3"
              loading="lazy"
              className="origin-bottom -rotate-3 rounded-3xl"
            />
          </div>

          <div className="flex justify-center text-xl font-medium self-center md:text-left mt-16 md:mt-0 mb-24">
            <div className="w-72 md:w-96">
              <Highlight
                text="I received an award for being the best agent overall, achieving our goals, and maintaining a perfect 100% quality score consistently. Prior to being a team leader."
                highlight="the best agent overall"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center text-xl sm:text-3xl mt-6 mt-56 mb-24">
        {/* To provide resume link */}
        View My
        <a className="text-fuchsia-900 font-bold ml-2" href={MyResume} target="_blank" rel="noopener noreferrer">
          RESUME here.
        </a>
      </div>
    </motion.article>
  );
}
