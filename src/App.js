import "./App.css";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Tag,
  Center,
} from "@chakra-ui/react";

import { syllabusData } from "./syllabus";

function App() {
  return (
    <>
      <Center margin="1rem">
        Javascript syllabus
      </Center>
      <Accordion>
        {syllabusData.map((sb) => (
          <AccordionItem key={sb.durationTitle}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {sb.durationTitle}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box display="flex" flexWrap="wrap">
                {sb.topics.map((topic) => (
                  <Tag key={topic} margin="0.5rem">
                    {topic}
                  </Tag>
                ))}
              </Box>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

export default App;
