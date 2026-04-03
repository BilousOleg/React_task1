import styles from './UserCard.module.css';
import AddButton from './../AddButton';

// Спочатку вирішив зробити ще розбиття на 3 компоненти, але потім подумав, що вони більше ніде не зможуть бути використані,
// тому зробив UserCard єдиним компонентом, залишивши тільки кнопку, адже вона потенційно може ще десь бути використана (дивіться коміти)
function UserCard(props) {
  const { userName, email, gender, imageSrc, tweets, following, followers } =
    props.userInfo;

  return (
    <article>
      <section>
        <img src={imageSrc} alt={userName}></img>
        <div>{userName}</div>
        <div>{email}</div>
      </section>
      <AddButton gender={gender} />
      <section>
        <div>
          <span>Tweets</span>
          <div>{tweets}</div>
        </div>
        <div>
          <span>Following</span>
          <div>{following}</div>
        </div>
        <div>
          <span>Followers</span>
          <div>{followers}</div>
        </div>
      </section>
    </article>
  );
}

export default UserCard;
