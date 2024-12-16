import Header from "./components/Header";
import CoreConcept from "./components/Coreconcept";
import reactCoreconcepts from "./assets/react-core-concepts.png";
import config from "./assets/config.png";
import jsxUi from "./assets/jsx-ui.png";
import TabButton from "./components/TabButton";
import { useState } from "react";

const listCoreConcepts = [
  {
    title: "Concept1",
    description: "Description of Concept1",
    imagePath: reactCoreconcepts,
  },
  {
    title: "Concept2",
    description: "Description of Concept2",
    imagePath: config,
  },
  {
    title: "Concept3",
    description: "Description of Concept3",
    imagePath: jsxUi,
  },
];
// tell react this  component function will executed again
function App() {
  // let tabContent = "Please  click a button";
  const [selectedTopic, setSelectedTopic] = useState("please click a button");

  function handleSelect(selectedButton) {
    // console.log(selectedButton);
    // event thought we assign the tab with new value it still does not change
    // the function is executed but the UI is not updated
    tabContent = selecetedButton;
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  // this will not be executing agian due to the nature of react
  console.log("APP component  executing");
  return (
    <div>
      <Header></Header>
      <main>
        {/* <h2>Time to get started!</h2> */}
        <section id="core-concepts">
          <ul>
            <CoreConcept {...listCoreConcepts[0]}></CoreConcept>
            <CoreConcept {...listCoreConcepts[1]}></CoreConcept>
            <CoreConcept {...listCoreConcepts[2]}></CoreConcept>
            {/* <CoreConcept></CoreConcept> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* we are passing a function as a props */}
            <TabButton onSelect={() => handleSelect("components")}>
              Componets
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
