import { DatasetFile } from "../../Types";
import {
    GET_ALL_DATASET_FILES,
    GET_ALL_DATASET_FILES_ERROR,
    GET_ALL_DATASET_FILES_LOADING,
  } from "../actions";
  
  export interface GetAllDatasetFilesActionPayload {
    data: DatasetFile[];
    isLoading: boolean;
    isError: boolean;
  }
  
  interface GetAllDatasetFilesActionBase {
    type: string;
    payload: any;
  }
  
  export interface GetAllDatasetFilesAction
    extends GetAllDatasetFilesActionBase {
    type: typeof GET_ALL_DATASET_FILES;
  }
  
  export interface GetAllDatasetFilesLoadingAction
    extends GetAllDatasetFilesActionBase {
    type: typeof GET_ALL_DATASET_FILES_LOADING;
  }
  
  export interface GetAllDatasetFilesErrorAction
    extends GetAllDatasetFilesActionBase {
    type: typeof GET_ALL_DATASET_FILES_ERROR;
  }
  

  type AllActions =
    | GetAllDatasetFilesAction
    | GetAllDatasetFilesLoadingAction
    | GetAllDatasetFilesErrorAction;
  
  const initialState: GetAllDatasetFilesActionPayload = {
    data: [],
    isLoading: true,
    isError: false,
  };
  
  const getAllDatasetFiles = (
    state: GetAllDatasetFilesActionPayload = initialState,
    action: AllActions
  ): GetAllDatasetFilesActionPayload => {
    switch (action.type) {
      case GET_ALL_DATASET_FILES:
        return {
          ...state,
          data: action.payload,
        };
  
      case GET_ALL_DATASET_FILES_LOADING:
        return {
          ...state,
          isLoading: action.payload,
        };
      case GET_ALL_DATASET_FILES_ERROR:
        return {
          ...state,
          isError: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default getAllDatasetFiles;
  