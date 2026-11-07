const fw=document.getElementById('fw'),c=fw.getContext('2d'),RM=matchMedia('(prefers-reduced-motion:reduce)').matches;let ps=[],vis=true;
function rs(){fw.width=innerWidth;fw.height=innerHeight}rs();addEventListener('resize',rs);
function burst(x,y){if(RM)return;const max=innerWidth<700?80:150,n=Math.min(36,max-ps.length),h=Math.random()*360;for(let i=0;i<n;i++){const a=i/n*6.283,s=2+Math.random()*3;ps.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,l:1,h:h+Math.random()*40})}}
function loop(){if(!document.hidden){c.globalCompositeOperation='destination-out';c.fillStyle='rgba(0,0,0,.2)';c.fillRect(0,0,fw.width,fw.height);c.globalCompositeOperation='lighter';ps=ps.filter(p=>p.l>0);for(const p of ps){p.x+=p.vx;p.y+=p.vy;p.vy+=.04;p.vx*=.985;p.l-=.012;c.fillStyle=`hsla(${p.h},100%,60%,${p.l})`;c.beginPath();c.arc(p.x,p.y,2.2,0,7);c.fill()}}requestAnimationFrame(loop)}
if(!RM){loop();setInterval(()=>{if(vis&&!document.hidden)burst(innerWidth*(.15+Math.random()*.7),innerHeight*(.1+Math.random()*.35))},1800);
new IntersectionObserver(e=>vis=e[0].isIntersecting).observe(document.getElementById('home'));
addEventListener('pointerdown',e=>burst(e.clientX,e.clientY))}
