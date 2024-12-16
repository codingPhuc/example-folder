import Header from "./components/Header";
import CoreConcept from "./components/Coreconcept";
import reactCoreconcepts from "./assets/react-core-concepts.png";
import config from "./assets/config.png";
import jsxUi from "./assets/jsx-ui.png";
import TabButton from "./components/TabButton";

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
function App() {
  function handleSelect(selectedButton) {
    console.log(selectedButton);
  }

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
          Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
