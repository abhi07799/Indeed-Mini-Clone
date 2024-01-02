import './App.css';

import Homepage from './pages/Homepage';
import AllJobs from './pages/AllJobs';
import About from './pages/About';

import NavigationBar from './components/NavigationBar';
import {routePath} from './routes/routes';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CreatePost from './pages/CreatePost';


function App() {
  return (
    <>
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path={routePath.home} element={<Homepage />} />
        <Route path={routePath.allJobs} element={<AllJobs />} />
        <Route path={routePath.about} element={<About />} />
        <Route path={routePath.createPost} element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
