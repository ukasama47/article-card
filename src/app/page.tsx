"use client";
import Image from "next/image";
import styles from "./page.module.css";

import { SubmitHandler, useForm } from "react-hook-form";
//import { url } from "inspector";
//import { text } from "stream/consumers";
//import React, { createContext } from "react";

import { useState } from "react";
//
/** フォームの各要素の名前と型を定義 */

// export const MyForm: FC = () => {
//   const { handleSubmit, register } = useForm<FormData>();

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("url")} placeholder="url" />
//       <button type="submit">OK</button>
//     </form>
//   );
// };
export default function Home() {
  const [value, setValue] = useState(""); // valueをstateで管理
  //const inputView = () => {};
  type FormData = {
    url: string;
  };
  let url;
  const onSubmit: SubmitHandler<FormData> = (data) => {
    url = data.url;
    alert(url);
  };
  const { handleSubmit, register, getValues, watch } = useForm<FormData>();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>猫の部屋へようこそ</p>
        <div>
          <a
            href="http://localhost:3000/"
            target="_blank"
            //rel="noopener noreferrer"
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
      </div>
      <div className={styles.element}>
        <h3>URLを入力してください。記事カードが作成されます。</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("url")}
            placeholder="URLを入力"
            className={styles.input}
            required
          />

          <div className={styles.element}></div>
          <button className={styles.button} type="submit">
            記事カードを作成
          </button>
        </form>

        {/* <form
          onChange={(event) => setValue(event.target.value)}
          type="text"
          placeholder="URLを入力"
          className={styles.input}
          required
          id="message"
        ></form> */}
        {/* <p>{value}</p> */}
      </div>
      {/* const changeTextValue = (value: string) => {
        const geturl = getValues("url")
      } */}
      {/* <div>{watch("url")}</div> */}

      <div> </div>

      {/* <div className={styles.element}>
        <button className={styles.button} type="submit" id="sakusei">
          記事カードを作成
        </button> */}

      {/*
        <a
          
          href="page2"
          target="_blank"
          rel="noopener noreferrer"
        >記事カードを作成</a>
         */}

      {/* <button
          className={styles.button}
          onClick="location.href='page2'"
          //onClick={()=>{}}
        >
          記事カードを作成
        </button> */}
      {/* </div> */}

      <div className={styles.center}>
        <Image
          src="/cat-dancing.gif"
          alt="cat-dancing"
          width={800}
          height={400}
          priority
        />
      </div>

      {/* <div className={styles.element}> 
        <h3>URL</h3>
        <div className={styles.output}>
          <p>{value}</p>
        </div>
      </div>
      <div className={styles.element}>
        <h3>タイトル</h3>
        <div className={styles.output}>
          <p>{value}</p>
        </div>
      </div>
      <div className={styles.element}>
        <h3>説明</h3>
        <div className={styles.output}>
          <p>{value}</p>
        </div>
      </div>
      <div className={styles.element}>
        <h3>画像</h3>
        <div className={styles.output}>
          <p>{value}</p>
        </div>
      </div> */}

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="http://abehiroshi.la.coocan.jp/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            阿部寛 <span>-&gt;</span>
          </h2>
          <p>Learn about Hiroshi Abe!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
