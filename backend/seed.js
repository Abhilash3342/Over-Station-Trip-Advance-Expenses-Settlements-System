const { sequelize, User, Driver, Trip, Expense, Settlement, Notification, AuditLog } = require('./models');

const seedDatabase = async () => {
  try {
    console.log('Starting database seeding...');
    
    // Sync database and clear tables
    await sequelize.sync({ force: true });
    console.log('Database tables cleared and recreated.');

    // 1. Create Admins
    const adminUser = await User.create({
      name: 'Aditya Kumar (Admin)',
      email: 'admin@manivtha.com',
      password: 'admin123',
      role: 'admin',
      phone: '9876543200',
    });
    console.log('Seeded Admin User: admin@manivtha.com / admin123');

    // 2. Create Drivers (User accounts first, then Driver profiles)
    const driverUser1 = await User.create({
      name: 'Ramesh Shah',
      email: 'ramesh@manivtha.com',
      password: 'driver123',
      role: 'driver',
      phone: '9876543210',
    });

    const driverProfile1 = await Driver.create({
      name: 'Ramesh Shah',
      phone: '9876543210',
      licenseNumber: 'DL-1420180098765',
      status: 'active',
      userId: driverUser1.id,
    });

    const driverUser2 = await User.create({
      name: 'Suresh Patil',
      email: 'suresh@manivtha.com',
      password: 'driver123',
      role: 'driver',
      phone: '9876543211',
    });

    const driverProfile2 = await Driver.create({
      name: 'Suresh Patil',
      phone: '9876543211',
      licenseNumber: 'DL-1520190012345',
      status: 'active',
      userId: driverUser2.id,
    });

    const driverUser3 = await User.create({
      name: 'Vikram Singh',
      email: 'vikram@manivtha.com',
      password: 'driver123',
      role: 'driver',
      phone: '9876543212',
    });

    const driverProfile3 = await Driver.create({
      name: 'Vikram Singh',
      phone: '9876543212',
      licenseNumber: 'DL-1220170054321',
      status: 'active',
      userId: driverUser3.id,
    });

    console.log('Seeded 3 Drivers: ramesh@manivtha.com, suresh@manivtha.com, vikram@manivtha.com (Pass: driver123)');

    // 3. Create Trips
    // Trip 1: Ramesh - Bangalore to Goa (Settled)
    const trip1 = await Trip.create({
      driverId: driverProfile1.id,
      fromAddress: 'Bangalore',
      destination: 'Goa',
      startDate: '2026-06-01',
      endDate: '2026-06-06',
      vehicleNumber: 'KA-51-MB-4321',
      advanceAmount: 12000.00,
      status: 'settled',
    });

    // Trip 2: Suresh - Bangalore to Chennai (Settled)
    const trip2 = await Trip.create({
      driverId: driverProfile2.id,
      fromAddress: 'Bangalore',
      destination: 'Chennai',
      startDate: '2026-06-03',
      endDate: '2026-06-07',
      vehicleNumber: 'KA-03-MM-7890',
      advanceAmount: 10000.00,
      status: 'settled',
    });

    // Trip 3: Vikram - Bangalore to Hyderabad (Settled)
    const trip3 = await Trip.create({
      driverId: driverProfile3.id,
      fromAddress: 'Bangalore',
      destination: 'Hyderabad',
      startDate: '2026-06-10',
      endDate: '2026-06-14',
      vehicleNumber: 'KA-04-P-1122',
      advanceAmount: 15000.00,
      status: 'settled',
    });

    // Trip 4: Ramesh - Bangalore to Mangalore (Completed, Settlement Pending)
    const trip4 = await Trip.create({
      driverId: driverProfile1.id,
      fromAddress: 'Bangalore',
      destination: 'Mangalore',
      startDate: '2026-06-16',
      endDate: '2026-06-20',
      vehicleNumber: 'KA-51-MB-4321',
      advanceAmount: 8000.00,
      status: 'completed',
    });

    // Trip 5: Suresh - Bangalore to Mysore (Completed, Settlement Pending)
    const trip5 = await Trip.create({
      driverId: driverProfile2.id,
      fromAddress: 'Bangalore',
      destination: 'Mysore',
      startDate: '2026-06-22',
      endDate: '2026-06-24',
      vehicleNumber: 'KA-03-MM-7890',
      advanceAmount: 5000.00,
      status: 'completed',
    });

    // Trip 6: Ramesh - Bangalore to Mumbai (Active/In-Progress)
    const trip6 = await Trip.create({
      driverId: driverProfile1.id,
      fromAddress: 'Bangalore',
      destination: 'Mumbai',
      startDate: '2026-06-26',
      endDate: '2026-07-02',
      vehicleNumber: 'KA-51-MB-4321',
      advanceAmount: 20000.00,
      status: 'active',
    });

    // Trip 7: Vikram - Bangalore to Pune (Pending/Upcoming)
    const trip7 = await Trip.create({
      driverId: driverProfile3.id,
      fromAddress: 'Bangalore',
      destination: 'Pune',
      startDate: '2026-07-01',
      endDate: '2026-07-05',
      vehicleNumber: 'KA-04-P-1122',
      advanceAmount: 18000.00,
      status: 'pending',
    });

    console.log('Seeded 7 Trips: 3 Settled, 2 Completed, 1 Active, 1 Pending');

    // 4. Create Expenses
    // Trip 1 Expenses (Goa - Settled)
    await Expense.create({
      tripId: trip1.id,
      category: 'fuel',
      amount: 6500.00,
      date: '2026-06-02',
      description: 'Diesel Shell Bunk en route Goa',
      receiptUrl: null,
      status: 'approved',
    });
    await Expense.create({
      tripId: trip1.id,
      category: 'toll',
      amount: 1200.00,
      date: '2026-06-02',
      description: 'Fastag Toll charges NH48',
      receiptUrl: null,
      status: 'approved',
    });
    await Expense.create({
      tripId: trip1.id,
      category: 'food',
      amount: 1800.00,
      date: '2026-06-04',
      description: 'Meals for driver and guests',
      receiptUrl: null,
      status: 'approved',
    });
    await Expense.create({
      tripId: trip1.id,
      category: 'accommodation',
      amount: 2500.00,
      date: '2026-06-05',
      description: 'Goa Driver Lodge stay',
      receiptUrl: null,
      status: 'approved',
    });

    // Trip 2 Expenses (Chennai - Settled)
    await Expense.create({
      tripId: trip2.id,
      category: 'fuel',
      amount: 5500.00,
      date: '2026-06-03',
      description: 'Diesel HP Petrol bunk',
      receiptUrl: null,
      status: 'approved',
    });
    await Expense.create({
      tripId: trip2.id,
      category: 'toll',
      amount: 950.00,
      date: '2026-06-03',
      description: 'Toll plaza charges',
      receiptUrl: null,
      status: 'approved',
    });
    await Expense.create({
      tripId: trip2.id,
      category: 'accommodation',
      amount: 2000.00,
      date: '2026-06-05',
      description: 'Lodge stay in Chennai',
      receiptUrl: null,
      status: 'approved',
    });
    await Expense.create({
      tripId: trip2.id,
      category: 'food',
      amount: 1200.00,
      date: '2026-06-06',
      description: 'Meals during trip',
      receiptUrl: null,
      status: 'approved',
    });

    // Trip 3 Expenses (Hyderabad - Settled)
    await Expense.create({
      tripId: trip3.id,
      category: 'fuel',
      amount: 7000.00,
      date: '2026-06-10',
      description: 'Diesel Shell Station',
      receiptUrl: null,
      status: 'approved',
    });
    await Expense.create({
      tripId: trip3.id,
      category: 'toll',
      amount: 1500.00,
      date: '2026-06-10',
      description: 'NH44 highway tolls',
      receiptUrl: null,
      status: 'approved',
    });
    await Expense.create({
      tripId: trip3.id,
      category: 'accommodation',
      amount: 3000.00,
      date: '2026-06-12',
      description: 'Hotel stay Hyderabad',
      receiptUrl: null,
      status: 'approved',
    });
    await Expense.create({
      tripId: trip3.id,
      category: 'food',
      amount: 2200.00,
      date: '2026-06-13',
      description: 'Meals & refreshment charges',
      receiptUrl: null,
      status: 'approved',
    });
    await Expense.create({
      tripId: trip3.id,
      category: 'miscellaneous',
      amount: 1500.00,
      date: '2026-06-14',
      description: 'Ad-hoc vehicle wash and cleaning',
      receiptUrl: null,
      status: 'approved',
    });

    // Trip 4 Expenses (Mangalore - Completed, Settlement Pending)
    await Expense.create({
      tripId: trip4.id,
      category: 'fuel',
      amount: 4500.00,
      date: '2026-06-16',
      description: 'Diesel refuel at Mangalore Highway',
      receiptUrl: null,
      status: 'approved',
    });
    await Expense.create({
      tripId: trip4.id,
      category: 'toll',
      amount: 600.00,
      date: '2026-06-16',
      description: 'Toll plaza charges',
      receiptUrl: null,
      status: 'approved',
    });
    await Expense.create({
      tripId: trip4.id,
      category: 'food',
      amount: 1000.00,
      date: '2026-06-18',
      description: 'Driver meals',
      receiptUrl: null,
      status: 'approved',
    });
    await Expense.create({
      tripId: trip4.id,
      category: 'parking',
      amount: 250.00,
      date: '2026-06-19',
      description: 'Beach parking fee',
      receiptUrl: null,
      status: 'pending',
    });

    // Trip 5 Expenses (Mysore - Completed, Settlement Pending)
    await Expense.create({
      tripId: trip5.id,
      category: 'fuel',
      amount: 2800.00,
      date: '2026-06-22',
      description: 'Diesel refill HP Bunk',
      receiptUrl: null,
      status: 'approved',
    });
    await Expense.create({
      tripId: trip5.id,
      category: 'food',
      amount: 900.00,
      date: '2026-06-23',
      description: 'Meals during stay',
      receiptUrl: null,
      status: 'approved',
    });
    await Expense.create({
      tripId: trip5.id,
      category: 'toll',
      amount: 300.00,
      date: '2026-06-22',
      description: 'Mysore Expressway toll',
      receiptUrl: null,
      status: 'pending',
    });

    // Trip 6 Expenses (Mumbai - Active/Ongoing)
    await Expense.create({
      tripId: trip6.id,
      category: 'fuel',
      amount: 10500.00,
      date: '2026-06-26',
      description: 'Initial tank full diesel Shell',
      receiptUrl: null,
      status: 'approved',
    });
    await Expense.create({
      tripId: trip6.id,
      category: 'toll',
      amount: 1950.00,
      date: '2026-06-26',
      description: 'Toll charges enroute Mumbai',
      receiptUrl: null,
      status: 'approved',
    });
    await Expense.create({
      tripId: trip6.id,
      category: 'food',
      amount: 1500.00,
      date: '2026-06-28',
      description: 'Dhaba meals along highway',
      receiptUrl: null,
      status: 'pending',
    });

    console.log('Seeded Expenses across trips.');

    // 5. Create Settlements
    // Settlement 1 (Goa - Settled)
    await Settlement.create({
      tripId: trip1.id,
      totalExpenses: 12000.00,
      advanceAmount: 12000.00,
      balance: 0.00,
      status: 'approved',
      remarks: 'All bills verified. Settlement complete.',
    });

    // Settlement 2 (Chennai - Settled)
    await Settlement.create({
      tripId: trip2.id,
      totalExpenses: 9650.00,
      advanceAmount: 10000.00,
      balance: -350.00,
      status: 'approved',
      remarks: 'Driver returned the remaining balance of Rs 350. Closed.',
    });

    // Settlement 3 (Hyderabad - Settled)
    await Settlement.create({
      tripId: trip3.id,
      totalExpenses: 15200.00,
      advanceAmount: 15000.00,
      balance: 200.00,
      status: 'approved',
      remarks: 'Bills audited. Extra expenses of Rs 200 reimbursed to driver.',
    });

    // Settlement 4 (Mangalore - Pending)
    await Settlement.create({
      tripId: trip4.id,
      totalExpenses: 6100.00,
      advanceAmount: 8000.00,
      balance: -1900.00,
      status: 'pending',
      remarks: '',
    });

    // Settlement 5 (Mysore - Pending)
    await Settlement.create({
      tripId: trip5.id,
      totalExpenses: 3700.00,
      advanceAmount: 5000.00,
      balance: -1300.00,
      status: 'pending',
      remarks: '',
    });

    console.log('Seeded Settlements.');

    // 6. Create Notifications
    await Notification.create({
      userId: driverUser1.id,
      message: 'Your settlement request for Goa trip has been settled.',
      isRead: true,
    });
    await Notification.create({
      userId: driverUser2.id,
      message: 'Your settlement request for Chennai trip has been settled.',
      isRead: true,
    });
    await Notification.create({
      userId: driverUser1.id,
      message: 'Please return the remaining balance of ₹1900 for the Mangalore trip.',
      isRead: false,
    });
    await Notification.create({
      userId: adminUser.id,
      message: 'New settlement request submitted by Suresh Patil (Mysore trip). Awaiting review.',
      isRead: false,
    });

    console.log('Seeded Notifications.');

    // 7. Create Audit Logs
    await AuditLog.create({
      userId: adminUser.id,
      action: 'SYSTEM_SETUP',
      details: 'Database seeded with June 2026 activities.',
    });

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
