import './App.css';
import UserCard from './components/UserCard';

function App() {
  const userInfo = {
    userName: 'Emma Watson',
    email: '@EmWatson',
    gender: 'female',
    imageSrc: 'https://image.tmdb.org/t/p/w500/A14lLCZYDhfYdBa0fFRpwMDiwRN.jpg',
    tweets: 1337,
    following: 561,
    followers: 718,
  };

  return (
    <>
      <UserCard userInfo={userInfo} />
    </>
  );
}

export default App;

