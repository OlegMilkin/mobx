import React from 'react';
import {action, observable} from "mobx";
import {observer} from "mobx-react";

class Store {
  @observable name= 'Oleg';
  @action changeName = () => {
    this.name = 'Dima'
  }
}

const store = new Store()

const Test = observer(() => {
  return (
    <div>
      {store.name}
      <button onClick={() => {store.changeName()}}>Change</button>
    </div>
  );
});

export default Test;