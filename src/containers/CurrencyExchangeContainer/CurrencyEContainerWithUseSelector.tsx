import React from 'react';
import {CurrencyState, CurrencyType} from '../../redux/currencyReducer';
import CurrencyExchangeWithUseSelector from "../../components/CurrencyExchange/CurrencyExchangeWithUseSelector";
import {useDispatch, useSelector} from "react-redux";
import {IGlobalState} from "../../redux/state";
import {ChangeActionAC, ChangeCurrencyFieldAC, СhangeCurrentCurrencyAC} from "../../redux/actions";

export const CurrencyEContainerWithUseSelector = () => {
  const currencies = useSelector<IGlobalState, Array<CurrencyType>>(state => state.currency.currencies)
  const currencyArr = useSelector<IGlobalState, CurrencyState>(state => state.currency)
  const dispatch = useDispatch()
  let currencyRate: number = 0;
  const currenciesName = currencies.map((currency: CurrencyType) => {
    if (currency.currencyName === currencyArr.currentCurrency) {
      currencyRate = currencyArr.isBuying ? currency.buyRate : currency.sellRate;
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
          dispatch(ChangeCurrencyFieldAC(value, value));
        } else {
          dispatch(ChangeCurrencyFieldAC(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2)));
        }
      } else {
        if (value === '') {
          dispatch(ChangeCurrencyFieldAC(value, value));
        } else {
          dispatch(ChangeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value));
        }
      }
    }
  };
  const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.currentTarget.dataset.action === 'buy' ? dispatch(ChangeActionAC(true)) : dispatch(ChangeActionAC(false));
  };

  const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
    e.currentTarget.dataset.currency && dispatch(СhangeCurrentCurrencyAC(e.currentTarget.dataset.currency));
  };

  return (
    <React.Fragment>
      <CurrencyExchangeWithUseSelector
        currenciesName={currenciesName}
        currentCurrency={currencyArr.currentCurrency}
        currencyRate={currencyRate}
        isBuying={currencyArr.isBuying}
        amountOfBYN={currencyArr.amountOfBYN}
        amountOfCurrency={currencyArr.amountOfCurrency}
        changeCurrencyField={changeCurrencyField}
        changeAction={changeAction}
        changeCurrentCurrency={changeCurrentCurrency}
      />
    </React.Fragment>
  );
};




