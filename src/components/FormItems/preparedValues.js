import moment from 'moment';

const PreparedValues = (fields, record = {}) => {
  const preparedArray = {};
  Object.keys(fields).forEach((field) => {
    const type = fields[field].type;
    const value = record[field];
    let preparedValue = '';
    switch (type) {
      case 'date':
        preparedValue = value ? moment(value, 'YYYY-MM-DD').toDate() : null;
        break;

      case 'user_many':
      case 'relation_many':
        if (!value || !value.length) {
          preparedValue = [];
        } else {
          preparedValue = value.map((item) => item.id);
        }
        break;

      case 'user_one':
      case 'relation_one':
        preparedValue = value ? value.id : null;
        break;

      default:
        preparedValue = value;
    }
    preparedArray[field] = preparedValue;
  });
  return preparedArray;
};

export default PreparedValues;
