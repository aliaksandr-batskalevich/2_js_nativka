import React from 'react';
import CurrencyExchange from '../../components/CurrencyExchange/CurrencyExchange';
import {CurrencyState, CurrencyType, selectStore} from '../../redux/currencyReducer';
import {Dispatch} from 'redux';
import {
    ChangeActionAC,
    ChangeCurrencyFieldAC,
    ChangeCurrentCurrencyAC,
    CurrencyReducersTypes
} from '../../redux/actions';
import {connect, ConnectedProps, useDispatch, useSelector} from 'react-redux';

// type TProps = ConnectedProps<typeof connector>;


const CurrencyEContainer = () => {

    // const {
    //     currencies,
    //     currentCurrency,
    //     isBuying,
    //     amountOfBYN,
    //     amountOfCurrency,
    //
    //     // setCurrencyAmount,
    //     // setAction,
    //     // changeCurrency,
    //
    //     // ChangeActionAC,
    //     // ChangeCurrencyFieldAC,
    //     // ChangeCurrentCurrencyAC,
    //
    // } = props;

    const {
        currencies,
        currentCurrency,
        isBuying,
        amountOfBYN,
        amountOfCurrency,
    } = useSelector(selectStore);
    const dispatch = useDispatch();

    let currencyRate: number = 0;

    // создается массив имен валют и устанавливается РЭЙТ в зависимости продажа или покупка
    const currenciesName = currencies.map((currency: CurrencyType) => {
        if (currency.currencyName === currentCurrency) {
            currencyRate = isBuying ? currency.buyRate : currency.sellRate;
        }
        return currency.currencyName;
    });

    const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        if (!isFinite(+value)) return;
        if (e.currentTarget.dataset.currency) {
            const trigger: string = e.currentTarget.dataset.currency;
            if (trigger === 'byn') {
                if (value === '') {

                    // setCurrencyAmount(value, value);
                    // ChangeCurrencyFieldAC(value, value);
                    dispatch(ChangeCurrencyFieldAC(value, value));

                } else {

                    // setCurrencyAmount(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2));
                    // ChangeCurrencyFieldAC(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2));
                    dispatch(ChangeCurrencyFieldAC(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2)));

                }
            } else {
                if (value === '') {

                    // setCurrencyAmount(value, value);
                    // ChangeCurrencyFieldAC(value, value);
                    dispatch(ChangeCurrencyFieldAC(value, value));

                } else {

                    // setCurrencyAmount((+Number(value).toFixed(2) * currencyRate).toFixed(2), value);
                    // ChangeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value);
                   dispatch(ChangeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value));

                }
            }
        }
    };
    const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {

        // e.currentTarget.dataset.action === 'buy' ? setAction(true) : setAction(false);
        // e.currentTarget.dataset.action === 'buy' ? ChangeActionAC(true) : ChangeActionAC(false);
        dispatch(e.currentTarget.dataset.action === 'buy' ? ChangeActionAC(true) : ChangeActionAC(false));

    };

    const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {

        // e.currentTarget.dataset.currency && changeCurrency(e.currentTarget.dataset.currency);
        // e.currentTarget.dataset.currency && ChangeCurrentCurrencyAC(e.currentTarget.dataset.currency);
        dispatch(e.currentTarget.dataset.currency && ChangeCurrentCurrencyAC(e.currentTarget.dataset.currency));

    };

    return (
        <React.Fragment>
            <CurrencyExchange
                currenciesName={currenciesName}
                currentCurrency={currentCurrency}
                currencyRate={currencyRate}
                isBuying={isBuying}
                amountOfBYN={amountOfBYN}
                amountOfCurrency={amountOfCurrency}
                changeCurrencyField={changeCurrencyField}
                changeAction={changeAction}
                changeCurrentCurrency={changeCurrentCurrency}
            />
        </React.Fragment>
    );
};


const mapStateToProps = ({currency}: { currency: CurrencyState }): CurrencyState => {
    return {
        currencies: currency.currencies,
        currentCurrency: currency.currentCurrency,
        isBuying: currency.isBuying,
        amountOfBYN: currency.amountOfBYN,
        amountOfCurrency: currency.amountOfCurrency,
    };
};

// const mapDispatchToProps = (dispatch: Dispatch<CurrencyReducersTypes>) : any => {
//     return {
//         setCurrencyAmount(amountOfBYN: string, amountOfCurrency: string) {
//             dispatch(ChangeCurrencyFieldAC(amountOfBYN, amountOfCurrency));
//         },
//         setAction(isBuying: boolean) {
//             dispatch(ChangeActionAC(isBuying));
//         },
//         changeCurrency(currency: string) {
//             dispatch(ChangeCurrentCurrencyAC(currency));
//         },
//     };
// };

// const connector = connect(mapStateToProps, mapDispatchToProps);
// const connector = connect(mapStateToProps, {
//     ChangeActionAC,
//     ChangeCurrencyFieldAC,
//     ChangeCurrentCurrencyAC,
// });

// const connector = connect(mapStateToProps, {});
// export default connector(CurrencyEContainer);

export default CurrencyEContainer;

