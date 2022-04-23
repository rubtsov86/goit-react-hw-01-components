import Container from "./Container/Container";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import Friends from "./Friends/Friends";
import TransactionHistory from "./Transaction/TransactionHistory";


import ProfileData from './Profile/user';
import statisticsData from './Statistics/data';
import friendsList from './Friends/friends.json';
import transactions from './Transaction/transactions';


const { avatar, username, tag, location, stats } = ProfileData;


export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        textTransform: 'uppercase',
        color: '#010101',
      }}
    >

      <Profile
        avatar={avatar}
        name={username}
        tag={tag}
        location={location}
        stats={stats}
        />
        
      <Statistics
        arrayOfItems={statisticsData}
        title="Upload stats"
      />
      
      <Container>
        <Friends
          arrayOfFriends={friendsList} />
      </Container>
        
      <TransactionHistory
        arrayOfTransaction={transactions} />
    </div>

  );
};

