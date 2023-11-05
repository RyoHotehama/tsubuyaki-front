import { OmikujiData } from '@/consts/OmikujiConst';
import { OmikujiObjType } from '@/types/OmikujiType';

// おみくじの結果を返す
export const drawOmikuji = () => {
  const resultNumber = Math.floor(Math.random() * OmikujiData.length);

  const result = OmikujiData[resultNumber];

  return result;
};

// おみくじ結果のポイント表示
export const calculatePtEarned = (name: string, omikujiObj: OmikujiObjType[]) => {
  const omikuji = omikujiObj.find((omikuji: OmikujiObjType) => omikuji.name === name);
  if (omikuji && omikuji.status) {
    return omikuji.status;
  }
};
