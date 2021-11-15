import config from '../config';
import { post } from './http';

const ROOT = 'http://localhost:3000/v1';

export const eventListener = async (tokenAddress: string, tokenId: string) => {
  const url = `${ROOT}/gallery/event/${tokenAddress}/${tokenId}`;
  const res = await post(url);
  const eventReject = res.data ?? {};
  return eventReject;
};
