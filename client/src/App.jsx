import { RouterProvider } from 'react-router-dom';
import router from './Routes/index';
import './styles/index.css';

function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
