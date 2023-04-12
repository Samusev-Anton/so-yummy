export const getValidColor = (
  errors,
  touched,
  defaultColor = 'rgba(255, 255, 255, 0.8)'
) => {
  if (
    errors === 'Your password is short' ||
    errors === 'Your password is too long'
    // ||
    // errors ===
    //   'The password must contain at least 8 characters, include letters, numbers and special characters.'
  ) {
    return '#F6C23E';
  }
  return touched ? (errors && '#E74A3B') || '#3CBC81' : defaultColor;
};

export const getValidColorPass = (
  errors,
  touched,
  defaultColor = '#8baa36'
) => {
  if (
    errors === 'Your password is short' ||
    errors === 'Your password is too long'
    // ||
    // errors ===
    //   'The password must contain at least 8 characters, include letters, numbers and special characters.'
  ) {
    return '#F6C23E';
  }
  return touched ? (errors && '#E74A3B') || '#3CBC81' : defaultColor;
};
