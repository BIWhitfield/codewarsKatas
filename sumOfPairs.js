var sum_pairs=function(ints, s){
  if (ints.length < 2) return undefined; //not enough numbers for pair.
  let intSet = new Set()
  intSet.add(ints[0]);
  for (let i=1; i < ints.length; ++i){
    let needed = s-ints[i];
    if (intSet.has(needed)){//check if we have already seen the number needed to complete the pair.
      return [needed,ints[i]];
    }
    intSet.add(ints[i]);//if not insert the number in set and continue.
  }
  return undefined;//No answer found
}
