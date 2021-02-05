import React from 'react';
import styles from './users.module.css';
import { userType} from "../../redux/users-reducer";



type UsersComponentType = {
    users: userType []
    setUsers: (users: Array<userType>) => void
    follow: (userID: number) => void
    unfollow: (userID: number) => void
}

export let Users = (props: UsersComponentType) => {
if (props.users.length === 0){
    props.setUsers([
        {
            id: 1,
            photoUrl: 'https://s1.1zoom.ru/big3/436/Salvador_Dali_Closeup_Men_Face_Black_and_white_536188_3030x3460.jpg',
            followed: false,
            fullName: 'Dmitry',
            status: 'I am fine',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl: 'https://s1.1zoom.ru/big3/436/Salvador_Dali_Closeup_Men_Face_Black_and_white_536188_3030x3460.jpg',
            followed: true,
            fullName: 'Sasha',
            status: 'I am fine',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            photoUrl: 'https://s1.1zoom.ru/big3/436/Salvador_Dali_Closeup_Men_Face_Black_and_white_536188_3030x3460.jpg',
            followed: false,
            fullName: 'Andrew',
            status: 'I am fine',
            location: {city: 'Kiev', country: 'Ukraine'}
        }
    ])}

    return <div>
        {
            props.users.map(u => <div key={u.id}>
              <span>
                  <div>
                     <img src={u.photoUrl} className={styles.userPhoto}/>
                  </div>
                  <div>
                      {u.followed
                          ? <button onClick={()=>{props.unfollow(u.id)}}>Unfollow</button>
                          : <button onClick={()=>{props.follow(u.id)}}>Follow</button>}

                  </div>
              </span>
                <span>
                   <span>
                       <div>{u.fullName}</div><div>{u.status}</div>
                   </span>
                   <span>
                       <div>{u.location.country}</div>
                       <div>{u.location.city}</div>
                   </span>
               </span>
            </div>)
        }

    </div>
}