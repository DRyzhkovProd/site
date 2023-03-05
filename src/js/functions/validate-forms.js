import JustValidate from 'just-validate';
import Inputmask from "inputmask";
import data from "inputmask/lib/dependencyLibs/data";


const postMail = async (data) => {
  const res = await fetch('http://localhost:3008/api/mailer/v1/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
}

export const validateForms = (selector, rules, afterSend) => {
  const form = document?.querySelector(selector);
  const telSelector = form?.querySelector('input[type="tel"]');

  if (!form) {
    console.error('Нет такого селектора!');
    return false;
  }

  if (!rules) {
    console.error('Вы не передали правила валидации!');
    return false;
  }

  const validation = new JustValidate(selector);

  for (let item of rules) {
    validation
      .addField(item.ruleSelector, item.rules);
  }

   validation.onSuccess(async (ev) => {
     const name = ev.target.querySelector('.input-name')?.value;
     const phone = ev.target.querySelector('.input-tel')?.value;
     const telegram = ev.target.querySelector('.input-telegram')?.value;
     const year = ev.target.querySelector('.input-year')?.value;
     const btn = ev.target.querySelector('.form__btn')


     const mailData = { name, phone, telegram, year };

     try {
       btn.disabled = true;
       await postMail(mailData);
       btn.disabled = false;
       ev.target.reset();
     } catch (e) {
       btn.disabled = false;
       ev.target.reset();
       alert('При отправке произошла ошибка, повторите позже')
       throw new Error(e.message)
     }
  })

};
