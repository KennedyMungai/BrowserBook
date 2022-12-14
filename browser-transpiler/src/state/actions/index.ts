import { ActionType } from "../action-types";
import { CellTypes, Direction } from '../cell';


export interface MoveCellAction
{
    type: ActionType.MOVE_CELL;
    payload: {
        id: string,
        direction: Direction;
    }
}

export interface DeleteCellAction
{
    type: ActionType.DELETE_CELL;
    payload: string;
}

export interface InsertCellAfterAction
{
    type: ActionType.INSERT_CELL_AFTER;
    payload: {
        id: string | null,
        type: CellTypes
    };
}

export interface UpdateCellAction
{
    type: ActionType.UPDATE_CELL;
    payload: {
        cellId: string,
    }
}

export interface BundleCompleteAction
{
    type: ActionType.BUNDLE_COMPLETE,
    payload: {
        cellId: string,
        bundle: {
            code: string;
            err: string;
        }
    }
}

export interface BundleStartAction
{
    type: ActionType.BUNDLE_START,
    payload: {
        cellId: string;
    }
};

export type Action = MoveCellAction | UpdateCellAction | InsertCellAfterAction | DeleteCellAction | BundleStartAction | BundleCompleteAction;