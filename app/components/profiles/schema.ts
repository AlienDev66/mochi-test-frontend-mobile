import { MainGithubUserProps } from './profiles.type';

export const organizationSchemaFields = `
  name
  avatarUrl
  login
  membersWithRole {
    totalCount
  }
`;

export const userSchemaFields = `
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
    const userOrganizationSchema = `
  query {
    organization(login: "${login}") {
      ${organizationSchemaFields}
    }

    user(login: "${login}") {
      ${userSchemaFields}
    }
  }
  `;

    return userOrganizationSchema;
};
