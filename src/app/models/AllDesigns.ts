export interface AllDesigns {
  data: ProductDesign[];
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface ProductDesign {
  pages: [
    [
      {
        page_index: number;
        page_format_id: string | null;
      }
    ]
  ];
  cover: {
    raw: string;
    medium: string;
    high: string;
    low: string;
  };
  thumbs: {
    raw: string;
    medium: string;
    high: string;
    low: string;
  };
  id: string;
  title: string;
}
