"use strict";
// 제네릭 클래스 (큐 방식으로 동작하는 클래스)
// 큐 : 선형 자료구조, FIFO (first-in-first-out)
class GenericQueue {
    constructor() {
        this.items = [];
    }
    // enqueue 메서드 (큐를 데이터에 추가)
    enqueue(item) {
        this.items.push(item);
    }
    // dequeue 메서드 (큐의 맨처음 데이터를 꺼낸다)
    dequeue() {
        return this.items.shift();
    }
    // peek 메서드 (큐의 맨처음 데이터를 확인)
    peek() {
        return this.items[0];
    }
    // size 메서드 (현재 큐의 사이즈를 반환)
    size() {
        return this.items.length;
    }
}
const strinQ = new GenericQueue();
strinQ.enqueue('hello');
console.log(strinQ.peek());
strinQ.dequeue();
strinQ.enqueue('TypeScript');
console.log(strinQ.size());
console.log(strinQ.peek());
