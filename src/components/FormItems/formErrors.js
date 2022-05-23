export default class FormErrors {
  static displayableError(form, fieldName, externalErrorMessage = null) {
    if (externalErrorMessage) {
      return externalErrorMessage;
    }

    if (!form.touched[fieldName]) {
      return null;
    }

    const errors = form.errors[fieldName];

    if (!errors) {
      return null;
    }

    if (Array.isArray(errors)) {
      return errors[0];
    }

    return errors;
  }

  static validateStatus(form, fieldName, externalErrorMessage) {
    if (this.displayableError(form, fieldName, externalErrorMessage)) {
      return 'is-invalid';
    }

    return '';
  }
}
