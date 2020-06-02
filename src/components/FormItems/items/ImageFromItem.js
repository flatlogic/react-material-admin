// import PropTypes from 'prop-types';
// import React, { Component } from 'react';
// import ImagesUploader from '../uploaders/UploadService';
// // import FormErrors from 'components/FormItems/formErrors';
// import { FastField } from 'formik';

// class ImagesFormItemNotFast extends Component {
//   render() {
//     const {
//       name,
//       form,
//       hint,
//       path,
//       fileProps,
//       max,
//       inputProps,
//       required,
//     } = this.props;

//     return (
//       <div className="form-group">
//         <br />

//         <ImagesUploader
//           path={path}
//           schema={fileProps}
//           value={form.values[name]}
//           onChange={(value) => {
//             form.setFieldValue(name, value);
//             form.setFieldTouched(name);
//           }}
//           max={max}
//           {...inputProps}
//         />

//         <div className="invalid-feedback">
//           erer
//           {/* {FormErrors.displayableError(form, name)} */}
//         </div>

//       </div>
//     );
//   }
// }

// ImagesFormItemNotFast.defaultProps = {
//   max: undefined,
//   required: false,
// };

// ImagesFormItemNotFast.propTypes = {
//   path: PropTypes.string.isRequired,
//   required: PropTypes.bool,
//   form: PropTypes.object.isRequired,
//   name: PropTypes.string.isRequired,
//   hint: PropTypes.string,
//   formItemProps: PropTypes.object,
//   inputProps: PropTypes.object,
// };

// class ImagesFormItem extends Component {
//   render() {
//     return (
//       <FastField
//         name={this.props.name}
//         render={({ form }) => (
//           <ImagesFormItemNotFast
//             {...this.props}
//             form={form}
//           />
//         )}
//       />
//     );
//   }
// }

// export default ImagesFormItem;
