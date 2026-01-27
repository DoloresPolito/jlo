import Section from "../../layout/Section";
import Container from "../../layout/Container";
import styles from "./style.module.scss";

export default function Footer() {
  return (
    <>
      <Section>
        <Container>
          <div className={styles.footer}>
            <div className={styles.top}>
              <h1 className="h1">JLO</h1>
            </div>

            <div className={styles.bottom}>
              <div className={styles.colLeft}>
                <p>® ALL RIGHTS RESERVED. 2026</p>
              </div>

              <div className={styles.colCenter}>
                <a href="mailto:jloneurocoach@gmail.com">
                  JLONEUROCOACH@gmail.com
                </a>
              </div>

              <div className={styles.colRight}>
                <a
                  href="https://www.linkedin.com/in/lopezolacireguijuan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ln/lopezolacireguijuan
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
