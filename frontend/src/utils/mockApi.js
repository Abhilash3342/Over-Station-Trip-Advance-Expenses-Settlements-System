// Mock Data Store for GitHub Pages static demo execution when backend server is unavailable

let driversStore = [
  { id: 1, userId: 2, name: 'Ramesh Shah', email: 'ramesh@manivtha.com', phone: '9876543210', licenseNumber: 'DL-1420180098765', status: 'active' },
  { id: 2, userId: 4, name: 'Suresh Patil', email: 'suresh@manivtha.com', phone: '9876543211', licenseNumber: 'DL-1520190012345', status: 'active' },
  { id: 3, userId: 5, name: 'Vikram Singh', email: 'vikram@manivtha.com', phone: '9876543212', licenseNumber: 'DL-1220170054321', status: 'active' },
];

let tripsStore = [
  { id: 1, driverId: 1, driver: driversStore[0], destination: 'Goa', startDate: '2026-05-10', endDate: '2026-05-15', vehicleNumber: 'KA-51-MB-4321', advanceAmount: 15000.00, status: 'settled', expensesTotal: 15600.00 },
  { id: 2, driverId: 2, driver: driversStore[1], destination: 'Chennai', startDate: '2026-05-20', endDate: '2026-05-24', vehicleNumber: 'KA-03-MM-7890', advanceAmount: 10000.00, status: 'completed', expensesTotal: 9250.00 },
  { id: 3, driverId: 1, driver: driversStore[0], destination: 'Mumbai', startDate: '2026-06-08', endDate: '2026-06-14', vehicleNumber: 'KA-51-MB-4321', advanceAmount: 20000.00, status: 'active', expensesTotal: 12950.00 },
  { id: 4, driverId: 3, driver: driversStore[2], destination: 'Hyderabad', startDate: '2026-06-15', endDate: '2026-06-18', vehicleNumber: 'KA-04-P-1122', advanceAmount: 8000.00, status: 'pending', expensesTotal: 0.00 },
];

let expensesStore = [
  { id: 1, tripId: 1, category: 'fuel', amount: 8500.00, date: '2026-05-10', description: 'Diesel refuel at Shell bunk', receiptUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400', status: 'approved' },
  { id: 2, tripId: 1, category: 'toll', amount: 1400.00, date: '2026-05-10', description: 'National Highway Fastag tolls', receiptUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400', status: 'approved' },
  { id: 3, tripId: 1, category: 'accommodation', amount: 3500.00, date: '2026-05-12', description: 'Hotel room for 4 nights', receiptUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400', status: 'approved' },
  { id: 4, tripId: 1, category: 'food', amount: 2200.00, date: '2026-05-13', description: 'Driver meals during trip', receiptUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400', status: 'approved' },
  { id: 5, tripId: 2, category: 'fuel', amount: 6000.00, date: '2026-05-20', description: 'Diesel refill HP Petrol', receiptUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400', status: 'approved' },
  { id: 6, tripId: 2, category: 'toll', amount: 850.00, date: '2026-05-20', description: 'NH4 Toll Plaza charges', receiptUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400', status: 'approved' },
  { id: 7, tripId: 2, category: 'accommodation', amount: 2000.00, date: '2026-05-21', description: 'Lodge stay in Chennai', receiptUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400', status: 'approved' },
  { id: 8, tripId: 2, category: 'parking', amount: 400.00, date: '2026-05-22', description: 'Hotel parking charges', receiptUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400', status: 'pending', trip: tripsStore[1] },
  { id: 9, tripId: 3, category: 'fuel', amount: 11000.00, date: '2026-06-08', description: 'Initial tank full diesel', receiptUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400', status: 'approved' },
  { id: 10, tripId: 3, category: 'toll', amount: 1950.00, date: '2026-06-09', description: 'Toll charges enroute Mumbai', receiptUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400', status: 'pending', trip: tripsStore[2] },
];

let settlementsStore = [
  { id: 1, tripId: 1, trip: tripsStore[0], totalExpenses: 15600.00, advanceAmount: 15000.00, balance: 600.00, status: 'approved', remarks: 'All bills verified. Reimbursement approved.' },
  { id: 2, tripId: 2, trip: tripsStore[1], totalExpenses: 8850.00, advanceAmount: 10000.00, balance: -1150.00, status: 'pending', remarks: '' },
];

let notificationsStore = [
  { id: 1, userId: 2, message: 'Your settlement request for Goa trip has been approved. ₹600 reimbursed.', isRead: true, createdAt: '2026-05-16' },
  { id: 2, userId: 4, message: 'Please submit your settlement request for the completed Chennai trip.', isRead: false, createdAt: '2026-05-25' },
  { id: 3, userId: 1, message: 'New settlement request submitted by Suresh Patil (Chennai trip). Awaiting review.', isRead: false, createdAt: '2026-05-25' },
];

export const getMockResponse = async (method, path, body) => {
  // Artificial slight delay for natural feel
  await new Promise(resolve => setTimeout(resolve, 200));

  const cleanPath = path.split('?')[0];

  // Auth Endpoints
  if (cleanPath === '/api/auth/login') {
    const { email } = body || {};
    if (email && email.includes('admin')) {
      const user = {
        id: 1,
        name: 'Aditya Kumar (Admin)',
        email: 'admin@manivtha.com',
        role: 'admin',
        phone: '9876543200',
        token: 'mock-admin-token-2026'
      };
      localStorage.setItem('mock_current_user', JSON.stringify(user));
      return user;
    } else {
      const user = {
        id: 2,
        name: 'Ramesh Shah',
        email: email || 'ramesh@manivtha.com',
        role: 'driver',
        phone: '9876543210',
        driverProfile: driversStore[0],
        token: 'mock-driver-token-2026'
      };
      localStorage.setItem('mock_current_user', JSON.stringify(user));
      return user;
    }
  }

  if (cleanPath === '/api/auth/me') {
    const stored = localStorage.getItem('mock_current_user');
    if (stored) return JSON.parse(stored);
    return { id: 1, name: 'Aditya Kumar (Admin)', email: 'admin@manivtha.com', role: 'admin', token: 'mock-admin-token-2026' };
  }

  if (cleanPath === '/api/auth/register') {
    return { id: 99, name: body.name, email: body.email, role: body.role || 'driver', token: 'mock-reg-token' };
  }

  if (cleanPath === '/api/auth/reset-password' || cleanPath === '/api/auth/change-password') {
    return { message: 'Password updated successfully (Demo Mode)' };
  }

  if (cleanPath === '/api/auth/profile') {
    const stored = localStorage.getItem('mock_current_user') ? JSON.parse(localStorage.getItem('mock_current_user')) : {};
    const updated = { ...stored, name: body?.get?.('name') || stored.name, phone: body?.get?.('phone') || stored.phone };
    localStorage.setItem('mock_current_user', JSON.stringify(updated));
    return updated;
  }

  // Drivers
  if (cleanPath === '/api/drivers') {
    if (method === 'GET') return driversStore;
    if (method === 'POST') {
      const newDriver = { id: Date.now(), ...body, status: 'active' };
      driversStore.push(newDriver);
      return newDriver;
    }
  }

  if (cleanPath.startsWith('/api/drivers/')) {
    const id = parseInt(cleanPath.split('/')[3]);
    if (method === 'GET') return driversStore.find(d => d.id === id) || driversStore[0];
    if (method === 'PUT') return { ...driversStore.find(d => d.id === id), ...body };
    if (method === 'DELETE') { driversStore = driversStore.filter(d => d.id !== id); return { message: 'Deleted' }; }
  }

  // Trips
  if (cleanPath === '/api/trips') {
    if (method === 'GET') {
      const stored = localStorage.getItem('mock_current_user');
      const currentUser = stored ? JSON.parse(stored) : null;
      if (currentUser?.role === 'driver') {
        return tripsStore.filter(t => t.driverId === (currentUser.driverProfile?.id || 1));
      }
      return tripsStore;
    }
    if (method === 'POST') {
      const newTrip = { id: Date.now(), ...body, status: 'pending', expensesTotal: 0 };
      tripsStore.push(newTrip);
      return newTrip;
    }
  }

  if (cleanPath.startsWith('/api/trips/')) {
    const parts = cleanPath.split('/');
    const id = parseInt(parts[3]);
    if (parts[4] === 'status') {
      const trip = tripsStore.find(t => t.id === id);
      if (trip) trip.status = body.status;
      return trip || { message: 'Status updated' };
    }
    if (method === 'GET') {
      const trip = tripsStore.find(t => t.id === id) || tripsStore[0];
      const tripExpenses = expensesStore.filter(e => e.tripId === id);
      const settlement = settlementsStore.find(s => s.tripId === id);
      return { ...trip, expenses: tripExpenses, settlement };
    }
  }

  // Expenses
  if (cleanPath === '/api/expenses') {
    if (method === 'POST') {
      const amount = parseFloat(body?.get?.('amount') || body?.amount || 1000);
      const tripId = parseInt(body?.get?.('tripId') || body?.tripId || 3);
      const newExp = {
        id: Date.now(),
        tripId,
        category: body?.get?.('category') || body?.category || 'fuel',
        amount,
        date: body?.get?.('date') || body?.date || new Date().toISOString().split('T')[0],
        description: body?.get?.('description') || body?.description || 'Expense entry',
        receiptUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400',
        status: 'pending'
      };
      expensesStore.push(newExp);
      return newExp;
    }
  }

  if (cleanPath === '/api/expenses/pending') {
    return expensesStore.filter(e => e.status === 'pending');
  }

  if (cleanPath.startsWith('/api/expenses/')) {
    const parts = cleanPath.split('/');
    const id = parseInt(parts[3]);
    if (parts[4] === 'status') {
      const exp = expensesStore.find(e => e.id === id);
      if (exp) exp.status = body.status;
      return exp || { message: 'Expense status updated' };
    }
  }

  // Settlements
  if (cleanPath === '/api/settlements') {
    if (method === 'GET') return settlementsStore;
    if (method === 'POST') {
      const tripId = parseInt(body.tripId);
      const trip = tripsStore.find(t => t.id === tripId);
      const tripExpenses = expensesStore.filter(e => e.tripId === tripId && e.status === 'approved');
      const totalExpenses = tripExpenses.reduce((sum, e) => sum + e.amount, 0);
      const advanceAmount = trip ? trip.advanceAmount : 10000;
      const balance = totalExpenses - advanceAmount;
      const newSettlement = { id: Date.now(), tripId, trip, totalExpenses, advanceAmount, balance, status: 'pending', remarks: '' };
      settlementsStore.push(newSettlement);
      if (trip) trip.status = 'completed';
      return newSettlement;
    }
  }

  if (cleanPath.startsWith('/api/settlements/')) {
    const parts = cleanPath.split('/');
    const id = parseInt(parts[3]);
    if (parts[4] === 'status') {
      const s = settlementsStore.find(st => st.id === id);
      if (s) {
        s.status = body.status;
        s.remarks = body.remarks || s.remarks;
        const trip = tripsStore.find(t => t.id === s.tripId);
        if (trip && body.status === 'approved') trip.status = 'settled';
      }
      return s || { message: 'Settlement updated' };
    }
  }

  // Reports & Analytics
  if (cleanPath.startsWith('/api/reports/')) {
    if (cleanPath === '/api/reports/dashboard-stats') {
      return {
        activeTrips: 1,
        pendingSettlements: 1,
        totalAdvancesThisMonth: 53000,
        pendingReimbursements: 600
      };
    }
    if (cleanPath === '/api/reports/driver-summary') {
      return [
        { id: 1, name: 'Ramesh Shah', phone: '9876543210', licenseNumber: 'DL-1420180098765', status: 'active', totalTrips: 2, totalAdvances: 35000, totalApprovedExpenses: 28550, balance: -6450 },
        { id: 2, name: 'Suresh Patil', phone: '9876543211', licenseNumber: 'DL-1520190012345', status: 'active', totalTrips: 1, totalAdvances: 10000, totalApprovedExpenses: 8850, balance: -1150 },
        { id: 3, name: 'Vikram Singh', phone: '9876543212', licenseNumber: 'DL-1220170054321', status: 'active', totalTrips: 1, totalAdvances: 8000, totalApprovedExpenses: 0, balance: -8000 }
      ];
    }
    if (cleanPath === '/api/reports/trip-settlements') {
      return [
        { id: 1, destination: 'Goa', driverName: 'Ramesh Shah', vehicleNumber: 'KA-51-MB-4321', startDate: '2026-05-10', endDate: '2026-05-15', advanceAmount: 15000, totalLoggedExpenses: 15600, totalApprovedExpenses: 15600, balance: 600, status: 'settled', settlementStatus: 'approved' },
        { id: 2, destination: 'Chennai', driverName: 'Suresh Patil', vehicleNumber: 'KA-03-MM-7890', startDate: '2026-05-20', endDate: '2026-05-24', advanceAmount: 10000, totalLoggedExpenses: 9250, totalApprovedExpenses: 8850, balance: -1150, status: 'completed', settlementStatus: 'pending' },
        { id: 3, destination: 'Mumbai', driverName: 'Ramesh Shah', vehicleNumber: 'KA-51-MB-4321', startDate: '2026-06-08', endDate: '2026-06-14', advanceAmount: 20000, totalLoggedExpenses: 12950, totalApprovedExpenses: 11000, balance: -9000, status: 'active', settlementStatus: 'Not Submitted' }
      ];
    }
    if (cleanPath === '/api/reports/monthly-trends') {
      return [
        { month: 'Jan', advance: 25000, expenses: 22000 },
        { month: 'Feb', advance: 30000, expenses: 28000 },
        { month: 'Mar', advance: 45000, expenses: 41000 },
        { month: 'Apr', advance: 40000, expenses: 39000 },
        { month: 'May', advance: 25000, expenses: 24850 },
        { month: 'Jun', advance: 28000, expenses: 14900 },
      ];
    }
    if (cleanPath === '/api/reports/audit-logs') {
      return [
        { id: 1, action: 'USER_LOGIN', details: 'Admin logged in', createdAt: new Date().toISOString() },
        { id: 2, action: 'TRIP_CREATE', details: 'Created Mumbai trip', createdAt: new Date().toISOString() }
      ];
    }
  }

  // Notifications
  if (cleanPath === '/api/notifications') return notificationsStore;
  if (cleanPath.includes('/notifications/')) return { message: 'Marked read' };

  return {};
};
