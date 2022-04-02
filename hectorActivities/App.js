// import HelloWorld from './components/HelloWorld';
// import JsxVariables from "./components/JsxVariables";
// import Greeter from './components/Greeter';

import {
  HelloWorld,
  JsxVariables,
  Greeter
} from './components';

const App = () => {
  return (
    <>
      <HelloWorld/>
      <JsxVariables/>
      <Greeter
        name='Hector'
        age={30}
        isHungry
        isSleep={false}
        favoriteCryptos={
          [
            'XRP',
            'XLM',
            'XDC'
          ]
        }
        pcSpecs = {
          {
            gpu: '3090',
            cpu: 'i11'
          }
        }
        myFn={()=> console.log('We out here breh')}
      />
      <Greeter name='Jen'/>
      <Greeter name='Noah'/>
    </>
  );
}

export default App;
