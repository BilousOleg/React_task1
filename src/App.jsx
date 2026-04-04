import './App.css';
import UserCard from './components/UserCard';

function App() {
  const usersInfo = [
    {
      userName: 'Emma Watson',
      email: '@EmWatson',
      gender: 'female',
      imageSrc:
        'https://image.tmdb.org/t/p/w500/A14lLCZYDhfYdBa0fFRpwMDiwRN.jpg',
      tweets: 1337,
      following: 561,
      followers: 718,
    },
    {
      userName: 'Chris Hemsworth',
      email: '@ChHemsworth',
      gender: 'male',
      imageSrc:
        'https://media.gq.com/photos/559307287cc23bc8642429bf/16:9/w_2560%2Cc_limit/hemsworth.jpg',
      tweets: 993,
      following: 869,
      followers: 1213,
    },
    {
      userName: 'Test Testovych',
      email: 'test@test',
      gender: '???',
      imageSrc: 'https://cdn-icons-png.flaticon.com/512/3076/3076297.png',
      tweets: 0,
      following: 0,
      followers: 0,
    },
  ];

  return (
    // Демонстрація динамічного визначення деяких стилів (inline-стилі) через створення декількох різних карток
    <section className="cardSection">
      <UserCard userInfo={usersInfo[0]} />
      <UserCard userInfo={usersInfo[1]} />
      <UserCard userInfo={usersInfo[2]} />
    </section>
  );
}

export default App;

