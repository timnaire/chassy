import { forwardRef } from 'react';
import { Button } from '@mui/base';
import { motion } from 'framer-motion';

interface AppStudyProps {
  title: string;
  description: string;
  image: string;
}

export const AppStudy = forwardRef<HTMLDivElement, AppStudyProps>(
  function AppStudy(props, ref) {
    const { title, description, image } = props;
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0, transition: { type: "spring", duration: 3 } }
        }}
      >
        <div ref={ref} className="app-studies container mx-auto my-10">
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
  });
