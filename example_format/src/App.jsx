import Header from "./components/Header";
import CoreConcept from "./components/Coreconcept";
import reactCoreconcepts from "./assets/react-core-concepts.png";
import config from "./assets/config.png";
import jsxUi from "./assets/jsx-ui.png";
import componentsImg from "./assets/components.png";
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

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "Components",
    description:
      "The core UI building block - compose the user interface by combining multiple components.",
  },
  {
    image: jsxUi,
    title: "JSX",
    description:
      "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
  },
  {
    image: config,
    title: "Props",
    description:
      "Make components configurable (and therefore reusable) by passing input data to them.",
  },
  {
    image: reactCoreconcepts,
    title: "State",
    description:
      "React-managed data which, when changed, causes the component to re-render & the UI to update.",
  },
];

export const EXAMPLES = {
  components: {
    title: "Components",
    description:
      "Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.",
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  jsx: {
    title: "JSX",
    description:
      "JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).",
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  props: {
    title: "Props",
    description:
      "Components accept arbitrary inputs called props. They are like function arguments.",
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  state: {
    title: "State",
    description:
      "State allows React components to change their output over time in response to user actions, network responses, and anything else.",
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};
// tell react this  component function will executed again
function App() {
  // let tabContent = "Please  click a button";
  const [selectedTopic, setSelectedTopic] = useState("");
  // way used the tabs content is set before return

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div di="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  function handleSelect(selectedButton) {
    // console.log(selectedButton);
    // event thought we assign the tab with new value it still does not change
    // the function is executed but the UI is not updated
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
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Componets
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {/* in this the tabs content is return while being change  */}
          {/* {!selectedTopic ? (
            <p> Please select a topics.</p>
          ) : (
            <div di="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
