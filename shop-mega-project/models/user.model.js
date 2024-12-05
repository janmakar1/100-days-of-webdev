const bcrypt = require("bcryptjs");

const db = require("../data/database");

class User {
  constructor(email, password, fullnamem, street, postal, city) {
    this.email = email;
    this.password = password;
    this.name = fullnamem;
    this.address = {
      street: street,
      postalCode: postal,
      city: city,
    };
  }

  getUserWithSameEmail() {
    return db.getDb().collection("users").findOne({ email: this.email });
  }

  async existsAlready() {
    const existingUser = await this.getUserWithSameEmail();
    if (existingUser) {
      return true;
    } else {
      return false;
    }
  }

  hasMatchingPassword(hashedPassword) {
    return bcrypt.compare(this.password, hashedPassword);
  }

  async signup() {
    const hashedPassword = await bcrypt.hash(this.password, 12);
    console.log(hashedPassword);

    db.getDb().collection("users").insertOne({
      email: this.email,
      password: hashedPassword,
      name: this.name,
      address: this.address,
    });
  }
}

module.exports = User;
