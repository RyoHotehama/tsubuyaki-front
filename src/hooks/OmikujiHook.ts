import { OmikujiData } from '@/consts/OmikujiConst';
import { OmikujiObjType, OmikujiResultType } from '@/types/OmikujiType';
import { Dispatch, SetStateAction } from 'react';
import { PlayFunction } from 'use-sound/dist/types';

// おみくじの結果を返す
const drawOmikuji = () => {
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

// おみくじを引くを押下した際の処理
export const handleClick = (
  setOmikujiResult: Dispatch<SetStateAction<OmikujiResultType>>,
  play: PlayFunction,
  setDisabled: Dispatch<SetStateAction<boolean>>
) => {
  setDisabled(true);
  const result = drawOmikuji();
  play();
  setTimeout(() => setOmikujiResult(result), 3000);
};
