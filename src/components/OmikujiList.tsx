import { OmikujiObj } from '@/consts/OmikujiConst';
import { OmikujiObjType } from '@/types/OmikujiType';
import { Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';

export const OmikujiList = () => {
  return (
    <Paper sx={{ padding: 2, backgroundColor: '#FFFF99' }}>
      <Grid container>
        <Grid item xs={6}>
          {OmikujiObj.map((value: OmikujiObjType) => (
            <Grid container key={value.name}>
              <Grid item>
                <Typography variant="h6" paddingLeft={1}>
                  {value.name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" paddingLeft={1}>
                  {value.status}Pt
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={6} textAlign={'right'}>
          <Image src={'/syougatsu_omijikuji.png'} width={80} height={80} style={{ objectFit: 'contain' }} alt="miko" />
        </Grid>
      </Grid>
    </Paper>
  );
};
