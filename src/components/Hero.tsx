import React from 'react';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 className={styles.heading}>
            Hey There,<br />
            I'm <span className={styles.name}>Albert</span>
          </h1>
          <div className={styles.tag}>Developer</div>
          <p className={styles.description}>
            A passionate developer with expertise in web technologies and software engineering.
            Building innovative solutions across various domains.
          </p>
        </div>
        <div className={styles.imageContainer}>
          {/* Add your profile image here */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
