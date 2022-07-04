import './App.css';

import store from './store';

import Article from "./components/Article";
import Image from "./components/Image";

const App = () => {
  return (
    <div className="App">
      <Article articles={store.articles}/>
      <Image content={store.firstImage}/>
    </div>
  );
}
export default App;
