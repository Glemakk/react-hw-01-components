import React from 'react';
import s from './FriendListItem.module.css';


function FriendListItem({avatar, name, isOnline}) {
    // const status = isOnline ? statusOnline : statusOffline;
  return (
    <li className={s.item}>
        <span className={isOnline ? s.statusOnline : s.statusOffline}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </li>
  )
}

export default FriendListItem;