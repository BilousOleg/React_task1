import styles from './UserCardInfo.module.css';

function UserCardInfo({ tweets, following, followers }) {
  return (
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
  );
}

export default UserCardInfo;
