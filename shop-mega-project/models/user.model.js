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

  async signup() {
    const hashedPassword = await bcrypt.hash(this.password, 12);

    db.getDb().collection("users").insertOne({
      email: this.email,
      password: this.hashedPassword,
      name: this.name,
      address: this.address,
    });
  }
}

module.exports = User;
