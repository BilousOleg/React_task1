import styles from './UserCard.module.css';
import UserImage from './../UserImage';
import AddButton from './../AddButton';
import UserCardInfo from './../UserCardInfo';

function UserCard() {
  return (
    <article>
      <UserImage />
      <AddButton />
      <UserCardInfo />
    </article>
  );
}

export default UserCard;
