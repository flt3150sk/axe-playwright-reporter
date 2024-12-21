import styles from "./page.module.css";

export default function Home() {
  return (
    <section>
      <h2>ログイン</h2>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <span className={styles.formGroupLabel}>メールアドレス</span>
          <input
            name="email"
            type="email"
            className={styles.formGroupInput}
            required
          />
        </div>
        <label className={styles.formGroup}>
          <span className={styles.formGroupLabel}>パスワード</span>
          <input
            name="password"
            type="password"
            className={styles.formGroupInput}
            required
          />
        </label>
        <button className={styles.formSubmit}>新規登録する</button>
      </form>
    </section>
  );
}
