import { describe, it, expect } from "vitest";
import { StackFifo } from "./stack-fifo";

describe("Stack FIFO", () => {
    it("should instantiate with provided values", () => {
        const stack = new StackFifo<number>([1, 2, 3]);
        expect(stack.size()).toBe(3);
    });

    describe("#push", () => {
        it("should add to top of stack", () => {
            const stack = new StackFifo<number>();
            stack.push(1);
            expect(stack.size()).toBe(1);
            stack.push(2);
            expect(stack.size()).toBe(2);
        });
    });

    describe("#pop", () => {
        it("should remove from top of stack", () => {
            const stack = new StackFifo<number>([1, 2, 3]);
            expect(stack.pop()).toBe(1);
            expect(stack.size()).toBe(2);
            expect(stack.pop()).toBe(2);
            expect(stack.size()).toBe(1);
        });
    });

    describe("#peek", () => {
        it("should return top of stack", () => {
            const stack = new StackFifo<number>([1, 2, 3]);
            expect(stack.peek()).toBe(1);
            expect(stack.size()).toBe(3);
        });
    });

    describe("#isEmpty", () => {
        it("should return true when empty", () => {
            const stack = new StackFifo<number>();
            expect(stack.isEmpty()).toBe(true);
        });

        it("should return false when not empty", () => {
            const stack = new StackFifo<number>([1]);
            expect(stack.isEmpty()).toBe(false);
        });
    });

    describe("#size", () => {
        it("should return size", () => {
            const stack = new StackFifo<number>([1, 2, 3]);
            expect(stack.size()).toBe(3);
        });

        it("should return 0 when empty", () => {
            const stack = new StackFifo<number>();
            expect(stack.size()).toBe(0);
        });
    });
});
