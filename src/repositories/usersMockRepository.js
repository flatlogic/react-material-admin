const INITIAL_USERS = [
  {
    id: '1',
    firstName: 'Admin',
    lastName: 'User',
    phoneNumber: '+1 202 555 0101',
    email: 'admin@flatlogic.com',
    role: 'admin',
    disabled: false,
    avatar: [],
    password: 'password',
    emailVerified: true,
    provider: 'local',
  },
  {
    id: '2',
    firstName: 'Olivia',
    lastName: 'Parker',
    phoneNumber: '+1 202 555 0102',
    email: 'olivia.parker@example.com',
    role: 'user',
    disabled: false,
    avatar: [],
    password: '',
    emailVerified: true,
    provider: 'local',
  },
  {
    id: '3',
    firstName: 'Noah',
    lastName: 'Cooper',
    phoneNumber: '+1 202 555 0103',
    email: 'noah.cooper@example.com',
    role: 'user',
    disabled: false,
    avatar: [],
    password: '',
    emailVerified: true,
    provider: 'local',
  },
  {
    id: '4',
    firstName: 'Emma',
    lastName: 'Stone',
    phoneNumber: '+1 202 555 0104',
    email: 'emma.stone@example.com',
    role: 'user',
    disabled: false,
    avatar: [],
    password: '',
    emailVerified: true,
    provider: 'local',
  },
  {
    id: '5',
    firstName: 'Liam',
    lastName: 'Turner',
    phoneNumber: '+1 202 555 0105',
    email: 'liam.turner@example.com',
    role: 'user',
    disabled: true,
    avatar: [],
    password: '',
    emailVerified: true,
    provider: 'local',
  },
  {
    id: '6',
    firstName: 'Sophia',
    lastName: 'Morgan',
    phoneNumber: '+1 202 555 0106',
    email: 'sophia.morgan@example.com',
    role: 'user',
    disabled: false,
    avatar: [],
    password: '',
    emailVerified: true,
    provider: 'local',
  },
  {
    id: '7',
    firstName: 'Mason',
    lastName: 'Reed',
    phoneNumber: '+1 202 555 0107',
    email: 'mason.reed@example.com',
    role: 'user',
    disabled: false,
    avatar: [],
    password: '',
    emailVerified: true,
    provider: 'local',
  },
  {
    id: '8',
    firstName: 'Isabella',
    lastName: 'Ward',
    phoneNumber: '+1 202 555 0108',
    email: 'isabella.ward@example.com',
    role: 'user',
    disabled: false,
    avatar: [],
    password: '',
    emailVerified: true,
    provider: 'local',
  },
  {
    id: '9',
    firstName: 'James',
    lastName: 'Brooks',
    phoneNumber: '+1 202 555 0109',
    email: 'james.brooks@example.com',
    role: 'user',
    disabled: false,
    avatar: [],
    password: '',
    emailVerified: true,
    provider: 'local',
  },
  {
    id: '10',
    firstName: 'Mia',
    lastName: 'Hayes',
    phoneNumber: '+1 202 555 0110',
    email: 'mia.hayes@example.com',
    role: 'user',
    disabled: false,
    avatar: [],
    password: '',
    emailVerified: true,
    provider: 'local',
  },
  {
    id: '11',
    firstName: 'Benjamin',
    lastName: 'Cole',
    phoneNumber: '+1 202 555 0111',
    email: 'benjamin.cole@example.com',
    role: 'user',
    disabled: true,
    avatar: [],
    password: '',
    emailVerified: true,
    provider: 'local',
  },
  {
    id: '12',
    firstName: 'Charlotte',
    lastName: 'Price',
    phoneNumber: '+1 202 555 0112',
    email: 'charlotte.price@example.com',
    role: 'user',
    disabled: false,
    avatar: [],
    password: '',
    emailVerified: true,
    provider: 'local',
  },
];

const RESERVED_QUERY_KEYS = new Set(['page', 'limit', 'field', 'sort', 'users']);
const SEARCHABLE_FIELDS = ['firstName', 'lastName', 'phoneNumber', 'email', 'role'];

let usersStore = INITIAL_USERS.map((user) => normalizeUser(user));
let idSequence = INITIAL_USERS.length;

function pickQueryValue(value) {
  if (Array.isArray(value)) {
    return value[value.length - 1];
  }
  return value;
}

function toTrimmedString(value) {
  if (value === null || value === undefined) {
    return '';
  }
  return String(value).trim();
}

function toPositiveInteger(value, fallback) {
  const parsed = Number.parseInt(toTrimmedString(value), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function toNonNegativeInteger(value, fallback) {
  const parsed = Number.parseInt(toTrimmedString(value), 10);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
}

function parseRequestQuery(request) {
  const normalized = toTrimmedString(request)
    .replace(/^(\?|&)+/, '')
    .replace(/&+$/, '');

  if (!normalized) {
    return {};
  }

  const result = {};
  const params = new URLSearchParams(normalized);

  params.forEach((value, key) => {
    const currentValue = result[key];

    if (currentValue === undefined) {
      result[key] = value;
      return;
    }

    if (Array.isArray(currentValue)) {
      result[key] = [...currentValue, value];
      return;
    }

    result[key] = [currentValue, value];
  });

  return result;
}

function toComparableValue(value) {
  if (value === null || value === undefined) {
    return '';
  }

  if (typeof value === 'boolean') {
    return value ? 1 : 0;
  }

  if (typeof value === 'number') {
    return value;
  }

  const stringValue = toTrimmedString(value);
  const numericValue = Number(stringValue);

  if (stringValue && Number.isFinite(numericValue)) {
    return numericValue;
  }

  return stringValue.toLowerCase();
}

function compareValues(left, right) {
  const leftComparable = toComparableValue(left);
  const rightComparable = toComparableValue(right);

  if (leftComparable < rightComparable) {
    return -1;
  }
  if (leftComparable > rightComparable) {
    return 1;
  }
  return 0;
}

function normalizeRole(role) {
  return role === 'admin' ? 'admin' : 'user';
}

function normalizeAvatar(avatar) {
  if (Array.isArray(avatar)) {
    return avatar;
  }

  if (avatar && typeof avatar === 'object') {
    return [avatar];
  }

  return [];
}

function normalizeUser(user = {}, fallback = {}) {
  const source = {
    ...fallback,
    ...user,
  };

  return {
    ...source,
    id: toTrimmedString(source.id),
    firstName: toTrimmedString(source.firstName),
    lastName: toTrimmedString(source.lastName),
    phoneNumber: toTrimmedString(source.phoneNumber),
    email: toTrimmedString(source.email),
    role: normalizeRole(source.role),
    disabled: Boolean(source.disabled),
    avatar: normalizeAvatar(source.avatar),
    password: toTrimmedString(source.password),
    emailVerified:
      typeof source.emailVerified === 'boolean' ? source.emailVerified : true,
    emailVerificationToken: source.emailVerificationToken ?? null,
    emailVerificationTokenExpiresAt:
      source.emailVerificationTokenExpiresAt ?? null,
    passwordResetToken: source.passwordResetToken ?? null,
    passwordResetTokenExpiresAt: source.passwordResetTokenExpiresAt ?? null,
    provider: toTrimmedString(source.provider) || 'local',
  };
}

function cloneUsers(users) {
  return users.map((user) => ({
    ...user,
    avatar: Array.isArray(user.avatar) ? [...user.avatar] : [],
  }));
}

function getOrderBy(filterOrderBy, requestQuery) {
  const orderBy = filterOrderBy || {};
  const field = toTrimmedString(orderBy.field || pickQueryValue(requestQuery.field));
  const sort = toTrimmedString(orderBy.sort || pickQueryValue(requestQuery.sort)).toLowerCase();

  if (!field || (sort !== 'asc' && sort !== 'desc')) {
    return null;
  }

  return { field, sort };
}

function applyFilters(users, filter, requestQuery) {
  let result = [...users];

  const globalSearch = toTrimmedString(
    filter.users || pickQueryValue(requestQuery.users),
  ).toLowerCase();

  if (globalSearch) {
    result = result.filter((user) =>
      SEARCHABLE_FIELDS.some((field) =>
        toTrimmedString(user[field]).toLowerCase().includes(globalSearch),
      ),
    );
  }

  Object.entries(requestQuery).forEach(([key, rawValue]) => {
    if (RESERVED_QUERY_KEYS.has(key) || key.endsWith('Range')) {
      return;
    }

    const filterValue = toTrimmedString(pickQueryValue(rawValue)).toLowerCase();

    if (!filterValue) {
      return;
    }

    result = result.filter((user) =>
      toTrimmedString(user[key]).toLowerCase().includes(filterValue),
    );
  });

  return result;
}

function applySorting(users, orderBy) {
  if (!orderBy) {
    return users;
  }

  return [...users].sort((left, right) => {
    const direction = orderBy.sort === 'asc' ? 1 : -1;
    return compareValues(left[orderBy.field], right[orderBy.field]) * direction;
  });
}

function applyPagination(users, filter, requestQuery) {
  const limit = toPositiveInteger(filter.limit ?? pickQueryValue(requestQuery.limit), 10);
  const page = toNonNegativeInteger(filter.page ?? pickQueryValue(requestQuery.page), 0);
  const offset = page * limit;

  return users.slice(offset, offset + limit);
}

function nextId() {
  idSequence += 1;
  return String(idSequence);
}

export function listMockUsers(filter = {}, request = '') {
  const requestQuery = parseRequestQuery(request || filter.request);
  const filteredUsers = applyFilters(usersStore, filter, requestQuery);
  const sortedUsers = applySorting(filteredUsers, getOrderBy(filter.orderBy, requestQuery));
  const rows = applyPagination(sortedUsers, filter, requestQuery);

  return {
    rows: cloneUsers(rows),
    count: filteredUsers.length,
  };
}

export function findMockUser(id) {
  const targetId = toTrimmedString(id);
  const found = usersStore.find((user) => {
    if (!targetId) {
      return true;
    }
    return toTrimmedString(user.id) === targetId;
  });

  if (!found) {
    return null;
  }

  return {
    ...found,
    avatar: Array.isArray(found.avatar) ? [...found.avatar] : [],
  };
}

export function createMockUser(data = {}) {
  const newUser = normalizeUser(
    {
      id: nextId(),
      ...data,
    },
    {
      role: 'user',
      disabled: false,
      avatar: [],
      emailVerified: true,
      provider: 'local',
    },
  );

  usersStore = [newUser, ...usersStore];

  return {
    ...newUser,
    avatar: Array.isArray(newUser.avatar) ? [...newUser.avatar] : [],
  };
}

export function updateMockUser(id, data = {}) {
  const targetId = toTrimmedString(id);
  let updatedUser = null;

  usersStore = usersStore.map((user) => {
    if (toTrimmedString(user.id) !== targetId) {
      return user;
    }

    updatedUser = normalizeUser(
      {
        ...user,
        ...data,
        id: user.id,
      },
      user,
    );

    return updatedUser;
  });

  if (!updatedUser) {
    return null;
  }

  return {
    ...updatedUser,
    avatar: Array.isArray(updatedUser.avatar) ? [...updatedUser.avatar] : [],
  };
}

export function deleteMockUser(id) {
  const targetId = toTrimmedString(id);
  const previousLength = usersStore.length;
  usersStore = usersStore.filter((user) => toTrimmedString(user.id) !== targetId);

  return usersStore.length < previousLength;
}
