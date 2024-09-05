import styles from '../../styles/Footer.module.css';
import Svg from '../Svg';

export default function Footer() {
    return (
        <div className={`${styles.footer}`}>
            <div className={`${styles.footer__item}`}>
                <div className={`${styles.icon} background-color-red-250`}>
                    <Svg url="home" />
                </div>
                <div className='text-12 color-red-500'>
                    Home
                </div>
            </div>
            <div className={`${styles.footer__item}`}>
                <div className={`${styles.icon}`}>
                    <Svg url="route" />
                </div>
                <div className='text-12'>
                    Your plan
                </div>
            </div>
            <div className={`${styles.footer__item}`}>
                <div className={`${styles.icon}`}>
                    <Svg url="ranking" />
                </div>
                <div className='text-12'>
                    Leaderboard 
                </div>
            </div>
            <div className={`${styles.footer__item}`}>
                <div className={`${styles.icon}`}>
                    <Svg url="user" />
                </div>
                <div className='text-12'>
                    Profile
                </div>
            </div>
        </div>
    )
}