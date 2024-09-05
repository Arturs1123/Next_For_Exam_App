import { useState, useEffect } from 'react';
import Link from 'next/link';
import questions from "@/data/Questions"

import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Svg from "@/components/Svg";
import ProgressBar from "@/components/ProgressBar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [completedQuestions, setCompletedQuestions] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem('completedQuestions');
    if (storedCount) {
      setCompletedQuestions(parseInt(storedCount, 10));
    }
  }, []);

  return (
    <>
      <main className={`container ${inter.className}`}>
        <div className={`main`}>
          {/* header */}
          <div className={`${styles.header}`}>
            <h6>
              Ray Driving Theory
            </h6>
            <div className={`${styles.headerBar}`}>
              <div className={`${styles.headerBar__crown}`}>
                <Svg url="crown" />
              </div>
              <div className={`${styles.headerBar__fire}`}>
                <div className={`${styles.headerBar__fireContent}`}>
                  <Svg url="fire" />
                  <span className="text-14">13</span>
                </div>
              </div>
            </div>
          </div>
          {/* progressbar */}
          <div className={`${styles.description}`}>
            <div className={`${styles.descriptionContent}`}>
              <div className={`${styles.descriptionContent__label}`}>
                <Svg url="cap" />
                <div className={`${styles.descriptionContent__labelText}`}>
                  <Link href="/learning" className='nounderline'>
                    <span className="text-20">Learning</span>
                  </Link>
                  <span className="text-14 color-gray-100 weight-400">Category В</span>
                </div>
              </div>
              <Svg url="chevron-circle-right" />
            </div>
            <ProgressBar completed={completedQuestions} total={questions.length} />
          </div>
          {/* category */}
          <div className={`${styles.category}`}>
            <div className={`${styles.category__item}`}>
              <div className={`${styles.category__icon}`}>
                <Svg url="exam" />
              </div>
              <div className="text-16">DVSA Exam</div>
            </div>
            <div className={`${styles.category__item}`}>
              <div className={`${styles.category__icon}`}>
                <Svg url="rocket" />
              </div>
              <div className="text-16">Express mode</div>
            </div>
            <div className={`${styles.category__item}`}>
              <div className={`${styles.category__icon}`}>
                <Svg url="perception" />
              </div>
              <div className="text-16">Hazard perception</div>
            </div>
            <div className={`${styles.category__item}`}>
              <div className={`${styles.category__icon}`}>
                <Svg url="road" />
              </div>              
              <div className="text-16">Road signs</div>
            </div>
            <div className={`${styles.category__item}`}>
              <div className={`${styles.category__icon}`}>
                <Svg url="learning" />
              </div>              
              <div className="text-16">Multiplayer Learning</div>
            </div>
          </div>
          {/* action container */}
          <div className={`${styles.iconContainer}`}>
            <div className={`${styles.iconItem}`}>
              <div className={`${styles.icon}`}>
                <Svg url="pen" />
              </div>
              <div className="text-14 weight-400 text-center">Mistakes</div>
            </div>
            <div className={`${styles.iconItem}`}>
              <div className={`${styles.icon}`}>
                <Svg url="chartBar" />
              </div>
              <div className="text-14 weight-400 text-center">Statistics</div>
            </div>
            <div className={`${styles.iconItem}`}>
              <div className={`${styles.icon}`}>
                <Svg url="book" />
              </div>
              <div className="text-14 weight-400 text-center">Highway Code</div>
            </div>
            <div className={`${styles.iconItem}`}>
              <div className={`${styles.icon}`}>
                <Svg url="bookmark" />
              </div>
              <div className="text-14 weight-400 text-center">Favorites</div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
