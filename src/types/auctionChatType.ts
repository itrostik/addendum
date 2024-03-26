export type AuctionChatType = {
  auction_id: string;
  messages: MessageType[];
};

type MessageType = {
  text: string;
  author_id: string;
  author_name: string;
  creation_time: string;
};
