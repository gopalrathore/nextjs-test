import { NextApiRequest, NextApiResponse } from 'next';
import { Upgrade } from '../../../types';

const upgrades: Upgrade[] = [
    { userId: 1, oldPlan: 'Basic', newPlan: 'Premium', upgradeDate: '2023-10-04' },
    { userId: 3, oldPlan: 'Basic', newPlan: 'Pro', upgradeDate: '2023-09-22' },
    { userId: 4, oldPlan: 'Free', newPlan: 'Pro', upgradeDate: '2023-08-15' },
    { userId: 5, oldPlan: 'Premium', newPlan: 'Pro', upgradeDate: '2023-07-28' },
    { userId: 6, oldPlan: 'Basic', newPlan: 'Premium', upgradeDate: '2023-06-10' },
    { userId: 7, oldPlan: 'Free', newPlan: 'Basic', upgradeDate: '2023-05-19' },
    { userId: 8, oldPlan: 'Pro', newPlan: 'Premium', upgradeDate: '2023-04-02' },
    { userId: 9, oldPlan: 'Basic', newPlan: 'Pro', upgradeDate: '2023-03-14' },
    { userId: 9, oldPlan: 'Pro', newPlan: 'Free', upgradeDate: '2023-03-14' },
    { userId: 10, oldPlan: 'Free', newPlan: 'Basic', upgradeDate: '2023-02-25' }
];


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json(upgrades);
}
