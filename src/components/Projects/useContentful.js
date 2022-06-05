import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "57cl04c86mpq",
    accessToken: "2EIILvTTPkL9-8ykOR6TtNLfEP_zb00qZIPGD20cN8k",
    host: "cdn.contentful.com",
  });

  const getProjects = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "projects",
        select: "fields",
      });

      const sanitizedEntries = entries.items.map((item) => {
        const title = item.fields.projectName;
        const client = item.fields.projectClient;
        const url = item.fields.externalUrl;
        const description =
          item.fields.projectInformation.content[0].content[0].value;
        const media = item.fields.projectMedia.fields.file.url;
        const tech = item.fields.techStack;

        return {
          title,
          client,
          url,
          description,
          media,
          tech,
        };
      });

      // return entries;
      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching authors ${error}`);
    }
  };

  return { getProjects };
};

export default useContentful;
