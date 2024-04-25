import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/HomePage/Homepage';
import Sidebar from './components/Sidebar/Sidebar';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Profile from './pages/ProfilePage/Profile';
import Story from './pages/Story/Story';
import Router from './Router';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App flex flex-col h-full">
      < QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
