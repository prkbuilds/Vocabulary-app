import NavBar from './components/NavBar';
import WordList from './components/WordList'
import AddWord from './components/AddWord'

import './App.css';

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <WordList />
      <AddWord />
    </div>
  );
}
