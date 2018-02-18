import * as clientActions from '../actions/client';
import { Section, Post, Tag } from '../datatypes';
import { remove } from 'lodash';

export class State {
  sections: Section[]
  section: Section
  post: Post
  posts: Post[]
}

const initialState: State = {
  sections: [],
  section: null,
  post: null,
  posts: []
};

export function reducer(state = initialState, action: clientActions.ClientActions): State {
  switch (action.type) {
    case clientActions.SELECT_SECTIONS: {
      return Object.assign(state, {
        sections: []
      });
    }
    case clientActions.SELECT_SECTIONS_COMPLETE: {
      return Object.assign(state, {
        sections: action.payload
      });
    }

    case clientActions.SELECT_SECTION: {
      return Object.assign(state, {
        section: null
      });
    }

    case clientActions.SELECT_SECTION_COMPLETE: {
      return Object.assign(state, {
        section: action.payload
      });
    }

    case clientActions.CREATE_SECTION_COMPLETE: {
      const newSection = action.payload as Section;
      return Object.assign(state, {
        sections: [...state.sections, newSection]
      });
    }

    case clientActions.UPDATE_SECTION_COMPLETE: {
      const newSection = action.payload as Section;
      if (!state.sections.length) {
        return Object.assign(state, {
          sections: [newSection]
        });
      }
      const sections = [...state.sections];
      const index = sections.findIndex((section) => section.id === newSection.id);
      sections.splice(index, 1, newSection);
      return Object.assign(state, {
        sections: [...sections]
      });
    }

    // case clientActions.DELETE_SECTION_COMPLETE: {
    //   return Object.assign(state, {
    //     sections: [...state.sections.filter(section => section.id !== action.payload)]
    //   });
    // }

    default:
      return state;
  }
}
