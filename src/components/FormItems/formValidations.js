import moment from 'moment';
import * as yup from 'yup';

const formValidations = (fields, record = {}) => {
  const yupArray = {};
  Object.keys(fields).forEach((field) => {
    const type = fields[field].type;
    const label = fields[field].label;
    const required = fields[field].required;
    let yupConds = {};
    switch (type) {
      case 'boolean':
        yupConds = yup.bool().default(false);
        break;

      case 'date':
        yupConds = yup
          .mixed()
          .nullable(true)
          .test('is-date', '', (value) => {
            if (!value) {
              return true;
            }
            return moment(value, 'YYYY-MM-DD').isValid();
          });
        break;

      case 'datetime':
        yupConds = yup.mixed().nullable(true);
        break;

      case 'decimal':
        yupConds = yup.number().nullable(true);
        break;

      case 'enum':
        yupConds = yup.string().nullable(true);
        break;

      case 'files':
        yupConds = yup.array().compact().ensure().nullable(true);
        break;

      case 'images':
        yupConds = yup.array().nullable(true);
        break;

      case 'int':
        yupConds = yup.number().integer().nullable(true);
        break;

      case 'user_many':
      case 'relation_many':
        yupConds = yup.array().nullable(true);
        break;

      case 'user_one':
      case 'relation_one':
        yupConds = yup.mixed().nullable(true);
        break;

      case 'stringArray':
        yupConds = yup.array().compact().ensure().of(yup.string().trim());
        break;

      case 'string':
        yupConds = yup.string().nullable(true).trim();
        break;

      default:
        yupConds = yup.string();
    }
    yupConds = yupConds.label(label);
    if (required) {
      yupConds = yupConds.required();
    }
    yupArray[field] = yupConds;
  });
  return yup.object().shape(yupArray);
};

export default formValidations;
