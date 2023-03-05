import { validateForms } from '../functions/validate-forms';

const rules = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните год!'
      }
    ]
  },
  {
    ruleSelector: '.input-year',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните год!'
      }
    ]
  }
];

const afterForm = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.order__form', rules, afterForm);
