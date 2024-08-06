import { PencilSimpleLine } from 'phosphor-react'
import styles from './Sidebar.module.css'


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
            src="https://plus.unsplash.com/premium_photo-1661882403999-46081e67c401?w=500&auto=format&fit=crop&q=50&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZ3JhbWElQzMlQTclQzMlQTNvfGVufDB8fDB8fHww"  
            />
        
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/regianemr.png"  />


                <strong>Regiane Melo</strong>
                <span>Web Developer</span>
            </div>

            <footer>
               <a href="#">
                <PencilSimpleLine size={20} />
                Editar seu perfil
                </a> 
            </footer>
        </aside>
    )
}