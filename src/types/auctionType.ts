export type AuctionType = {
  game_id: string;
  author_id: string;
  auction_chat_id: string;
  started_price: string;
  is_new: boolean;
  creation_time: number;
  started: boolean;
  started_time: number;
  current_rate: number;
  current_user_id: number;
  current_end_time: number;
  end_time: number;
  winner: string;
};
