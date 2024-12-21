import styles from "./page.module.css";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import { getRedirectTypeFromError } from "next/dist/client/components/redirect";
import { AuthError } from "next-auth";
import { RedirectError } from "next/dist/client/components/redirect-error";

export default function Home() {
  const signIn = async (formData: FormData) => {
    "use server";
    try {
      await auth.signIn("credentials", formData);
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case "CredentialsSignin":
            console.error("Signin error:", error);
            return {
              message: "メールアドレスまたはパスワードが間違っています",
            };
        }
      }
      if (getRedirectTypeFromError(error as RedirectError)) {
        redirect("/admin");
      }
      return {
        message: "An unexpected error occurred during signin",
      };
    }
  };

  return (
    <section>
      <h2>ログイン</h2>
      <form className={styles.form} action={signIn}>
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
        <button className={styles.formSubmit}>ログインする</button>
      </form>
    </section>
  );
}
