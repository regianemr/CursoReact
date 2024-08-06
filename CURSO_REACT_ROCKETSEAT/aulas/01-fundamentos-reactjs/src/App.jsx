import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'

import './global.css'

 export function App() {

  return (
    <div>
      <Header />


     <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post 
        author="Regiane" 
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero at sed repellendus necessitatibus sit beatae delectus nisi officiis reprehenderit cumque dolore quae quis tenetur, iste nulla. Officia quaerat distinctio sed."
        />

        <Post
        author="Gleison"
        content="Outro post"
        />
      </main>
     </div>

    </div>
    
  )
}

