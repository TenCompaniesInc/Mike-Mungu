import Image from "next/image";

const links = {
  spotify: "https://open.spotify.com/artist/0dFrQZdLlx53kCCQ9ITBm4",
  ep: "https://open.spotify.com/album/4twrawLG16nxdplLiE6cBf?si=mHSlYrL1RF2ENrQSSQT8Cg",
  apple: "https://music.apple.com/us/artist/mike-mungu/1642516254",
  audiomack: "https://audiomack.com/mike-mungu",
  instagram: "https://www.instagram.com/mikemungu_/",
  x: "https://x.com/MikeMungu_",
  tiktok: "https://www.tiktok.com/@mikemungu_",
  linktree: "https://linktr.ee/mikemungu_",
};

const career = [
  {
    year: "2020 →",
    title: "THE BEGINNING",
    text: "Mike traces the beginning of his music journey to 2020, developing as a singer, songwriter and producer with R&B and soul at the centre of his expression."
  },
  {
    year: "2022",
    title: "MINE",
    text: "His first official single, “Mine,” arrived at the end of 2022, marking the beginning of his recorded catalogue."
  },
  {
    year: "2023",
    title: "FINALLY",
    text: "The Finally EP expanded the story, followed by releases including Kagina and a growing run of intimate, melodic records."
  },
  {
    year: "2024",
    title: "SHONALE",
    text: "Mike performed at ShoNaLe 2024 at Lugogo Hockey Grounds, appearing alongside a lineup that included Elijah Kitaka and Warafiki."
  },
  {
    year: "2024",
    title: "A NIGHT WITH BIEN",
    text: "He performed at A Night With Bien at Kampala Serena, taking the stage with the Akadope Band before Bien's headline set."
  },
  {
    year: "2025",
    title: "JAMESON BOND & CONNECT",
    text: "Mike joined the 2025 Jameson Hangout / Bond & Connect lineup at Ndere Cultural Centre alongside artists including Kenneth Mugabi."
  },
  {
    year: "2026",
    title: "AFRICA CONNECT / KENYA",
    text: "A cross-border performance chapter in Kenya at Africa Connect, extending Mike’s live presence beyond Uganda."
  },
  {
    year: "2026",
    title: "EAST AFRICA",
    text: "In 2026, Mike joined Afro Urban: Kigali Meets Kampala at MoTIV Bugolobi alongside Kyle Simbwa, with Mike Kayihura and Kohen Jaycee headlining."
  }
];

export default function Home() {
  return (
    <main>
      <header className="nav glass">
        <a className="wordmark" href="#top">MM<span>.</span></a>
        <nav>
          <a href="#story">Story</a>
          <a href="#career">Career</a>
          <a href="#music">Music</a>
          <a href="#live">Live</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="navCta" href={links.ep} target="_blank">PLAY THE EP </a>
      </header>

      <section id="top" className="hero">
        <Image src="/mike-hero.jpg" alt="Mike Mungu portrait" fill priority className="heroImage" sizes="100vw" />
        <div className="heroWash" />
        <div className="heroCopy reveal">
          <p className="eyebrow">KAMPALA / UGANDA · 2026</p>
          <h1>LOVE ISN’T<br/><i>ENOUGH.</i></h1>
          <p className="heroText">Two years of writing, recording and lived experience — distilled into Mike Mungu’s most intimate chapter yet.</p>
          <div className="actions">
            <a className="btn primary" href={links.ep} target="_blank">PLAY THE EP</a>
            <a className="btn ghost" href="#career">DISCOVER THE JOURNEY </a>
          </div>
        </div>
        <div className="heroBadge glass reveal"><span>NEW EP OUT </span><b>02 / 10 / 26</b></div>
      </section>

      <section className="billboardRail">
        <div className="railTrack">
          <article className="billboard glass">
            <div className="billboardImg portrait"><Image src="/mike-hero.jpg" alt="" fill sizes="360px"/></div>
            <div><small>THE SOUND</small><h3>MOODY.<br/>MELODIC.<br/><em>PERSONAL.</em></h3><p>Afro-R&B shaped by soul, vulnerability and late-night storytelling.</p></div>
          </article>
          <article className="billboard glass orange">
            <div className="bigYear">2024</div><div><small>THE STAGE</small><h3>A NIGHT<br/>WITH <em>BIEN.</em></h3><p>Kampala Serena · live performance with the Akadope Band.</p></div>
          </article>
          <article className="billboard glass">
            <div className="billboardImg liveCrop"><Image src="/mike-live.jpg" alt="" fill sizes="360px"/></div>
            <div><small>LIVE / KAMPALA</small><h3>FROM THE<br/><em>ROOM</em><br/>TO THE STAGE.</h3><p>ShoNaLe · Afro Urban · intimate rooms and major stages.</p></div>
          </article>
          <article className="billboard glass orange">
            <div className="bigYear">2026</div><div><small>EAST AFRICA</small><h3>KAMPALA<br/>MEETS<br/><em>THE REGION.</em></h3><p>Afro Urban: Kigali Meets Kampala at MoTIV with Mike Kayihura and Kohen Jaycee.</p></div>
          </article>
          <article className="billboard glass">
            <div className="bigYear">NOW</div><div><small>THE NEXT CHAPTER</small><h3>LOVE ISN’T<br/><em>ENOUGH.</em></h3><p>The new EP arrives October 2, 2026.</p></div>
          </article>
        </div>
      </section>

      <section className="photoExtras" aria-label="More Mike Mungu visuals">
        <div className="photoExtrasHead reveal"><span>MIKE MUNGU / IN FRAME</span><p>Moments from the artist’s visual world.</p></div>
        <div className="photoExtrasGrid">
          <figure className="extraPhoto glass reveal"><Image src="/mike-extra-01.jpg" alt="Mike Mungu — additional artist portrait" fill sizes="(max-width: 700px) 90vw, 45vw"/><figcaption>THE ARTIST / PORTRAIT</figcaption></figure>
          <figure className="extraPhoto glass reveal"><Image src="/mike-extra-02.jpg" alt="Mike Mungu — live performance portrait" fill sizes="(max-width: 700px) 90vw, 45vw"/><figcaption>LIVE / PERFORMANCE</figcaption></figure>
          <figure className="extraPhoto glass reveal"><Image src="/mike-live.jpg" alt="Mike Mungu performing with a microphone on stage" fill sizes="(max-width: 700px) 90vw, 45vw"/><figcaption>ON STAGE / LIVE ENERGY</figcaption></figure>
        </div>
      </section>

      <section id="story" className="section story">
        <div className="sectionTag reveal">01 / THE ARTIST</div>
        <div className="split">
          <div className="reveal"><h2>Music for the<br/><em>unspoken.</em></h2></div>
          <div className="glass panel reveal">
            <p>Mike Mungu is a Ugandan singer, songwriter and producer from Kampala whose sound sits between classic R&B sensibilities and modern Afro influences.</p>
            <p>His catalogue moves through love, longing, emotional connection and vulnerability, with smooth vocals and intimate storytelling at the centre. Spotify describes his music as “moody” and melodic; Mike has also spoken publicly about using music as emotional expression and treating the studio as a disciplined creative practice.</p>
            <p>His influences include GIVĒON, Joe, Tyrese, Craig David, RAYE and Sauti Sol — references that sit beside his own East African perspective.</p>
          </div>
        </div>
      </section>

      <section id="career" className="section career">
        <div className="sectionTag reveal">02 / THE JOURNEY</div>
        <div className="careerIntro reveal">
          <h2>Not a moment.<br/><em>A movement.</em></h2>
          <p>A growing catalogue, live rooms, bigger stages and an expanding East African footprint.</p>
        </div>
        <div className="timeline">
          {career.map((item, i) => (
            <article className="timelineCard glass reveal" key={item.year + item.title}>
              <span className="year">{item.year}</span>
              <div className="timelineDot" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="index">0{i+1}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="imageBreak">
        <Image src="/mike-live.jpg" alt="Mike Mungu performing on stage" fill sizes="100vw" />
        <div className="imageOverlay"/>
        <div className="imageLabel reveal">LIVE PERFORMANCE / 2026</div>
      </section>

      <section id="music" className="section music">
        <div className="sectionTag reveal">03 / THE MUSIC</div>
        <div className="musicHead reveal">
          <h2>LOVE ISN’T <em>ENOUGH.</em></h2>
          <p>The new EP turns two years of writing, recording and personal experience into a body of work about love, heartbreak, longing and the places where love alone cannot fix everything.</p>
        </div>
        <div className="cards">
          <a className="musicCard glass reveal" href={links.spotify} target="_blank"><small>STREAM</small><h3>SPOTIFY</h3><p>Artist catalogue + latest releases.</p><b>OPEN </b></a>
          <a className="musicCard glass reveal" href={links.apple} target="_blank"><small>STREAM</small><h3>APPLE MUSIC</h3><p>Releases, features and artist page.</p><b>OPEN </b></a>
          <a className="musicCard glass reveal" href={links.audiomack} target="_blank"><small>STREAM</small><h3>AUDIOMACK</h3><p>Catalogue and listener community.</p><b>OPEN </b></a>
          <a className="musicCard glass orangeCard reveal" href={links.ep} target="_blank"><small>OCTOBER 2</small><h3>PRE-SAVE</h3><p>LOVE ISN’T ENOUGH — the next chapter.</p><b>SAVE </b></a>
        </div>
      </section>

      <section className="numbers">
        <div className="sectionTag reveal">04 / THE SIGNAL</div>
        <div className="numberGrid">
          <div className="number reveal"><strong>8.6K</strong><span>Spotify monthly listeners*</span></div>
          <div className="number reveal"><strong>1.2K</strong><span>Spotify followers*</span></div>
          <div className="number reveal"><strong>312</strong><span>Spotify playlists*</span></div>
          <div className="number reveal"><strong>164.6K</strong><span>Spotify playlist reach*</span></div>
          <div className="number reveal"><strong>3.9K</strong><span>Shazams*</span></div>
          <div className="number reveal"><strong>158K</strong><span>Audiomack account plays*</span></div>
          <div className="number reveal"><strong>598</strong><span>Audiomack followers*</span></div>
          <div className="number reveal"><strong>1K</strong><span>X followers*</span></div>
        </div>
        <p className="dataNote reveal">*Working media-kit snapshot. Platform figures change continuously. Spotify/cross-platform figures were referenced from the September 12, 2026 public Chartmetric snapshot; other figures reflect publicly indexed platform pages available during production.</p>
      </section>

      <section id="live" className="section live">
        <div className="sectionTag reveal">05 / LIVE</div>
        <div className="liveGrid">
          <div className="livePhoto reveal"><Image src="/mike-live.jpg" alt="Mike Mungu live performance" fill sizes="(max-width: 900px) 100vw, 50vw"/></div>
          <div className="glass panel reveal">
            <small className="eyebrow">LISTENING PARTY · SEPTEMBER 26</small>
            <h2>THE FIRST<br/><em>LISTEN.</em></h2>
            <p>Before the official October 2 release, Mike brings LOVE ISN’T ENOUGH into an intimate Kampala room at SKA Naguru.</p>
            <div className="eventRow"><span>DATE</span><b>26.09.26</b></div>
            <div className="eventRow"><span>VENUE</span><b>SKA NAGURU</b></div>
            <div className="eventRow"><span>TIME</span><b>5:00 PM</b></div>
          </div>
        </div>
      </section>

      <section className="quoteSection">
        <div className="quote reveal">“This project is a reflection of where I’ve been, what I’ve experienced and how I’ve grown.”</div>
      </section>

      <section id="contact" className="section contact">
        <div className="sectionTag reveal">06 / CONNECT</div>
        <div className="contactGrid">
          <div className="reveal"><h2>For bookings,<br/><em>let’s connect.</em></h2><p>Bookings · Live performances · Media · Interviews · Features · Collaborations</p></div>
          <div className="glass contactCard reveal">
            <span className="bookingLabel">BOOKINGS & MANAGEMENT</span><a className="email" href="mailto:mikemungu.management@gmail.com?subject=Booking%20inquiry%20for%20Mike%20Mungu">mikemungu.management@gmail.com</a><a className="bookingButton" href="mailto:mikemungu.management@gmail.com?subject=Booking%20inquiry%20for%20Mike%20Mungu">ENQUIRE FOR BOOKINGS </a>
            <div className="socials">
              <a href={links.instagram} target="_blank">Instagram </a>
              <a href={links.x} target="_blank">X </a>
              <a href={links.tiktok} target="_blank">TikTok </a>
              <a href={links.linktree} target="_blank">Linktree </a>
              <a href={links.spotify} target="_blank">Spotify </a>
              <a href={links.apple} target="_blank">Apple Music </a>
              <a href={links.audiomack} target="_blank">Audiomack </a>
            </div>
          </div>
        </div>
      </section>

      <footer><div className="footerBrand"><strong>MIKE MUNGU</strong><span>LOVE ISN’T ENOUGH · 2026</span></div><div className="footerBooking"><span>BOOKINGS / MANAGEMENT</span><a href="mailto:mikemungu.management@gmail.com?subject=Booking%20inquiry%20for%20Mike%20Mungu">mikemungu.management@gmail.com ↗</a></div><a className="backTop" href="#top">BACK TO TOP ↑</a></footer>
    </main>
  );
}
