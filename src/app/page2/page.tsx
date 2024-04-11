import Image from "next/image";
import styles from "./page.module.css";
//import value from "./page.tsx";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>猫の部屋へようこそ</p>
        <div>
          <a
            href="http://localhost:3000/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/cat.jpeg"
              alt="Vercel Logo"
              width={100}
              height={80}
              priority
            />
          </a>
        </div>
      <div>
        
      </div>






      </div>
    </main>
  );
}
