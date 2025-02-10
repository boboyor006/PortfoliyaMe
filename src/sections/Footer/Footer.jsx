import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2025-yil Po'latov Boboyor <br />
        O'z partfoliyaga ega bo'ldi. 😃
      </p>
    </section>
  );
}

export default Footer;
