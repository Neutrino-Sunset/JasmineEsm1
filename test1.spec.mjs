import { myFunction } from './function1.js';

describe("A suite", function() {
   it("inline spec with an expectation", function() {
      expect(true).toBe(true);
   });
   it("myFunction is callable", function() {
      let a = myFunction(10);
      expect(a).toBe(52);
   });
});

