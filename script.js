const app = document.getElementById("app");

function showPage(content) {
    app.innerHTML = `
        <section class="container">
            ${content}
        </section>
    `;
    window.scrollTo(0, 0);
}

// PAGE 1 — OPENING SURPRISE

function showWelcome() {
    showPage(`
        <div class="hearts">♡ ♡ ♡</div>
        <p class="small-text">A LITTLE SOMETHING FOR YOU</p>
        <h1>Happy Birthday! 🎂</h1>
        <p class="subtitle">
            Someone has a little surprise waiting for you...
        </p>
        <div class="envelope">💌</div>
        <button onclick="showNames()">Open your surprise ♡</button>
        <p class="footer">Made with lots of love ❤️</p>
    `);
}

// PAGE 2 — THE MANY NAMES OF SRAJAN

function showNames() {
    showPage(`
        <p class="section-label">CHAPTER 01</p>
        <h2>The Many Names of Srajan</h2>
        <p class="subtitle">
            A person. Many identities.🌟 
        </p>

        <div class="content">
            <div class="name-card">
                <h3>Khadoos</h3>
                <p>The old one.</p>
            </div>

            <div class="name-card">
                <h3>Kabutar</h3>
                <p>It has its own history. And the history is a mystery.</p>
            </div>

            <div class="name-card">
                <h3>Bhondu</h3>
                <p>For the times when you really act like one.</p>
            </div>

            <div class="name-card">
                <h3>Neech</h3>
                <p>An emotion. A personality trait. A permanent identity.</p>
            </div>
        </div>

        <div class="grand-finale">
            <p class="small-text">AND THE WINNER IS...</p>
            <h2>NEECH</h2>
            <h3>Forever and Always.</h3>
            <p>
                You may have had many names over the years, lekinnn, 
                Neech is here to stay. You can achieve anything
                in life, but you'll always be my certified Neech 😂❤️
            </p>
        </div>

        <button onclick="showManual()">Next →</button>
    `);
}

// PAGE 3 — USER MANUAL

function showManual() {
    showPage(`
        <p class="section-label">CHAPTER 02</p>
        <h2>SRAJAN™ USER MANUAL</h2>
        <p class="subtitle">
            Model: Certified Neech · Edition 2026
        </p>

        <div class="content">
            <div class="manual-card">
                <h3>⚠️ Warning</h3>
                <p>May randomly start ragebaiting</p>
                <p>Handle with patience</p>
            </div>

            <div class="manual-card">
                <h3>📖 Operating Instructions</h3>
                <p>Frequently found giving unnecessary gyaan</p>
                <p>Do not expect him to admit he's wrong</p>
                <p>Unexpected replies</p>
            </div>

            <div class="manual-card">
                <h3>✨ Special Features</h3>
                <p>Still a decent human being.. baccha hai ye</p>
                <p>Occasionally says something genuinely sweet 🫣</p>
            </div>

            <div class="manual-card">
                <h3>Final Verdict</h3>
                <p>
                    Despite all defects, somehow still worth keeping around 😌❤️
                </p>
            </div>
        </div>

        <button onclick="showAccusations()">Next →</button>
    `);
}

// PAGE 4 — THE ACCUSATIONS

function showAccusations() {
    showPage(`
        <p class="section-label">CHAPTER 03</p>
        <h2>The Accusations 😭</h2>
        <p class="subtitle">
            A list of crimes committed without any shame.
        </p>

        <div class="content">
            <div class="manual-card">
                <h3>01. Professional Ragebaiter</h3>
                <p>
                    Bina kisi reason ke irritate karna is apparently
                    one of your favourite hobbies 😭
                </p>
            </div>

            <div class="manual-card">
                <h3>02. The Manao-fying Department</h3>
                <p>
                    Then switching roles and manao-fying like you
                    weren't the reason I got annoyed.. Wah bhyi 😂
                </p>
            </div>

            <div class="manual-card">
                <h3>03. Repeat Offender</h3>
                <p>
                    Aur phir next day wahi sab dobara..
                    Tum kabhi nahi sudharne wale 🤦‍♀️
                </p>
            </div>
        </div>

        <div class="grand-finale">
            <h2>GUILTY. ⚖️</h2>
            <p>Neech kahinke 😭</p>
        </div>

        <button onclick="showAwards()">Proceed to Awards →</button>
    `);
}

// PAGE 5 — AWARDS NIGHT

function showAwards() {
    showPage(`
        <p class="section-label">CHAPTER 04</p>
        <h2>🏆 Awards Night 2026</h2>
        <p class="subtitle">
            Celebrating some very questionable achievements
        </p>

        <div class="content">

            <div class="award-card">
                <div class="award-icon">🥇</div>
                <h3>CEO of Ragebaiting</h3>
                <p>For services rendered in testing my patience</p>
            </div>

            <div class="award-card">
                <div class="award-icon">🏅</div>
                <h3>Lifetime Achievement in Being Neech</h3>
                <p>No explanation needed</p>
            </div>

            <div class="award-card">
                <div class="award-icon">🎤</div>
                <h3>Professional Comeback Artist</h3>
                <p>Always has something to say back</p>
            </div>

            <div class="award-card">
                <div class="award-icon">🤨</div>
                <h3>The Audacity Award</h3>
                <p>For having the confidence to annoy me repeatedly</p>
            </div>

            <div class="award-card">
                <div class="award-icon">💗</div>
                <h3>The Golden Heart Award</h3>
                <p>
                    For being a genuinely good human being,
                    underneath all that Neech behaviour 😂
                </p>
            </div>

        </div>

        <button onclick="showAppreciation()">Next →</button>
    `);
}

// PAGE 6 — APPRECIATION

function showAppreciation() {
    showPage(`
        <p class="section-label">CHAPTER 05</p>
        <h2>A Little Appreciation ♡</h2>

        <div class="letter">
            <p>
                Ek chiz jo me genuinely admire
                karti hun that is ur dedication towards your goals.
                I know it's not easy to spend so much time working
                towards something, following the same routine every day
            </p>

            <p>
                Phir bhi tum jis tarah se apni preparation continue
                kar rahe ho, woh actually kaafi admirable hai.
                And I hope tum khud pe thoda trust rakhogee
            </p>

            <p>
                Aur haan, doctor sahab banne ke baad zyada bhaav
                nahi khaana 😭
            </p>

            <p>
                I also admire your sense of humour, your little efforts
                and just the way you are. Annoying ho, stubborn ho,
                aur kabhi kabhi irritating bhi, but that's okay.
                Acche ho tum. 1000+ good boy points 😌🌟
            </p>

            <p>
                I hope you always remember how much your efforts
                matter. Keep going, keep growing, and don't forget
                to enjoy the little things too 💗
            </p>
        </div>

        <button onclick="showLetter()">One Last Thing →</button>
    `);
}

// PAGE 7 — BIRTHDAY LETTER

function showLetter() {
    showPage(`
        <p class="section-label">CHAPTER 06</p>
        <h2>A Letter for You 💌</h2>

        <div class="letter">
            <p>Dear Srajan,</p>

            <p>
                I hope this birthday brings you happiness, good health,
                the love of your life, new opportunities, fulfilled dreams
                and countless reasons to smile
            </p>

            <p>
                I hope you achieve everything u've been working
                towards. Don't be too hard on urself along the wayy
            </p>

            <p>
                Keep being you (Srajan needs to keep Srajaning) 😂 Kabhi kabhi sochti hoon ki kitni saari random memories ban jaati hain.. some conversations, some stupid jokes, some faltu ke arguments and some moments that seem soo ordinary at the time but end up becoming memories nd I'm glad we have those
            </p>

            <p>
                I hope you never underestimate urself or the amount of effort you put into things.. I know you have your own set of dreams, expectations and things you're working towards, and I really, really hope ki ek din tum peeche mudkar dekho and feel proud of the person you've become
            </p>

            <p>
                There's a lot more I could say, lekinnn bas itna hi.. I'm glad I know u, I'm glad we made these memories, and I hope we get to make many more
            </p>

            <p>
                Stay happy, stay healthy, keep growing and never stop being your wonderfully weird self
                You deserve a whole lot of happiness
            </p>

            <p>
                Happy Birthday againn
            </p>

            <p>    
                Lots of lovee❤️
            </p>
        </div>

        <button onclick="showCake()">There's More! 🎂</button>
    `);
}

// PAGE 8 — FINAL CAKE SURPRISE

function showCake() {
    showPage(`
        <p class="section-label">THE FINAL SURPRISE</p>
        <h1>HAPPY BIRTHDAY! 🎉</h1>

        <div class="cake">🎂</div>

        <div class="final-message">
            <h2>Make a wish! ♡</h2>
            <p>
                May this year bring you closer to everything
                you've been wishing and working for
            </p>
            <p>
                Keep smiling, keep growing and keep being
                your wonderfully annoying self 😂❤️
            </p>
        </div>

        <h2>Lots and lotss of loveee ❤️</h2>
        <p class="footer">End of the surprise. Or is it? ♡</p>
    `);
}

// START WEBSITE

showWelcome();