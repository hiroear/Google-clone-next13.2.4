export interface GoogleSearchTypes {
    kind: string;
    url: {
      type: string;
      template: string;
    },
    queries: { request: [ [Object] ], nextPage: [ [Object] ] },
    context: { title: string; },
    searchInformation: {
      searchTime: number;
      formattedSearchTime: string;
      totalResults: string;
      formattedTotalResults: string;
    },
    items: [
      {
        kind: string;
        title: string;
        htmlTitle: string;
        link: string;
        displayLink: string;
        snippet: string;
        htmlSnippet: string;
        formattedUrl: string;
        htmlFormattedUrl: string;
        pagemap: object ;
        mime: string;
        fileFormat : string;
        image : {
          contextLink : string;
          height : number;
          width : number;
          byteSize : number;
          thumbnailLink : string;
          thumbnailHeight : number;
          thumbnailWidth : number;
        },
      }
    ]
}