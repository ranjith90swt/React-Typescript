import { RouterProvider } from 'react-router-dom';
import './App.css'
import router from './routes/AppRouter';
import ThemeManager from './components/common/ThemeManager';

function App() {

  return (
    <>
      <ThemeManager />
      <RouterProvider router={router} />
    </>
  );
}

export default App
