import 'normalize.css';
import './blog.scss';

import createMenu from '../../components/menu/menu';
let menu = createMenu(['главная', 'блок'], 'menu');
document.body.appendChild(menu);

console.log('in blog.js')