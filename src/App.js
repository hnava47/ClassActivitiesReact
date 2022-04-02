import HelloWorld from './components/HelloWorld';
// JSX = JavaScript and XML
// A functional component
// it's a function that just returns some html

// As a rule, if your component returns HTML, it has to start with a capital letter

// In react components that we create become HTML elements that will return
// the html elements that our components return

export const App  = () => {
  return (
    <>
      <HelloWorld/>
      <HelloWorld/>
    </>
  );
}

export default App;
