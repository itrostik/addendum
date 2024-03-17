// import styles from "./ChosenGame.module.scss";
// import { Id } from "../../../../convex/_generated/dataModel";
// import { useQuery } from "convex/react";
// import { api } from "../../../../convex/_generated/api";
// import Skeleton from "react-loading-skeleton";
// import Image from "next/image";
//
// import star from "/public/star.svg";
//
// export type ChosenGameProps = {
//   game_id: Id<"games">;
// };
//
// export default function ChosenGame({ game_id }: ChosenGameProps) {
//   const game = useQuery(api.games.getById, {
//     game_id,
//   });
//   return (
//     <div className={styles.content}>
//       {game ? (
//         <>
//           <h1 className={styles.title}>Объявление о продаже</h1>
//           <div className={styles.info}>
//             <div className={styles.imageBlock}>
//               <div className={styles.rating}>
//                 <div className={styles.value}>
//                   <span>{game.rating}</span>
//                   <Image src={star} alt={"star"} />
//                 </div>
//               </div>
//               <Image
//                 src={game.image}
//                 alt={"game"}
//                 width={500}
//                 height={500}
//                 className={styles.image}
//               />
//             </div>
//
//             <div className={styles.infoBlock}>
//               <div className={styles.name}>
//                 <h3 className={styles.heading}>Название</h3>
//                 <div className={styles.value}>{game.name}</div>
//               </div>
//               <div className={styles.description}>
//                 <h3 className={styles.heading}>Описание</h3>
//                 <div className={styles.value}>{game.description}</div>
//               </div>
//               <div className={styles.genres}>
//                 <h3 className={styles.heading}>Жанры</h3>
//                 <div className={styles.genresBlock}>
//                   {game.genre.map((genre) => (
//                     <span className={styles.genre}>{genre}</span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       ) : (
//         <>
//           <h1 className={styles.title}>Объявление о продаже</h1>
//           <div className={styles.info}>
//             <div className={styles.skeleton}>
//               <Skeleton
//                 baseColor={"#eeeeee"}
//                 highlightColor={"#ffffff"}
//                 width={500}
//                 height={500}
//                 borderRadius={5}
//                 duration={1.5}
//                 className={styles.item}
//               />
//             </div>
//             <div className={styles.infoBlock}>
//               <div className={styles.name}>
//                 <h3 className={styles.heading}>Название</h3>
//                 <div className={styles.value}>
//                   <Skeleton
//                     baseColor={"#eeeeee"}
//                     highlightColor={"#ffffff"}
//                     width={300}
//                     height={30}
//                     borderRadius={5}
//                     duration={1.5}
//                   />
//                 </div>
//               </div>
//               <div className={styles.description}>
//                 <h3 className={styles.heading}>Описание</h3>
//                 <div className={styles.value}>
//                   <Skeleton
//                     baseColor={"#eeeeee"}
//                     highlightColor={"#ffffff"}
//                     borderRadius={5}
//                     duration={1.5}
//                     width={600}
//                     height={100}
//                     className={styles.skeleton}
//                   />
//                 </div>
//               </div>
//               <div className={styles.genres}>
//                 <h3 className={styles.heading}>Жанры</h3>
//                 <div className={styles.genresBlock}>
//                   {[...new Array(3)].map((_) => (
//                     <Skeleton
//                       baseColor={"#eeeeee"}
//                       highlightColor={"#ffffff"}
//                       borderRadius={5}
//                       duration={1.5}
//                       width={70}
//                       height={25}
//                       className={styles.skeleton}
//                     />
//                   ))}
//                 </div>
//               </div>
//               <div className={styles.rating}>
//                 <h3 className={styles.heading}>Оценка экспертов</h3>
//                 <div className={styles.value}>
//                   <Skeleton
//                     baseColor={"#eeeeee"}
//                     highlightColor={"#ffffff"}
//                     borderRadius={5}
//                     duration={1.5}
//                     width={70}
//                     height={25}
//                     className={styles.skeleton}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }
