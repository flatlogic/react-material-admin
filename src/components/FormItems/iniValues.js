import moment from 'moment';
import { isString } from 'lodash';

const IniValues = (fields, record = {}) => {
  const iniArray = {};
  Object.keys(fields).forEach((field) => {
    const type = fields[field].type;
    const value = record[field];
    let showValue = '';
    switch (type) {
      case 'boolean':
        showValue = value;
        break;

      case 'date':
        showValue = value ? moment(value, 'YYYY-MM-DD').toDate() : null;
        break;

      case 'dateRange':
        if (!value || !value.length) {
          showValue = [];
        } else {
          showValue = value.map((item) =>
            item ? moment(item, 'YYYY-MM-DD').toDate() : null,
          );
        }
        break;

      case 'datetime':
        showValue = value ? moment(value).toDate() : null;
        break;

      case 'datetimeRange':
        if (!value || !value.length) {
          showValue = [];
        } else {
          showValue = value.map((item) =>
            item ? moment(item).toDate() : null,
          );
        }
        break;

      case 'decimal':
        showValue = value;
        break;

      case 'decimalRange':
        showValue = value || [];
        break;

      case 'enum':
        if (!value || isString(value)) {
          showValue = value;
        } else {
          showValue = value.id;
        }
        break;

      case 'files':
        showValue = value;
        break;

      case 'images':
        showValue = value;
        break;

      case 'int':
        showValue = value;
        break;

      case 'intRange':
        showValue = value;
        break;

      case 'relation_many':
        showValue = value;
        break;

      case 'relation_one':
        showValue = value;
        break;

      case 'user_many':
        showValue = value;
        break;

      case 'user_one':
        showValue = value;
        break;

      case 'stringArray':
        if (!value) {
          showValue = [];
        } else if (Array.isArray(value)) {
          showValue = value;
        } else {
          showValue = [value];
        }
        break;

      case 'string':
        showValue = value;
        break;

      default:
        showValue = value;
    }
    iniArray[field] = showValue;
  });
  return iniArray;
};

export default IniValues;
