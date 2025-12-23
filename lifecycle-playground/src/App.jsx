import {useState} from 'react';
import LifecycleLogger from './components/LifecycleLogger';

const App = () => {

  const [showLogger, setShowLogger] = useState(false);
  
  return ( 
    <div className="flex flex-col items-center justify-center  min-h-screen">
      <h1 className="text-xl font-bold mb-4">React Lifecycle Playground</h1>
      <button 
        className="primary-button bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 hover:text-white transition"
        onClick={() => setShowLogger(!showLogger)}
        >Mount Logger</button>
      <div className="mt-6">
        {showLogger && <LifecycleLogger />}
      </div>
    </div>
   );
}
 
export default App;
