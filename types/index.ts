
type Signup = {
    id: number;
    name: string;
    email: string;
    signupDate: string;
};

type Login = {
    userId: number;
    date: string;
    device: string;
};

type Upgrade = {
    userId: number,
    oldPlan: string, 
    newPlan: string,
    upgradeDate: string
}

type LoginActivityTableProps = {
  logins: Login[];
};

type HandleOnClick = (userId: number) => void;

type SignupTableProps = {
    signups: Signup[];
    handleOnClick: HandleOnClick;
};

type CardsProp = {
    title: string;
    value: string;
    bottomText: string;
}

type UpgradesTableProps = {
  userUpgrades: Upgrade[];
};

// Helper Function Types

type GetUserLoginData = (data: Login[], id: number) => Login[];
type GetUserDetail = (data: Signup[], id: number) => Signup | null;
type GetUserUpgrades = (data: Upgrade[], id: number) => Upgrade[];

// Exported Types

export type {
  LoginActivityTableProps,
  UpgradesTableProps,
  GetUserLoginData,
  GetUserDetail,
  GetUserUpgrades,
  SignupTableProps,
  CardsProp,
  HandleOnClick,
  Login,
  Upgrade,
  Signup
};