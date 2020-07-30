import { expect } from 'chai';
import scheduler from '../src/index';
import testData from './testData';

describe("test", () => {
  testData.forEach(
    ({i, o, s}, index) => {
      const { elements, availability, depth } = i;
      it("input: " + index + ", expect output: " + JSON.stringify(o), () => {
        const { slots, skipped } = scheduler.schedule(elements, availability, depth, "_value", "id");

        expect(slots.length).to.equal(o.length);
        
        let occupied = 0;
        slots.forEach(s => {
          expect(s.length).to.be.at.most(depth);
          s.forEach(e => occupied += e._value);
        });
        
        if (s){
          expect(skipped.length).to.equal(s.length);
        }

        expect(occupied <= availability*depth);

        for (let k = 0; k < depth; k++){
          let depthOccupied = 0;
          for (let j =0; j < slots.length; j++){
            if (slots[j][k]){
              depthOccupied += slots[j][k]._value;
            }
          }
          expect(depthOccupied <= availability);
        }

      });
    }
  )
});
