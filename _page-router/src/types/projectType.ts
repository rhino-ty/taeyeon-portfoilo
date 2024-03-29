export interface ProjectProperty {
  설명: {
    id: string;
    type: string;
    rich_text: {
      type: string;
      text: {
        content: string;
        link: string | null;
      };
      annotations: {
        bold: boolean;
        italic: boolean;
        strikethrough: boolean;
        underline: boolean;
        code: boolean;
        color: string;
      };
      plain_text: string;
      href: string | null;
    }[];
  };
  Github: {
    id: string;
    title: string;
    url: string;
  };
  작업일자: {
    id: string;
    type: string;
    date: {
      start: string;
      end?: string;
    };
  };
  Velog: {
    id: string;
    type: string;
    url: string;
  };
  Deploy: {
    id: string;
    type: string;
    url: string;
  };
  태그: {
    id: string;
    type: string;
    multi_select: {
      id: string;
      name: string;
      color: string;
    }[];
  };
  이름: {
    id: string;
    type: string;
    title: {
      type: string;
      text: {
        content: string;
        link: string | null;
      };
      annotations: {
        bold: boolean;
        italic: boolean;
        strikethrough: boolean;
        underline: boolean;
        code: boolean;
        color: string;
      };
      plain_text: string;
      href: string | null;
    }[];
  };
  담당: {
    id: string;
    type: string;
    rich_text: {
      type: string;
      text: {
        content: string;
        link: string | null;
      };
      annotations: {
        bold: boolean;
        italic: boolean;
        strikethrough: boolean;
        underline: boolean;
        code: boolean;
        color: string;
      };
      plain_text: string;
      href: string | null;
    };
  }[];
}

export interface ProjectCoverImage {
  type: string;
  external?: {
    url: string;
  };
  file?: {
    url: string;
    expiry_time: string;
  };
}

export interface Project {
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: {
    object: string;
    id: string;
  };
  last_edited_by: {
    object: string;
    id: string;
  };
  cover: ProjectCoverImage;
  icon: string | null;
  parent: {
    type: string;
    database_id: string;
  };
  archived: boolean;
  properties: ProjectProperty;
  url: string;
}

export interface ProjectsArrProps {
  projects: Project[];
}
