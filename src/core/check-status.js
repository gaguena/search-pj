const ACTIVE = ['ATIVA', 'OK']

module.exports = class StatusCheck {
  static isActive (status) {
    return ACTIVE.includes(status)
  }

  static isInvalid (status) {
    return !StatusCheck.isActive(status)
  }
}
