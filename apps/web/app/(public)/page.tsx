import styles from "./page.module.css";


export default function Home() {
  return (
    <section className={styles.page}>
      <h2>トップページ</h2>
      <div>
        <li>このサイトはaxe-playerightのレポートを出力します</li>
      </div>
    </section>
  );
}
