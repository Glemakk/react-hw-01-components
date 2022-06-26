import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import user from './data/user.json';
import data from './data/statistics.json';
import FriendList from './components/FriendList/FriendList';
import friendsData from './data/friends.json';
import transactions from './data/transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

function App() {
  const { username, tag, location, avatar, stats } = user;

  return (
    <div className="App">
      <h1>Hello</h1>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friendsData} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
