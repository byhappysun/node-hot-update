require('./lib/require');

setInterval(()=>{
  let Mod1 = $require('./modules/mod1');
  let Mod2 = $require('./modules/mod2');
  let m1 = new Mod1();
  let m2 = new Mod2();

  console.log(m1.data, m2.data)
}, 3000)