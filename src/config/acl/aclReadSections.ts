export interface Page {
  type: 'Page',
  section: any
}

export const viewSections : Page  = {
    type: 'Page',
    section: { 
      dashboard : {
        search: 'Search'
      }
    }
}

