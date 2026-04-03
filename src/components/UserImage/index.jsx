import styles from './UserImage.module.css';

function UserImage({ userName, email, imageSrc }) {
  return (
    <div>
      <img src={imageSrc} alt={userName}></img>
      <div>{userName}</div>
      <div>{email}</div>
    </div>
  );
}

export default UserImage;
