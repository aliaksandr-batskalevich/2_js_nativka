export type CurrencyReducersTypes = ChangeCurrencyFieldType
    | ChangeAction
    | ChangeCurrentCurrencyType

export type ChangeCurrencyFieldType = {
    type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE
    payload: {
        amountOfBYN: string
        amountOfCurrency: string
    }
}
export type ChangeCurrentCurrencyType = {
    type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY
    payload: { currentCurrency: string }
}
export type ChangeAction = {
    type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION
    payload: { isBuying: boolean }
}

export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
}

export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string): ChangeCurrencyFieldType => {
    return {
        type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
        payload: {amountOfBYN, amountOfCurrency}
    }
};

export const ChangeCurrentCurrencyAC = (currentCurrency: string): ChangeCurrentCurrencyType => {
    return {
        type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,
        payload: { currentCurrency }
    }
};

export const ChangeActionAC = (isBuying: boolean): ChangeAction => {
    return {
        type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
        payload: { isBuying }
    }
};


