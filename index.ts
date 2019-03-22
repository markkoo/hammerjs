import './style.scss';
import 'hammerjs';

document.querySelectorAll<HTMLElement>('#parent span').forEach((elem) => {
    const child = new Hammer(elem);
    child.on('panstart', (e) => {
        console.log('child', e.target);
    });
});

const parent = new Hammer(document.getElementById('parent'));
parent.on('panstart', (e) => {
    console.log('parent', e.target);
});

const left = new Hammer(document.getElementById('left'));
left.on('panstart', (e: HammerInput) => console.log(e.target));

const right = new Hammer(document.getElementById('right'));
right.on('panstart', (e: HammerInput) => console.log(e.target));

const keat = new Hammer(document.getElementById('keat'));
keat.on('panstart', (e: HammerInput) => console.log(e.target));




