const r=(a)=>{
  const form=/[a-zA-Z]{2,}/g;
  // console.log(a.match(form));
  const s=a.match(form)
  // console.log("The each regex call is.");
  // console.log(s);
  return s;
}


r("Dipesha")
r("923701a")
r("92")


if(r("Test")){
  console.log("Trure");
}
else{
  console.log("False");
}