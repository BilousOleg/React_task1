import styles from './UserCard.module.css';
import AddButton from './../AddButton';

// Спочатку вирішив зробити ще розбиття на 3 компоненти, але потім подумав, що вони більше ніде не зможуть бути використані,
// тому зробив UserCard єдиним компонентом, залишивши тільки кнопку, адже вона потенційно може ще десь бути використана (дивіться коміти)
function UserCard(props) {
  const { userName, email, gender, imageSrc, tweets, following, followers } =
    props.userInfo;

  return (
    <article className={styles.userCard}>
      <section className={styles.imageSection}>
        <img className={styles.userImage} src={imageSrc} alt={userName}></img>
        <div className={styles.imageInfo}>
          <div className={styles.userName}>{userName}</div>
          <div className={styles.userEmail}>{email}</div>
        </div>
      </section>
      <AddButton gender={gender} />
      <section className={styles.infoSection}>
        <div className={styles.infoElement}>
          <span>Tweets</span>
          <div className={styles.followersInfo}>{tweets}</div>
        </div>
        <div className={styles.infoElement}>
          <span>Following</span>
          <div className={styles.followersInfo}>{following}</div>
        </div>
        <div className={styles.infoElement}>
          <span>Followers</span>
          <div className={styles.followersInfo}>{followers}</div>
        </div>
      </section>
    </article>
  );
}

export default UserCard;
