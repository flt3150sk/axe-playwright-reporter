import styles from "./page.module.css";


export default function Home() {
  return (
    <section className={styles.page}>
      <h2>認証ユーザーページ</h2>
      <div>
        <li>このページは、認証済みユーザーしか入れません</li>
      </div>
    </section>
  );
}
