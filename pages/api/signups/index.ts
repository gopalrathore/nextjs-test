import { NextApiRequest, NextApiResponse } from 'next';
import { Signup } from '../../../types';

const signups: Signup[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', signupDate: '2023-10-01' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', signupDate: '2023-09-27' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', signupDate: '2023-09-20' },
    { id: 4, name: 'Bob Anderson', email: 'bob@example.com', signupDate: '2023-10-05' },
    { id: 5, name: 'Eva Martinez', email: 'eva@example.com', signupDate: '2023-10-10' },
    { id: 6, name: 'David Wilson', email: 'david@example.com', signupDate: '2023-09-15' },
    { id: 7, name: 'Sarah Brown', email: 'sarah@example.com', signupDate: '2023-09-08' },
    { id: 8, name: 'Michael Taylor', email: 'michael@example.com', signupDate: '2023-10-18' },
    { id: 9, name: 'Emily Davis', email: 'emily@example.com', signupDate: '2023-10-22' },
    { id: 10, name: 'James Johnson', email: 'james@example.com', signupDate: '2023-09-25' }
];


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(signups);
}
