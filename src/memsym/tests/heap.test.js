import { Heap } from '../heap';

test('Heap initializes an empty memory', () => {
    const heap = new Heap(10);
    const data = heap.data;
    expect(data).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
});

test('Heap can write value to an empty memory', () => {
    const heap = new Heap(10);
    const value = 'abc';
    heap.alloc(value);
    const data = heap.data;
    expect(data).toEqual(['a', 'b', 'c', 0, 0, 0, 0, 0, 0, 0]);
});

test('Heap can add another value after one empty cell', () => {
    const heap = new Heap(10);
    const firstValue = 'abc';
    heap.alloc(firstValue);
    const secondValue = 'def';
    heap.alloc(secondValue);
    const data = heap.data;
    expect(data).toEqual(['a', 'b', 'c', 0, 'd', 'e', 'f', 0, 0, 0]);
});

test('Heap can add third value after one empty cell', () => {
    const heap = new Heap(10);
    const firstValue = 'abc';
    heap.alloc(firstValue);
    const secondValue = 'def';
    heap.alloc(secondValue);
    const thirdValue = '12';
    heap.alloc(thirdValue);
    const data = heap.data;
    expect(data).toEqual(['a', 'b', 'c', 0, 'd', 'e', 'f', 0, '1', '2']);
});

test('Heap.alloc returns -1 if there is not enough empty memory', () => {
    const heap = new Heap(3);
    const value = 'abcdef';
    const result = heap.alloc(value);
    const data = heap.data;
    expect(result).toEqual(-1);    
    expect(data).toEqual([0, 0, 0]);
});

test('Heap.alloc returns -1 if there is not enough empty memory after stored value', () => {
    const heap = new Heap(5);
    const value = 'ab';
    heap.alloc(value);
    const secondValue = 'def';
    const result = heap.alloc(secondValue);
    const data = heap.data;
    expect(result).toEqual(-1);    
    expect(data).toEqual(['a', 'b', 0, 0, 0]);
});

test('Heap.alloc returns -1 if there is not enough empty memory after multiple stored values', () => {
    const heap = new Heap(10);
    const firstValue = 'abc';
    heap.alloc(firstValue);
    const secondValue = 'def';
    heap.alloc(secondValue);
    const thirdValue = '123';
    const result = heap.alloc(thirdValue);    
    const data = heap.data;
    expect(result).toEqual(-1);    
    expect(data).toEqual(['a', 'b', 'c', 0, 'd', 'e', 'f', 0, 0, 0]);
});