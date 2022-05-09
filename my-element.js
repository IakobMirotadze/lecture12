/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 16px;
      }
      .container {
        border: 1px solid;
        display: flex;
        flex-direction: column;
        gap: 24px;
      }
      .name {
        font-weight: bold,
      }
    `;
  }

  static get properties() {
    return {
      name: {type: String},
      count: {type: Number},
      userList: {type: Array},
      chosenUser: {type: Object}
    };
  }

  constructor() {
    super();
    this.userList = []
    // 62052a173d4e5a7f72c68a0c
    fetch('https://dummyapi.io/data/v1/user?limit=10',
      {
        headers: {
          'app-id': '62052a173d4e5a7f72c68a0c'
        }
      }
    ).then((r)=> r.json())
    .then((response)=> this.userList = response.data)
    .catch((error)=> console.log(error))
    this.name = 'World';
    this.count = 0;
    // this.userList = [
    //   {name: 'diana', lastName: 'Ivanidze', age: 34},
    //   {name: "Maka", lastName: 'Giorkhelidze', age: 24},
    //   {name: "Iakobi", lastName: 'Mirotadze', age: 28},
    // ]
    this.additionalUser = {name: 'diana', lastName: 'Ivanidze', age: 34}
  }

  render() {
    return html`
      <h1>${this.sayHello('Class 12')}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      ${this.userList.map((item, index)=> html`
        <div class="container" @click=${()=> this.showUser(item)}>
          <div class="name">name: ${item.firstName}</div>
          <div>lastName: ${item.lastName}</div>
          <div>age: ${item.age}</div>
        </div>
        <span style="color: red" @click=${()=> this.deleteUser(index) }>Delete</span>
      `)}
    <br>
      ${this.chosenUser ? html`
        <input value=${this.chosenUser.firstName} placeholder="name" @input=${(event)=> this.onInfoInput(event, 'firstName')}>
        <input value=${this.chosenUser.lastName} placeholder="lastName" @input=${(event)=> this.onInfoInput(event, 'lastName')}>
        <input value=${this.chosenUser.age} placeholder="age" @input=${(event)=> this.onInfoInput(event, 'age')}>
        ` : '' }

        <button @click=${this.addUser}>Add</butt>

        <button @click=${this.saveUser}>Save</button>
    `;
  }

  // showUsers(user){
  //   return html`
  //     <div class="container">
  //       <div class="name">name: ${user.name}</div>
  //       <div>lastName: ${user.lastName}</div>
  //       <div>age: ${user.age}</div>
  //     </div>
  //   `
  // }

  onInfoInput(event, chosenProp) {
    const editedName = event.target.value
    this.chosenUser[chosenProp] = editedName;
    this.userList = [...this.userList]
  }

  deleteUser(index){
    this.userList.splice(index, 1);
    this.userList = [...this.userList]
  }

  addUser() {
    this.chosenUser = {
      name: '',
      lastName: '',
      age: '',
    }
  }

  saveUser() {
    this.userList = [...this.userList, {...this.chosenUser}]
    this.chosenUser = null;
  }
  _onClick() {
    this.count++
    // this.userList.push({name: 'diana', lastName: 'Ivanidze', age: 34})
    this.userList = [...this.userList, {...this.additionalUser}, ]
    // {...myObject}
    // this.dispatchEvent(new CustomEvent('count-changed'));
  }

  showUser(user){
  //  this.chosenUser = this.chosenUser === user ? null : user;
    if(this.chosenUser === user) {
      this.chosenUser = null;
    } else {
      this.chosenUser = null;
      // this.chosenUser = user
      setTimeout(()=> this.chosenUser = user, 10)
    }
  }

  /**
   * Formats a greeting
   * @param name {string} The name to say "Hello" to
   * @returns {string} A greeting directed at `name`
   */
  sayHello(name) {
    return `Hello, ${name}`;
  }
}

window.customElements.define('my-element', MyElement);
