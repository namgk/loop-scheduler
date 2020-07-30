class Scheduler {
  schedule = (elements, availability, depth, valueField, idField) => {
    if (!Array.isArray(elements) || elements.length === 0){
      return {slots: [], skipped: []};
    }

    if (isNaN(Number(availability) || isNaN(depth))){
      return {slots: [], skipped: []};
    }

    const effectiveElements = this.filter(elements, valueField, idField);

    // output of the scheduler:
    // produce the number of slots within the availability
    // placement of elements into slots within the available depth

    // basically an 2 dimensional array of elements, 
    // first dimensions is the slots, i.e. slot 1, slot 2..., where sum(slots value) <= availability
    // second dimensions is the position of elements in each slot, with regard to the depth

    // optimization:
    // occupying maximum availability*depth
    // some elements can be discarded

    // heuristic:
    // small elements occupy better than big ones

    // algorithm:
    // sort the elements and placing them into slots based on their sizes from small to big

    const sortedElement = effectiveElements.sort((a, b) => {return a[valueField] - b[valueField]})
    
    const slots = [];
    let slotsOccupied = 0;
    let processed = 0;

    for (let i = 0; i < sortedElement.length; i = i + depth){
      const slot = [];

      if (slotsOccupied > availability){
        break;
      }

      for (let j = 0; j < depth; j++){
        if (i + j >= sortedElement.length){
          break;
        }

        if (slotsOccupied > availability){
          break;
        }
        
        const elm = sortedElement[i + j];

        if (slotsOccupied + elm[valueField] > availability){
          break;
        }
        
        slot.push(elm);
        processed = i + j;
      }
      
      if (slot.length > 0){
        slots.push(slot);
        const slotLength = slot[slot.length - 1][valueField];
        slotsOccupied += slotLength;
      }
    }

    return {slots, skipped: sortedElement.slice(processed + 1)};
  }

  filter = (elements, valueField, idField) => {
    return elements.filter(e => {
      return !isNaN(e[valueField]) && e[idField] !== null;
    });
  }
}

export default new Scheduler()
