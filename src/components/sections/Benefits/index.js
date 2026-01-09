import Section from "../../layout/Section";
import Container from "../../layout/Container";
import styles from "./style.module.scss";


export default function Benefits({id}) {
 
  return (
    <>
      <Section id={id}>
        <Container>
          <div className={styles.benefits}>
          
          </div>

      
        </Container>
      </Section>
    </>
  );
}
