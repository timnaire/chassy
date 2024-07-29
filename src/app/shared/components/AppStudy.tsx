import { Button } from '@mui/base';
import { motion } from 'framer-motion';
import { fadeInVariant } from '../animations/fade-in.variant';

interface AppStudyProps {
  title: string;
  description: string;
  image: string;
}

export function AppStudy({ title, description, image }: AppStudyProps) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeInVariant}
    >
      <div className="app-studies container mx-auto my-10">
        <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 px-10 md:px-0">
          <div className="flex flex-col content-center xl:mr-40 order-last md:order-first ml-3 md:ml-0">
            <h1 className="lg:self-end lg:w-96 text-xl sm:text-3xl md:text-5xl font-bold mt-10">{title}</h1>
            <div className="font-medium lg:self-end lg:w-96 mt-14">
              {description}
            </div>
            <Button className="font-medium lg:self-end lg:w-96 flex my-10">
              View Project <span className="material-icons ml-3">north_east</span>
            </Button>
          </div>
          <div className="flex justify-center self-center h-full order-first md:order-last">
            <img className="rounded-lg" src={image} alt={title} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
