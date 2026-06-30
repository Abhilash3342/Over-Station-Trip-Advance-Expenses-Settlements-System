// Mock Data Store for GitHub Pages static execution (Empty Clean Slate)

const getStored = (key, defaultVal) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultVal;
  } catch (e) {
    return defaultVal;
  }
};

const setStored = (key, val) => {
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {
    console.error('Failed to save to localStorage', e);
  }
};

const defaultDrivers = [
  { id: 1, userId: 2, name: 'Ramesh Shah', email: 'ramesh@manivtha.com', phone: '9876543210', licenseNumber: 'DL-1420180098765', status: 'active' },
  { id: 2, userId: 3, name: 'Suresh Patil', email: 'suresh@manivtha.com', phone: '9876543211', licenseNumber: 'DL-1520190012345', status: 'active' },
  { id: 3, userId: 4, name: 'Vikram Singh', email: 'vikram@manivtha.com', phone: '9876543212', licenseNumber: 'DL-1220170054321', status: 'active' }
];

const defaultTrips = [
  {
    id: 101,
    driverId: 1,
    driver: { id: 1, name: 'Ramesh Shah', phone: '9876543210' },
    fromAddress: 'Bangalore',
    destination: 'Goa',
    startDate: '2026-06-01',
    endDate: '2026-06-06',
    vehicleNumber: 'KA-51-MB-4321',
    advanceAmount: 12000,
    status: 'settled'
  },
  {
    id: 102,
    driverId: 2,
    driver: { id: 2, name: 'Suresh Patil', phone: '9876543211' },
    fromAddress: 'Bangalore',
    destination: 'Chennai',
    startDate: '2026-06-03',
    endDate: '2026-06-07',
    vehicleNumber: 'KA-03-MM-7890',
    advanceAmount: 10000,
    status: 'settled'
  },
  {
    id: 103,
    driverId: 3,
    driver: { id: 3, name: 'Vikram Singh', phone: '9876543212' },
    fromAddress: 'Bangalore',
    destination: 'Hyderabad',
    startDate: '2026-06-10',
    endDate: '2026-06-14',
    vehicleNumber: 'KA-04-P-1122',
    advanceAmount: 15000,
    status: 'settled'
  },
  {
    id: 104,
    driverId: 1,
    driver: { id: 1, name: 'Ramesh Shah', phone: '9876543210' },
    fromAddress: 'Bangalore',
    destination: 'Mangalore',
    startDate: '2026-06-16',
    endDate: '2026-06-20',
    vehicleNumber: 'KA-51-MB-4321',
    advanceAmount: 8000,
    status: 'completed'
  },
  {
    id: 105,
    driverId: 2,
    driver: { id: 2, name: 'Suresh Patil', phone: '9876543211' },
    fromAddress: 'Bangalore',
    destination: 'Mysore',
    startDate: '2026-06-22',
    endDate: '2026-06-24',
    vehicleNumber: 'KA-03-MM-7890',
    advanceAmount: 5000,
    status: 'completed'
  },
  {
    id: 106,
    driverId: 1,
    driver: { id: 1, name: 'Ramesh Shah', phone: '9876543210' },
    fromAddress: 'Bangalore',
    destination: 'Mumbai',
    startDate: '2026-06-26',
    endDate: '2026-07-02',
    vehicleNumber: 'KA-51-MB-4321',
    advanceAmount: 20000,
    status: 'active'
  },
  {
    id: 107,
    driverId: 3,
    driver: { id: 3, name: 'Vikram Singh', phone: '9876543212' },
    fromAddress: 'Bangalore',
    destination: 'Pune',
    startDate: '2026-07-01',
    endDate: '2026-07-05',
    vehicleNumber: 'KA-04-P-1122',
    advanceAmount: 18000,
    status: 'pending'
  }
];

const defaultExpenses = [
  { id: 201, tripId: 101, category: 'fuel', amount: 6500, date: '2026-06-02', description: 'Diesel Shell Bunk en route Goa', status: 'approved' },
  { id: 202, tripId: 101, category: 'toll', amount: 1200, date: '2026-06-02', description: 'Fastag Toll charges NH48', status: 'approved' },
  { id: 203, tripId: 101, category: 'food', amount: 1800, date: '2026-06-04', description: 'Meals for driver and guests', status: 'approved' },
  { id: 204, tripId: 101, category: 'accommodation', amount: 2500, date: '2026-06-05', description: 'Goa Driver Lodge stay', status: 'approved' },
  { id: 205, tripId: 102, category: 'fuel', amount: 5500, date: '2026-06-03', description: 'Diesel HP Petrol bunk', status: 'approved' },
  { id: 206, tripId: 102, category: 'toll', amount: 950, date: '2026-06-03', description: 'Toll plaza charges', status: 'approved' },
  { id: 207, tripId: 102, category: 'accommodation', amount: 2000, date: '2026-06-05', description: 'Lodge stay in Chennai', status: 'approved' },
  { id: 208, tripId: 102, category: 'food', amount: 1200, date: '2026-06-06', description: 'Meals during trip', status: 'approved' },
  { id: 209, tripId: 103, category: 'fuel', amount: 7000, date: '2026-06-10', description: 'Diesel Shell Station', status: 'approved' },
  { id: 210, tripId: 103, category: 'toll', amount: 1500, date: '2026-06-10', description: 'NH44 highway tolls', status: 'approved' },
  { id: 211, tripId: 103, category: 'accommodation', amount: 3000, date: '2026-06-12', description: 'Hotel stay Hyderabad', status: 'approved' },
  { id: 212, tripId: 103, category: 'food', amount: 2200, date: '2026-06-13', description: 'Meals & refreshment charges', status: 'approved' },
  { id: 213, tripId: 103, category: 'miscellaneous', amount: 1500, date: '2026-06-14', description: 'Ad-hoc vehicle wash and cleaning', status: 'approved' },
  { id: 214, tripId: 104, category: 'fuel', amount: 4500, date: '2026-06-16', description: 'Diesel refuel at Mangalore Highway', status: 'approved' },
  { id: 215, tripId: 104, category: 'toll', amount: 600, date: '2026-06-16', description: 'Toll plaza charges', status: 'approved' },
  { id: 216, tripId: 104, category: 'food', amount: 1000, date: '2026-06-18', description: 'Driver meals', status: 'approved' },
  { id: 217, tripId: 104, category: 'parking', amount: 250, date: '2026-06-19', description: 'Beach parking fee', status: 'pending' },
  { id: 218, tripId: 105, category: 'fuel', amount: 2800, date: '2026-06-22', description: 'Diesel refill HP Bunk', status: 'approved' },
  { id: 219, tripId: 105, category: 'food', amount: 900, date: '2026-06-23', description: 'Meals during stay', status: 'approved' },
  { id: 220, tripId: 105, category: 'toll', amount: 300, date: '2026-06-22', description: 'Mysore Expressway toll', status: 'pending' },
  { id: 221, tripId: 106, category: 'fuel', amount: 10500, date: '2026-06-26', description: 'Initial tank full diesel Shell', status: 'approved' },
  { id: 222, tripId: 106, category: 'toll', amount: 1950, date: '2026-06-26', description: 'Toll charges enroute Mumbai', status: 'approved' },
  { id: 223, tripId: 106, category: 'food', amount: 1500, date: '2026-06-28', description: 'Dhaba meals along highway', status: 'pending' }
];

const defaultSettlements = [
  { id: 301, tripId: 101, totalExpenses: 12000, advanceAmount: 12000, balance: 0, status: 'approved', remarks: 'All bills verified. Settlement complete.' },
  { id: 302, tripId: 102, totalExpenses: 9650, advanceAmount: 10000, balance: -350, status: 'approved', remarks: 'Driver returned the remaining balance of Rs 350. Closed.' },
  { id: 303, tripId: 103, totalExpenses: 15200, advanceAmount: 15000, balance: 200, status: 'approved', remarks: 'Bills audited. Extra expenses of Rs 200 reimbursed to driver.' },
  { id: 304, tripId: 104, totalExpenses: 6100, advanceAmount: 8000, balance: -1900, status: 'pending', remarks: '' },
  { id: 305, tripId: 105, totalExpenses: 3700, advanceAmount: 5000, balance: -1300, status: 'pending', remarks: '' }
];

const defaultNotifications = [
  { id: 401, userId: 2, message: 'Your settlement request for Goa trip has been settled.', isRead: true },
  { id: 402, userId: 3, message: 'Your settlement request for Chennai trip has been settled.', isRead: true },
  { id: 403, userId: 2, message: 'Please return the remaining balance of ₹1900 for the Mangalore trip.', isRead: false },
  { id: 404, userId: 1, message: 'New settlement request submitted by Suresh Patil (Mysore trip). Awaiting review.', isRead: false }
];

let driversStore = getStored('app_drivers_v2', defaultDrivers);
let tripsStore = getStored('app_trips_v2', defaultTrips);
let expensesStore = getStored('app_expenses_v2', defaultExpenses);
let settlementsStore = getStored('app_settlements_v2', defaultSettlements);
let notificationsStore = getStored('app_notifications_v2', defaultNotifications);

export const clearAllMockData = () => {
  driversStore = defaultDrivers;
  tripsStore = defaultTrips;
  expensesStore = defaultExpenses;
  settlementsStore = defaultSettlements;
  notificationsStore = defaultNotifications;
  localStorage.setItem('app_drivers_v2', JSON.stringify(defaultDrivers));
  localStorage.setItem('app_trips_v2', JSON.stringify(defaultTrips));
  localStorage.setItem('app_expenses_v2', JSON.stringify(defaultExpenses));
  localStorage.setItem('app_settlements_v2', JSON.stringify(defaultSettlements));
  localStorage.setItem('app_notifications_v2', JSON.stringify(defaultNotifications));
  localStorage.removeItem('mock_current_user');
};

export const getMockResponse = async (method, path, body) => {
  // Artificial slight delay for natural feel
  await new Promise(resolve => setTimeout(resolve, 150));

  const cleanPath = path.split('?')[0];

  // Auth Endpoints
  if (cleanPath === '/api/auth/login') {
    const { email, name: inputName } = body || {};
    if (email && email.includes('admin')) {
      const user = {
        id: 1,
        name: inputName ? (inputName.includes('Admin') ? inputName : `${inputName} (Admin)`) : 'Aditya Kumar (Admin)',
        email: 'admin@manivtha.com',
        role: 'admin',
        phone: '9876543200',
        token: 'mock-admin-token-2026'
      };
      localStorage.setItem('mock_current_user', JSON.stringify(user));
      return user;
    } else {
      const matched = defaultDrivers.find(d => d.email === email) || driversStore.find(d => (d.email || d.user?.email) === email) || defaultDrivers[0];
      const profileName = inputName || matched.name;
      const driverProf = { ...matched, name: profileName };
      const user = {
        id: matched.userId,
        name: inputName ? (inputName.includes('Driver') ? inputName : `${inputName} (Driver)`) : `${matched.name} (Driver)`,
        email: email || matched.email,
        role: 'driver',
        phone: matched.phone,
        driverProfile: driverProf,
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
    return { id: Date.now(), name: body.name, email: body.email, role: body.role || 'driver', token: 'mock-reg-token' };
  }

  if (cleanPath === '/api/auth/reset-password' || cleanPath === '/api/auth/change-password') {
    return { message: 'Password updated successfully' };
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
      const newDriver = {
        id: Date.now(),
        userId: Date.now() + 1,
        name: body.name,
        phone: body.phone,
        licenseNumber: body.licenseNumber,
        status: body.status || 'active',
        email: body.email || '',
        user: body.email ? { email: body.email, role: 'driver' } : null,
        trips: []
      };
      driversStore.unshift(newDriver);
      setStored('app_drivers_v2', driversStore);
      return newDriver;
    }
  }

  if (cleanPath.startsWith('/api/drivers/')) {
    const id = parseInt(cleanPath.split('/')[3]);
    if (method === 'GET') {
      const d = driversStore.find(dr => dr.id === id) || { id, name: 'Driver', phone: '', licenseNumber: '', status: 'active', trips: [] };
      const dTrips = tripsStore.filter(t => t.driverId === id);
      return { ...d, trips: dTrips };
    }
    if (method === 'PUT') {
      driversStore = driversStore.map(dr => dr.id === id ? { ...dr, ...body, user: body.email ? { email: body.email, role: 'driver' } : dr.user } : dr);
      setStored('app_drivers_v2', driversStore);
      return driversStore.find(dr => dr.id === id);
    }
    if (method === 'DELETE') {
      driversStore = driversStore.filter(dr => dr.id !== id);
      setStored('app_drivers_v2', driversStore);
      return { message: 'Deleted' };
    }
  }

  // Trips
  if (cleanPath === '/api/trips') {
    if (method === 'GET') {
      const stored = localStorage.getItem('mock_current_user');
      const currentUser = stored ? JSON.parse(stored) : null;
      if (currentUser?.role === 'driver') {
        const driverId = currentUser.driverProfile?.id;
        return tripsStore.filter(t => t.driverId === driverId);
      }
      return tripsStore;
    }
    if (method === 'POST') {
      const dId = parseInt(body.driverId);
      const matchedDriver = driversStore.find(d => d.id === dId);
      const newTrip = {
        id: Date.now(),
        driverId: dId,
        driver: matchedDriver ? { id: matchedDriver.id, name: matchedDriver.name, phone: matchedDriver.phone } : { name: 'Unassigned' },
        fromAddress: body.fromAddress || 'Bangalore',
        destination: body.destination,
        startDate: body.startDate,
        endDate: body.endDate,
        vehicleNumber: body.vehicleNumber,
        advanceAmount: parseFloat(body.advanceAmount || 0),
        status: 'active',
        expensesTotal: 0
      };
      tripsStore.unshift(newTrip);
      setStored('app_trips_v2', tripsStore);
      return newTrip;
    }
  }

  if (cleanPath.startsWith('/api/trips/')) {
    const parts = cleanPath.split('/');
    const id = parseInt(parts[3]);
    if (parts[4] === 'status') {
      tripsStore = tripsStore.map(t => t.id === id ? { ...t, status: body.status } : t);
      setStored('app_trips_v2', tripsStore);
      return tripsStore.find(t => t.id === id) || { message: 'Status updated' };
    }
    if (method === 'PUT') {
      tripsStore = tripsStore.map(t => {
        if (t.id === id) {
          const dId = parseInt(body.driverId) || t.driverId;
          const matchedDriver = driversStore.find(d => d.id === dId);
          return {
            ...t,
            ...body,
            driverId: dId,
            driver: matchedDriver ? { id: matchedDriver.id, name: matchedDriver.name, phone: matchedDriver.phone } : t.driver,
            advanceAmount: parseFloat(body.advanceAmount !== undefined ? body.advanceAmount : t.advanceAmount)
          };
        }
        return t;
      });
      setStored('app_trips_v2', tripsStore);
      return tripsStore.find(t => t.id === id);
    }
    if (method === 'GET') {
      const trip = tripsStore.find(t => t.id === id) || { id, destination: 'Trip', status: 'active', advanceAmount: 0 };
      const tripExpenses = expensesStore.filter(e => e.tripId === id);
      const settlement = settlementsStore.find(s => s.tripId === id);
      return { ...trip, expenses: tripExpenses, settlement };
    }
  }

  // Expenses
  if (cleanPath === '/api/expenses') {
    if (method === 'POST') {
      const amount = parseFloat(body?.get?.('amount') || body?.amount || 0);
      const tripId = parseInt(body?.get?.('tripId') || body?.tripId || 0);
      let receiptUrl = null;
      
      const receiptFile = body?.get?.('receipt');
      if (receiptFile && typeof receiptFile === 'object' && (receiptFile instanceof File || receiptFile.name)) {
        receiptUrl = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            const img = new Image();
            img.onload = () => {
              const canvas = document.createElement('canvas');
              const MAX_WIDTH = 600;
              const MAX_HEIGHT = 600;
              let width = img.width;
              let height = img.height;

              if (width > height) {
                if (width > MAX_WIDTH) {
                  height *= MAX_WIDTH / width;
                  width = MAX_WIDTH;
                }
              } else {
                if (height > MAX_HEIGHT) {
                  width *= MAX_HEIGHT / height;
                  height = MAX_HEIGHT;
                }
              }

              canvas.width = width;
              canvas.height = height;
              const ctx = canvas.getContext('2d');
              ctx.drawImage(img, 0, 0, width, height);
              resolve(canvas.toDataURL('image/jpeg', 0.7)); // Compress to JPEG with 70% quality
            };
            img.onerror = () => resolve(reader.result);
            img.src = reader.result;
          };
          reader.onerror = () => resolve(null);
          reader.readAsDataURL(receiptFile);
        });
      } else if (typeof receiptFile === 'string') {
        receiptUrl = receiptFile;
      }

      const newExp = {
        id: Date.now(),
        tripId,
        category: body?.get?.('category') || body?.category || 'other',
        amount,
        date: body?.get?.('date') || body?.date || new Date().toISOString().split('T')[0],
        description: body?.get?.('description') || body?.description || '',
        receiptUrl: receiptUrl,
        status: 'pending'
      };
      expensesStore.unshift(newExp);
      setStored('app_expenses_v2', expensesStore);
      return newExp;
    }
  }

  if (cleanPath === '/api/expenses/pending') {
    return expensesStore.filter(e => e.status === 'pending').map(e => {
      const tr = tripsStore.find(t => t.id === e.tripId);
      return { ...e, trip: tr };
    });
  }

  if (cleanPath.startsWith('/api/expenses/')) {
    const parts = cleanPath.split('/');
    const id = parseInt(parts[3]);
    if (parts[4] === 'status') {
      expensesStore = expensesStore.map(e => e.id === id ? { ...e, status: body.status } : e);
      setStored('app_expenses_v2', expensesStore);
      return expensesStore.find(e => e.id === id) || { message: 'Updated' };
    }
    if (method === 'DELETE') {
      expensesStore = expensesStore.filter(e => e.id !== id);
      setStored('app_expenses_v2', expensesStore);
      return { message: 'Expense deleted' };
    }
  }

  // Settlements
  if (cleanPath === '/api/settlements') {
    if (method === 'GET') {
      return settlementsStore.map(s => {
        const trip = tripsStore.find(t => t.id === s.tripId);
        const tripExpenses = expensesStore.filter(e => e.tripId === s.tripId);
        const firstReceipt = tripExpenses.find(e => e.receiptUrl)?.receiptUrl || null;
        return {
          ...s,
          trip: trip ? { ...trip, driver: driversStore.find(d => d.id === trip.driverId), expenses: tripExpenses } : s.trip,
          receipt: s.receipt || firstReceipt
        };
      });
    }
    if (method === 'POST') {
      const tripId = parseInt(body.tripId);
      const trip = tripsStore.find(t => t.id === tripId);
      const tripExpenses = expensesStore.filter(e => e.tripId === tripId && e.status === 'approved');
      const totalExpenses = tripExpenses.reduce((sum, e) => sum + e.amount, 0);
      const advanceAmount = trip ? trip.advanceAmount : 0;
      const balance = totalExpenses - advanceAmount;
      const firstReceipt = tripExpenses.find(e => e.receiptUrl)?.receiptUrl || null;
      const newSettlement = { id: Date.now(), tripId, trip, totalExpenses, advanceAmount, balance, status: 'pending', remarks: '', receipt: firstReceipt };
      settlementsStore.unshift(newSettlement);
      setStored('app_settlements_v2', settlementsStore);
      if (trip) {
        trip.status = 'completed';
        setStored('app_trips_v2', tripsStore);
      }
      return newSettlement;
    }
  }

  if (cleanPath.startsWith('/api/settlements/')) {
    const parts = cleanPath.split('/');
    const id = parseInt(parts[3]);
    if (parts[4] === 'status') {
      settlementsStore = settlementsStore.map(st => st.id === id ? { ...st, status: body.status, remarks: body.remarks || st.remarks } : st);
      setStored('app_settlements_v2', settlementsStore);
      const s = settlementsStore.find(st => st.id === id);
      if (s && body.status === 'approved') {
        tripsStore = tripsStore.map(t => t.id === s.tripId ? { ...t, status: 'settled' } : t);
        setStored('app_trips_v2', tripsStore);
      }
      return s || { message: 'Updated' };
    }
  }

  // Reports & Analytics (Calculated Dynamically from Real Data)
  if (cleanPath.startsWith('/api/reports/')) {
    if (cleanPath === '/api/reports/dashboard-stats') {
      const activeTrips = tripsStore.filter(t => t.status === 'active').length;
      const pendingSettlements = settlementsStore.filter(s => s.status === 'pending').length;
      const totalAdvancesThisMonth = tripsStore.reduce((sum, t) => sum + (parseFloat(t.advanceAmount) || 0), 0);
      const pendingReimbursements = settlementsStore
        .filter(s => s.status === 'approved' && s.balance > 0)
        .reduce((sum, s) => sum + s.balance, 0);

      return {
        totalDrivers: driversStore.length,
        totalTrips: tripsStore.length,
        activeTrips,
        completedTrips: tripsStore.filter(t => t.status === 'completed' || t.status === 'settled').length,
        pendingSettlements,
        approvedSettlements: settlementsStore.filter(s => s.status === 'approved').length,
        totalExpenses: expensesStore.filter(e => e.status === 'approved').reduce((sum, e) => sum + (parseFloat(e.amount) || 0), 0),
        totalAdvancesThisMonth,
        pendingReimbursements,
        categoryBreakdown: [],
        recentActivity: []
      };
    }

    if (cleanPath === '/api/reports/driver-summary') {
      return driversStore.map(driver => {
        const driverTrips = tripsStore.filter(t => t.driverId === driver.id);
        const totalTrips = driverTrips.length;
        const totalAdvances = driverTrips.reduce((sum, t) => sum + (parseFloat(t.advanceAmount) || 0), 0);
        const tripIds = driverTrips.map(t => t.id);
        const approvedExpenses = expensesStore.filter(e => tripIds.includes(e.tripId) && e.status === 'approved');
        const totalApprovedExpenses = approvedExpenses.reduce((sum, e) => sum + (parseFloat(e.amount) || 0), 0);
        return {
          id: driver.id,
          name: driver.name,
          phone: driver.phone,
          licenseNumber: driver.licenseNumber,
          status: driver.status,
          totalTrips,
          totalAdvances,
          totalApprovedExpenses,
          balance: totalApprovedExpenses - totalAdvances
        };
      });
    }

    if (cleanPath === '/api/reports/trip-settlements') {
      return tripsStore.map(trip => {
        const driver = driversStore.find(d => d.id === trip.driverId);
        const tripExpenses = expensesStore.filter(e => e.tripId === trip.id);
        const approved = tripExpenses.filter(e => e.status === 'approved');
        const totalLoggedExpenses = tripExpenses.reduce((sum, e) => sum + (parseFloat(e.amount) || 0), 0);
        const totalApprovedExpenses = approved.reduce((sum, e) => sum + (parseFloat(e.amount) || 0), 0);
        const settlement = settlementsStore.find(s => s.tripId === trip.id);
        return {
          id: trip.id,
          destination: trip.destination,
          driverName: driver ? driver.name : (trip.driver?.name || 'Unassigned'),
          vehicleNumber: trip.vehicleNumber,
          startDate: trip.startDate,
          endDate: trip.endDate,
          advanceAmount: parseFloat(trip.advanceAmount || 0),
          totalLoggedExpenses,
          totalApprovedExpenses,
          balance: totalApprovedExpenses - parseFloat(trip.advanceAmount || 0),
          status: trip.status,
          settlementStatus: settlement ? settlement.status : 'Not Submitted'
        };
      });
    }

    if (cleanPath === '/api/reports/monthly-trends') {
      return [
        { month: 'Current Period', advance: tripsStore.reduce((sum, t) => sum + (parseFloat(t.advanceAmount) || 0), 0), expenses: expensesStore.filter(e => e.status === 'approved').reduce((sum, e) => sum + (parseFloat(e.amount) || 0), 0) }
      ];
    }

    if (cleanPath === '/api/reports/audit-logs') {
      return [];
    }
  }

  // Notifications
  if (cleanPath === '/api/notifications') return notificationsStore;
  if (cleanPath.includes('/notifications/')) return { message: 'Marked read' };

  return {};
};
