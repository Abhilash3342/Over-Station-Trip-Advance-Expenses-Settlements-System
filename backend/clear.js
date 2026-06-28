const { sequelize, User, Driver, Trip, Expense, Settlement, Notification, AuditLog } = require('./models');

const clearDatabase = async () => {
  try {
    console.log('Starting database wipe...');
    await sequelize.sync({ force: true });
    
    // Create Default Admin User
    await User.create({
      name: 'Aditya Kumar (Admin)',
      email: 'admin@manivtha.com',
      password: 'admin123',
      role: 'admin',
      phone: '9876543200',
    });

    console.log('Database cleared! Only Admin user (admin@manivtha.com / admin123) remains.');
    process.exit(0);
  } catch (error) {
    console.error('Error clearing database:', error);
    process.exit(1);
  }
};

clearDatabase();
