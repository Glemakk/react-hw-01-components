import React from 'react';
import FriendListItem from '../FriendListItem/FriendListItem';
import s from './FriendList.module.css';

function FriendList({friends}) {
    return (
    <div className={s.container}>
        <ul class={s.friendList}>
        {friends && friends.map(({avatar, name, isOnline, id}) => (
        <FriendListItem className={s.item} key={id} avatar={avatar} name={name} isOnline={isOnline}/>
        ))}
        </ul>  
    </div>
  )
}

export default FriendList