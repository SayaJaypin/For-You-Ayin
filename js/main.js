/**
 * ==============================================================================
 * ENGINE UTAMA: PERAYAAN AZIZAH AIN FADILLAH
 * DIBANGUN SECARA BRUTAL DENGAN STANDAR TERTINGGI 12 JULI 2026.
 * EDISI REVISI: OPTIMALISASI PRESISI HITBOX LAYAR SENTUH
 * ==============================================================================
 */

class LuxuryExperience {
    constructor() {
        this.app = document.getElementById('lux-app');
        this.completedGames = 0;
        this.init();
    }

    init() {
        this.buildDOM();
        this.initCanvasEngine();
        this.setupObservers();
        this.startRealtimeClock();
        this.initAudioPlayer();
        this.initQuoteGenerator();
        this.initInteractiveGift();
        this.initGameEngine();
    }

    // Menginjeksi seluruh struktur DOM untuk menjaga HTML tetap bersih
    buildDOM() {
        document.getElementById('hero').innerHTML = `
            <div class="lux-panel">
                <p class="text-tracking">Sebuah Persembahan Waktu</p>
                <h1 class="title-main">Selamat Ulang Tahun</h1>
                <h2 class="title-sub">Azizah Ain Fadillah (Ayin)</h2>
                <p class="text-body text-center">Setiap detik yang terlewati adalah saksi atas keanggunanmu. Hari ini, esok, dan seterusnya.</p>
            </div>
        `;

        document.getElementById('clock').innerHTML = `
            <div class="lux-panel">
                <p class="text-tracking">Denyut Waktu Kita</p>
                <div class="clock-time" id="val-time">00:00:00</div>
                <div class="clock-date" id="val-date">Memuat waktu...</div>
            </div>
        `;

        document.getElementById('gallery').innerHTML = `
            <div class="lux-panel">
                <h2 class="title-main text-center" style="font-size: 3rem;">Jejak Memori</h2>
                <div class="gallery-grid">
                    <div class="frame-wrap r-3-4"><img src="assets/images/photo1.jpg" alt="Memori"></div>
                    <div class="frame-wrap r-3-4"><img src="assets/images/photo2.jpg" alt="Memori"></div>
                    <div class="frame-wrap r-9-16"><img src="assets/images/photo6.jpg" alt="Memori Spesial"></div>
                    <div class="frame-wrap r-3-4"><img src="assets/images/photo3.jpg" alt="Memori"></div>
                    <div class="frame-wrap r-3-4"><img src="assets/images/photo4.jpg" alt="Memori"></div>
                    <div class="frame-wrap r-3-4"><img src="assets/images/photo5.jpg" alt="Memori"></div>
                </div>
            </div>
        `;

        document.getElementById('music').innerHTML = `
            <div class="lux-panel player-core">
                <div class="vinyl-record" id="cover-art">
                    <div class="vinyl-hole"></div>
                </div>
                <div class="track-data">
                    <h3 class="track-name" id="track-title">Memuat Harmoni...</h3>
                    <div class="timeline-wrap">
                        <span id="time-curr">0:00</span>
                        <div class="timeline-bar" id="progress-bar">
                            <div class="timeline-fill" id="progress-fill"></div>
                        </div>
                        <span id="time-dur">0:00</span>
                    </div>
                    <div class="btn-group">
                        <button class="btn-nav" id="btn-prev"><svg viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg></button>
                        <button class="btn-play" id="btn-play"><svg id="icon-play" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
                        <button class="btn-nav" id="btn-next"><svg viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg></button>
                    </div>
                </div>
            </div>
        `;

        document.getElementById('quotes').innerHTML = `
            <div class="lux-panel">
                <div class="quote-display" id="quote-text"></div>
            </div>
        `;

        document.getElementById('gift').innerHTML = `
            <div class="lux-panel">
                <div class="gift-wrapper">
                    <div class="gift-visual" id="box-visual">Sentuh Kotak Ini</div>
                    <div class="letter-content" id="letter-text"></div>
                </div>
            </div>
        `;

        document.getElementById('games').innerHTML = `
            <div class="lux-panel">
                <h2 class="title-main text-center" style="font-size: 3rem;">Tiga Ujian Kecil</h2>
                <p class="text-body text-center" style="margin-bottom:3rem;">Selesaikan untuk membuka hadiah rahasia.</p>
                
                <!-- Game 1 -->
                <div class="game-area" id="area-game-1">
                    <h3 class="game-title">Ujian Pertama: Langkah Tak Terhenti</h3>
                    <p class="game-desc">Ketuk layar secara presisi untuk melompat. Capai skor 1000.</p>
                    <div class="canvas-wrap">
                        <canvas id="cvs-dino" width="700" height="250"></canvas>
                        <div class="score-hud" id="hud-dino">Skor: 0</div>
                        <div class="overlay-start" id="over-dino">
                            <button class="btn-premium" id="btn-start-dino">Mulai Perjalanan</button>
                        </div>
                    </div>
                </div>

                <!-- Game 2 -->
                <div class="game-area hidden-hard" id="area-game-2">
                    <h3 class="game-title">Ujian Kedua: Menjaga Presisi</h3>
                    <p class="game-desc">Sentuh 15 ornamen bulat merah. Hindari bentuk persegi gelap.</p>
                    <div class="canvas-wrap">
                        <canvas id="cvs-catch" width="700" height="250"></canvas>
                        <div class="score-hud" id="hud-catch">Tertangkap: 0 / 15</div>
                        <div class="overlay-start" id="over-catch">
                            <button class="btn-premium" id="btn-start-catch">Mulai Menjaga</button>
                        </div>
                    </div>
                </div>

                <!-- Game 3 -->
                <div class="game-area hidden-hard" id="area-game-3">
                    <h3 class="game-title">Ujian Ketiga: Ruang Ingatan</h3>
                    <p class="game-desc">Jawab dengan hatimu.</p>
                    <div class="quiz-grid" id="quiz-container"></div>
                </div>
            </div>
        `;

        document.getElementById('secret').innerHTML = `
            <div class="particle-container" id="secret-particles"></div>
            <div class="core-3d-wrap" id="secret-core">
                <div class="mathematical-heart">
                    <div class="heart-polygon layer-front"></div>
                    <div class="heart-polygon layer-mid"></div>
                    <div class="heart-polygon layer-back"></div>
                </div>
                <div class="glow-aura"></div>
            </div>
            <h1 class="ending-text" id="ending-words">Hatiku, Selamanya Milikmu.<br><span style="font-size:1.5rem; letter-spacing:4px; font-family:var(--font-sans); font-weight:300;">SELAMAT ULANG TAHUN, AYIN</span></h1>
            <button class="btn-premium hidden-hard" id="btn-restart" style="margin-top: 40px; z-index:10; position:relative;">Kembali ke Awal</button>
        `;
    }

    initCanvasEngine() {
        const cvs = document.getElementById('core-engine');
        const ctx = cvs.getContext('2d');
        let w, h, particles = [];

        const resize = () => { w = cvs.width = window.innerWidth; h = cvs.height = window.innerHeight; };
        window.addEventListener('resize', resize);
        resize();

        class Dust {
            constructor() {
                this.x = Math.random() * w; this.y = Math.random() * h;
                this.r = Math.random() * 2 + 0.5;
                this.vy = Math.random() * 0.4 + 0.1;
                this.vx = (Math.random() - 0.5) * 0.4;
                this.alpha = Math.random() * 0.4 + 0.1;
            }
            update() {
                this.y -= this.vy; this.x += this.vx;
                if(this.y < 0) { this.y = h; this.x = Math.random() * w; }
            }
            draw() {
                ctx.fillStyle = `rgba(183, 110, 121, ${this.alpha})`;
                ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); ctx.fill();
            }
        }
        for(let i=0; i<70; i++) particles.push(new Dust());
        
        const render = () => {
            ctx.clearRect(0,0,w,h);
            particles.forEach(p => { p.update(); p.draw(); });
            requestAnimationFrame(render);
        };
        render();
    }

    setupObservers() {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if(e.isIntersecting) {
                    e.target.classList.add('visible');
                    obs.unobserve(e.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        document.querySelectorAll('.lux-panel').forEach(p => obs.observe(p));
    }

    startRealtimeClock() {
        const elTime = document.getElementById('val-time');
        const elDate = document.getElementById('val-date');
        const mths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
        
        const tick = () => {
            const n = new Date();
            elTime.textContent = `${String(n.getHours()).padStart(2,'0')}:${String(n.getMinutes()).padStart(2,'0')}:${String(n.getSeconds()).padStart(2,'0')}`;
            elDate.textContent = `${n.getDate()} ${mths[n.getMonth()]} ${n.getFullYear()}`;
            requestAnimationFrame(tick);
        };
        tick();
    }

    initAudioPlayer() {
        const list = [
            { t: "Shape of My Heart", s: "assets/music/song1.mp3", c: "assets/covers/cover1.jpg" },
            { t: "Beautiful", s: "assets/music/song2.mp3", c: "assets/covers/cover2.jpg" },
            { t: "Best Part", s: "assets/music/song3.mp3", c: "assets/covers/cover3.jpg" }
        ];
        let idx = 0;
        const aud = new Audio();
        const pBtn = document.getElementById('btn-play');
        const icon = document.getElementById('icon-play');
        const cover = document.getElementById('cover-art');
        const bar = document.getElementById('progress-bar');
        const fill = document.getElementById('progress-fill');
        const tCurr = document.getElementById('time-curr');
        const tDur = document.getElementById('time-dur');

        const fmt = (s) => { if(isNaN(s)) return "0:00"; const m=Math.floor(s/60),sc=Math.floor(s%60); return `${m}:${sc<10?'0':''}${sc}`; };
        
        const load = (i) => {
            aud.src = list[i].s;
            document.getElementById('track-title').textContent = list[i].t;
            cover.style.backgroundImage = `url('${list[i].c}')`;
            aud.load();
        };

        pBtn.addEventListener('click', () => {
            if(aud.paused) {
                aud.play(); cover.classList.add('is-playing'); pBtn.classList.add('playing');
                icon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
            } else {
                aud.pause(); cover.classList.remove('is-playing'); pBtn.classList.remove('playing');
                icon.innerHTML = '<path d="M8 5v14l11-7z"/>';
            }
        });

        document.getElementById('btn-next').addEventListener('click', () => { idx = (idx+1)%list.length; load(idx); if(!aud.paused) aud.play(); });
        document.getElementById('btn-prev').addEventListener('click', () => { idx = (idx-1+list.length)%list.length; load(idx); if(!aud.paused) aud.play(); });

        aud.addEventListener('timeupdate', () => {
            fill.style.width = `${(aud.currentTime/aud.duration)*100}%`;
            tCurr.textContent = fmt(aud.currentTime);
        });
        aud.addEventListener('loadedmetadata', () => { tDur.textContent = fmt(aud.duration); });
        aud.addEventListener('ended', () => document.getElementById('btn-next').click());

        bar.addEventListener('click', (e) => {
            const r = bar.getBoundingClientRect();
            aud.currentTime = ((e.clientX - r.left) / r.width) * aud.duration;
        });

        load(idx);
    }

    initQuoteGenerator() {
        const qts = [
            "Waktu adalah kanvas, dan kau melukisnya dengan keanggunan.",
            "Kehadiranmu mengubah hal biasa menjadi luar biasa.",
            "Setiap detik bersamamu adalah mahakarya yang tak ternilai.",
            "Seperti cahaya, kelembutanmu menghangatkan tanpa menyilaukan."
        ];
        const el = document.getElementById('quote-text');
        let i = 0;
        const roll = () => {
            el.style.opacity = 0; el.style.filter = "blur(4px)";
            setTimeout(() => {
                i = (i+1)%qts.length;
                el.textContent = `"${qts[i]}"`;
                el.style.opacity = 1; el.style.filter = "blur(0)";
            }, 1000);
        };
        el.textContent = `"${qts[0]}"`;
        setInterval(roll, 6000);
    }

    initInteractiveGift() {
        const b = document.getElementById('box-visual');
        const l = document.getElementById('letter-text');
        const txt = "Di hari istimewamu ini, aku ingin mengingatkanmu bahwa eksistensimu adalah anugerah terbesar bagi sekelilingmu. Teruslah melangkah dengan hatimu yang lembut. Ruang ini akan selalu menyimpan cerita kita dengan sempurna. Selamat bertambah usia, cintaku.";
        
        b.addEventListener('click', () => {
            b.style.transform = "scale(0) rotate(180deg)";
            setTimeout(() => {
                b.style.display = "none";
                l.classList.add('open');
                let i = 0; l.innerHTML = '';
                const type = setInterval(() => {
                    if(i < txt.length) { l.innerHTML = txt.substring(0, i+1) + '<span class="cursor-blink">|</span>'; i++; }
                    else { clearInterval(type); l.innerHTML = txt; }
                }, 40);
            }, 600);
        }, { once:true });
    }

    // ==========================================
    // SISTEM FISIKA GAME BRUTAL (REVISI TOUCH & HITBOX)
    // ==========================================
    initGameEngine() {
        const checkWin = () => { if(this.completedGames === 3) this.triggerSecret(); };

        // Game 1: Endless Runner
        const start1 = document.getElementById('btn-start-dino');
        start1.addEventListener('click', () => {
            document.getElementById('over-dino').style.opacity = 0;
            setTimeout(() => document.getElementById('over-dino').style.display = 'none', 500);
            
            const cvs = document.getElementById('cvs-dino');
            const ctx = cvs.getContext('2d');
            let score = 0, active = true, frames = 0;
            let player = { x: 50, y: 150, s: 20, dy: 0, grv: 0.7, jmp: -12, ground: true };
            let obs = [];

            const jump = (e) => { 
                if(e && e.type === 'touchstart') e.preventDefault();
                if(player.ground) { player.dy = player.jmp; player.ground = false; } 
            };
            window.addEventListener('keydown', (e) => { if(e.code==='Space') jump(); });
            cvs.addEventListener('mousedown', jump);
            cvs.addEventListener('touchstart', jump, { passive: false });

            const loop = () => {
                if(!active) return;
                ctx.clearRect(0,0,cvs.width,cvs.height);

                ctx.fillStyle = '#E0BFB8'; ctx.fillRect(0, cvs.height-15, cvs.width, 15);

                player.dy += player.grv; player.y += player.dy;
                if(player.y + player.s >= cvs.height - 15) { player.y = cvs.height - 15 - player.s; player.dy = 0; player.ground = true; }
                
                ctx.fillStyle = '#800020'; ctx.beginPath(); ctx.arc(player.x+10, player.y+10, 10, 0, Math.PI*2); ctx.fill();

                if(frames % 70 === 0) obs.push({ x: cvs.width, y: cvs.height - 35, w: 20, h: 20, spd: 7 });
                for(let i=obs.length-1; i>=0; i--) {
                    let o = obs[i]; o.x -= o.spd;
                    ctx.fillStyle = '#2C2C2C'; ctx.fillRect(o.x, o.y, o.w, o.h);
                    
                    let cx = player.x+10, cy = player.y+10;
                    let testX = cx, testY = cy;
                    if(cx < o.x) testX = o.x; else if(cx > o.x+o.w) testX = o.x+o.w;
                    if(cy < o.y) testY = o.y; else if(cy > o.y+o.h) testY = o.y+o.h;
                    let distX = cx-testX, distY = cy-testY;
                    if(Math.sqrt((distX*distX)+(distY*distY)) <= 10) { obs = []; score = 0; frames = 0; }
                    if(o.x + o.w < 0) obs.splice(i,1);
                }

                score++; document.getElementById('hud-dino').textContent = `Skor: ${score}`; frames++;

                if(score >= 1000) {
                    active = false;
                    ctx.fillStyle = 'rgba(255,255,255,0.9)'; ctx.fillRect(0,0,cvs.width,cvs.height);
                    ctx.fillStyle = '#800020'; ctx.font = '24px Montserrat'; ctx.fillText('Kunci Pertama Terbuka!', 220, 130);
                    setTimeout(() => {
                        document.getElementById('area-game-1').classList.add('hidden-hard');
                        document.getElementById('area-game-2').classList.remove('hidden-hard');
                        this.completedGames++; checkWin();
                    }, 2000);
                } else { requestAnimationFrame(loop); }
            };
            loop();
        });

        // Game 2: Precision Catcher (Revisi Arsitektur Sentuh)
        const start2 = document.getElementById('btn-start-catch');
        start2.addEventListener('click', () => {
            document.getElementById('over-catch').style.display = 'none';
            const cvs = document.getElementById('cvs-catch');
            const ctx = cvs.getContext('2d');
            let caught = 0, active = true, items = [];

            const spawn = () => {
                if(!active) return;
                // Kecepatan jatuh diperhalus agar memberi kesan sinematik namun tetap reaktif
                items.push({ x: Math.random()*(cvs.width-60)+30, y: -20, r: 16, isGood: Math.random()>0.3, spd: Math.random()*1.5+1.5 });
                setTimeout(spawn, Math.random()*900+500);
            };
            spawn();

            // Arsitektur tunggal untuk menangani sentuhan di Smartphone & klik di Desktop
            const handleInteraction = (e) => {
                if(!active) return;
                e.preventDefault(); // Menghentikan layar dari efek zoom/scroll saat layar ditekan
                
                const rect = cvs.getBoundingClientRect();
                
                // Normalisasi koordinat untuk layar sentuh vs tetikus (mouse)
                let clientX, clientY;
                if (e.touches && e.touches.length > 0) {
                    clientX = e.touches[0].clientX;
                    clientY = e.touches[0].clientY;
                } else {
                    clientX = e.clientX;
                    clientY = e.clientY;
                }

                const mx = clientX - rect.left, my = clientY - rect.top;

                for(let i=items.length-1; i>=0; i--) {
                    let it = items[i];
                    let dx = mx-it.x, dy = my-it.y;
                    
                    // REVISI BRUTAL: Hitbox Radius diperluas hingga +45 piksel (Toleransi Area Sangat Luas)
                    if(Math.sqrt(dx*dx + dy*dy) < it.r + 45) { 
                        if(it.isGood) { caught++; } else { caught = Math.max(0, caught-2); }
                        document.getElementById('hud-catch').textContent = `Tertangkap: ${caught} / 15`;
                        items.splice(i,1);
                        
                        if(caught >= 15) {
                            active = false;
                            ctx.fillStyle = 'rgba(255,255,255,0.9)'; ctx.fillRect(0,0,cvs.width,cvs.height);
                            ctx.fillStyle = '#800020'; ctx.font = '24px Montserrat'; ctx.fillText('Kunci Kedua Terbuka!', 230, 130);
                            setTimeout(() => {
                                document.getElementById('area-game-2').classList.add('hidden-hard');
                                document.getElementById('area-game-3').classList.remove('hidden-hard');
                                this.completedGames++; checkWin(); initQuiz();
                            }, 2000);
                        }
                        break;
                    }
                }
            };

            // Memasang pendengar kejadian (Event Listener) ganda
            cvs.addEventListener('mousedown', handleInteraction);
            cvs.addEventListener('touchstart', handleInteraction, { passive: false });

            const loop = () => {
                if(!active) return;
                ctx.clearRect(0,0,cvs.width,cvs.height);
                for(let i=items.length-1; i>=0; i--) {
                    let it = items[i]; it.y += it.spd;
                    ctx.fillStyle = it.isGood ? '#B76E79' : '#2C2C2C';
                    ctx.beginPath();
                    if(it.isGood) { ctx.arc(it.x, it.y, it.r, 0, Math.PI*2); } 
                    else { ctx.rect(it.x-it.r, it.y-it.r, it.r*2, it.r*2); }
                    ctx.fill();
                    if(it.y > cvs.height+20) items.splice(i,1);
                }
                requestAnimationFrame(loop);
            };
            loop();
        });

        // Game 3: Elegant Quiz
        const initQuiz = () => {
            const data = [
                { q: "Warna dominan apa yang menghiasi ruang ini?", o: ["Biru Malam", "Rose Gold & Burgundy", "Hijau Zamrud"], a: 1 },
                { q: "Tepat di bulan apa momen ini berlabuh?", o: ["Juli", "Agustus", "September"], a: 0 },
                { q: "Apa yang tidak akan pernah pudar oleh waktu?", o: ["Benda mati", "Ingatan dan Jejak Rasa", "Musim"], a: 1 }
            ];
            let cur = 0;
            const qc = document.getElementById('quiz-container');

            const renderQ = () => {
                if(cur >= data.length) {
                    qc.innerHTML = `<h3 style="text-align:center; color:var(--burgundy-elegant); font-family:var(--font-serif); font-size:2.5rem;">Kunci Terakhir Terbuka.</h3>`;
                    setTimeout(() => { this.completedGames++; checkWin(); }, 1500); return;
                }
                const d = data[cur];
                let h = `<h4 style="font-family:var(--font-serif); font-size:1.8rem; color:var(--burgundy-elegant); margin-bottom:1.5rem;">${d.q}</h4>`;
                d.o.forEach((op, i) => { h += `<button class="quiz-opt" data-idx="${i}">${op}</button>`; });
                qc.innerHTML = h;

                document.querySelectorAll('.quiz-opt').forEach(btn => {
                    btn.addEventListener('click', function() {
                        if(parseInt(this.dataset.idx) === d.a) {
                            this.classList.add('correct'); cur++; setTimeout(renderQ, 600);
                        } else {
                            this.classList.add('wrong'); setTimeout(() => this.classList.remove('wrong'), 400);
                        }
                    });
                });
            };
            renderQ();
        };
    }

    triggerSecret() {
        const sec = document.getElementById('secret');
        const app = document.getElementById('lux-app');
        const pts = document.getElementById('secret-particles');
        const core = document.getElementById('secret-core');
        
        Array.from(app.children).forEach(c => { if(c.id !== 'secret') c.style.display = 'none'; });
        sec.classList.remove('hidden-hard');
        
        void sec.offsetWidth; 
        sec.classList.add('reveal-active');

        const w = window.innerWidth, h = window.innerHeight;
        for(let i=0; i<150; i++) {
            let p = document.createElement('div');
            p.style.position = 'absolute';
            p.style.width = p.style.height = `${Math.random()*6+2}px`;
            p.style.background = i%2===0 ? '#B76E79' : '#800020';
            p.style.borderRadius = '50%';
            
            const ang = Math.random() * Math.PI * 2;
            const rad = Math.max(w, h);
            p.style.left = `${w/2 + Math.cos(ang)*rad}px`;
            p.style.top = `${h/2 + Math.sin(ang)*rad}px`;
            p.style.transition = `all ${Math.random()*2+2}s cubic-bezier(0.25, 1, 0.5, 1)`;
            pts.appendChild(p);

            setTimeout(() => { p.style.left = `calc(50% - 3px)`; p.style.top = `calc(50% - 3px)`; p.style.opacity = '0'; }, 50);
        }

        setTimeout(() => {
            pts.innerHTML = '';
            core.classList.add('show-core');
            
            setTimeout(() => {
                document.getElementById('ending-words').classList.add('show-text');
                setTimeout(() => document.getElementById('btn-restart').classList.remove('hidden-hard'), 2000);
            }, 3000);
        }, 2500);

        document.getElementById('btn-restart').addEventListener('click', () => location.reload());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new LuxuryExperience();
});
