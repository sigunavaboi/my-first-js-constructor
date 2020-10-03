import { block } from "../utils";
import { TextBlock, TitleBlock } from "./blocks";

export class Sidebar {
  constructor(selector, updateCallback) {
    this.$el = document.querySelector(selector);
    this.update = updateCallback.bind(this);
    this.init();
  }
  
  init() {
    this.$el.insertAdjacentHTML('afterbegin', this.template);
    this.$el.addEventListener('submit', this.add.bind(this));
  }

  add(event) {
    event.preventDefault();
    const type = event.target.name;
    const value = event.target.value.value;
    const styles = event.target.styles.value;

    let newBlock;

    switch(type) {
      case 'title': newBlock = new TitleBlock(value, { styles })
      case 'text': newBlock = new TextBlock(value, { styles });
    }
    this.update(newBlock);

    event.target.value.value = '';
    event.target.styles.value = '';
  }

  get template() {
    return [
      block('title'),
      block('text'),
    ].join('');
  }
}