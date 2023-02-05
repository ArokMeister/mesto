class UserInfo {
  constructor({ nameSelector, descriptionSelector, avatarSelector }) {
    this._nameElement = document.querySelector(nameSelector);
    this._descriptionElement = document.querySelector(descriptionSelector);
    this._avatarElement = document.querySelector(avatarSelector);
    this._userId = null;
  }

  getUserInfo() {
    return { name: this._nameElement.textContent, about: this._descriptionElement.textContent }
  }

  setUserInfo({ name, about }) {
    this._nameElement.textContent = name;
    this._descriptionElement.textContent = about;
  }

  setUserId({ _id }) {
    this._userId = _id;
  }

  getUserId() {
    return this._userId;
  }

  setAvatar({ avatar }) {
    this._avatarElement.src = avatar;
  }

}

export { UserInfo }