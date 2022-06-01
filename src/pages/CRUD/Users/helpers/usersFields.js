const usersFields = {
  id: { type: 'id', label: 'ID' },

  firstName: { type: 'string', label: 'First Name' },

  lastName: { type: 'string', label: 'Last Name' },

  phoneNumber: { type: 'string', label: 'Phone Number' },

  email: { type: 'string', label: 'E-Mail' },

  role: {
    type: 'enum',
    label: 'Role',

    options: [
      { value: 'admin', label: 'admin' },

      { value: 'user', label: 'user' },
    ],
  },

  disabled: { type: 'boolean', label: 'Disabled' },

  avatar: { type: 'images', label: 'Avatar' },

  password: { type: 'string', label: 'Password' },

  emailVerified: { type: 'boolean', label: 'Email Verified' },

  emailVerificationToken: { type: 'string', label: 'Email Verification Token' },

  emailVerificationTokenExpiresAt: {
    type: 'datetime',
    label: 'Email Verification Token Expires At',
  },

  passwordResetToken: { type: 'string', label: 'Password Reset Token' },

  passwordResetTokenExpiresAt: {
    type: 'datetime',
    label: 'Password Reset Token Expires At',
  },

  provider: { type: 'string', label: 'Provider' },
};

export default usersFields;
