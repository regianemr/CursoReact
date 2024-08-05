import { Header } from "./components/Header";
import { Post } from "./Post";

import './global.css'

 export function App() {

  return (
    <div>
      <Header />


      <Post 
      author="Regiane" 
      content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero at sed repellendus necessitatibus sit beatae delectus nisi officiis reprehenderit cumque dolore quae quis tenetur, iste nulla. Officia quaerat distinctio sed."
      />

      <Post
      author="Gleison"
      content="Outro post"
      />

    </div>
    
  )
}

