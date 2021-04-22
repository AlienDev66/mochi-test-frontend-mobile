import { MainGithubUserProps } from './profiles.type';

export const organizationSchema = `
  name
  avatarUrl
  login
  membersWithRole {
    totalCount
  }
`;

export const userSchema = `
  name
  avatarUrl
  login
  contributionsCollection {
    contributionCalendar {
      totalContributions
    }
  }
`;

export const getFullGithubUserSchema = ({
    login
}: MainGithubUserProps): string => {
    const organizationSchemaUser = `
  query {
    organization(login: "${login}") {
      ${organizationSchema}
    }

    user(login: "${login}") {
      ${userSchema}
    }
  }
  `;

    return organizationSchemaUser;
};
