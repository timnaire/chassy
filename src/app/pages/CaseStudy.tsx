import { useState } from 'react';
import { Tab, TabPanel, Tabs, TabsList } from '@mui/base';
import { AppStudy } from '../shared/components/AppStudy';
import { AppStudies } from '../core/models/constants';
import { LinkedIn } from '../shared/components/LinkedIn';
import { motion } from 'framer-motion';

export function CaseStudy({ showLinkedin = true }) {
  const [selectedTab, setSelectedTab] = useState<number | string | null>(0);
  const mobileStudies = AppStudies.filter(study => study.isMobile);
  const webStudies = AppStudies.filter(study => !study.isMobile);
  const linkedInUrl = 'https://www.linkedin.com/in/charcae-donaire-26b7a0183/';

  const handleTabChange = (value: number | string | null) => {
    setSelectedTab(value);
  }

  const isActive = (tab: number | string | null): string => {
    return selectedTab === tab ? 'text-fuchsia-700' : '';
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { type: "spring", duration: 3 } }}
    >
      <div className="container mx-auto">
        <h2 className="flex justify-center mt-16 text-fuchsia-700 text-2xl sm:text-3xl md:text-4xl font-medium">
          Case Studies
        </h2>
      </div>
      <Tabs className="mt-32" value={selectedTab} onChange={(e, value) => handleTabChange(value)}>
        <div className="container mx-auto flex justify-center">
          <TabsList className="flex flex-col w-40 md:w-full md:flex-row md:justify-center xl:justify-start xl:ml-12 2xl:ml-40 text-xl divide-y md:divide-y-0 md:divide-x md:divide-black">
            <Tab value={0} className={`py-3 md:px-12 md:py-0 ${isActive(0)}`}>All Designs</Tab>
            <Tab value={1} className={`py-3 md:px-12 ${isActive(1)}`}>Mobile Design</Tab>
            <Tab value={2} className={`py-3 md:px-12 ${isActive(2)}`}>Web Design</Tab>
          </TabsList>
        </div>

        <div className="mt-32">
          <TabPanel value={0} className="bg-zinc-200 py-10 md:px-10">
            {AppStudies.length > 0 && (
              AppStudies.map(study => (
                <AppStudy key={study.title} title={study.title} description={study.description} image={study.image} />
              ))
            )}
          </TabPanel>
          <TabPanel value={1} className="bg-zinc-200 py-10 md:px-10">
            {mobileStudies.length > 0 && (
              mobileStudies.map(study => (
                <AppStudy key={study.title} title={study.title} description={study.description} image={study.image} />
              ))
            )}
          </TabPanel>
          <TabPanel value={2} className="bg-zinc-200 py-10 md:px-10">
            {webStudies.length > 0 && (
              webStudies.map(study => (
                <AppStudy key={study.title} title={study.title} description={study.description} image={study.image} />
              ))
            )}
          </TabPanel>
        </div>
      </Tabs >

      {showLinkedin && (
        <div className="container px-6 md:mx-auto">
          <div className="mt-24 mb-12 text-xl">
            Follow me <LinkedIn url={linkedInUrl} />
          </div>
        </div>
      )}
    </motion.article>
  );
}

