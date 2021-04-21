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
    data?: DataProps;
    type: 'User' | 'Organization';
};

export type MainGithubUserProps = {
    login: string;
};

export type UserTypeProps = {
    type: 'User' | 'Organization';
};
