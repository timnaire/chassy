import { useState } from 'react';
import { Tab, TabPanel, Tabs, TabsList } from '@mui/base';
import { AppStudy } from '../shared/components/AppStudy';

export function CaseStudy() {
  const [selectedTab, setSelectedTab] = useState<number | string | null>(0);
  const handleTabChange = (value: number | string | null) => {
    setSelectedTab(value);
  }

  const isActive = (tab: number | string | null): string => {
    console.log(selectedTab === tab);
    return selectedTab === tab ? 'text-fuchsia-700' : '';
  }

  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-4xl md:text-5xl mt-16 text-fuchsia-700 flex justify-center">
          Case Studies
        </h2>
      </div>
      <Tabs className="mt-32" value={selectedTab} onChange={(e, value) => handleTabChange(value)}>
        <div className="container mx-auto">
          <TabsList className="flex flex-col md:flex-row md:ml-32 text-xl divide-y md:divide-y-0 md:divide-x md:divide-black">
            <Tab value={0} className={`md:px-12 ${isActive(0)}`}>All Designs</Tab>
            <Tab value={1} className={`md:px-12 ${isActive(1)}`}>Mobile Design</Tab>
            <Tab value={2} className={`md:px-12 ${isActive(2)}`}>Web Design</Tab>
          </TabsList>
        </div>

        <div className="mt-32">
          <TabPanel value={0}>
            <AppStudy title="Apprise" description="descriptio here" image="iimahe" />
          </TabPanel>
          <TabPanel value={1}>Mobile Designs</TabPanel>
          <TabPanel value={2}>Web Designs</TabPanel>
        </div>
      </Tabs>
    </>
  );
}

