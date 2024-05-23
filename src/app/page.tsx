

"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import axios from "axios";

const Home = () => {
  const [inputValue, setInputValue] = useState(""); // 入力されたURLをstateで管理
  const [ogpInfo, setOgpInfo] = useState(null); // OGP情報をstateで管理
  const [error, setError] = useState(null); // エラーメッセージをstateで管理

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const url = formData.get("url");

    try {
      // Firebase Cloud Functionsを使用してOGP情報を取得
      const response = await axios.get(
        "https://us-central1-article-card.cloudfunctions.net/fetchOgpInfo",
        {
          params: {
            url: url,
          },
        }
      );

      // 取得したOGP情報をstateにセット
      setOgpInfo(response.data[url]);
      setInputValue(url);
      setError(null);
    } catch (error) {
      console.error("Error fetching OGP data:", error);
      setError("OGPデータの取得に失敗しました。もう一度お試しください。");
    }
  };

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
              alt="Cat Image"
              width={100}
              height={80}
              priority
            />
          </a>
        </div>
      </div>
      <div className={styles.element}>
        <h3>URLを入力してください。記事カードが作成されます。</h3>
        <form onSubmit={handleSubmit}>
          <input
            name="url"
            placeholder="URLを入力"
            className={styles.input}
            required
          />
          <button className={styles.button} type="submit">
            記事カードを作成
          </button>
        </form>
      </div>
      <div className={styles.element}>
        <h3>入力されたURLから取得したOGP情報:</h3>
        {error && <p className={styles.error}>{error}</p>}
        {ogpInfo && (
          <div>
            <p>Title: {ogpInfo["og:title"]}</p>
            <p>Description: {ogpInfo["og:description"]}</p>
            <p>Image URL: {ogpInfo["og:image"]}</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
