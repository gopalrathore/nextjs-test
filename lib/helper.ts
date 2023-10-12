import moment from 'moment';
import { GetUserDetail, GetUserLoginData, GetUserUpgrades } from '../types';
import { NEXT_PUBLIC_APP_URL } from './constants';

const absoluteUrl = (path: string) => {
    return `${NEXT_PUBLIC_APP_URL}${path}`
}

const getLastDaysData = (data: any[], DateKey: string) => {
    const now = moment();
    return data.filter(signup => {
        const date = moment(signup[DateKey]);
        return now.diff(date, 'weeks') <= 1;
    });
}

const getUserLoginData: GetUserLoginData = (data, id) => {
    return data.filter(user => user.userId == id)
}

const getUserDetail: GetUserDetail = (data, id) => {
    return data.find(user => user.id == id)
}

const getUserUpgrades: GetUserUpgrades = (data, id) => {
    return data.filter(user => user.userId == id)
}

export { getLastDaysData, getUserLoginData, getUserDetail, getUserUpgrades, absoluteUrl }