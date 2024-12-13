import { APIOfferType, Offer } from "../types";

const SATS_TO_BTC_DIVISOR = 100000000;
const BLOCKS_TO_DAYS_DIVISOR = 144;

// TODO: Replace following with actual data currently not available in API
const MORTY_AVATAR = "https://github.com/shadcn.png";

export function adaptOffer(apiOffer: APIOfferType): Offer {

    // TODO: Replace with actual data
    const CHANNEL_COUNT_RANDOM = Math.floor(Math.random() * 100) + 1;
    const APR_MIN = Math.floor(Math.random() * 3) + 1;
    const APR_MAX = Math.floor(Math.random() * 6) + 1;
    const ORDER_COUNT_RANDOM = Math.floor(Math.random() * 100) + 1;
    const CAPACITY_RANDOM = Math.floor(Math.random() * 10) + 1;

    return {
      id: apiOffer.id,
      seller: {
        name: apiOffer.account,
        avatar: MORTY_AVATAR,
        badges: apiOffer.tags.map(tag => tag.name as "Node Runner" | "Fastest" | "Operator" | "Fast"),
        channelCount: CHANNEL_COUNT_RANDOM,
        btcCap: parseInt(apiOffer.total_size) / SATS_TO_BTC_DIVISOR   
      },
      sellerScore: parseFloat(apiOffer.seller_score),
      cost: {
        fixedSats: apiOffer.base_fee,
        variableSats: apiOffer.amboss_fee_rate
      },
      promises: {
        maxFeeRate: apiOffer.fee_rate_cap,
        minChannelAge: `~${apiOffer.min_block_length / BLOCKS_TO_DAYS_DIVISOR}d`
      },
      apr: {
        min: APR_MIN,
        max: APR_MAX
      },
      sizeLimits: {
        min: parseInt(apiOffer.min_size) / SATS_TO_BTC_DIVISOR,
        max: parseInt(apiOffer.max_size) / SATS_TO_BTC_DIVISOR
      },
      availableLiquidity: {
        amount: (parseInt(apiOffer.total_size) - parseInt(apiOffer.orders.locked_size)) / SATS_TO_BTC_DIVISOR,
        total: parseInt(apiOffer.total_size) / SATS_TO_BTC_DIVISOR
      },
      history: {
        orders: ORDER_COUNT_RANDOM,
        capacity: CAPACITY_RANDOM
      }
    };
  }