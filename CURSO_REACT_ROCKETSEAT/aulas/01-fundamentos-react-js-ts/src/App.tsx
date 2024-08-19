import { Header } from "./components/Header";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'

// author: {avatar_url: "", name:"", role:""}
// publishedAt: Date 
// content: str

import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author:{
      avatarUrl: 'https://github.com/regianemr.png',
      name: 'Regiane Melo',
      role: 'Desenvolvedora web'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-08-05 15:00:00'),
  },
  {
    id: 2,
    author:{
      avatarUrl: 'https://github.com/gleisonbs.png',
      name: 'Gleison Batista',
      role: 'Desenvolvedor web'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-07-18 15:00:00'),
  },
]

 export function App() {

  return (
    <div>
      <Header />


     <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return (
            <Post 
              key={post.id}
              post={post}
            />
          )
        })}
      </main>
     </div>

    </div>
    
  )
}

