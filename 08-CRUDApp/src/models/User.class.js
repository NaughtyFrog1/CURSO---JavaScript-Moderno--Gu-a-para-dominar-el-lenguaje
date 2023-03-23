export default class User {
  static mapUserFromServer(serverUser) {
    return new User(
      serverUser.id,
      serverUser.first_name,
      serverUser.last_name,
      serverUser.balance,
      serverUser.gender,
      serverUser.is_active,
      serverUser.avatar
    )
  }

  constructor(id, firstname, lastname, balance, gender, isActive, avatar) {
    this.id = id
    this.firstname = firstname
    this.lastname = lastname
    this.balance = balance
    this.gender = gender
    this.isActive = isActive
    this.avatar = avatar
  }

  mapUserToServer() {
    return {
      id: this.id,
      first_name: this.firstname,
      last_name: this.lastname,
      balance: this.balance,
      gender: this.gender,
      is_active: this.isActive,
      avatar: this.avatar,
    }
  }
}
