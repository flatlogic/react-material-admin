

const usersFields = {
	id: { type: 'id', label: 'ID' },
fullName: { type: 'string', label: 'Full Name',
    
    },
firstName: { type: 'string', label: 'First Name',
    
    },
lastName: { type: 'string', label: 'Last Name',
    
    },
phoneNumber: { type: 'string', label: 'Phone Number',
    
    },
email: { type: 'string', label: 'E-mail',
    
    },
disabled: { type: 'boolean', label: 'Disabled',
    
    },
role: { type: 'enum', label: 'Role',
  
    options: [
    
        { value: 'admin', label: 'Admin' },
        { value: 'user', label: 'User' },    
    ],
    
    },
avatar: { type: 'images', label: 'Avatar',
    
    },
password: { type: 'string', label: 'Password',
    
    },
emailVerified: { type: 'boolean', label: 'emailVerified',
    
    },
emailVerificationToken: { type: 'string', label: 'emailVerificationToken',
    
    },
emailVerificationTokenExpiresAt: { type: 'datetime', label: 'emailVerificationTokenExpiresAt',
    
    },
passwordResetToken: { type: 'string', label: 'passwordResetToken',
    
    },
passwordResetTokenExpiresAt: { type: 'datetime', label: 'passwordResetTokenExpiresAt',
    
    },

}

export default usersFields;
