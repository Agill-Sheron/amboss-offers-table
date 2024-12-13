export interface APIOfferType {
  id: string;
  account: string;
  tags: Array<{ name: string }>;
  total_size: string;
  seller_score: string;
  base_fee: number;
  fee_rate_cap: number;
  min_block_length: number;
  amboss_fee_rate: number;
  min_size: string;
  max_size: string;
  orders: { locked_size: string };
}

export interface Offer {
    id: string;
    seller: {
      name: string;
      avatar: string;
      badges: Array<"Node Runner" | "Fastest" | "Operator" | "Fast">;
      channelCount: number;
      btcCap: number;
    };
    sellerScore: number;
    cost: {
      fixedSats: number;
      variableSats: number;
    };
    promises: {
      maxFeeRate: number;
      minChannelAge: string;
    };
    apr: {
      min: number;
      max: number;
    };
    sizeLimits: {
      min: number;
      max: number;
    };
    availableLiquidity: {
      amount: number;
      total: number;
    };
    history: {
      orders: number;
      capacity: number;
    };
  }