// Simplified User model for basic functionality
class User {
  static async findOne(condition) {
    // Mock user data for testing
    console.log('User.findOne called with:', condition);
    return null; // Return null for now
  }
  
  static async findOneAndUpdate(condition, updates, options = {}) {
    console.log('User.findOneAndUpdate called');
    return null; // Return null for now
  }
  
  static async updateLastActive(telegramId) {
    console.log('User.updateLastActive called for:', telegramId);
  }
  
  static async findAll() {
    console.log('User.findAll called');
    return [];
  }
}

module.exports = User;
