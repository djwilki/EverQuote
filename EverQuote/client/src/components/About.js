import React from 'react';
import styles from '../styles/about.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <main className={styles.about}>
      <div className={styles.about_wrapper}>
        <h1>About This Project</h1>
        <div className={styles.github_wrapper}>
          <div className={styles.github_links}>
            <div className={styles.github_link}>
              <a
                href="https://github.com/djwilki/EverQuote/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className={styles.github_link_icon}
                  icon={faGithub}
                />
                <div className={styles.github_link_label}>GitHub</div>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.bio_wrapper}>
          <div className={styles.row}>
            <div className={styles.bio_container}>
              <div className={styles.bio_photo_wrapper}>
                <div className={`${styles.bio_photo} ${styles.daniel}`}></div>
              </div>
              <div className={styles.bio_text}>
                <h6>Daniel Wilkins</h6>
                <p>
                  A full stack engineer with a history in biological sciences
                  and bioinformatics.
                </p>
                <div className={styles.links}>
                  <div className={styles.link}>
                    <a
                      href="https://www.linkedin.com/in/daniel-wilkins-88348160/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className={styles.link_icon}
                        icon={faLinkedin}
                      />
                      <div className={styles.link_label}>LinkedIn</div>
                    </a>
                  </div>
                  <div className={styles.link}>
                    <a
                      href="https://djwilki.github.io/portfolio/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className={styles.link_icon}
                        icon={faBriefcase}
                      />
                      <div className={styles.link_label}>Portfolio</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bio_container}>
              <div className={styles.bio_photo_wrapper}>
                <div
                  className={`${styles.bio_photo} ${styles.panayiotis}`}
                ></div>
              </div>
              <div className={styles.bio_text}>
                <h6>Panayiotis Dimopoulos</h6>
                <p>
                  A software engineer with a genuine curiosity for solving
                  complex problems in creative ways.
                </p>
                <div className={styles.links}>
                  <div className={styles.link}>
                    <a
                      href="https://www.linkedin.com/in/panayiotis-dimopoulos/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className={styles.link_icon}
                        icon={faLinkedin}
                      />
                      <div className={styles.link_label}>LinkedIn</div>
                    </a>
                  </div>
                  <div className={styles.link}>
                    <a
                      href="https://panosphl.github.io/panos-portfolio/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className={styles.link_icon}
                        icon={faBriefcase}
                      />
                      <div className={styles.link_label}>Portfolio</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.bio_container}>
              <div className={styles.bio_photo_wrapper}>
                <div className={`${styles.bio_photo} ${styles.jerel}`}></div>
              </div>
              <div className={styles.bio_text}>
                <h6>Jerel Smith</h6>
                <p>
                  A hard-working problem-solver, with experience in JavaScript
                  and Python.
                </p>
                <div className={styles.links}>
                  <div className={styles.link}>
                    <a
                      href="https://www.linkedin.com/in/jerel-smith-a42aaa1b7/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className={styles.link_icon}
                        icon={faLinkedin}
                      />
                      <div className={styles.link_label}>LinkedIn</div>
                    </a>
                  </div>
                  <div className={styles.link}>
                    <a
                      href="https://jerels.github.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className={styles.link_icon}
                        icon={faBriefcase}
                      />
                      <div className={styles.link_label}>Portfolio</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.bio_container}>
              <div className={styles.bio_photo_wrapper}>
                <div className={`${styles.bio_photo} ${styles.cole}`}></div>
              </div>
              <div className={styles.bio_text}>
                <h6>Cole Hunter</h6>
                <p>
                  A software developer with a penchant for design and finding
                  creative solutions.
                </p>
                <div className={styles.links}>
                  <div className={styles.link}>
                    <a
                      href="https://www.linkedin.com/in/cole-hunter-0b5827186/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className={styles.link_icon}
                        icon={faLinkedin}
                      />
                      <div className={styles.link_label}>LinkedIn</div>
                    </a>
                  </div>
                  <div className={styles.link}>
                    <a
                      href="https://chunter3311.github.io/portfolio/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        className={styles.link_icon}
                        icon={faBriefcase}
                      />
                      <div className={styles.link_label}>Portfolio</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default About;
