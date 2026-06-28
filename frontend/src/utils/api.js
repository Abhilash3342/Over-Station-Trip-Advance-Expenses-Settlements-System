const productionApiUrl = import.meta.env.VITE_API_URL;

if (!import.meta.env.DEV && !productionApiUrl) {
  console.warn(
    'VITE_API_URL is not configured for production. The app will still load, but API requests may fail unless a backend is available at the same origin or a value is provided.'
  );
}

export const API_URL = import.meta.env.DEV
  ? ''
  : (productionApiUrl || '');

const request = async (method, path, body = null, isMultipart = false) => {
  const token = localStorage.getItem('token');
  const headers = {};

  if (!isMultipart) {
    headers['Content-Type'] = 'application/json';
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config = {
    method,
    headers,
  };

  if (body) {
    config.body = isMultipart ? body : JSON.stringify(body);
  }

  try {
    const res = await fetch(`${API_URL}${path}`, config);
    
    // Safety check: if server responds with HTML instead of JSON (like a 404 or 502 page)
    const contentType = res.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error(`Server returned non-JSON response (${res.status}). Check server logs.`);
    }

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    if (!import.meta.env.DEV && error instanceof Error && error.message === 'Failed to fetch') {
      const backendError = new Error(
        `Unable to connect to the backend API at ${API_URL}. ` +
        `Please ensure the backend is deployed and CORS is configured for this origin.`
      );
      console.error(`API Error on ${method} ${path}:`, backendError);
      throw backendError;
    }

    console.error(`API Error on ${method} ${path}:`, error);
    throw error;
  }
};

const api = {
  auth: {
    login: (credentials) => request('POST', '/api/auth/login', credentials),
    register: (userData) => request('POST', '/api/auth/register', userData),
    me: () => request('GET', '/api/auth/me'),
    resetPassword: (payload) => request('POST', '/api/auth/reset-password', payload),
    changePassword: (payload) => request('PUT', '/api/auth/change-password', payload),
    updateProfile: (formData) => request('PUT', '/api/auth/profile', formData, true),
  },
  drivers: {
    list: () => request('GET', '/api/drivers'),
    get: (id) => request('GET', `/api/drivers/${id}`),
    create: (driverData) => request('POST', '/api/drivers', driverData),
    update: (id, driverData) => request('PUT', `/api/drivers/${id}`, driverData),
    delete: (id) => request('DELETE', `/api/drivers/${id}`),
  },
  trips: {
    list: (status = '', search = '') => {
      const params = new URLSearchParams();
      if (status) params.append('status', status);
      if (search) params.append('search', search);
      const query = params.toString() ? `?${params.toString()}` : '';
      return request('GET', `/api/trips${query}`);
    },
    get: (id) => request('GET', `/api/trips/${id}`),
    create: (tripData) => request('POST', '/api/trips', tripData),
    update: (id, tripData) => request('PUT', `/api/trips/${id}`, tripData),
    updateStatus: (id, status) => request('PUT', `/api/trips/${id}/status`, { status }),
  },
  expenses: {
    create: (formData) => request('POST', '/api/expenses', formData, true),
    listPending: () => request('GET', '/api/expenses/pending'),
    updateStatus: (id, status) => request('PUT', `/api/expenses/${id}/status`, { status }),
    delete: (id) => request('DELETE', `/api/expenses/${id}`),
  },
  settlements: {
    submit: (tripId) => request('POST', '/api/settlements', { tripId }),
    list: () => request('GET', '/api/settlements'),
    updateStatus: (id, status, remarks) => request('PUT', `/api/settlements/${id}/status`, { status, remarks }),
  },
  reports: {
    getDashboardStats: () => request('GET', '/api/reports/dashboard-stats'),
    getDriverSummary: () => request('GET', '/api/reports/driver-summary'),
    getTripSettlements: () => request('GET', '/api/reports/trip-settlements'),
    getMonthlyTrends: () => request('GET', '/api/reports/monthly-trends'),
    getAuditLogs: () => request('GET', '/api/reports/audit-logs'),
  },
  notifications: {
    list: () => request('GET', '/api/notifications'),
    markRead: (id) => request('PUT', `/api/notifications/${id}/read`),
    markAllRead: () => request('PUT', '/api/notifications/read-all'),
  }
};

export default api;