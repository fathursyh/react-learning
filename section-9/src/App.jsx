import WebSidebar from './components/navigations/WebSidebar.jsx';
import './App.css'
import NewProject from './components/NewProject.jsx';

function App() {
 return (
  <main className='h-screen my-8 flex gap-8'>
    <WebSidebar />
    <NewProject />
  </main>
 )
  
}

export default App
