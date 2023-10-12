import { NextApiRequest, NextApiResponse } from 'next';
import { Login } from '../../../types';

const logins: Login[] = [
    { userId: 1, date: '2023-10-05', device: 'Desktop' },
    { userId: 1, date: '2023-10-02', device: 'Mobile' },
    { userId: 2, date: '2023-09-28', device: 'Tablet' },
    { userId: 2, date: '2023-10-12', device: 'Tablet' },
    { userId: 3, date: '2023-10-12', device: 'Tablet' },
    { userId: 4, date: '2023-09-30', device: 'Desktop' },
    { userId: 4, date: '2023-10-10', device: 'Mobile' },
    { userId: 5, date: '2023-10-15', device: 'Desktop' },
    { userId: 5, date: '2023-09-25', device: 'Tablet' },
    { userId: 6, date: '2023-10-08', device: 'Mobile' },
    { userId: 6, date: '2023-09-12', device: 'Desktop' },
    { userId: 7, date: '2023-09-18', device: 'Tablet' },
    { userId: 7, date: '2023-10-22', device: 'Desktop' },
    { userId: 8, date: '2023-10-01', device: 'Mobile' },
    { userId: 8, date: '2023-09-27', device: 'Tablet' },
    { userId: 9, date: '2023-10-10', device: 'Desktop' },
    { userId: 9, date: '2023-09-20', device: 'Mobile' },
    { userId: 10, date: '2023-09-22', device: 'Tablet' },
    { userId: 10, date: '2023-10-18', device: 'Desktop' },
];


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(logins);
}
