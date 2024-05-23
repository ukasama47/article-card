"use client";
import Image from "next/image";
//import { useNavigation } from "next/navigation"; // useNavigationに変更
import { useNavigate } from "react-router-dom";
import styles from "./page.module.css";


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
      </div>
      <div className={styles.element}>
        <h3>引き渡されたURL:</h3>
        <p>{url}</p> {/* 取得したURLを表示 */}
      </div>
    </main>
  );
}

// // // "use client";
// // // import Image from "next/image";
// // // import { useRouter } from "next/navigation"; 
// // // //import { useEffect, useState } from "react";
// // // import styles from "./page.module.css";
// // // import { useSearchParams } from "next/navigation";

// // // export default function Home() {
// // //  const searchParams = useSearchParams();

// // //  const url = searchParams.get("search");
// // //   return (
// // //     <main className={styles.main}>
// // //       <div className={styles.description}>
// // //         <p>猫の部屋へようこそ</p>
// // //         <div>
// // //           <a
// // //             href="http://localhost:3000/"
// // //             target="_blank"
// // //             rel="noopener noreferrer"
// // //           >
// // //             By{" "}
// // //             <Image
// // //               src="/cat.jpeg"
// // //               alt="Vercel Logo"
// // //               width={100}
// // //               height={80}
// // //               priority
// // //             />
// // //           </a>
// // //         </div>
// // //       </div>
// // //       <div className={styles.element}>
// // //         <h3>引き渡されたURL:</h3>
// // //         <p>{url}</p> {/* 取得したURLを表示 */}
// // //       </div>
// // //     </main>
// // //   );
// // // }


// // // page2.tsx

// // import Image from "next/image";
// // import { useRouter } from "next/navigation"; // useRouterをインポート
// // import styles from "./page.module.css";

// // export default function Page2() {
// //   const navigation = useRouter(); // useRouterを使用してルーターを取得

// //   // URLクエリパラメーターからurlを取得
// //   const { url } = navigation.query;

// //   return (
// //     <main className={styles.main}>
// //       <div className={styles.description}>
// //         <p>猫の部屋へようこそ</p>
// //         <div>
// //           <a
// //             href="http://localhost:3000/"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             By{" "}
// //             <Image
// //               src="/cat.jpeg"
// //               alt="Vercel Logo"
// //               width={100}
// //               height={80}
// //               priority
// //             />
// //           </a>
// //         </div>
// //       </div>
// //       <div className={styles.element}>
// //         <h3>引き渡されたURL:</h3>
// //         <p>{url}</p> {/* 取得したURLを表示 */}
// //       </div>
// //     </main>
// //   );
// // }

// // Page2.tsx
// "use client";
// import Image from "next/image";
// import { useContext } from "react"; // useContextをインポート
// import styles from "./page.module.css";
// import React from "react";

// // ユーザー定義のコンテキストを作成
// const QueryContext = React.createContext({});

// // Page1 で設定した URL を保持するコンテキストプロバイダー
// export const QueryProvider = ({ children, query }) => (
//   <QueryContext.Provider value={query}>{children}</QueryContext.Provider>
// );

// export default function Page2() {
//   // コンテキストを使用してクエリを取得
//   const query = useContext(QueryContext);

//   return (
//     <main className={styles.main}>
//       <div className={styles.description}>
//         <p>猫の部屋へようこそ</p>
//         <div>
//           <a
//             href="http://localhost:3000/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/cat.jpeg"
//               alt="Vercel Logo"
//               width={100}
//               height={80}
//               priority
//             />
//           </a>
//         </div>
//       </div>
//       <div className={styles.element}>
//         <h3>引き渡されたURL:</h3>
//         <p>{query.url}</p> {/* 取得したURLを表示 */}
//       </div>
//     </main>
//   );
// }
