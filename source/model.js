import image from './assets/image.png'
import { TextBlock, TitleBlock, ColumnsBlock, ImageBlock } from './classes/blocks';
export const model = [
  new TitleBlock('Site Constructor powered by Pure JS', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: '#FFF',
      padding: '5px',
      'text-align': 'center',
    }
  }),
  new TextBlock('Here we go with some text', {}),
  new ColumnsBlock([
    '11111111',
    '22222222',
    '33333333',
    '44444444',
    '55555555',
    '66666666',
  ], {}),
  new ImageBlock(image, {
    styles: {
      display: 'flex',
      'justify-content': 'center',
      margin: '10px',
    },
    imageStyles: {
      width: '500px',
      height: 'auto',
      align: 'center',
    },
    alt: 'Awesome Picture',
  }),
];