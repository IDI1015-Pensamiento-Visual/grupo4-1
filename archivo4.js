const d3 = require("d3@6");
const FileAttachment = require("fileattachment@1");
const data = FileAttachment("dataset.json").json({ typed: true });

"#chart" = {
    replay;
  
    const svg = d3.create("svg")
        .attr("viewBox", [0, 0, width, height]);
  
    const updateBars = bars(svg);
    const updateAxis = axis(svg);
    const updateLabels = labels(svg);
    const updateTicker = ticker(svg);
  
    yield svg.node();
  
    for (const keyframe of keyframes) {
      const transition = svg.transition()
          .duration(duration)
          .ease(d3.easeLinear);
  
      // Extract the top bar’s value.
      x.domain([0, keyframe[1][0].value]);
  
      updateAxis(keyframe, transition);
      updateBars(keyframe, transition);
      updateLabels(keyframe, transition);
      updateTicker(keyframe, transition);
  
      invalidation.then(() => svg.interrupt());
      await transition.end();
    }
  }

//duracion en llegar al ultimo dato del grafico
duration = 250
//supongo que meses??
n = 12
//nombres de variables
const names = [
    "Ansiedad",
    "Desordenes alimenticios",
    "Depresion",
    "Suicidios",
    "Usuarios de Instagram",
    "Usuarios de Twitter",
    "Usuarios de Facebook",
    "Usuarios de Tiktok",
    "Usuarios de Whatsapp",
    "Usuarios de Snapchat"
  ];
}
names = new Set(data.map(d => d.name))
//valores data
datevalues = Array(10) [
    0: Array(2) [2013-01-01, Map(75){
        "Ansiedad" => 284,925,000 
        "Desordenes alimenticios" => 12,325,000 
        "Depresion" => 258,100,000 
        "Muertes*" => 1,300,595,678 
        "Suicidios" => 1,432,802 
        "Instagram" => 110,000,000
        "Twitter" => 218,000,000
        "Facebook" => 699,000,000
        "Tiktok" =>
        "Whatsapp" => 213,000,000
        "Snapchat" => 
    }
    1: Array(2) [2014-01-01, Map(100){
        "Ansiedad" => 286994000 
        "Desordenes alimenticios" => 12,478,000 
        "Depresion" => 262,038,000  
        "Muertes*" => 1,358,190,688  
        "Suicidios" => 1,409,200 
        "Instagram" => 200,000,000 
        "Twitter" => 271,000,000 
        "Facebook" => 829,000,000 
        "Tiktok" =>
        "Whatsapp" => 409,000,000 
        "Snapchat" => 57,000,000 
    }
    2: Array(2) [2015-01-01, Map(100){
        "Ansiedad" => 290,513,000  
        "Desordenes alimenticios" => 13,374,000  
        "Depresion" => 265,251,000  
        "Muertes*" => 1,337,574,673  
        "Suicidios" => 1,390,212  
        "Instagram" => 370,000,000 
        "Twitter" => 304,000,000 
        "Facebook" => 968,000,000 
        "Tiktok" =>
        "Whatsapp" => 719,000,000 
        "Snapchat" => 86,000,000 
    }
    3: Array(2) [2016-01-01, Map(100){
        "Ansiedad" => 294,392,000
        "Desordenes alimenticios" => 13,518,000  
        "Depresion" => 268,858,000
        "Muertes*" => 1,331,471,463
        "Suicidios" => 1,384,412   
        "Instagram" => 500,000,000  
        "Twitter" => 313,000,000  
        "Facebook" => 1,120,000,000  
        "Tiktok" =>
        "Whatsapp" => 1,076,000,000  
        "Snapchat" => 143,000,000  
    }
    4: Array(2) [2017-01-01, Map(100){
        "Ansiedad" =>  299,440,000   
        "Desordenes alimenticios" => 13,680,000   
        "Depresion" =>  272,080,000   
        "Muertes*" =>  1,311,942,891   
        "Suicidios" =>  1,387,936   
        "Instagram" =>  700,000,000  
        "Twitter" =>  310,000,000  
        "Facebook" =>  1,320,000,000  
        "Tiktok" =>
        "Whatsapp" =>  1,323,000,000  
        "Snapchat" =>  173,000,000 
    }
    5: Array(2) [2018-01-01, Map(100){
        "Ansiedad" =>  302,592,000   
        "Desordenes alimenticios" =>  13,824,000   
        "Depresion" =>  275,712,000   
        "Muertes*" =>  1,290,473,925   
        "Suicidios" =>  1,406,730   
        "Instagram" =>  1,000,000,000  
        "Twitter" =>  298,000,000  
        "Facebook" =>  1,470,000,000  
        "Tiktok" =>  133,000,000 
        "Whatsapp" =>  1,560,000,000  
        "Snapchat" =>  188,000,000 
    }
    6: Array(2) [2019-01-01, Map(100){
        "Ansiedad" =>   305,744,000    
        "Desordenes alimenticios" =>   13,968,000    
        "Depresion" =>   278,584,000    
        "Muertes*" =>   1,246,280,324    
        "Suicidios" =>   1,406,446    
        "Instagram" =>   1,210,000,000   
        "Twitter" =>   312,000,000   
        "Facebook" =>   1,580,000,000   
        "Tiktok" =>  381,000,000 
        "Whatsapp" =>  1,813,000,000   
        "Snapchat" =>  203,000,000 
    }
    7: Array(2) [2020-01-01, Map(100){
        "Ansiedad" =>   305,744,000    
        "Desordenes alimenticios" =>   13,968,000    
        "Depresion" =>   278,584,000    
        "Muertes*" =>   1,246,280,324    
        "Suicidios" =>   1,406,446    
        "Instagram" =>  1,520,000,000  
        "Twitter" =>   347,000,000   
        "Facebook" =>  1,780,000,000  
        "Tiktok" =>  700,000,000 
        "Whatsapp" =>  2,102,000,000 
        "Snapchat" =>  238,000,000  
    }
    8: Array(2) [2021-01-01, Map(100){
        "Ansiedad" =>   305,744,000    
        "Desordenes alimenticios" =>   13,968,000    
        "Depresion" =>   278,584,000    
        "Muertes*" =>   1,246,280,324    
        "Suicidios" =>   1,406,446   
        "Instagram" =>   1,890,000,000 
        "Twitter" =>  362,000,000  
        "Facebook" =>  1,910,000,000 
        "Tiktok" => 902,000,000 
        "Whatsapp" =>  2,289,000,000  
        "Snapchat" =>  293,000,000 
    }
    9: Array(2) [2022-01-01, Map(100){
        "Ansiedad" =>   305,744,000    
        "Desordenes alimenticios" =>   13,968,000    
        "Depresion" =>   278,584,000    
        "Muertes*" =>   1,246,280,324    
        "Suicidios" =>   1,406,446    
        "Instagram" =>  2,270,000,000 
        "Twitter" =>  401,000,000  
        "Facebook" =>   1,971,000,000 
        "Tiktok" =>  1,466,000,000 
        "Whatsapp" =>  2,413,000,000 
        "Snapchat" =>  347,000,000 
    }
    ]

    datevalues = Array.from(d3.rollup(data, ([d]) => d.value, d => +d.date, d => d.name))
  .map(([date, data]) => [new Date(date), data])
  .sort(([a], [b]) => d3.ascending(a, b))
  rank = ƒ(value)
  function rank(value) {
    const data = Array.from(names, name => ({name, value: value(name)}));
    data.sort((a, b) => d3.descending(a.value, b.value));
    for (let i = 0; i < data.length; ++i) data[i].rank = Math.min(n, i);
    return data;
  }
  k = 10
  keyframes = Array(10) [Array(2),] Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)
  keyframes = {
    const keyframes = [];
    let ka, a, kb, b;
    for ([[ka, a], [kb, b]] of d3.pairs(datevalues)) {
      for (let i = 0; i < k; ++i) {
        const t = i / k;
        keyframes.push([
          new Date(ka * (1 - t) + kb * t),
          rank(name => (a.get(name) || 0) * (1 - t) + (b.get(name) || 0) * t)
        ]);
      }
    }
    keyframes.push([new Date(kb), rank(name => b.get(name) || 0)]);
    return keyframes;
  }

