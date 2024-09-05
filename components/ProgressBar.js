import styles from '../styles/ProgressBar.module.css';

export default function ProgressBar({ completed, total }) {
  // Calculate the ratio of completed questions to total questions
  const ratio = completed / total;

  // Determine how many of the 7 segments should be filled
  const filledSegments = Math.round(ratio * 7);

  // Create an array representing each segment's state
  const segments = Array.from({ length: 7 }, (_, index) => index < filledSegments);

  return (
    <div className={`${styles.progressBar}`}>
        <span className='text-14 weight-400'>
            {completed} questions out of {total} passed
        </span>
        <div className={styles.progressBarContainer}>
            {segments.map((isCompleted, index) => (
                <div
                key={index}
                className={`${styles.segment} ${isCompleted ? styles.completed : styles.remaining}`}
                ></div>
            ))}
        </div>
    </div>
  );
}
