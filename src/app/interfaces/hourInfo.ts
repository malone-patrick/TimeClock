export enum actionType {
    SHIFT = "Shift",
    BREAK = "Break",
    LUNCH = "Lunch"
}

export enum startEnd {
    START = "In",
    END = "Out"
}

export interface hours {
    type: actionType,
    action: startEnd, 
    time: Date
}

export interface activeActions {
    shiftActive: boolean,
    breakActive: boolean,
    lunchActive: boolean
}