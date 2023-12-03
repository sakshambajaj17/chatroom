
import './App.css';
import Chats from './comp/Chats';
import SignInn from './comp/SignInn';
import { auth } from './firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function App() {
  const [user] = useAuthState(auth)
  return (
    <>
      <SignInn/>
      <Chats/>
    
    </>
  );
}

export default App;
