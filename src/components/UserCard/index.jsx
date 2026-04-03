import styles from './UserCard.module.css';
// Можливо, слід внести усі дочірні компоненти всередину UserCard, оскільки вони навряд чи будуть перевикористані, окрім, можливо, кнопки
import UserImage from './../UserImage';
import AddButton from './../AddButton';
import UserCardInfo from './../UserCardInfo';

function UserCard(props) {
  const { userName, email, gender, imageSrc, tweets, following, followers } =
    props.userInfo;

  return (
    <article>
      <UserImage userName={userName} email={email} imageSrc={imageSrc} />
      <AddButton gender={gender} />
      <UserCardInfo
        tweets={tweets}
        following={following}
        followers={followers}
      />
    </article>
  );
}

export default UserCard;
