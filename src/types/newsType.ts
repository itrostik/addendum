import { GameType } from "@/types/gameType";

export type NewsType = {
  type: "auctions" | "sales" | "exchanges";
  advertisement_id: string;
  user_avatar: string;
  user_name: string;
  creation_time: number;
  game_image: string;
  game_name: string;
  game_is_new: boolean;
  exchange_game: GameType | null;
  price: number | null;
};
