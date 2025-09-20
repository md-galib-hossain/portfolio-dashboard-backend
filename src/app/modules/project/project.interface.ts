export type TProject = {
    title: string;
    coverImage: string;
    images?: string[];
    description: {
      heading: string;
      text: string;
    };
    technologies: string[];
    links: {
      frontEnd: string;
      backEnd: string;
      liveLink: string;
    };
    isDeleted?: boolean; // Optional isDeleted boolean field
  };
  