import { useState, useEffect } from 'react';
import Link from 'next/link';
import QuestionGrid from '@/components/QuestionGrid';
import styles from '@/styles/Learning.module.css';
import questions from '@/data/questions.json';
import { Inter } from "next/font/google";
import Svg from '@/components/Svg';

const inter = Inter({ subsets: ["latin"] });

export default function Learning() {
  const [activeQuestions, setActiveQuestions] = useState([]);

  useEffect(() => {
    const storedActiveQuestions = JSON.parse(localStorage.getItem('activeQuestions'));
    if (storedActiveQuestions) {
      setActiveQuestions(storedActiveQuestions);
    }
  }, []);

  const toggleQuestion = (id) => {
    let updatedQuestions = [];
    if (activeQuestions.includes(id)) {
      updatedQuestions = activeQuestions.filter((questionId) => questionId !== id);
    } else {
      updatedQuestions = [...activeQuestions, id];
    }
    setActiveQuestions(updatedQuestions);
    localStorage.setItem('activeQuestions', JSON.stringify(updatedQuestions));
    localStorage.setItem('completedQuestions', updatedQuestions.length);
  };

  return (
    <div className={`container ${inter.className}`}>
        <div className={`main`}>
            <div className={`${styles.header__wrapper}`}>
                <div className={`${styles.header}`}>
                    <Link href="/" className='nounderline'>
                        <Svg url="back" />
                    </Link>
                    <span className='text-18'>Learning</span>
                </div>
                <div className={`${styles.title__wrapper}`}>
                    <div className={`${styles.title} text-14`}>
                        Tests
                    </div>
                </div>
                <QuestionGrid questions={questions} activeQuestions={activeQuestions} onToggle={toggleQuestion} />
            </div>

        </div>
    </div>
  );
}
