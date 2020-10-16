import React from 'react';
import styles from '../styles/splash.module.css';

function SplashPage(props) {
    return (
        <div className={styles.main_wrapper}>
            <div className={styles.topbar}>
                <div className={styles.logo}>
                    <img className={styles.image_logo} style={{ width: "18%" }} src="https://i.imgur.com/WPuOw3l.png" />
                </div>
                <div className={styles.buttons}>
                    <div className={styles.buttons_container}>
                        <div><a href="#" className={styles.outline}>Demo</a></div>
                        <div>or</div>
                        <div><a href="/login">Log in</a></div>
                    </div>
                </div>
            </div>
            <div className={styles.cta_wrapper}>
                <div className={styles.row}>
                    <div className={`${styles.content_container} ${styles.clearfix}`}>
                        <div className={styles.content}>
                            <h1>Simplify your life</h1>
                            <h4 className={styles.description}>EverQuote is the home for everything you need to remember, and everything you want to achieve.</h4>
                            <a href="/signup" className={styles.button_primary} >Sign up for free</a>
                        </div>
                        <div className={styles.image}>
                            <img className={styles.image} src="https://i.imgur.com/weifYda.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default SplashPage;


