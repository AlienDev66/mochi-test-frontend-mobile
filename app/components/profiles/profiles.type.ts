export type UserProfileProps = {
    name: string;
    avatar_url: string;
    total: string;
    login: string;
    type: 'User' | 'Organization';
};

export type DataProps = {
    total?: number;
    users: UserProfileProps[];
};

export type ProfileListProps = {
    type: 'User' | 'Organization';
    style?: string;
    data?: DataProps;
};
