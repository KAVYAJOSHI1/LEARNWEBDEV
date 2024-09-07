import UserGreeting from './UserGreeting.jsx'
function App()
{
  return(
   <>
   <UserGreeting isLoggedIn={true} username="Flash"/>
   </>
  );
}
export default App