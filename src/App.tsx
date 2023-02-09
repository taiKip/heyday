import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Posts from './features/Posts';
import FullPost from './features/FullPost';


function App() {
  return (
   
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Posts />} />
        <Route path=':postId' element={<FullPost/>} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

  );
}

export default App;
