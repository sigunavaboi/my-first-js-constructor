import { row, col, css } from '../utils';

class Block {
  constructor(value, opts) {
    this.value = value;
    this.opts = opts;
  }

  toHTML() {
    throw new Error('Method toHTML need to be implemented');
  }
}

export class TitleBlock extends Block {
  constructor(value, opts) {
    super(value, opts);
  }

  toHTML() {
    const { tag = 'h1', styles } = this.opts;
    return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
  }
}
export class TextBlock extends Block {
  constructor(value, opts) {
    super(value, opts)
  }

  toHTML() {
    const { styles } = this.opts;
    return row(col(`<p>${this.value}</p>`), css(styles));
  }
}
export class ColumnsBlock extends Block {
  constructor(value, opts) {
    super(value, opts)
  }

  toHTML() {
    const { styles } = this.opts;
    const content = this.value.map(col).join('');
    return row(content, css(styles));
  }
}
export class ImageBlock extends Block {
  constructor(value, opts) {
    super(value, opts)
  }

  toHTML() {
    const { styles, imageStyles, alt = '' } = this.opts;
    return row(`<img src="${this.value}" style="${css(imageStyles)}" alt="${alt}">`, css(styles));
  }
}