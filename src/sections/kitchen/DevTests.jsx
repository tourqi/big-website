import { useEffect } from "react";
import { ALL, toSelectValue, fromSelectValue } from "@/lib/format";
import { LAYOUT_OPTIONS, STYLE_OPTIONS, FINISH_OPTIONS, TOP_OPTIONS } from "@/data/kitchenCatalogue";

export default function DevTests() {
  useEffect(() => {
    console.assert(toSelectValue("") === ALL, "toSelectValue should map empty to ALL");
    console.assert(fromSelectValue(ALL) === "", "fromSelectValue should map ALL to empty");
    const noEmpty = (arr) => !arr.includes("");
    console.assert(
      noEmpty(LAYOUT_OPTIONS) && noEmpty(STYLE_OPTIONS) && noEmpty(FINISH_OPTIONS) && noEmpty(TOP_OPTIONS),
      "Option arrays must not contain empty string values"
    );
    const sample = { layout:"L", style:["Modern"], door_finish:{ type:"HPL" }, worktop:{ material:"Granite" } };
    const filters = { layout:"L", style:"Modern", finish:"HPL", top:"Granite" };
    const inLayout = filters.layout ? sample.layout === filters.layout : true;
    const inStyle  = filters.style  ? sample.style.includes(filters.style) : true;
    const inFinish = filters.finish ? sample.door_finish.type.includes(filters.finish) : true;
    const inTop    = filters.top    ? sample.worktop.material === filters.top : true;
    console.assert(inLayout && inStyle && inFinish && inTop, "Sample item should pass filters");
  }, []);
  return null;
}
