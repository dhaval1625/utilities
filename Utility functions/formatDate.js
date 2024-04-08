const dateOptions = {
   year: 'numeric',
   month: 'short',
   day: 'numeric',
};

const monthOptions = {
   year: 'numeric',
   month: 'short',
}

const dateWithTimeOptions = {
   ...dateOptions,
   hour: '2-digit',
   minute: '2-digit',
};

const timeOptions = {
   hour: '2-digit',
   minute: '2-digit',
};


export function formatDate(date) {
   return new Date(date).toLocaleDateString(undefined, dateOptions);
};

export function formatMonth(date) {
   return new Date(date).toLocaleDateString(undefined, monthOptions);
};

export function formatTime(date) {
   return new Date(date).toLocaleDateString(undefined, dateWithTimeOptions);
}

export function getTime(date) {
   return new Date(date).toLocaleDateString(undefined, timeOptions);
}