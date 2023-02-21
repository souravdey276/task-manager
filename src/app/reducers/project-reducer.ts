import { Project } from "../projects/project";
import { Action } from './../actions/index';
import * as projectAction from '../actions/projects-action';


export interface ProjectReducerState {
    loading: boolean;
    loaded: boolean;
    projects: Project[];
}


const initialState: ProjectReducerState = {
    loading: false,
    loaded: false,
    projects: []
}

export function projectReducer(state = initialState, action: Action) {
    switch (action.type) {
        case projectAction.PROJECTS_LIST_REQUESTED: {
            return { ...state, loading: true }
        }
        case projectAction.PROJECTS_LIST_SUCCESS: {
            const updatedProjects = state.projects.concat(action.payload.data);
            return { ...state, loading: false, loaded: true, projects: updatedProjects }
        }
        default:
            return state;
    }
}


// Selectors : Are like observable which helps us to listen to a change in specific slice of a state

export const getLoading = (state: ProjectReducerState) => state.loading;
export const getLoaded = (state: ProjectReducerState) => state.loaded;
export const getProjects = (state: ProjectReducerState) => state.projects;