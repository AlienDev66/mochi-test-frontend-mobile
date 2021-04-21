import React, {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState
} from 'react';
import api from '../../services/api';
import {
    DataProps,
    MainGithubUserProps,
    UserProfileProps,
    UserTypeProps
} from '../components/profiles/profiles.type';
import { getFullGithubUserSchema } from '../components/profiles/schema';

type SearchProps = {
    login: string;
    page?: number;
};

type ProfileContextProps = {
    githubUsersProfiles: DataProps;
    getUsersByType?: (userType: UserTypeProps) => DataProps;
    dealingSearchUsers?: (handleOptions: SearchProps) => void;
    usersAreLoading: boolean;
    clearUsersList?: () => void;
    showMoreUsers?: (userName: string) => void;
    testFlow?: () => void;
};

export const ProfilesContext = createContext<ProfileContextProps>({
    githubUsersProfiles: {} as DataProps,
    usersAreLoading: false
});

export const ProfilesProvider: React.FC = ({ children }) => {
    const [githubUsersProfiles, setGithubUsersProfiles] = useState<DataProps>(
        null as any
    );

    const [usersAreLoading, setUsersAreLoading] = useState(false);

    function testFlow() {
        console.log('shit');
    }

    const clearUsersList = () =>
        setGithubUsersProfiles({
            users: [],
            total: 0
        });

    const showMoreUsers = useCallback(
        (userName: string) => {
            if (githubUsersProfiles) {
                const nextUsersPage = githubUsersProfiles?.users?.length + 5;
                dealingSearchUsers({ page: nextUsersPage, login: userName });
            }
        },
        [githubUsersProfiles]
    );

    const searchGithubUsers = useCallback(
        async (user: MainGithubUserProps, page: number = 5) => {
            try {
                const { data } = await api?.get('/search/users', {
                    params: { q: user?.login, per_page: page }
                });
                return data;
            } catch (error) {
                console.error(error?.message);
                return [];
            }
        },
        []
    );

    const dealingSearchUsers = useCallback(
        async ({ login, page }: SearchProps): Promise<void> => {
            try {
                setUsersAreLoading(true);

                const users = await searchGithubUsers({ login }, page);

                const usersProfiles = await Promise.all(
                    users?.items?.map(async ({ login }: { login: string }) => {
                        const userProfile = await getGithubUserProfile({
                            login
                        });

                        return userProfile as UserProfileProps;
                    })
                );
                setGithubUsersProfiles({
                    total: users?.total_count,
                    users: usersProfiles as UserProfileProps[]
                });

                setUsersAreLoading(false);
            } catch (error) {
                console.error(error?.message);
                setUsersAreLoading(false);
            }
        },
        []
    );

    const getUsersByType = useCallback(
        ({ type }: UserTypeProps) => {
            const usersFilters =
                githubUsersProfiles?.users?.filter(
                    (user) => user.type === type
                ) || [];

            return {
                users: usersFilters,
                total: githubUsersProfiles?.total
            };
        },
        [githubUsersProfiles]
    );

    const parseGithubUsers = useCallback((userResponse): UserProfileProps => {
        const { user, organization } = userResponse?.data;

        const userParsed = {
            type: user ? 'User' : 'Organization',
            name: user?.name || organization?.name,
            login: user?.login || organization?.login,
            avatar_url: user?.avatarUrl || organization?.avatarUrl,
            total:
                user?.contributionsCollection?.contributionCalendar
                    ?.totalContributions ||
                organization?.membersWithRole?.totalCount ||
                0
        };

        return userParsed as UserProfileProps;
    }, []);

    const getGithubUserProfile = useCallback(
        async ({ login }: MainGithubUserProps) => {
            const response = await api.post('/graphql', {
                query: getFullGithubUserSchema({ login })
            });

            const userProfile = parseGithubUsers(response.data);

            return userProfile;
        },

        []
    );
    const memorizedValues = useMemo(
        () => ({
            githubUsersProfiles,
            dealingSearchUsers,
            getUsersByType,
            usersAreLoading,
            clearUsersList,
            showMoreUsers,
            testFlow
        }),
        [
            githubUsersProfiles,
            dealingSearchUsers,
            getUsersByType,
            usersAreLoading,
            clearUsersList,
            showMoreUsers,
            testFlow
        ]
    );

    return (
        <ProfilesContext.Provider value={memorizedValues}>
            {children}
        </ProfilesContext.Provider>
    );
};

export const useProfiles = () => {
    const context = useContext(ProfilesContext);

    return context;
};
