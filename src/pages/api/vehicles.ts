import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';

export default async function getAllVehicles(req: NextApiRequest, res: NextApiResponse) {

    if (req.method !== 'GET') {
        res.status(500).json({message: 'Sorry we only accept GET requests'})
    }
    const db = await sqlite.open('./mydb.sqlite');
    const vehicle = await db.all('select * from vehicle');

    res.json(vehicle);
} 