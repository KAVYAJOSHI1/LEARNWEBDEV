import Student from "./Student.jsx"
function App()
{
  return(
    <>
<Student name="kavya" age={18} isStudent={true}/>
<Student name="john" age={30} isStudent={false}/>
<Student name="smit" age={20} isStudent={true}/>
<Student name="rock" age={22} isStudent={false}/>
    </>
  );
}
export default App