class UserInfo {
  constructor({ nameSelector, descriptionSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._descriptionElement = document.querySelector(descriptionSelector);
  }

  getUserInfo() {
    return { name: this._nameElement.textContent, about: this._descriptionElement.textContent }
  }

  setUserInfo(name, about) {
    this._nameElement.textContent = name;
    this._descriptionElement.textContent = about;
  }
}

export { UserInfo }