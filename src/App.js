import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './app/components/header';
import Result from './app/views/result/result';
import Form from './app/views/form/form';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
