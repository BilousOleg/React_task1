import styles from './AddButton.module.css';

function AddButton({ gender }) {
  return (
    <>
      <button className={styles.addButton}>+</button>
    </>
  );
}

export default AddButton;
