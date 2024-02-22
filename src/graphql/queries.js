import gql from 'graphql-tag';
export  const IMAGE_URL = "http://localhost:8080";

export const GET_PROJECTS = gql`
query paginate($page: Int!, $size: Int!) {
    paginate(
      sorts: [{column: "id", order: desc}],
      page: $page,
      size: $size,
    ) {
      page
      total
      last_page
      projects {
        id
        title_mn
        title_en
        description_mn
        description_en
        zurag
      }
    }
  }
`;

export const GET_PROJECT_DETAIL = gql`
query ProjectDetail($id: String!) {
  projects(
    filters:[{column:"id", condition: equals, value: $id}]
  )
  {
    id
    title_mn
    title_en
    description_mn
    description_en
    zurag
  }
}
`;


export const GET_PARTNERS = gql`
  query partners{
    partners{
        id
        ner_mn
        ner_en
        zurag
    }
  }
`;

export const GET_HOMEBANNER = gql`
  query HomeBanner {
    home_banner (sorts: [{ column: "id", order: desc }])
    {
    id
    zurag_mn
    zurag_en
    zurag
    }
  }
`;
