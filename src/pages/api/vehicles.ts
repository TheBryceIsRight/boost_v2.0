import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';
import { authenticated } from './people';
import { openDB } from '../../openDB';


export default authenticated(async function getAllVehicles(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await openDB();
  const vehicle = await db.all('select * from vehicle');

  res.json(vehicle);
});
