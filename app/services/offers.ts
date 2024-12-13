import { client } from "@/lib/apollo-client";
import { GET_OFFERS } from "@/app/graphql/queries/offers";
import { adaptOffer } from "@/lib/adapters";

export async function getOffers() {
    const { data } = await client.query({ query: GET_OFFERS });

    return data.getOffers?.list?.map(adaptOffer) ?? [];
  }