import { makeStyles as tssMakeStyles } from 'tss-react/mui';
import { useTheme as useMuiTheme } from '@mui/material/styles';

const isPlainObject = (value) =>
  value !== null && typeof value === 'object' && !Array.isArray(value);

const replaceClassRefsInSelector = (selector, classes) =>
  selector.replace(/\$([a-zA-Z0-9_-]+)/g, (_, className) =>
    classes[className] ? `.${classes[className]}` : `$${className}`,
  );

const resolveDynamicValues = (value, params, theme, classes) => {
  if (typeof value === 'function') {
    return value(params, theme, classes);
  }

  if (Array.isArray(value)) {
    return value.map((item) => resolveDynamicValues(item, params, theme, classes));
  }

  if (!isPlainObject(value)) {
    return value;
  }

  return Object.entries(value).reduce((acc, [key, val]) => {
    const resolvedKey = typeof key === 'string' ? replaceClassRefsInSelector(key, classes) : key;
    acc[resolvedKey] = resolveDynamicValues(val, params, theme, classes);
    return acc;
  }, {});
};

const resolveStyleObject = (stylesOrCreator, theme, params, classes) => {
  const rawStyles =
    typeof stylesOrCreator === 'function'
      ? stylesOrCreator(theme, params, classes)
      : stylesOrCreator;

  return resolveDynamicValues(rawStyles, params, theme, classes);
};

export const makeStyles = (stylesOrCreator, options) => {
  const useTssStyles = tssMakeStyles(options)(
    (theme, params, classes) =>
      resolveStyleObject(stylesOrCreator, theme, params, classes),
  );

  return (params = {}) => useTssStyles(params).classes;
};

export const useTheme = useMuiTheme;
