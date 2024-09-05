import styles from '@/styles/QuestionGrid.module.css';
import Svg from './Svg';

export default function QuestionGrid({ questions, activeQuestions, onToggle }) {
    return (
        <div className={styles.grid}>
            {questions.map((question) => (
                <button
                    key={question.id}
                    className={`${styles.gridItem}`}
                    onClick={() => onToggle(question.id)}
                >   
                    {
                        activeQuestions.includes(question.id) ?
                            <div className={`${styles.active}`}>
                                <Svg url="check" />
                            </div> : ''
                    }
                    <div className={`${styles.substract}`}>
                        <Svg url="substract" />
                    </div>
                    {question.id}
                </button>
            ))}
        </div>
    );
  }