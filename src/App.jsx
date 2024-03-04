import FindUser from "./components/FindUser"
import Id from "./components/Id"
import { users } from "./data/fakeUsers"

function App() {

  return (
    <>  
      <Id/>
      <FindUser users={users}/>
    </>
  )
}

export default App
