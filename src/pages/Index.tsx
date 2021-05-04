import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { Microphone } from '../../model/Microphone';
import { openDB } from '../openDB';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import themeContext from '../../components/Theme';
import LineChart from '../../components/LineChart';
import LineChart2 from '../../components/LineChart2';


export interface IndexProps {
  microphones: Microphone[];
}

// export default function Index({ microphones }: IndexProps) {
//   return (
//     <div>
//       <Link href="/people">
//         <a>People</a>
//       </Link>
//       <pre>{JSON.stringify(microphones, null, 4)}</pre>;
//     </div>
//   );
// }

export default function Index({ microphones }: IndexProps) {

  const renderTable = (microphones.map((row:any) => (
    <TableRow key={row.id}>
      <TableCell component="th" scope="row">
        {row.id}
      </TableCell>
      <TableCell align="right">{row.brand}</TableCell>
      <TableCell align="right">{row.model}</TableCell>
      <TableCell align="right">${row.price}</TableCell>
    </TableRow>
  )));

  return (
    <ThemeProvider theme={themeContext}>
    <Grid container spacing={6} direction='column'>
      <Grid item>
        <Typography variant='h3'>TCR/Discount</Typography>
      </Grid>
      <Grid item>
      <LineChart/>
        </Grid>
        <Grid item>
        <Typography variant='h3'>Total Discount Acceptance</Typography>
      </Grid>
        <Grid item>
      <LineChart2/>
        </Grid>
        <Grid item>
        <Typography variant='h3'>Example data from DB</Typography>
       </Grid>
        <Grid item>
        <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Brand</TableCell>
            <TableCell align="right">Model</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {renderTable}
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>
    </Grid>
    </ThemeProvider>
  );
}


export const getServerSideProps: GetServerSideProps<IndexProps> = async (
  ctx
) => {
  const db = await openDB();
  const microphones = await db.all<Microphone[]>('select * from microphone');

  await new Promise(acc => {
    setTimeout(acc, 3000);
  });

  return { props: { microphones } };
};
