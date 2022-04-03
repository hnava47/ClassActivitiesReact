// import HelloWorld from './components/HelloWorld';
// import JsxVariables from "./components/JsxVariables";
// import Greeter from './components/Greeter';

import {
  HelloWorld,
  JsxVariables,
  Greeter,
  List
} from './components';

const App = () => {
  const students = ['Stephen', 'Matt', 'Rhys', 'Ian', 'Stephen'];
  const favoriteCryptos = ['BTC', 'ATOM', 'ETH']

  return (
    <>
      <List items={students}/>
      <List items={favoriteCryptos}/>
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
