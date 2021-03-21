import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import user from './components/Profile/user.json';
import stats from './components/Statistics/statistical-data.json';
import friends from './components/FriendList/friends.json';

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics stats={stats} title="Upload stats" />
      <Statistics stats={stats} />

      <FriendList friends={friends} />
    </>
  );
}

export default App;
