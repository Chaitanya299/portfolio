// GENERATED from design_handoff_portfolio_field/v3/Portfolio - FIELD v3.dc.html (scratchpad convert.cjs).
// Markup is the design verbatim: inline styles kept, style-hover/style-focus -> .fh*/.ff* in globals.css.
// Hand edits after generation: section ids, h1/h2 space nodes, "Four things", form honeypot, and the Work +
// Recognition aside labels as <h2 style=font:inherit> so every chapter has a heading, and the Contact
// <Booking /> block. Contact's A/B/C/D labels are a CSS counter (.ck) so they stay in order while Booking hides.
/* eslint-disable @next/next/no-img-element */
import Booking from "./Booking";

export default function Markup() {
  return (
    <div data-fe-root="1" style={{ "position": "relative", "minHeight": "100dvh", "opacity": "0", "background": "var(--bg1)", "color": "var(--t2)", "fontFamily": "var(--font-archivo),system-ui,sans-serif" }}>
      <header data-hdr="1" style={{ "position": "fixed", "top": "0", "left": "0", "right": "0", "zIndex": "30", "display": "flex", "alignItems": "center", "justifyContent": "space-between", "gap": "24px", "minWidth": "0", "padding": "max(clamp(14px,2.2vh,24px),env(safe-area-inset-top)) max(clamp(20px,5vw,88px),env(safe-area-inset-right)) clamp(14px,2.2vh,24px) max(clamp(20px,5vw,88px),env(safe-area-inset-left))", "background": "linear-gradient(var(--bg1) 30%, color-mix(in oklab, var(--bg1) 0%, transparent))", "transition": "background 0.6s cubic-bezier(0.16,1,0.3,1),box-shadow 0.6s cubic-bezier(0.16,1,0.3,1),padding 0.6s cubic-bezier(0.16,1,0.3,1)" }}>
        <a href="#" data-cursor="explore" data-cursor-label="Top" style={{ "display": "flex", "alignItems": "center", "gap": "13px" }}>
          <svg width="26" height="26" viewBox="0 0 26 26" style={{ "display": "block", "overflow": "visible" }}>
            <path d="M18.16 5.63 A 9 9 0 1 0 18.16 20.37" fill="none" stroke="var(--ink2)" strokeWidth="1.4" strokeLinecap="round"></path>
            <circle cx="18.16" cy="5.63" r="1.5" fill="var(--ink2)"></circle>
            <circle cx="18.16" cy="20.37" r="1.5" fill="var(--ink2)"></circle>
            <circle cx="13" cy="13" r="2.1" fill="var(--ac)"></circle>
          </svg>
          <span style={{ "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.22em", "textTransform": "uppercase", "color": "var(--t1)" }}>
            Chaitanya
          </span>
        </a>
        <div style={{ "display": "flex", "alignItems": "center", "gap": "clamp(18px,3vw,40px)", "minWidth": "0" }}>
          <nav aria-label="Chapters" data-ch-nav="1" style={{ "position": "relative", "display": "flex", "alignItems": "stretch", "flexWrap": "nowrap", "minWidth": "0", "maxWidth": "100%", "overflowX": "auto", "overscrollBehaviorX": "contain", "scrollbarWidth": "none", "padding": "4px", "gap": "2px", "borderRadius": "999px", "border": "1px solid var(--ln2)", "background": "linear-gradient(color-mix(in oklab, var(--bg3) 88%, transparent), color-mix(in oklab, var(--bg2) 88%, transparent))", "backdropFilter": "blur(10px)", "boxShadow": "inset 0 1px 0 var(--hl), 0 18px 36px -24px var(--shadow)" }}>
            <span data-ch-prog="1" aria-hidden="true" style={{ "position": "absolute", "left": "18px", "right": "18px", "bottom": "0", "height": "1.5px", "borderRadius": "2px", "background": "var(--ac)", "transformOrigin": "left", "transform": "scaleX(0)", "opacity": "0.55", "pointerEvents": "none" }}></span>
            <span data-ch-ind="1" aria-hidden="true" style={{ "position": "absolute", "top": "4px", "bottom": "4px", "left": "4px", "width": "0", "opacity": "0", "borderRadius": "999px", "background": "var(--bg0)", "border": "1px solid var(--ln1)", "boxShadow": "inset 0 1px 0 oklch(1 0 0 / 0.8), 0 1px 2px oklch(0.3 0.07 25 / 0.08), 0 8px 18px -8px var(--shadow)", "transition": "left 0.62s cubic-bezier(0.16,1,0.3,1),width 0.62s cubic-bezier(0.16,1,0.3,1),opacity 0.4s ease" }}></span>
            <button className="fh0" type="button" data-ch-link="build" data-cursor="explore" data-cursor-label="Go" style={{ "position": "relative", "zIndex": "1", "display": "flex", "alignItems": "center", "gap": "8px", "flex": "1 1 auto", "justifyContent": "center", "minHeight": "42px", "padding": "0 clamp(12px,1.3vw,20px)", "borderRadius": "999px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.16em", "textTransform": "uppercase", "whiteSpace": "nowrap", "color": "var(--t2)", "transition": "color 0.4s cubic-bezier(0.16,1,0.3,1)" }}>
              <span data-ch-num="1" style={{ "fontSize": "9px", "letterSpacing": "0.06em", "color": "color-mix(in oklab, var(--ac) 60%, transparent)", "transition": "color 0.4s ease" }}>
                01
              </span>
              <span>
                What I Build
              </span>
            </button>
            <button className="fh0" type="button" data-ch-link="work" data-cursor="explore" data-cursor-label="Go" style={{ "position": "relative", "zIndex": "1", "display": "flex", "alignItems": "center", "gap": "8px", "flex": "1 1 auto", "justifyContent": "center", "minHeight": "42px", "padding": "0 clamp(12px,1.3vw,20px)", "borderRadius": "999px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.16em", "textTransform": "uppercase", "whiteSpace": "nowrap", "color": "var(--t2)", "transition": "color 0.4s cubic-bezier(0.16,1,0.3,1)" }}>
              <span data-ch-num="1" style={{ "fontSize": "9px", "letterSpacing": "0.06em", "color": "color-mix(in oklab, var(--ac) 60%, transparent)", "transition": "color 0.4s ease" }}>
                02
              </span>
              <span>
                Key projects
              </span>
            </button>
            <button className="fh0" type="button" data-ch-link="roadmap" data-cursor="explore" data-cursor-label="Go" style={{ "position": "relative", "zIndex": "1", "display": "flex", "alignItems": "center", "gap": "8px", "flex": "1 1 auto", "justifyContent": "center", "minHeight": "42px", "padding": "0 clamp(12px,1.3vw,20px)", "borderRadius": "999px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.16em", "textTransform": "uppercase", "whiteSpace": "nowrap", "color": "var(--t2)", "transition": "color 0.4s cubic-bezier(0.16,1,0.3,1)" }}>
              <span data-ch-num="1" style={{ "fontSize": "9px", "letterSpacing": "0.06em", "color": "color-mix(in oklab, var(--ac) 60%, transparent)", "transition": "color 0.4s ease" }}>
                03
              </span>
              <span>
                Roadmap
              </span>
            </button>
            <button className="fh0" type="button" data-ch-link="recognition" data-cursor="explore" data-cursor-label="Go" style={{ "position": "relative", "zIndex": "1", "display": "flex", "alignItems": "center", "gap": "8px", "flex": "1 1 auto", "justifyContent": "center", "minHeight": "42px", "padding": "0 clamp(12px,1.3vw,20px)", "borderRadius": "999px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.16em", "textTransform": "uppercase", "whiteSpace": "nowrap", "color": "var(--t2)", "transition": "color 0.4s cubic-bezier(0.16,1,0.3,1)" }}>
              <span data-ch-num="1" style={{ "fontSize": "9px", "letterSpacing": "0.06em", "color": "color-mix(in oklab, var(--ac) 60%, transparent)", "transition": "color 0.4s ease" }}>
                04
              </span>
              <span>
                Recognition
              </span>
            </button>
            <button className="fh0" type="button" data-ch-link="contact" data-cursor="explore" data-cursor-label="Go" style={{ "position": "relative", "zIndex": "1", "display": "flex", "alignItems": "center", "gap": "8px", "flex": "1 1 auto", "justifyContent": "center", "minHeight": "42px", "padding": "0 clamp(12px,1.3vw,20px)", "borderRadius": "999px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.16em", "textTransform": "uppercase", "whiteSpace": "nowrap", "color": "var(--t2)", "transition": "color 0.4s cubic-bezier(0.16,1,0.3,1)" }}>
              <span data-ch-num="1" style={{ "fontSize": "9px", "letterSpacing": "0.06em", "color": "color-mix(in oklab, var(--ac) 60%, transparent)", "transition": "color 0.4s ease" }}>
                05
              </span>
              <span>
                Contact
              </span>
            </button>
          </nav>
          <a href="#contact" data-cursor="explore" data-cursor-label={"Say\nhello"} style={{ "display": "inline-flex", "alignItems": "center", "gap": "10px", "borderBottom": "1px solid var(--ac)", "paddingBottom": "4px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "var(--ac)", "whiteSpace": "nowrap" }}>
            {"Start a project "}
            <span>
              ↗
            </span>
          </a>
        </div>
        <span data-fe="progress" style={{ "position": "absolute", "left": "0", "right": "0", "bottom": "0", "height": "1px", "background": "var(--ac)", "transform": "scaleX(0)", "transformOrigin": "left" }}></span>
      </header>
      <main style={{ "position": "relative", "zIndex": "2" }}>
        <section id="home" data-sec="home" data-form="0" data-label="Start here" data-screen-label="00 Opening" style={{ "padding": "clamp(130px,22vh,230px) max(clamp(20px,5vw,88px),env(safe-area-inset-right)) 0 max(clamp(20px,5vw,88px),env(safe-area-inset-left))" }}>
          <div style={{ "maxWidth": "1600px", "margin": "0 auto" }}>
            <h1 data-rise="1" style={{ "fontSize": "clamp(2.2rem,11.6vw,12rem)", "fontWeight": "600", "letterSpacing": "-0.045em", "lineHeight": "0.86", "textTransform": "uppercase", "color": "var(--ink)" }}>
              Chaitanya{" "}
              <br />
              Parasana
            </h1>
            <div style={{ "display": "flex", "flexWrap": "wrap", "alignItems": "stretch", "gap": "clamp(28px,5vw,96px)", "marginTop": "clamp(56px,10vh,120px)" }}>
              <aside style={{ "flex": "1 1 180px", "maxWidth": "300px" }}>
                <div data-rv="0" style={{ "display": "flex", "flexDirection": "column", "alignItems": "flex-start", "gap": "12px", "lineHeight": "1.6", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                  <span style={{ "width": "26px", "height": "1px", "background": "var(--ac)" }}></span>
                  <span>
                    Full-stack and AI engineer
                  </span>
                  <a href="https://www.stafflo.ai/" target="_blank" rel="noreferrer" data-cursor="link" data-cursor-label="Open" style={{ "display": "inline-flex", "alignItems": "center", "gap": "10px", "color": "var(--ac)", "borderBottom": "1px solid color-mix(in oklab, var(--ac) 40%, transparent)", "paddingBottom": "3px", "flexWrap": "wrap", "rowGap": "6px" }}>
                    <span style={{ "whiteSpace": "nowrap" }}>
                      Co-founder,
                    </span>
                    <svg viewBox="-12 -12 1024 404" width="22" height="9" aria-hidden="true" style={{ "display": "block", "flex": "0 0 auto", "overflow": "visible" }}>
                      <g fill="none" stroke="currentColor" strokeWidth="118" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="497,54 205,54 362,326 52,326"></polyline>
                        <polyline points="484,326 642,54 800,326"></polyline>
                        <polyline points="790,54 948,326"></polyline>
                      </g>
                    </svg>
                    <span style={{ "whiteSpace": "nowrap" }}>
                      Stafflo
                    </span>
                  </a>
                  <span>
                    Hyderabad, India
                  </span>
                </div>
              </aside>
              <div style={{ "flex": "999 1 560px", "minWidth": "0", "maxWidth": "1000px" }}>
                <div style={{ "display": "flex", "flexDirection": "column", "gap": "clamp(24px,3.6vh,40px)" }}>
                  <p data-rv="2" style={{ "maxWidth": "28ch", "fontSize": "clamp(1.6rem,3.3vw,2.9rem)", "fontWeight": "500", "letterSpacing": "-0.03em", "lineHeight": "1.1", "color": "var(--ink)", "textWrap": "balance" }}>
                    AI products that keep working after the demo is over.
                  </p>
                  <div data-rv="3" style={{ "width": "min(100%,60ch)", "paddingTop": "clamp(4px,1vh,12px)" }}>
                    <p style={{ "fontSize": "clamp(1.08rem,1.3vw,1.26rem)", "lineHeight": "1.65", "color": "var(--t2)", "textWrap": "pretty" }}>
                      Assistants you can talk to, search that understands a plain question, and the quiet machinery that keeps both running in production.
                    </p>
                    <div style={{ "display": "flex", "flexWrap": "wrap", "alignItems": "center", "gap": "16px 24px", "marginTop": "clamp(28px,4.4vh,44px)" }}>
                      <a className="fh1" href="#contact" data-cursor="explore" data-cursor-label={"Say\nhello"} style={{ "display": "inline-flex", "alignItems": "center", "gap": "16px", "minHeight": "48px", "padding": "14px 24px", "background": "var(--ac)", "border": "1px solid var(--ac)", "color": "var(--bg0)", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.2em", "textTransform": "uppercase", "whiteSpace": "nowrap", "transition": "background 0.5s cubic-bezier(0.16,1,0.3,1),border-color 0.5s cubic-bezier(0.16,1,0.3,1)" }}>
                        {"Start a project "}
                        <span style={{ "width": "5px", "height": "5px", "borderRadius": "50%", "background": "var(--bg0)", "animation": "fldPulse 2.4s cubic-bezier(0.16,1,0.3,1) infinite" }}></span>
                      </a>
                      <span style={{ "display": "flex", "alignItems": "center", "gap": "9px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.18em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                        <span style={{ "position": "relative", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--ac)" }}>
                          <span style={{ "position": "absolute", "inset": "0", "borderRadius": "50%", "background": "var(--ac)", "animation": "fldRipple 2.6s cubic-bezier(0.16,1,0.3,1) infinite" }}></span>
                        </span>
                        Available this quarter
                      </span>
                    </div>
                  </div>
                </div>
                <div data-rv="0" data-ask="1" style={{ "marginTop": "clamp(88px,13vh,160px)", "maxWidth": "820px", "borderTop": "1px solid var(--ln2)", "paddingTop": "clamp(36px,6vh,64px)" }}>
                  <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "marginBottom": "clamp(28px,4.6vh,48px)", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "var(--ac)" }}>
                    <span style={{ "width": "26px", "height": "1px", "background": "var(--ac)" }}></span>
                    Ask about my work
                  </div>
                  <div data-ask-idle="1">
                    <form data-ask-form="1" style={{ "fontSize": "clamp(1.6rem,3.6vw,2.9rem)", "fontWeight": "600", "letterSpacing": "-0.035em", "lineHeight": "1.22", "color": "var(--ink)" }}>
                      <label htmlFor="ask-in" style={{ "marginRight": "0.22em" }}>
                        I’d like to know
                      </label>
                      <span style={{ "display": "inline-flex", "alignItems": "baseline", "maxWidth": "100%", "borderBottom": "2px solid var(--ac)", "paddingBottom": "2px" }}>
                        <input id="ask-in" data-ask-input="1" type="text" maxLength={200} autoComplete="off" size={16} placeholder="how Vellum works" aria-label="Finish the sentence: I'd like to know" style={{ "minWidth": "6ch", "maxWidth": "100%", "background": "transparent", "border": "none", "borderRadius": "0", "outline": "none", "padding": "0 4px", "font": "inherit", "letterSpacing": "inherit", "color": "var(--ink)" }} />
                      </span>
                    </form>
                    <div style={{ "marginTop": "clamp(36px,5.6vh,56px)", "display": "flex", "flexWrap": "wrap", "gap": "12px 14px" }}>
                      <button className="fh2" type="button" data-ask-chip="what was hard about the AI platform" data-cursor="link" data-cursor-label="Ask" style={{ "padding": "14px 22px", "minHeight": "50px", "border": "1px solid var(--ln3)", "fontSize": "clamp(1.04rem,1.15vw,1.14rem)", "lineHeight": "1.3", "letterSpacing": "-0.005em", "color": "var(--t1)", "textAlign": "left", "transition": "border-color 0.35s cubic-bezier(0.16,1,0.3,1),color 0.35s cubic-bezier(0.16,1,0.3,1)" }}>
                        …what was hard about the AI platform
                      </button>
                      <button className="fh2" type="button" data-ask-chip="if you’re taking work" data-cursor="link" data-cursor-label="Ask" style={{ "padding": "14px 22px", "minHeight": "50px", "border": "1px solid var(--ln3)", "fontSize": "clamp(1.04rem,1.15vw,1.14rem)", "lineHeight": "1.3", "letterSpacing": "-0.005em", "color": "var(--t1)", "textAlign": "left", "transition": "border-color 0.35s cubic-bezier(0.16,1,0.3,1),color 0.35s cubic-bezier(0.16,1,0.3,1)" }}>
                        …if you’re taking work
                      </button>
                      <button className="fh2" type="button" data-ask-chip="what it would cost" data-cursor="link" data-cursor-label="Ask" style={{ "padding": "14px 22px", "minHeight": "50px", "border": "1px solid var(--ln3)", "fontSize": "clamp(1.04rem,1.15vw,1.14rem)", "lineHeight": "1.3", "letterSpacing": "-0.005em", "color": "var(--t1)", "textAlign": "left", "transition": "border-color 0.35s cubic-bezier(0.16,1,0.3,1),color 0.35s cubic-bezier(0.16,1,0.3,1)" }}>
                        …what it would cost
                      </button>
                      <button className="fh2" type="button" data-ask-chip="what Stafflo does" data-cursor="link" data-cursor-label="Ask" style={{ "padding": "14px 22px", "minHeight": "50px", "border": "1px solid var(--ln3)", "fontSize": "clamp(1.04rem,1.15vw,1.14rem)", "lineHeight": "1.3", "letterSpacing": "-0.005em", "color": "var(--t1)", "textAlign": "left", "transition": "border-color 0.35s cubic-bezier(0.16,1,0.3,1),color 0.35s cubic-bezier(0.16,1,0.3,1)" }}>
                        …what Stafflo does
                      </button>
                    </div>
                    <div style={{ "marginTop": "clamp(24px,3.6vh,36px)", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.18em", "textTransform": "uppercase", "color": "var(--t4)" }}>
                      Type to finish the sentence · enter to ask
                    </div>
                  </div>
                  <div data-ask-done="1" aria-live="polite" style={{ "display": "none" }}>
                    <p style={{ "fontSize": "clamp(1.15rem,1.7vw,1.4rem)", "fontWeight": "500", "letterSpacing": "-0.02em", "lineHeight": "1.25", "color": "var(--t3)" }}>
                      {"I’d like to know "}
                      <span data-ask-echo="1" style={{ "color": "var(--ink)" }}></span>
                    </p>
                    <p data-ask-head="1" style={{ "marginTop": "clamp(24px,3.6vh,36px)", "fontSize": "clamp(2.2rem,4.2vw,3.4rem)", "fontWeight": "600", "letterSpacing": "-0.04em", "lineHeight": "1.06", "color": "var(--ac)", "textWrap": "balance" }}></p>
                    <p data-ask-body="1" style={{ "marginTop": "clamp(20px,3vh,28px)", "maxWidth": "60ch", "fontSize": "clamp(1.1rem,1.35vw,1.28rem)", "lineHeight": "1.7", "color": "var(--t1)", "textWrap": "pretty" }}></p>
                    <div data-ask-actions="1" style={{ "marginTop": "clamp(36px,5.6vh,56px)", "display": "none", "flexWrap": "wrap", "gap": "18px 32px", "alignItems": "center" }}>
                      <a className="fh3" href="#contact" data-ask-cta="1" data-cursor="explore" data-cursor-label={"Say\nhello"} style={{ "display": "none", "alignItems": "center", "gap": "12px", "minHeight": "52px", "padding": "16px 28px", "background": "var(--ac)", "color": "var(--bg0)", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.2em", "textTransform": "uppercase", "transition": "background 0.45s cubic-bezier(0.16,1,0.3,1)" }}>
                        Start a project ↗
                      </a>
                      <a href="#work" data-ask-work="1" data-cursor="explore" data-cursor-label="Go" style={{ "display": "none", "minHeight": "44px", "alignItems": "center", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.18em", "textTransform": "uppercase", "color": "var(--ac)", "borderBottom": "1px solid var(--ln4)" }}>
                        See it in Key projects ↗
                      </a>
                      <button type="button" data-ask-again="1" data-cursor="explore" data-cursor-label="Ask" style={{ "minHeight": "44px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.18em", "textTransform": "uppercase", "color": "var(--t2)", "borderBottom": "1px solid var(--ln4)" }}>
                        Ask something else
                      </button>
                    </div>
                  </div>
                  <p style={{ "marginTop": "clamp(40px,6vh,64px)", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "var(--t4)" }}>
                    Answered by an AI assistant from this site’s content.
                  </p>
                </div>
                <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(46%,190px),1fr))", "gap": "clamp(24px,3vw,48px)", "marginTop": "clamp(80px,12vh,150px)" }}>
                  <div data-rv="0" style={{ "borderTop": "1px solid var(--ln2)", "paddingTop": "18px" }}>
                    <div style={{ "fontSize": "clamp(1.8rem,3.4vw,2.8rem)", "fontWeight": "600", "letterSpacing": "-0.035em", "lineHeight": "1", "color": "var(--ac)", "fontVariantNumeric": "tabular-nums" }}>
                      500ms
                    </div>
                    <div style={{ "marginTop": "10px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.16em", "lineHeight": "1.5", "textTransform": "uppercase", "color": "var(--t3)" }}>
                      Live answer, voice or chat
                    </div>
                  </div>
                  <div data-rv="1" style={{ "borderTop": "1px solid var(--ln2)", "paddingTop": "18px" }}>
                    <div style={{ "fontSize": "clamp(1.8rem,3.4vw,2.8rem)", "fontWeight": "600", "letterSpacing": "-0.035em", "lineHeight": "1", "color": "var(--ac)", "fontVariantNumeric": "tabular-nums" }}>
                      99.9%
                    </div>
                    <div style={{ "marginTop": "10px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.16em", "lineHeight": "1.5", "textTransform": "uppercase", "color": "var(--t3)" }}>
                      Uptime I design for
                    </div>
                  </div>
                  <div data-rv="2" style={{ "borderTop": "1px solid var(--ln2)", "paddingTop": "18px" }}>
                    <div style={{ "fontSize": "clamp(1.8rem,3.4vw,2.8rem)", "fontWeight": "600", "letterSpacing": "-0.035em", "lineHeight": "1", "color": "var(--ac)", "fontVariantNumeric": "tabular-nums" }}>
                      4
                    </div>
                    <div style={{ "marginTop": "10px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.16em", "lineHeight": "1.5", "textTransform": "uppercase", "color": "var(--t3)" }}>
                      Projects shipped end to end
                    </div>
                  </div>
                  <div data-rv="3" style={{ "borderTop": "1px solid var(--ln2)", "paddingTop": "18px" }}>
                    <div style={{ "fontSize": "clamp(1.8rem,3.4vw,2.8rem)", "fontWeight": "600", "letterSpacing": "-0.035em", "lineHeight": "1", "color": "var(--ac)", "fontVariantNumeric": "tabular-nums" }}>
                      1
                    </div>
                    <div style={{ "marginTop": "10px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.16em", "lineHeight": "1.5", "textTransform": "uppercase", "color": "var(--t3)" }}>
                      Person, start to finish
                    </div>
                  </div>
                </div>
                <div data-rv="0" style={{ "position": "relative", "marginTop": "clamp(88px,13vh,160px)", "borderTop": "1px solid var(--ac)", "paddingTop": "clamp(28px,4.4vh,44px)" }}>
                  <div aria-hidden="true" style={{ "position": "absolute", "right": "0", "top": "clamp(20px,3vh,36px)", "width": "clamp(140px,22vw,300px)", "opacity": "0.09", "pointerEvents": "none" }}>
                    <svg viewBox="-12 -12 1024 404" width="300" height="118" aria-hidden="true" style={{ "display": "block", "flex": "0 0 auto", "overflow": "visible", "width": "100%", "height": "auto" }}>
                      <g fill="none" stroke="var(--ac)" strokeWidth="118" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="497,54 205,54 362,326 52,326"></polyline>
                        <polyline points="484,326 642,54 800,326"></polyline>
                        <polyline points="790,54 948,326"></polyline>
                      </g>
                    </svg>
                  </div>
                  <div style={{ "position": "relative", "display": "flex", "alignItems": "center", "gap": "12px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "var(--ac)" }}>
                    <span style={{ "position": "relative", "width": "6px", "height": "6px", "borderRadius": "50%", "background": "var(--ac)" }}>
                      <span style={{ "position": "absolute", "inset": "0", "borderRadius": "50%", "background": "var(--ac)", "animation": "fldRipple 2.6s cubic-bezier(0.16,1,0.3,1) infinite" }}></span>
                    </span>
                    Now
                  </div>
                  <p style={{ "position": "relative", "marginTop": "clamp(18px,2.8vh,28px)", "maxWidth": "22ch", "fontSize": "clamp(1.9rem,3.6vw,3.1rem)", "fontWeight": "600", "letterSpacing": "-0.035em", "lineHeight": "1.06", "color": "var(--ink)", "textWrap": "balance" }}>
                    {"Co-founder of "}
                    <a href="https://www.stafflo.ai/" target="_blank" rel="noreferrer" data-cursor="link" data-cursor-label="Open" style={{ "display": "inline-flex", "alignItems": "center", "gap": "0.22em", "color": "var(--ac)", "whiteSpace": "nowrap", "borderBottom": "2px solid color-mix(in oklab, var(--ac) 35%, transparent)" }}>
                      <svg viewBox="-12 -12 1024 404" width="64" height="25" aria-hidden="true" style={{ "display": "block", "flex": "0 0 auto", "overflow": "visible", "width": "1.05em", "height": "auto" }}>
                        <g fill="none" stroke="currentColor" strokeWidth="118" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="497,54 205,54 362,326 52,326"></polyline>
                          <polyline points="484,326 642,54 800,326"></polyline>
                          <polyline points="790,54 948,326"></polyline>
                        </g>
                      </svg>
                      Stafflo
                    </a>
                    .
                  </p>
                  <p style={{ "position": "relative", "marginTop": "clamp(14px,2.2vh,22px)", "maxWidth": "54ch", "fontSize": "clamp(1.06rem,1.25vw,1.2rem)", "lineHeight": "1.62", "color": "var(--t2)", "textWrap": "pretty" }}>
                    It starts with an audit: two weeks inside one process, mapping how the work really runs and ranking what is worth automating, what it would save, and what to leave alone. Only then do we build, on machines the client owns. Two of the demos are mine.
                  </p>
                  <div style={{ "position": "relative", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%,280px),1fr))", "gap": "clamp(28px,3.6vw,48px)", "marginTop": "clamp(30px,4.6vh,48px)" }}>
                    <a href="https://www.stafflo.ai/demos/bench-desk" target="_blank" rel="noreferrer" data-cursor="project" data-cursor-label={"Open\ndemo"} data-now-tile="1" style={{ "display": "flex", "flexDirection": "column", "minWidth": "0" }}>
                      <span style={{ "position": "relative", "display": "block", "aspectRatio": "16/10", "overflow": "hidden", "background": "var(--bg2)", "border": "1px solid var(--ln2)" }}>
                        {" "}
                        <img data-now-img="1" src="https://www.stafflo.ai/demos/bench-desk/1440-light-01.png" alt="Bench Desk: the bench of consultants with skills, days on the bench, rate floor and bench cost a day." loading="eager" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "objectFit": "cover", "objectPosition": "top left", "filter": "saturate(0.55) contrast(1.02)", "transformOrigin": "top left", "transition": "transform 0.9s cubic-bezier(0.16,1,0.3,1),filter 0.6s ease" }} />
                        {" "}
                        <span style={{ "position": "absolute", "inset": "0", "background": "linear-gradient(transparent 55%, color-mix(in oklab, var(--bg1) 70%, transparent))", "pointerEvents": "none" }}></span>
                        {" "}
                        <span style={{ "position": "absolute", "left": "12px", "bottom": "10px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "9.5px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "var(--t2)" }}>
                          Live demo
                        </span>
                        {" "}
                      </span>
                      <span style={{ "display": "flex", "alignItems": "baseline", "justifyContent": "space-between", "gap": "12px", "marginTop": "16px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                        <span>
                          IT staffing
                        </span>
                        <span style={{ "color": "var(--ac)" }}>
                          ↗
                        </span>
                      </span>
                      <span data-now-title="1" style={{ "marginTop": "8px", "fontSize": "clamp(1.2rem,1.7vw,1.5rem)", "fontWeight": "500", "letterSpacing": "-0.018em", "lineHeight": "1.2", "color": "var(--ink)", "transition": "transform 0.6s cubic-bezier(0.16,1,0.3,1)" }}>
                        Bench Desk
                      </span>
                      <span style={{ "marginTop": "8px", "maxWidth": "46ch", "fontSize": "clamp(1rem,1.05vw,1.06rem)", "lineHeight": "1.55", "color": "var(--t2)", "textWrap": "pretty" }}>
                        Builds the day’s hotlists, matches vendor requirements to your bench, and sorts the replies.
                      </span>
                    </a>
                    <a href="https://www.stafflo.ai/demos/module-kit" target="_blank" rel="noreferrer" data-cursor="project" data-cursor-label={"Open\ndemo"} data-now-tile="1" style={{ "display": "flex", "flexDirection": "column", "minWidth": "0" }}>
                      <span style={{ "position": "relative", "display": "block", "aspectRatio": "16/10", "overflow": "hidden", "background": "var(--bg2)", "border": "1px solid var(--ln2)" }}>
                        {" "}
                        <img data-now-img="1" src="https://www.stafflo.ai/demos/module-kit/1440-light-01.png" alt="Private AI Module Kit: a white-labelled client portal listing statements received, ready to be read." loading="eager" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "objectFit": "cover", "objectPosition": "top left", "filter": "saturate(0.55) contrast(1.02)", "transformOrigin": "top left", "transition": "transform 0.9s cubic-bezier(0.16,1,0.3,1),filter 0.6s ease" }} />
                        {" "}
                        <span style={{ "position": "absolute", "inset": "0", "background": "linear-gradient(transparent 55%, color-mix(in oklab, var(--bg1) 70%, transparent))", "pointerEvents": "none" }}></span>
                        {" "}
                        <span style={{ "position": "absolute", "left": "12px", "bottom": "10px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "9.5px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "var(--t2)" }}>
                          Live demo
                        </span>
                        {" "}
                      </span>
                      <span style={{ "display": "flex", "alignItems": "baseline", "justifyContent": "space-between", "gap": "12px", "marginTop": "16px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                        <span>
                          Software agencies
                        </span>
                        <span style={{ "color": "var(--ac)" }}>
                          ↗
                        </span>
                      </span>
                      <span data-now-title="1" style={{ "marginTop": "8px", "fontSize": "clamp(1.2rem,1.7vw,1.5rem)", "fontWeight": "500", "letterSpacing": "-0.018em", "lineHeight": "1.2", "color": "var(--ink)", "transition": "transform 0.6s cubic-bezier(0.16,1,0.3,1)" }}>
                        Private AI Module Kit
                      </span>
                      <span style={{ "marginTop": "8px", "maxWidth": "46ch", "fontSize": "clamp(1rem,1.05vw,1.06rem)", "lineHeight": "1.55", "color": "var(--t2)", "textWrap": "pretty" }}>
                        AI modules agencies ship inside their clients’ apps, under their own brand.
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about" data-sec="about" data-form="0" data-label="Who I am" data-screen-label="00 About" style={{ "padding": "clamp(120px,19vh,230px) max(clamp(20px,5vw,88px),env(safe-area-inset-right)) 0 max(clamp(20px,5vw,88px),env(safe-area-inset-left))" }}>
          <div style={{ "maxWidth": "1600px", "margin": "0 auto", "display": "flex", "flexWrap": "wrap", "alignItems": "stretch", "gap": "clamp(28px,5vw,96px)" }}>
            <aside style={{ "flex": "1 1 180px", "maxWidth": "300px" }}>
              <div data-rv="0" style={{ "position": "sticky", "top": "clamp(96px,14vh,140px)", "display": "flex", "flexDirection": "column", "alignItems": "flex-start", "gap": "14px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                <span style={{ "fontFamily": "var(--font-archivo),system-ui,sans-serif", "fontSize": "clamp(4.6rem,8.6vw,8.8rem)", "fontWeight": "600", "letterSpacing": "-0.05em", "lineHeight": "0.8", "color": "transparent", "WebkitTextStroke": "1px var(--ac)", "marginLeft": "-0.04em" }}>
                  00
                </span>
                <span style={{ "width": "32px", "height": "1px", "background": "var(--ac)" }}></span>
                <span>
                  About
                </span>
              </div>
            </aside>
            <div style={{ "flex": "999 1 560px", "minWidth": "0", "maxWidth": "1000px" }}>
              <h2 data-rise="1" style={{ "maxWidth": "24ch", "fontSize": "clamp(2.1rem,4.4vw,4.2rem)", "fontWeight": "600", "letterSpacing": "-0.035em", "lineHeight": "1.02", "color": "var(--ink)", "textWrap": "balance" }}>
                {"Most AI demos fall apart the first time a real person uses them. I build the "}
                <span style={{ "color": "var(--ac)" }}>
                  version that holds
                </span>
                .
              </h2>
              <div style={{ "display": "flex", "justifyContent": "flex-start", "marginTop": "clamp(40px,6.4vh,72px)" }}>
                <div data-rv="0" style={{ "width": "min(100%,60ch)", "display": "flex", "flexDirection": "column", "gap": "22px" }}>
                  <p style={{ "fontSize": "clamp(1.08rem,1.3vw,1.26rem)", "lineHeight": "1.68", "color": "var(--t2)", "textWrap": "pretty" }}>
                    A demo only has to work once, in front of a friendly audience. Real software has to work at two in the morning, for someone in a hurry, on a bad connection. That second thing is the job I take.
                  </p>
                  <p style={{ "fontSize": "clamp(1.08rem,1.3vw,1.26rem)", "lineHeight": "1.68", "color": "var(--t1)", "textWrap": "pretty" }}>
                    {"Over the last year I've shipped "}
                    <span style={{ "color": "var(--ac)" }}>
                      4 projects
                    </span>
                    {" end to end, from the first call to the thing running in production."}
                  </p>
                </div>
              </div>
              <div style={{ "marginTop": "clamp(80px,12vh,150px)" }}>
                <div data-rv="0" style={{ "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "var(--ac)", "marginBottom": "clamp(18px,3vh,28px)" }}>
                  What I do
                </div>
                <div data-rv="0" style={{ "display": "flex", "flexWrap": "wrap", "alignItems": "baseline", "gap": "12px clamp(24px,4vw,72px)", "borderTop": "1px solid var(--ln2)", "padding": "clamp(38px,6.2vh,66px) 0" }}>
                  <span style={{ "flex": "0 0 48px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.18em", "color": "var(--ac)" }}>
                    01
                  </span>
                  <h3 style={{ "flex": "1 1 300px", "maxWidth": "22ch", "fontSize": "clamp(1.3rem,2.2vw,1.9rem)", "fontWeight": "500", "letterSpacing": "-0.02em", "lineHeight": "1.18", "color": "var(--ink)" }}>
                    Automating the work that eats your day
                  </h3>
                  <p style={{ "width": "min(100%,60ch)", "fontSize": "clamp(1.06rem,1.2vw,1.2rem)", "lineHeight": "1.62", "color": "var(--t2)", "textWrap": "pretty" }}>
                    The follow-ups, the data entry, the back-and-forth. I hand the repetitive work to AI that runs it for you, so the hours go back into the business.
                  </p>
                </div>
                <div data-rv="0" style={{ "display": "flex", "flexWrap": "wrap", "alignItems": "baseline", "gap": "12px clamp(24px,4vw,72px)", "borderTop": "1px solid var(--ln2)", "padding": "clamp(38px,6.2vh,66px) 0" }}>
                  <span style={{ "flex": "0 0 48px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.18em", "color": "var(--ac)" }}>
                    02
                  </span>
                  <h3 style={{ "flex": "1 1 300px", "maxWidth": "22ch", "fontSize": "clamp(1.3rem,2.2vw,1.9rem)", "fontWeight": "500", "letterSpacing": "-0.02em", "lineHeight": "1.18", "color": "var(--ink)" }}>
                    AI that answers the moment someone asks
                  </h3>
                  <p style={{ "width": "min(100%,60ch)", "fontSize": "clamp(1.06rem,1.2vw,1.2rem)", "lineHeight": "1.62", "color": "var(--t2)", "textWrap": "pretty" }}>
                    Chatbots, voice assistants and agents that handle questions, booking and support around the clock, closer to talking to a person than filling out a form.
                  </p>
                </div>
                <div data-rv="0" style={{ "display": "flex", "flexWrap": "wrap", "alignItems": "baseline", "gap": "12px clamp(24px,4vw,72px)", "borderTop": "1px solid var(--ln2)", "borderBottom": "1px solid var(--ln2)", "padding": "clamp(38px,6.2vh,66px) 0" }}>
                  <span style={{ "flex": "0 0 48px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.18em", "color": "var(--ac)" }}>
                    03
                  </span>
                  <h3 style={{ "flex": "1 1 300px", "maxWidth": "22ch", "fontSize": "clamp(1.3rem,2.2vw,1.9rem)", "fontWeight": "500", "letterSpacing": "-0.02em", "lineHeight": "1.18", "color": "var(--ink)" }}>
                    Shipping it, then keeping it up
                  </h3>
                  <p style={{ "width": "min(100%,60ch)", "fontSize": "clamp(1.06rem,1.2vw,1.2rem)", "lineHeight": "1.62", "color": "var(--t2)", "textWrap": "pretty" }}>
                    I put it online, watch it, and fix the small things before anyone has to complain. Issues surface in monitoring, not in your inbox.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="build" data-sec="build" data-form="1" data-label="For you" data-screen-label="01 What I Can Build" style={{ "padding": "clamp(120px,19vh,230px) max(clamp(20px,5vw,88px),env(safe-area-inset-right)) 0 max(clamp(20px,5vw,88px),env(safe-area-inset-left))" }}>
          <div style={{ "maxWidth": "1600px", "margin": "0 auto", "display": "flex", "flexWrap": "wrap", "alignItems": "stretch", "gap": "clamp(28px,5vw,96px)" }}>
            <aside style={{ "flex": "1 1 180px", "maxWidth": "300px" }}>
              <div data-rv="0" style={{ "position": "sticky", "top": "clamp(96px,14vh,140px)", "display": "flex", "flexDirection": "column", "alignItems": "flex-start", "gap": "14px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                <span style={{ "fontFamily": "var(--font-archivo),system-ui,sans-serif", "fontSize": "clamp(4.6rem,8.6vw,8.8rem)", "fontWeight": "600", "letterSpacing": "-0.05em", "lineHeight": "0.8", "color": "transparent", "WebkitTextStroke": "1px var(--ac)", "marginLeft": "-0.04em" }}>
                  01
                </span>
                <span style={{ "width": "32px", "height": "1px", "background": "var(--ac)" }}></span>
                <span>
                  What I can build
                </span>
              </div>
            </aside>
            <div style={{ "flex": "999 1 560px", "minWidth": "0", "maxWidth": "1000px" }}>
              <h2 data-rise="1" style={{ "maxWidth": "24ch", "fontSize": "clamp(2.1rem,4.4vw,4.2rem)", "fontWeight": "600", "letterSpacing": "-0.035em", "lineHeight": "1.02", "color": "var(--ink)", "textWrap": "balance" }}>
                {"Four things I get asked for, in "}
                <span style={{ "color": "var(--ac)" }}>
                  plain words
                </span>
                .
              </h2>
              <div style={{ "display": "flex", "justifyContent": "flex-start", "marginTop": "clamp(40px,6.4vh,72px)" }}>
                <p data-rv="0" style={{ "width": "min(100%,60ch)", "fontSize": "clamp(1.08rem,1.3vw,1.26rem)", "lineHeight": "1.68", "color": "var(--t2)", "textWrap": "pretty" }}>
                  {"Pick the one that sounds like what you need, and let's talk about it."}
                </p>
              </div>
              <div style={{ "marginTop": "clamp(64px,10vh,120px)" }}>
                <div data-rv="0" style={{ "display": "flex", "flexWrap": "wrap", "alignItems": "baseline", "gap": "12px clamp(24px,4vw,72px)", "borderTop": "1px solid var(--ln2)", "padding": "clamp(38px,6.2vh,66px) 0" }}>
                  <span style={{ "flex": "0 0 48px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "11px", "letterSpacing": "0.1em", "color": "var(--ac)" }}>
                    01
                  </span>
                  <h3 style={{ "flex": "1 1 300px", "maxWidth": "22ch", "fontSize": "clamp(1.3rem,2.2vw,1.9rem)", "fontWeight": "500", "letterSpacing": "-0.02em", "lineHeight": "1.18", "color": "var(--ink)" }}>
                    Agents you can talk to
                  </h3>
                  <div style={{ "width": "min(100%,60ch)" }}>
                    <p style={{ "fontSize": "clamp(1.06rem,1.2vw,1.2rem)", "lineHeight": "1.62", "color": "var(--t2)", "textWrap": "pretty" }}>
                      Voice and chat assistants that answer in real time, hold context, and hand off to a person when they should.
                    </p>
                    <div style={{ "marginTop": "16px", "display": "inline-flex", "alignItems": "center", "gap": "8px", "padding": "6px 11px", "background": "var(--bg0)", "border": "1px solid color-mix(in oklab, var(--ac) 35%, var(--ln2))", "boxShadow": "0 6px 14px -10px var(--shadow)", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "var(--ac)" }}>
                      <span style={{ "width": "5px", "height": "5px", "borderRadius": "50%", "background": "var(--ac)" }}></span>
                      3–6 weeks
                    </div>
                  </div>
                </div>
                <div data-rv="0" style={{ "display": "flex", "flexWrap": "wrap", "alignItems": "baseline", "gap": "12px clamp(24px,4vw,72px)", "borderTop": "1px solid var(--ln2)", "padding": "clamp(38px,6.2vh,66px) 0" }}>
                  <span style={{ "flex": "0 0 48px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "11px", "letterSpacing": "0.1em", "color": "var(--ac)" }}>
                    02
                  </span>
                  <h3 style={{ "flex": "1 1 300px", "maxWidth": "22ch", "fontSize": "clamp(1.3rem,2.2vw,1.9rem)", "fontWeight": "500", "letterSpacing": "-0.02em", "lineHeight": "1.18", "color": "var(--ink)" }}>
                    An app for Mac or your phone
                  </h3>
                  <div style={{ "width": "min(100%,60ch)" }}>
                    <p style={{ "fontSize": "clamp(1.06rem,1.2vw,1.2rem)", "lineHeight": "1.62", "color": "var(--t2)", "textWrap": "pretty" }}>
                      Native Mac utilities and mobile apps that feel at home on the platform and respect your data.
                    </p>
                    <div style={{ "marginTop": "16px", "display": "inline-flex", "alignItems": "center", "gap": "8px", "padding": "6px 11px", "background": "var(--bg0)", "border": "1px solid color-mix(in oklab, var(--ac) 35%, var(--ln2))", "boxShadow": "0 6px 14px -10px var(--shadow)", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "var(--ac)" }}>
                      <span style={{ "width": "5px", "height": "5px", "borderRadius": "50%", "background": "var(--ac)" }}></span>
                      4–8 weeks
                    </div>
                  </div>
                </div>
                <div data-rv="0" style={{ "display": "flex", "flexWrap": "wrap", "alignItems": "baseline", "gap": "12px clamp(24px,4vw,72px)", "borderTop": "1px solid var(--ln2)", "padding": "clamp(38px,6.2vh,66px) 0" }}>
                  <span style={{ "flex": "0 0 48px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "11px", "letterSpacing": "0.1em", "color": "var(--ac)" }}>
                    03
                  </span>
                  <h3 style={{ "flex": "1 1 300px", "maxWidth": "22ch", "fontSize": "clamp(1.3rem,2.2vw,1.9rem)", "fontWeight": "500", "letterSpacing": "-0.02em", "lineHeight": "1.18", "color": "var(--ink)" }}>
                    A tool for your own team
                  </h3>
                  <div style={{ "width": "min(100%,60ch)" }}>
                    <p style={{ "fontSize": "clamp(1.06rem,1.2vw,1.2rem)", "lineHeight": "1.62", "color": "var(--t2)", "textWrap": "pretty" }}>
                      The internal dashboard or automation that replaces the spreadsheet everyone quietly hates.
                    </p>
                    <div style={{ "marginTop": "16px", "display": "inline-flex", "alignItems": "center", "gap": "8px", "padding": "6px 11px", "background": "var(--bg0)", "border": "1px solid color-mix(in oklab, var(--ac) 35%, var(--ln2))", "boxShadow": "0 6px 14px -10px var(--shadow)", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "var(--ac)" }}>
                      <span style={{ "width": "5px", "height": "5px", "borderRadius": "50%", "background": "var(--ac)" }}></span>
                      2–5 weeks
                    </div>
                  </div>
                </div>
                <div data-rv="0" style={{ "display": "flex", "flexWrap": "wrap", "alignItems": "baseline", "gap": "12px clamp(24px,4vw,72px)", "borderTop": "1px solid var(--ln2)", "borderBottom": "1px solid var(--ln2)", "padding": "clamp(38px,6.2vh,66px) 0" }}>
                  <span style={{ "flex": "0 0 48px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "11px", "letterSpacing": "0.1em", "color": "var(--ac)" }}>
                    04
                  </span>
                  <h3 style={{ "flex": "1 1 300px", "maxWidth": "22ch", "fontSize": "clamp(1.3rem,2.2vw,1.9rem)", "fontWeight": "500", "letterSpacing": "-0.02em", "lineHeight": "1.18", "color": "var(--ink)" }}>
                    Getting what you have live
                  </h3>
                  <div style={{ "width": "min(100%,60ch)" }}>
                    <p style={{ "fontSize": "clamp(1.06rem,1.2vw,1.2rem)", "lineHeight": "1.62", "color": "var(--t2)", "textWrap": "pretty" }}>
                      Containers, pipelines and monitoring so the thing you already built goes out and stays up.
                    </p>
                    <div style={{ "marginTop": "16px", "display": "inline-flex", "alignItems": "center", "gap": "8px", "padding": "6px 11px", "background": "var(--bg0)", "border": "1px solid color-mix(in oklab, var(--ac) 35%, var(--ln2))", "boxShadow": "0 6px 14px -10px var(--shadow)", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "var(--ac)" }}>
                      <span style={{ "width": "5px", "height": "5px", "borderRadius": "50%", "background": "var(--ac)" }}></span>
                      1–3 weeks
                    </div>
                  </div>
                </div>
                <div data-rv="0" style={{ "display": "flex", "alignItems": "center", "gap": "12px", "marginTop": "20px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                  <span style={{ "width": "22px", "height": "1px", "background": "var(--ac)" }}></span>
                  Timelines assume one person working properly
                </div>
              </div>
              <div style={{ "marginTop": "clamp(88px,13vh,160px)", "display": "flex", "flexDirection": "column", "gap": "clamp(72px,11vh,128px)" }}>
                <div data-rv="0" style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%,240px),1fr))", "gap": "clamp(12px,1.4vw,20px)" }}>
                  <div style={{ "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "gap": "clamp(40px,7vh,72px)", "minHeight": "clamp(220px,30vh,320px)", "padding": "clamp(22px,3vw,44px)", "border": "1px solid var(--ln2)", "background": "var(--bg0)", "boxShadow": "var(--sh1)" }}>
                    <span style={{ "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "var(--ac)" }}>
                      How it starts
                    </span>
                    <p style={{ "fontSize": "clamp(1.1rem,1.5vw,1.4rem)", "lineHeight": "1.45", "letterSpacing": "-0.012em", "color": "var(--ink)", "textWrap": "pretty" }}>
                      A short call, then a written plan with a fixed price and a date. If it is a fit we start, if not I will point you somewhere better.
                    </p>
                  </div>
                  <a className="fh1" href="#contact" data-cursor="explore" data-cursor-label={"Say\nhello"} style={{ "display": "flex", "flexDirection": "column", "justifyContent": "space-between", "gap": "clamp(40px,7vh,72px)", "minHeight": "clamp(220px,30vh,320px)", "padding": "clamp(22px,3vw,44px)", "border": "1px solid var(--ac)", "background": "var(--ac)", "color": "var(--bg0)", "boxShadow": "0 30px 60px -30px color-mix(in oklab, var(--ac) 70%, transparent), inset 0 1px 0 color-mix(in oklab, var(--bg0) 18%, transparent)", "transition": "background 0.5s cubic-bezier(0.16,1,0.3,1),border-color 0.5s cubic-bezier(0.16,1,0.3,1)" }}>
                    <span style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "center", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "color-mix(in oklab, var(--bg0) 78%, transparent)" }}>
                      <span>
                        Next step
                      </span>
                      <span style={{ "fontSize": "18px", "color": "var(--bg0)" }}>
                        ↗
                      </span>
                    </span>
                    <span style={{ "display": "block" }}>
                      {" "}
                      <span style={{ "display": "block", "fontSize": "clamp(1.8rem,3vw,2.6rem)", "fontWeight": "600", "letterSpacing": "-0.035em", "lineHeight": "1.02", "color": "var(--bg0)" }}>
                        Start a project
                      </span>
                      {" "}
                      <span style={{ "display": "block", "marginTop": "12px", "fontSize": "clamp(1.04rem,1.15vw,1.14rem)", "lineHeight": "1.5", "color": "color-mix(in oklab, var(--bg0) 82%, transparent)" }}>
                        Same-day reply. Available this quarter.
                      </span>
                      {" "}
                    </span>
                  </a>
                </div>
                <div data-rv="0" style={{ "display": "flex", "flexWrap": "wrap", "gap": "12px clamp(24px,4vw,64px)" }}>
                  <span style={{ "flex": "0 0 160px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "var(--ac)", "paddingTop": "6px" }}>
                    What you keep
                  </span>
                  <p style={{ "width": "min(100%,60ch)", "fontSize": "clamp(1.1rem,1.5vw,1.4rem)", "lineHeight": "1.45", "letterSpacing": "-0.012em", "color": "var(--ink)", "textWrap": "pretty" }}>
                    The code, the accounts, the documentation. Everything is handed over in your name, nothing is locked to me.
                  </p>
                </div>
                <div data-rv="0" style={{ "display": "flex", "flexWrap": "wrap", "gap": "12px clamp(24px,4vw,64px)" }}>
                  <span style={{ "flex": "0 0 160px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "var(--ac)", "paddingTop": "6px" }}>
                    How I price it
                  </span>
                  <p style={{ "width": "min(100%,60ch)", "fontSize": "clamp(1.1rem,1.5vw,1.4rem)", "lineHeight": "1.45", "letterSpacing": "-0.012em", "color": "var(--ink)", "textWrap": "pretty" }}>
                    One fixed price for the scope we agree on, not an hourly meter. You know the number before anything begins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="work" data-sec="work" data-form="2" data-label="What I built" data-screen-label="02 Key Projects" style={{ "padding": "clamp(120px,19vh,230px) max(clamp(20px,5vw,88px),env(safe-area-inset-right)) 0 max(clamp(20px,5vw,88px),env(safe-area-inset-left))" }}>
          <div style={{ "maxWidth": "1600px", "margin": "0 auto", "display": "flex", "flexWrap": "wrap", "alignItems": "stretch", "gap": "clamp(28px,5vw,96px)" }}>
            <aside style={{ "flex": "1 1 180px", "maxWidth": "300px" }}>
              <div data-rv="0" style={{ "position": "sticky", "top": "clamp(96px,14vh,140px)", "display": "flex", "flexDirection": "column", "alignItems": "flex-start", "gap": "14px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                <span style={{ "fontFamily": "var(--font-archivo),system-ui,sans-serif", "fontSize": "clamp(4.6rem,8.6vw,8.8rem)", "fontWeight": "600", "letterSpacing": "-0.05em", "lineHeight": "0.8", "color": "transparent", "WebkitTextStroke": "1px var(--ac)", "marginLeft": "-0.04em" }}>
                  02
                </span>
                <span style={{ "width": "32px", "height": "1px", "background": "var(--ac)" }}></span>
                <h2 style={{ "font": "inherit" }}>
                  Key projects
                </h2>
              </div>
            </aside>
            <div style={{ "flex": "999 1 560px", "minWidth": "0", "maxWidth": "1000px" }}>
              <article data-fe="work-row" data-pv-row="1" data-pv-label="AI deployment platform" data-pv-img="/work/ai-platform.png" data-rv="0" style={{ "borderTop": "1px solid var(--ln2)" }}>
                <button className="fh4" data-fe="work-toggle" aria-expanded="false" data-cursor="project" data-cursor-label={"Read\nmore"} style={{ "display": "grid", "gridTemplateColumns": "clamp(38px,4vw,64px) 1fr auto", "gap": "clamp(14px,2.4vw,32px)", "alignItems": "start", "width": "100%", "padding": "clamp(32px,5.4vh,58px) 0", "textAlign": "left" }}>
                  <span style={{ "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "color": "var(--ac)", "letterSpacing": "0.18em", "paddingTop": "12px" }}>
                    01
                  </span>
                  <span style={{ "minWidth": "0" }}>
                    {" "}
                    <span data-pv-title="1" style={{ "display": "block", "fontSize": "clamp(1.55rem,4.1vw,3.3rem)", "fontWeight": "600", "letterSpacing": "-0.035em", "lineHeight": "1.02", "color": "var(--t1)", "transition": "transform 0.6s cubic-bezier(0.16,1,0.3,1),color 0.4s ease" }}>
                      AI Deployment Platform
                    </span>
                    {" "}
                    <span style={{ "display": "block", "marginTop": "12px", "maxWidth": "64ch", "fontSize": "clamp(1.04rem,1.15vw,1.14rem)", "lineHeight": "1.55", "color": "var(--t2)", "textWrap": "pretty" }}>
                      A dashboard that puts an AI service online in one click, and writes down every change it makes.
                    </span>
                    {" "}
                    <span style={{ "display": "flex", "flexWrap": "wrap", "gap": "8px", "marginTop": "16px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                      <span>
                        Kubernetes
                      </span>
                      <span style={{ "color": "var(--ln4)" }}>
                        ·
                      </span>
                      <span>
                        ArgoCD
                      </span>
                      <span style={{ "color": "var(--ln4)" }}>
                        ·
                      </span>
                      <span>
                        FastAPI
                      </span>
                      <span style={{ "color": "var(--ln4)" }}>
                        ·
                      </span>
                      <span>
                        Next.js
                      </span>
                      <span style={{ "color": "var(--ln4)" }}>
                        ·
                      </span>
                      <span>
                        Helm
                      </span>
                      <span style={{ "color": "var(--ln4)" }}>
                        ·
                      </span>
                      <span>
                        Prometheus
                      </span>
                    </span>
                    {" "}
                  </span>
                  <span data-pv-plus="1" style={{ "alignSelf": "center", "display": "flex", "alignItems": "center", "justifyContent": "center", "width": "40px", "height": "40px", "border": "1px solid var(--ln2)", "borderRadius": "50%", "transition": "border-color 0.4s ease,transform 0.6s cubic-bezier(0.16,1,0.3,1)" }}>
                    <span style={{ "position": "relative", "display": "block", "width": "11px", "height": "11px" }}>
                      <span style={{ "position": "absolute", "top": "5px", "left": "0", "width": "11px", "height": "1px", "background": "var(--t1)" }}></span>
                      <span data-fe="plus-v" style={{ "position": "absolute", "top": "0", "left": "5px", "width": "1px", "height": "11px", "background": "var(--t1)", "transition": "transform 0.5s cubic-bezier(0.16,1,0.3,1)" }}></span>
                    </span>
                  </span>
                </button>
                <div data-fe="work-panel" style={{ "overflow": "hidden", "height": "0", "transition": "height 0.62s cubic-bezier(0.16,1,0.3,1)" }}>
                  <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%,240px),1fr))", "gap": "clamp(20px,2.6vw,44px)", "borderTop": "1px solid var(--ln1)", "padding": "clamp(20px,3vh,32px) 0 clamp(30px,4vh,50px)" }}>
                    <div>
                      <span style={{ "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "var(--ac)" }}>
                        How it works
                      </span>
                      <p style={{ "marginTop": "10px", "fontSize": "clamp(1.02rem,1.1vw,1.14rem)", "lineHeight": "1.5", "color": "var(--t2)", "textWrap": "pretty" }}>
                        Every change is written to a file first. A background service then makes the servers match that file. Nothing happens that is not written down, so what is running always matches the plan.
                      </p>
                    </div>
                    <div>
                      <span style={{ "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "var(--ac)" }}>
                        Why it matters
                      </span>
                      <p style={{ "marginTop": "10px", "fontSize": "clamp(1.02rem,1.1vw,1.14rem)", "lineHeight": "1.5", "color": "var(--t2)", "textWrap": "pretty" }}>
                        The whole thing starts on one laptop with a single command. No cloud account, no monthly bill just to try it out.
                      </p>
                    </div>
                    <div>
                      <span style={{ "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "var(--ac)" }}>
                        The tricky part
                      </span>
                      <p style={{ "marginTop": "10px", "fontSize": "clamp(1.02rem,1.1vw,1.14rem)", "lineHeight": "1.5", "color": "var(--t2)", "textWrap": "pretty" }}>
                        The built in assistant reads server logs, and a log can say anything. So it is allowed to suggest but never to act, and a person clicks the final button. A booby trapped log line cannot change your system.
                      </p>
                    </div>
                    <div style={{ "gridColumn": "1 / -1", "display": "flex", "flexWrap": "wrap", "gap": "20px", "alignItems": "center" }}>
                      <a className="fh5" href="https://github.com/Chaitanya299/k8s-gitops-lab" target="_blank" rel="noreferrer" data-cursor="link" data-cursor-label={"Open\ncode"} style={{ "display": "inline-flex", "alignItems": "center", "gap": "10px", "borderBottom": "1px solid var(--ln4)", "paddingBottom": "4px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.18em", "textTransform": "uppercase", "color": "var(--ac)" }}>
                        {"See the code "}
                        <span>
                          ↗
                        </span>
                      </a>
                      <div style={{ "flex": "1 1 100%", "minWidth": "0", "maxWidth": "760px", "padding": "clamp(8px,1vw,14px)", "border": "1px solid var(--ln2)", "background": "var(--bg2)", "boxShadow": "inset 0 1px 0 color-mix(in oklab, var(--bg0) 85%, transparent), 0 1px 2px oklch(0.3 0.07 25 / 0.06), 0 28px 56px -32px var(--shadow), 0 70px 120px -70px oklch(0.3 0.07 25 / 0.2)" }}>
                        <img src="/work/ai-platform.png" alt="The AI Platform GitOps dashboard: a Deploy an AI service form beside a Deploy assistant side panel." style={{ "display": "block", "width": "100%", "height": "auto", "objectFit": "contain" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article data-fe="work-row" data-pv-row="1" data-pv-label="Vellum, screen softener for Mac" data-pv-img="/work/vellum.png" data-rv="0" style={{ "borderTop": "1px solid var(--ln2)" }}>
                <button className="fh4" data-fe="work-toggle" aria-expanded="false" data-cursor="project" data-cursor-label={"Read\nmore"} style={{ "display": "grid", "gridTemplateColumns": "clamp(38px,4vw,64px) 1fr auto", "gap": "clamp(14px,2.4vw,32px)", "alignItems": "start", "width": "100%", "padding": "clamp(32px,5.4vh,58px) 0", "textAlign": "left" }}>
                  <span style={{ "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "color": "var(--ac)", "letterSpacing": "0.18em", "paddingTop": "12px" }}>
                    02
                  </span>
                  <span style={{ "minWidth": "0" }}>
                    {" "}
                    <span data-pv-title="1" style={{ "display": "block", "fontSize": "clamp(1.55rem,4.1vw,3.3rem)", "fontWeight": "600", "letterSpacing": "-0.035em", "lineHeight": "1.02", "color": "var(--t1)", "transition": "transform 0.6s cubic-bezier(0.16,1,0.3,1),color 0.4s ease" }}>
                      Vellum
                    </span>
                    {" "}
                    <span style={{ "display": "block", "marginTop": "12px", "maxWidth": "64ch", "fontSize": "clamp(1.04rem,1.15vw,1.14rem)", "lineHeight": "1.55", "color": "var(--t2)", "textWrap": "pretty" }}>
                      A small Mac app that lays a soft paper texture over your screen, so a long day at the desk is easier on the eyes.
                    </span>
                    {" "}
                    <span style={{ "display": "flex", "flexWrap": "wrap", "gap": "8px", "marginTop": "16px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                      <span>
                        Objective-C
                      </span>
                      <span style={{ "color": "var(--ln4)" }}>
                        ·
                      </span>
                      <span>
                        AppKit
                      </span>
                      <span style={{ "color": "var(--ln4)" }}>
                        ·
                      </span>
                      <span>
                        Core Graphics
                      </span>
                      <span style={{ "color": "var(--ln4)" }}>
                        ·
                      </span>
                      <span>
                        macOS
                      </span>
                    </span>
                    {" "}
                  </span>
                  <span data-pv-plus="1" style={{ "alignSelf": "center", "display": "flex", "alignItems": "center", "justifyContent": "center", "width": "40px", "height": "40px", "border": "1px solid var(--ln2)", "borderRadius": "50%", "transition": "border-color 0.4s ease,transform 0.6s cubic-bezier(0.16,1,0.3,1)" }}>
                    <span style={{ "position": "relative", "display": "block", "width": "11px", "height": "11px" }}>
                      <span style={{ "position": "absolute", "top": "5px", "left": "0", "width": "11px", "height": "1px", "background": "var(--t1)" }}></span>
                      <span data-fe="plus-v" style={{ "position": "absolute", "top": "0", "left": "5px", "width": "1px", "height": "11px", "background": "var(--t1)", "transition": "transform 0.5s cubic-bezier(0.16,1,0.3,1)" }}></span>
                    </span>
                  </span>
                </button>
                <div data-fe="work-panel" style={{ "overflow": "hidden", "height": "0", "transition": "height 0.62s cubic-bezier(0.16,1,0.3,1)" }}>
                  <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%,240px),1fr))", "gap": "clamp(20px,2.6vw,44px)", "borderTop": "1px solid var(--ln1)", "padding": "clamp(20px,3vh,32px) 0 clamp(30px,4vh,50px)" }}>
                    <div>
                      <span style={{ "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "var(--ac)" }}>
                        How it works
                      </span>
                      <p style={{ "marginTop": "10px", "fontSize": "clamp(1.02rem,1.1vw,1.14rem)", "lineHeight": "1.5", "color": "var(--t2)", "textWrap": "pretty" }}>
                        Hand-built AppKit with no storyboards. One borderless window per screen draws a tint pass plus a tiled soft-light grain over procedurally generated, cached textures.
                      </p>
                    </div>
                    <div>
                      <span style={{ "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "var(--ac)" }}>
                        Why it matters
                      </span>
                      <p style={{ "marginTop": "10px", "fontSize": "clamp(1.02rem,1.1vw,1.14rem)", "lineHeight": "1.5", "color": "var(--t2)", "textWrap": "pretty" }}>
                        Twelve textures, a circadian day and night schedule, and per-app exclusions, all drawn cheaply enough to sit over every screen without you noticing the cost.
                      </p>
                    </div>
                    <div>
                      <span style={{ "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "var(--ac)" }}>
                        The tricky part
                      </span>
                      <p style={{ "marginTop": "10px", "fontSize": "clamp(1.02rem,1.1vw,1.14rem)", "lineHeight": "1.5", "color": "var(--t2)", "textWrap": "pretty" }}>
                        Surviving other apps in fullscreen: accessory activation policy, join-all-spaces, and a screen-saver window level, while avoiding the auxiliary mode that would tie the overlay to its own window.
                      </p>
                    </div>
                    <div style={{ "gridColumn": "1 / -1", "display": "flex", "flexWrap": "wrap", "gap": "20px", "alignItems": "center" }}>
                      <a className="fh5" href="https://github.com/Chaitanya299/Vellum" target="_blank" rel="noreferrer" data-cursor="link" data-cursor-label={"Open\ncode"} style={{ "display": "inline-flex", "alignItems": "center", "gap": "10px", "borderBottom": "1px solid var(--ln4)", "paddingBottom": "4px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.18em", "textTransform": "uppercase", "color": "var(--ac)" }}>
                        {"See the code "}
                        <span>
                          ↗
                        </span>
                      </a>
                      <div style={{ "flex": "1 1 100%", "minWidth": "0", "maxWidth": "760px", "padding": "clamp(8px,1vw,14px)", "border": "1px solid var(--ln2)", "background": "var(--bg2)", "boxShadow": "inset 0 1px 0 color-mix(in oklab, var(--bg0) 85%, transparent), 0 1px 2px oklch(0.3 0.07 25 / 0.06), 0 28px 56px -32px var(--shadow), 0 70px 120px -70px oklch(0.3 0.07 25 / 0.2)" }}>
                        <img src="/work/vellum.png" alt="Vellum's macOS menu-bar panel with texture toggle, intensity slider and quick paper textures." style={{ "display": "block", "width": "100%", "height": "auto", "objectFit": "contain" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article data-fe="work-row" data-pv-row="1" data-pv-label="ScoreDay, daily habit scoreboard" data-pv-img="/work/scoreday.png" data-rv="0" style={{ "borderTop": "1px solid var(--ln2)" }}>
                <button className="fh4" data-fe="work-toggle" aria-expanded="false" data-cursor="project" data-cursor-label={"Read\nmore"} style={{ "display": "grid", "gridTemplateColumns": "clamp(38px,4vw,64px) 1fr auto", "gap": "clamp(14px,2.4vw,32px)", "alignItems": "start", "width": "100%", "padding": "clamp(32px,5.4vh,58px) 0", "textAlign": "left" }}>
                  <span style={{ "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "color": "var(--ac)", "letterSpacing": "0.18em", "paddingTop": "12px" }}>
                    03
                  </span>
                  <span style={{ "minWidth": "0" }}>
                    {" "}
                    <span data-pv-title="1" style={{ "display": "block", "fontSize": "clamp(1.55rem,4.1vw,3.3rem)", "fontWeight": "600", "letterSpacing": "-0.035em", "lineHeight": "1.02", "color": "var(--t1)", "transition": "transform 0.6s cubic-bezier(0.16,1,0.3,1),color 0.4s ease" }}>
                      ScoreDay
                    </span>
                    {" "}
                    <span style={{ "display": "block", "marginTop": "12px", "maxWidth": "64ch", "fontSize": "clamp(1.04rem,1.15vw,1.14rem)", "lineHeight": "1.55", "color": "var(--t2)", "textWrap": "pretty" }}>
                      A daily scoreboard for the habits you are trying to keep, with a score you cannot fudge.
                    </span>
                    {" "}
                    <span style={{ "display": "flex", "flexWrap": "wrap", "gap": "8px", "marginTop": "16px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                      <span>
                        Next.js
                      </span>
                      <span style={{ "color": "var(--ln4)" }}>
                        ·
                      </span>
                      <span>
                        TypeScript
                      </span>
                      <span style={{ "color": "var(--ln4)" }}>
                        ·
                      </span>
                      <span>
                        Prisma
                      </span>
                      <span style={{ "color": "var(--ln4)" }}>
                        ·
                      </span>
                      <span>
                        SQLite
                      </span>
                      <span style={{ "color": "var(--ln4)" }}>
                        ·
                      </span>
                      <span>
                        Vitest
                      </span>
                    </span>
                    {" "}
                  </span>
                  <span data-pv-plus="1" style={{ "alignSelf": "center", "display": "flex", "alignItems": "center", "justifyContent": "center", "width": "40px", "height": "40px", "border": "1px solid var(--ln2)", "borderRadius": "50%", "transition": "border-color 0.4s ease,transform 0.6s cubic-bezier(0.16,1,0.3,1)" }}>
                    <span style={{ "position": "relative", "display": "block", "width": "11px", "height": "11px" }}>
                      <span style={{ "position": "absolute", "top": "5px", "left": "0", "width": "11px", "height": "1px", "background": "var(--t1)" }}></span>
                      <span data-fe="plus-v" style={{ "position": "absolute", "top": "0", "left": "5px", "width": "1px", "height": "11px", "background": "var(--t1)", "transition": "transform 0.5s cubic-bezier(0.16,1,0.3,1)" }}></span>
                    </span>
                  </span>
                </button>
                <div data-fe="work-panel" style={{ "overflow": "hidden", "height": "0", "transition": "height 0.62s cubic-bezier(0.16,1,0.3,1)" }}>
                  <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%,240px),1fr))", "gap": "clamp(20px,2.6vw,44px)", "borderTop": "1px solid var(--ln1)", "padding": "clamp(20px,3vh,32px) 0 clamp(30px,4vh,50px)" }}>
                    <div>
                      <span style={{ "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "var(--ac)" }}>
                        How it works
                      </span>
                      <p style={{ "marginTop": "10px", "fontSize": "clamp(1.02rem,1.1vw,1.14rem)", "lineHeight": "1.5", "color": "var(--t2)", "textWrap": "pretty" }}>
                        A recurrence engine computes occurrences and a central status engine tracks each one. Scoring derives from real occurrences, and levels map earned XP to a rank.
                      </p>
                    </div>
                    <div>
                      <span style={{ "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "var(--ac)" }}>
                        Why it matters
                      </span>
                      <p style={{ "marginTop": "10px", "fontSize": "clamp(1.02rem,1.1vw,1.14rem)", "lineHeight": "1.5", "color": "var(--t2)", "textWrap": "pretty" }}>
                        Seven recurrence types, occurrence-based completions, XP levelling and streaks, all local-first on SQLite so your data stays on your machine.
                      </p>
                    </div>
                    <div>
                      <span style={{ "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "var(--ac)" }}>
                        The tricky part
                      </span>
                      <p style={{ "marginTop": "10px", "fontSize": "clamp(1.02rem,1.1vw,1.14rem)", "lineHeight": "1.5", "color": "var(--t2)", "textWrap": "pretty" }}>
                        Points are frozen snapshots at completion time, so editing a task never rewrites history. A unique constraint makes double-completion impossible at the database layer.
                      </p>
                    </div>
                    <div style={{ "gridColumn": "1 / -1", "display": "flex", "flexWrap": "wrap", "gap": "20px", "alignItems": "center" }}>
                      <a className="fh5" href="https://github.com/Chaitanya299/ScoreDay" target="_blank" rel="noreferrer" data-cursor="link" data-cursor-label={"Open\ncode"} style={{ "display": "inline-flex", "alignItems": "center", "gap": "10px", "borderBottom": "1px solid var(--ln4)", "paddingBottom": "4px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.18em", "textTransform": "uppercase", "color": "var(--ac)" }}>
                        {"See the code "}
                        <span>
                          ↗
                        </span>
                      </a>
                      <div style={{ "flex": "1 1 100%", "minWidth": "0", "maxWidth": "760px", "padding": "clamp(8px,1vw,14px)", "border": "1px solid var(--ln2)", "background": "var(--bg2)", "boxShadow": "inset 0 1px 0 color-mix(in oklab, var(--bg0) 85%, transparent), 0 1px 2px oklch(0.3 0.07 25 / 0.06), 0 28px 56px -32px var(--shadow), 0 70px 120px -70px oklch(0.3 0.07 25 / 0.2)" }}>
                        <img src="/work/scoreday.png" alt="ScoreDay's monthly progress view with score history chart and activity calendar." style={{ "display": "block", "width": "100%", "height": "auto", "objectFit": "contain" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article data-fe="work-row" data-pv-row="1" data-pv-label="orient, project memory for developers" data-pv-img="/work/orient.svg" data-rv="0" style={{ "borderTop": "1px solid var(--ln2)", "borderBottom": "1px solid var(--ln2)" }}>
                <button className="fh4" data-fe="work-toggle" aria-expanded="false" data-cursor="project" data-cursor-label={"Read\nmore"} style={{ "display": "grid", "gridTemplateColumns": "clamp(38px,4vw,64px) 1fr auto", "gap": "clamp(14px,2.4vw,32px)", "alignItems": "start", "width": "100%", "padding": "clamp(32px,5.4vh,58px) 0", "textAlign": "left" }}>
                  <span style={{ "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "color": "var(--ac)", "letterSpacing": "0.18em", "paddingTop": "12px" }}>
                    04
                  </span>
                  <span style={{ "minWidth": "0" }}>
                    {" "}
                    <span data-pv-title="1" style={{ "display": "block", "fontSize": "clamp(1.55rem,4.1vw,3.3rem)", "fontWeight": "600", "letterSpacing": "-0.035em", "lineHeight": "1.02", "color": "var(--t1)", "transition": "transform 0.6s cubic-bezier(0.16,1,0.3,1),color 0.4s ease" }}>
                      Orient
                    </span>
                    {" "}
                    <span style={{ "display": "block", "marginTop": "12px", "maxWidth": "64ch", "fontSize": "clamp(1.04rem,1.15vw,1.14rem)", "lineHeight": "1.55", "color": "var(--t2)", "textWrap": "pretty" }}>
                      A tool that keeps notes on why a project is built the way it is, right next to the code.
                    </span>
                    {" "}
                    <span style={{ "display": "flex", "flexWrap": "wrap", "gap": "8px", "marginTop": "16px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                      <span>
                        TypeScript
                      </span>
                      <span style={{ "color": "var(--ln4)" }}>
                        ·
                      </span>
                      <span>
                        Node
                      </span>
                      <span style={{ "color": "var(--ln4)" }}>
                        ·
                      </span>
                      <span>
                        Claude Code
                      </span>
                      <span style={{ "color": "var(--ln4)" }}>
                        ·
                      </span>
                      <span>
                        Codex
                      </span>
                      <span style={{ "color": "var(--ln4)" }}>
                        ·
                      </span>
                      <span>
                        opencode
                      </span>
                    </span>
                    {" "}
                  </span>
                  <span data-pv-plus="1" style={{ "alignSelf": "center", "display": "flex", "alignItems": "center", "justifyContent": "center", "width": "40px", "height": "40px", "border": "1px solid var(--ln2)", "borderRadius": "50%", "transition": "border-color 0.4s ease,transform 0.6s cubic-bezier(0.16,1,0.3,1)" }}>
                    <span style={{ "position": "relative", "display": "block", "width": "11px", "height": "11px" }}>
                      <span style={{ "position": "absolute", "top": "5px", "left": "0", "width": "11px", "height": "1px", "background": "var(--t1)" }}></span>
                      <span data-fe="plus-v" style={{ "position": "absolute", "top": "0", "left": "5px", "width": "1px", "height": "11px", "background": "var(--t1)", "transition": "transform 0.5s cubic-bezier(0.16,1,0.3,1)" }}></span>
                    </span>
                  </span>
                </button>
                <div data-fe="work-panel" style={{ "overflow": "hidden", "height": "0", "transition": "height 0.62s cubic-bezier(0.16,1,0.3,1)" }}>
                  <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%,240px),1fr))", "gap": "clamp(20px,2.6vw,44px)", "borderTop": "1px solid var(--ln1)", "padding": "clamp(20px,3vh,32px) 0 clamp(30px,4vh,50px)" }}>
                    <div>
                      <span style={{ "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "var(--ac)" }}>
                        How it works
                      </span>
                      <p style={{ "marginTop": "10px", "fontSize": "clamp(1.02rem,1.1vw,1.14rem)", "lineHeight": "1.5", "color": "var(--t2)", "textWrap": "pretty" }}>
                        Six commands map to a docs tree: current state, architecture, and an append-only decision log. It surveys the repo in a read-only agent and drafts every write for you to approve.
                      </p>
                    </div>
                    <div>
                      <span style={{ "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "var(--ac)" }}>
                        Why it matters
                      </span>
                      <p style={{ "marginTop": "10px", "fontSize": "clamp(1.02rem,1.1vw,1.14rem)", "lineHeight": "1.5", "color": "var(--t2)", "textWrap": "pretty" }}>
                        The always-on footprint is a few lines of pointers. Everything substantial lives in files that load only when read, so it holds up on repos that stay alive for years.
                      </p>
                    </div>
                    <div>
                      <span style={{ "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "var(--ac)" }}>
                        The tricky part
                      </span>
                      <p style={{ "marginTop": "10px", "fontSize": "clamp(1.02rem,1.1vw,1.14rem)", "lineHeight": "1.5", "color": "var(--t2)", "textWrap": "pretty" }}>
                        Safe by design: no network, no telemetry, read-only survey agents, secret-blind by default, and a commit step that refuses to ship a key. Every write is a proposal the human reviews.
                      </p>
                    </div>
                    <div style={{ "gridColumn": "1 / -1", "display": "flex", "flexWrap": "wrap", "gap": "20px", "alignItems": "center" }}>
                      <a className="fh5" href="https://github.com/Chaitanya299/Orient" target="_blank" rel="noreferrer" data-cursor="link" data-cursor-label={"Open\ncode"} style={{ "display": "inline-flex", "alignItems": "center", "gap": "10px", "borderBottom": "1px solid var(--ln4)", "paddingBottom": "4px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.18em", "textTransform": "uppercase", "color": "var(--ac)" }}>
                        {"See the code "}
                        <span>
                          ↗
                        </span>
                      </a>
                      <div style={{ "flex": "1 1 100%", "minWidth": "0", "maxWidth": "760px", "padding": "clamp(8px,1vw,14px)", "border": "1px solid var(--ln2)", "background": "var(--bg2)", "boxShadow": "inset 0 1px 0 color-mix(in oklab, var(--bg0) 85%, transparent), 0 1px 2px oklch(0.3 0.07 25 / 0.06), 0 28px 56px -32px var(--shadow), 0 70px 120px -70px oklch(0.3 0.07 25 / 0.2)" }}>
                        <img src="/work/orient.svg" alt="Orient's project map: STATE.md, an append-only decision log and request tracing beside the code." style={{ "display": "block", "width": "100%", "height": "auto", "objectFit": "contain" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section id="roadmap" data-sec="roadmap" data-form="3" data-label="What comes next" data-screen-label="03 On the Roadmap" style={{ "padding": "clamp(120px,19vh,230px) max(clamp(20px,5vw,88px),env(safe-area-inset-right)) 0 max(clamp(20px,5vw,88px),env(safe-area-inset-left))" }}>
          <div style={{ "maxWidth": "1600px", "margin": "0 auto", "display": "flex", "flexWrap": "wrap", "alignItems": "stretch", "gap": "clamp(28px,5vw,96px)" }}>
            <aside style={{ "flex": "1 1 180px", "maxWidth": "300px" }}>
              <div data-rv="0" style={{ "position": "sticky", "top": "clamp(96px,14vh,140px)", "display": "flex", "flexDirection": "column", "alignItems": "flex-start", "gap": "14px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                <span style={{ "fontFamily": "var(--font-archivo),system-ui,sans-serif", "fontSize": "clamp(4.6rem,8.6vw,8.8rem)", "fontWeight": "600", "letterSpacing": "-0.05em", "lineHeight": "0.8", "color": "transparent", "WebkitTextStroke": "1px var(--ac)", "marginLeft": "-0.04em" }}>
                  03
                </span>
                <span style={{ "width": "32px", "height": "1px", "background": "var(--ac)" }}></span>
                <span>
                  On the roadmap
                </span>
              </div>
            </aside>
            <div style={{ "flex": "999 1 560px", "minWidth": "0", "maxWidth": "1000px" }}>
              <h2 data-rise="1" style={{ "maxWidth": "24ch", "fontSize": "clamp(2.1rem,4.4vw,4.2rem)", "fontWeight": "600", "letterSpacing": "-0.035em", "lineHeight": "1.02", "color": "var(--ink)", "textWrap": "balance" }}>
                {"Five things I am building "}
                <span style={{ "color": "var(--ac)" }}>
                  right now
                </span>
                .
              </h2>
              <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%,300px),1fr))", "gap": "clamp(72px,11vh,120px) clamp(44px,6vw,96px)", "marginTop": "clamp(64px,10vh,120px)" }}>
                <article data-rv="0" style={{ "borderTop": "1px solid var(--ln2)", "paddingTop": "22px" }}>
                  <div style={{ "display": "flex", "justifyContent": "space-between", "gap": "12px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                    <span style={{ "display": "flex", "alignItems": "center", "gap": "8px" }}>
                      <span style={{ "width": "7px", "height": "7px", "borderRadius": "50%", "background": "var(--ac)", "animation": "fldPulse 2.4s cubic-bezier(0.16,1,0.3,1) infinite" }}></span>
                      Building now
                    </span>
                    <span>
                      Late 2026
                    </span>
                  </div>
                  <h3 style={{ "marginTop": "18px", "fontSize": "clamp(1.3rem,2.1vw,1.8rem)", "fontWeight": "600", "letterSpacing": "-0.02em", "color": "var(--ink)" }}>
                    Armor
                  </h3>
                  <p style={{ "marginTop": "12px", "maxWidth": "46ch", "fontSize": "clamp(1.06rem,1.25vw,1.2rem)", "lineHeight": "1.5", "color": "var(--ac)", "textWrap": "pretty" }}>
                    An AI code reviewer that reads every pull request and leaves line-level feedback.
                  </p>
                  <div style={{ "marginTop": "18px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                    {"LLM Agents "}
                    <span style={{ "color": "var(--ln4)" }}>
                      ·
                    </span>
                    {" Code Review "}
                    <span style={{ "color": "var(--ln4)" }}>
                      ·
                    </span>
                    {" GitHub"}
                  </div>
                </article>
                <article data-rv="1" style={{ "borderTop": "1px solid var(--ln2)", "paddingTop": "22px" }}>
                  <div style={{ "display": "flex", "justifyContent": "space-between", "gap": "12px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                    <span style={{ "display": "flex", "alignItems": "center", "gap": "8px" }}>
                      <span style={{ "width": "7px", "height": "7px", "borderRadius": "50%", "background": "var(--ac)", "animation": "fldPulse 2.4s cubic-bezier(0.16,1,0.3,1) infinite" }}></span>
                      Building now
                    </span>
                    <span>
                      Late 2026
                    </span>
                  </div>
                  <h3 style={{ "marginTop": "18px", "fontSize": "clamp(1.3rem,2.1vw,1.8rem)", "fontWeight": "600", "letterSpacing": "-0.02em", "color": "var(--ink)" }}>
                    MonFlow
                  </h3>
                  <p style={{ "marginTop": "12px", "maxWidth": "46ch", "fontSize": "clamp(1.06rem,1.25vw,1.2rem)", "lineHeight": "1.5", "color": "var(--ac)", "textWrap": "pretty" }}>
                    A privacy-first UPI expense tracker whose data never leaves your phone.
                  </p>
                  <div style={{ "marginTop": "18px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                    {"React Native "}
                    <span style={{ "color": "var(--ln4)" }}>
                      ·
                    </span>
                    {" Kotlin "}
                    <span style={{ "color": "var(--ln4)" }}>
                      ·
                    </span>
                    {" SQLCipher"}
                  </div>
                </article>
                <article data-rv="2" style={{ "borderTop": "1px solid var(--ln2)", "paddingTop": "22px" }}>
                  <div style={{ "display": "flex", "justifyContent": "space-between", "gap": "12px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                    <span style={{ "display": "flex", "alignItems": "center", "gap": "8px" }}>
                      <span style={{ "width": "7px", "height": "7px", "borderRadius": "50%", "background": "var(--ac)", "animation": "fldPulse 2.4s cubic-bezier(0.16,1,0.3,1) infinite" }}></span>
                      In testing
                    </span>
                    <span>
                      Mid 2026
                    </span>
                  </div>
                  <h3 style={{ "marginTop": "18px", "fontSize": "clamp(1.3rem,2.1vw,1.8rem)", "fontWeight": "600", "letterSpacing": "-0.02em", "color": "var(--ink)" }}>
                    {"JobAutomator & Crawler"}
                  </h3>
                  <p style={{ "marginTop": "12px", "maxWidth": "46ch", "fontSize": "clamp(1.06rem,1.25vw,1.2rem)", "lineHeight": "1.5", "color": "var(--ac)", "textWrap": "pretty" }}>
                    An AI agent that fills job applications for you, with a human approving every submit.
                  </p>
                  <div style={{ "marginTop": "18px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                    {"FastAPI "}
                    <span style={{ "color": "var(--ln4)" }}>
                      ·
                    </span>
                    {" Chrome Extension "}
                    <span style={{ "color": "var(--ln4)" }}>
                      ·
                    </span>
                    {" Python"}
                  </div>
                </article>
                <article data-rv="0" style={{ "borderTop": "1px solid var(--ln2)", "paddingTop": "22px" }}>
                  <div style={{ "display": "flex", "justifyContent": "space-between", "gap": "12px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                    <span style={{ "display": "flex", "alignItems": "center", "gap": "8px" }}>
                      <span style={{ "width": "7px", "height": "7px", "borderRadius": "50%", "border": "1px solid var(--ln4)" }}></span>
                      Planning
                    </span>
                    <span>
                      Early 2027
                    </span>
                  </div>
                  <h3 style={{ "marginTop": "18px", "fontSize": "clamp(1.3rem,2.1vw,1.8rem)", "fontWeight": "600", "letterSpacing": "-0.02em", "color": "var(--ink)" }}>
                    Edge Assistant
                  </h3>
                  <p style={{ "marginTop": "12px", "maxWidth": "46ch", "fontSize": "clamp(1.06rem,1.25vw,1.2rem)", "lineHeight": "1.5", "color": "var(--ac)", "textWrap": "pretty" }}>
                    A small language model and tool-use agent that runs fully on-device.
                  </p>
                  <div style={{ "marginTop": "18px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                    {"SLM "}
                    <span style={{ "color": "var(--ln4)" }}>
                      ·
                    </span>
                    {" llama.cpp "}
                    <span style={{ "color": "var(--ln4)" }}>
                      ·
                    </span>
                    {" Tool Use"}
                  </div>
                </article>
                <article data-rv="1" style={{ "borderTop": "1px solid var(--ln2)", "paddingTop": "22px" }}>
                  <div style={{ "display": "flex", "justifyContent": "space-between", "gap": "12px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                    <span style={{ "display": "flex", "alignItems": "center", "gap": "8px" }}>
                      <span style={{ "width": "7px", "height": "7px", "borderRadius": "50%", "border": "1px solid var(--ln4)" }}></span>
                      Planning
                    </span>
                    <span>
                      Late 2026
                    </span>
                  </div>
                  <h3 style={{ "marginTop": "18px", "fontSize": "clamp(1.3rem,2.1vw,1.8rem)", "fontWeight": "600", "letterSpacing": "-0.02em", "color": "var(--ink)" }}>
                    Chatbot Builder
                  </h3>
                  <p style={{ "marginTop": "12px", "maxWidth": "46ch", "fontSize": "clamp(1.06rem,1.25vw,1.2rem)", "lineHeight": "1.5", "color": "var(--ac)", "textWrap": "pretty" }}>
                    A grounded assistant from your own documents, stood up in an afternoon.
                  </p>
                  <div style={{ "marginTop": "18px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.12em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                    {"RAG "}
                    <span style={{ "color": "var(--ln4)" }}>
                      ·
                    </span>
                    {" Embeddings "}
                    <span style={{ "color": "var(--ln4)" }}>
                      ·
                    </span>
                    {" Next.js"}
                  </div>
                </article>
              </div>
              <div data-rv="0" style={{ "marginTop": "clamp(56px,9vh,96px)" }}>
                <a className="fh5" href="https://www.reddit.com/user/Chaitanya299/" target="_blank" rel="noreferrer" data-cursor="link" data-cursor-label="Open" style={{ "display": "inline-flex", "alignItems": "center", "gap": "10px", "borderBottom": "1px solid var(--ln4)", "paddingBottom": "4px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.18em", "textTransform": "uppercase", "color": "var(--ac)" }}>
                  {"Follow the build daily on Reddit "}
                  <span>
                    ↗
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="recognition" data-sec="recognition" data-form="4" data-label="Receipts" data-screen-label="04 Recognition" style={{ "padding": "clamp(120px,19vh,230px) max(clamp(20px,5vw,88px),env(safe-area-inset-right)) 0 max(clamp(20px,5vw,88px),env(safe-area-inset-left))" }}>
          <div style={{ "maxWidth": "1600px", "margin": "0 auto", "display": "flex", "flexWrap": "wrap", "alignItems": "stretch", "gap": "clamp(28px,5vw,96px)" }}>
            <aside style={{ "flex": "1 1 180px", "maxWidth": "300px" }}>
              <div data-rv="0" style={{ "position": "sticky", "top": "clamp(96px,14vh,140px)", "display": "flex", "flexDirection": "column", "alignItems": "flex-start", "gap": "14px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                <span style={{ "fontFamily": "var(--font-archivo),system-ui,sans-serif", "fontSize": "clamp(4.6rem,8.6vw,8.8rem)", "fontWeight": "600", "letterSpacing": "-0.05em", "lineHeight": "0.8", "color": "transparent", "WebkitTextStroke": "1px var(--ac)", "marginLeft": "-0.04em" }}>
                  04
                </span>
                <span style={{ "width": "32px", "height": "1px", "background": "var(--ac)" }}></span>
                <h2 style={{ "font": "inherit" }}>
                  Recognition
                </h2>
              </div>
            </aside>
            <div style={{ "flex": "999 1 560px", "minWidth": "0", "maxWidth": "1000px" }}>
              <div style={{ "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(46%,190px),1fr))", "gap": "clamp(24px,3vw,48px)" }}>
                <div data-rv="0">
                  <div data-count="4" style={{ "fontSize": "clamp(3rem,6.4vw,5.6rem)", "fontWeight": "600", "letterSpacing": "-0.04em", "lineHeight": "1", "color": "var(--ac)", "fontVariantNumeric": "tabular-nums" }}>
                    04
                  </div>
                  <div style={{ "marginTop": "12px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                    Certifications earned
                  </div>
                </div>
                <div data-rv="1">
                  <div data-count="4" style={{ "fontSize": "clamp(3rem,6.4vw,5.6rem)", "fontWeight": "600", "letterSpacing": "-0.04em", "lineHeight": "1", "color": "var(--ac)", "fontVariantNumeric": "tabular-nums" }}>
                    04
                  </div>
                  <div style={{ "marginTop": "12px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                    Projects I finished
                  </div>
                </div>
                <div data-rv="2">
                  <div data-count="3" style={{ "fontSize": "clamp(3rem,6.4vw,5.6rem)", "fontWeight": "600", "letterSpacing": "-0.04em", "lineHeight": "1", "color": "var(--ac)", "fontVariantNumeric": "tabular-nums" }}>
                    03
                  </div>
                  <div style={{ "marginTop": "12px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                    Years writing code
                  </div>
                </div>
                <div data-rv="3">
                  <div style={{ "fontSize": "clamp(3rem,6.4vw,5.6rem)", "fontWeight": "600", "lineHeight": "1", "color": "var(--ac)" }}>
                    ●
                  </div>
                  <div style={{ "marginTop": "12px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                    Brown belt, martial arts
                  </div>
                </div>
              </div>
              <div style={{ "marginTop": "clamp(72px,11vh,130px)" }}>
                <a className="fh4" href="https://drive.google.com/file/d/1QvxkMBhskNkW-y7IkX7a-S5FKO_5VwdQ/view" target="_blank" rel="noreferrer" data-rv="0" data-cursor="link" data-cursor-label="View" style={{ "display": "flex", "flexWrap": "wrap", "alignItems": "baseline", "gap": "12px clamp(24px,4vw,72px)", "borderTop": "1px solid var(--ln2)", "padding": "clamp(34px,5.6vh,56px) 0" }}>
                  <span style={{ "flex": "0 0 48px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "11px", "letterSpacing": "0.1em", "color": "var(--ac)" }}>
                    01
                  </span>
                  <span style={{ "flex": "1 1 300px", "fontSize": "clamp(1.3rem,2.4vw,1.9rem)", "fontWeight": "500", "letterSpacing": "-0.02em", "color": "var(--ink)" }}>
                    AWS Cloud Practitioner
                  </span>
                  <span style={{ "width": "min(100%,60ch)" }}>
                    <span style={{ "display": "block", "fontSize": "clamp(1.04rem,1.15vw,1.14rem)", "lineHeight": "1.6", "color": "var(--t2)" }}>
                      Cloud fundamentals, global infrastructure, security and the shared responsibility model.
                    </span>
                    <span style={{ "display": "block", "marginTop": "12px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                      Amazon Web Services ↗
                    </span>
                  </span>
                </a>
                <a className="fh4" href="https://drive.google.com/file/d/1XSeJ27istaznc6wHCDkI-vkB5yw9XGTR/view" target="_blank" rel="noreferrer" data-rv="0" data-cursor="link" data-cursor-label="View" style={{ "display": "flex", "flexWrap": "wrap", "alignItems": "baseline", "gap": "12px clamp(24px,4vw,72px)", "borderTop": "1px solid var(--ln2)", "padding": "clamp(34px,5.6vh,56px) 0" }}>
                  <span style={{ "flex": "0 0 48px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "11px", "letterSpacing": "0.1em", "color": "var(--ac)" }}>
                    02
                  </span>
                  <span style={{ "flex": "1 1 300px", "fontSize": "clamp(1.3rem,2.4vw,1.9rem)", "fontWeight": "500", "letterSpacing": "-0.02em", "color": "var(--ink)" }}>
                    Azure AI Fundamentals
                  </span>
                  <span style={{ "width": "min(100%,60ch)" }}>
                    <span style={{ "display": "block", "fontSize": "clamp(1.04rem,1.15vw,1.14rem)", "lineHeight": "1.6", "color": "var(--t2)" }}>
                      AI workloads, machine learning principles, computer vision and language on Azure.
                    </span>
                    <span style={{ "display": "block", "marginTop": "12px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                      Microsoft ↗
                    </span>
                  </span>
                </a>
                <a className="fh4" href="https://drive.google.com/file/d/1tLHtUUc0AuF4MBiPEFOtXAuEtBbmDvou/view" target="_blank" rel="noreferrer" data-rv="0" data-cursor="link" data-cursor-label="View" style={{ "display": "flex", "flexWrap": "wrap", "alignItems": "baseline", "gap": "12px clamp(24px,4vw,72px)", "borderTop": "1px solid var(--ln2)", "padding": "clamp(34px,5.6vh,56px) 0" }}>
                  <span style={{ "flex": "0 0 48px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "11px", "letterSpacing": "0.1em", "color": "var(--ac)" }}>
                    03
                  </span>
                  <span style={{ "flex": "1 1 300px", "fontSize": "clamp(1.3rem,2.4vw,1.9rem)", "fontWeight": "500", "letterSpacing": "-0.02em", "color": "var(--ink)" }}>
                    Mastering Django
                  </span>
                  <span style={{ "width": "min(100%,60ch)" }}>
                    <span style={{ "display": "block", "fontSize": "clamp(1.04rem,1.15vw,1.14rem)", "lineHeight": "1.6", "color": "var(--t2)" }}>
                      Scalable server-side applications, clean architecture, ORM and authentication.
                    </span>
                    <span style={{ "display": "block", "marginTop": "12px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                      Certificate ↗
                    </span>
                  </span>
                </a>
                <a className="fh4" href="https://drive.google.com/file/d/10_Y8CUsY8J6t8ABM_AxVL5df1rZ3wcRa/view" target="_blank" rel="noreferrer" data-rv="0" data-cursor="link" data-cursor-label="View" style={{ "display": "flex", "flexWrap": "wrap", "alignItems": "baseline", "gap": "12px clamp(24px,4vw,72px)", "borderTop": "1px solid var(--ln2)", "borderBottom": "1px solid var(--ln2)", "padding": "clamp(34px,5.6vh,56px) 0" }}>
                  <span style={{ "flex": "0 0 48px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "11px", "letterSpacing": "0.1em", "color": "var(--ac)" }}>
                    04
                  </span>
                  <span style={{ "flex": "1 1 300px", "fontSize": "clamp(1.3rem,2.4vw,1.9rem)", "fontWeight": "500", "letterSpacing": "-0.02em", "color": "var(--ink)" }}>
                    Generative AI Foundations
                  </span>
                  <span style={{ "width": "min(100%,60ch)" }}>
                    <span style={{ "display": "block", "fontSize": "clamp(1.04rem,1.15vw,1.14rem)", "lineHeight": "1.6", "color": "var(--t2)" }}>
                      Prompt engineering, transformer architectures, fine-tuning, and AI safety patterns.
                    </span>
                    <span style={{ "display": "block", "marginTop": "12px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                      Microsoft / upGrad ↗
                    </span>
                  </span>
                </a>
              </div>
              <div style={{ "marginTop": "clamp(88px,13vh,160px)", "display": "flex", "flexDirection": "column", "gap": "clamp(72px,11vh,128px)" }}>
                <div data-rv="0" style={{ "display": "flex", "flexWrap": "wrap", "gap": "12px clamp(24px,4vw,64px)" }}>
                  <span style={{ "flex": "0 0 160px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "var(--ac)", "paddingTop": "6px" }}>
                    Money and markets
                  </span>
                  <p style={{ "width": "min(100%,60ch)", "fontSize": "clamp(1.1rem,1.5vw,1.4rem)", "lineHeight": "1.45", "letterSpacing": "-0.012em", "color": "var(--ink)", "textWrap": "pretty" }}>
                    I read markets the way I read systems, looking for the part that quietly holds it together.
                  </p>
                </div>
                <div data-rv="0" style={{ "display": "flex", "flexWrap": "wrap", "gap": "12px clamp(24px,4vw,64px)" }}>
                  <span style={{ "flex": "0 0 160px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "var(--ac)", "paddingTop": "6px" }}>
                    Martial arts
                  </span>
                  <p style={{ "width": "min(100%,60ch)", "fontSize": "clamp(1.1rem,1.5vw,1.4rem)", "lineHeight": "1.45", "letterSpacing": "-0.012em", "color": "var(--ink)", "textWrap": "pretty" }}>
                    An international win and a brown belt. Precision and patience beat force, which turns out to be true of software too.
                  </p>
                </div>
                <div data-rv="0" style={{ "display": "flex", "flexWrap": "wrap", "gap": "12px clamp(24px,4vw,64px)" }}>
                  <span style={{ "flex": "0 0 160px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "var(--ac)", "paddingTop": "6px" }}>
                    Away from the desk
                  </span>
                  <p style={{ "width": "min(100%,60ch)", "fontSize": "clamp(1.1rem,1.5vw,1.4rem)", "lineHeight": "1.45", "letterSpacing": "-0.012em", "color": "var(--ink)", "textWrap": "pretty" }}>
                    Books, horse riding and swimming. The best fixes arrive when I am nowhere near a keyboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" data-sec="contact" data-form="5" data-label="Say hello" data-screen-label="05 Contact" style={{ "padding": "clamp(120px,19vh,230px) max(clamp(20px,5vw,88px),env(safe-area-inset-right)) max(clamp(40px,6vh,64px),calc(env(safe-area-inset-bottom) + 88px)) max(clamp(20px,5vw,88px),env(safe-area-inset-left))" }}>
          <div style={{ "maxWidth": "1600px", "margin": "0 auto", "display": "flex", "flexWrap": "wrap", "alignItems": "stretch", "gap": "clamp(28px,5vw,96px)" }}>
            <aside style={{ "flex": "1 1 180px", "maxWidth": "300px" }}>
              <div data-rv="0" style={{ "position": "sticky", "top": "clamp(96px,14vh,140px)", "display": "flex", "flexDirection": "column", "alignItems": "flex-start", "gap": "14px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                <span style={{ "fontFamily": "var(--font-archivo),system-ui,sans-serif", "fontSize": "clamp(4.6rem,8.6vw,8.8rem)", "fontWeight": "600", "letterSpacing": "-0.05em", "lineHeight": "0.8", "color": "transparent", "WebkitTextStroke": "1px var(--ac)", "marginLeft": "-0.04em" }}>
                  05
                </span>
                <span style={{ "width": "32px", "height": "1px", "background": "var(--ac)" }}></span>
                <span>
                  Contact
                </span>
              </div>
            </aside>
            <div style={{ "flex": "999 1 560px", "minWidth": "0", "maxWidth": "1000px" }}>
              <h2 data-rise="1" style={{ "fontSize": "clamp(2.4rem,8.4vw,8.4rem)", "fontWeight": "600", "letterSpacing": "-0.045em", "lineHeight": "0.86", "textTransform": "uppercase", "color": "var(--ink)" }}>
                {"Let's "}
                <br />
                talk
              </h2>
              <p data-rv="0" style={{ "marginTop": "clamp(28px,4.4vh,44px)", "maxWidth": "40ch", "fontSize": "clamp(1.3rem,2vw,1.75rem)", "fontWeight": "500", "lineHeight": "1.28", "letterSpacing": "-0.02em", "color": "var(--ac)", "textWrap": "pretty" }}>
                {"No sales pitch back. Just a straight answer on whether I'm the right person for it."}
              </p>
              <div data-rv="0" style={{ "marginTop": "clamp(64px,10vh,120px)" }}>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                  <span className="ck" style={{ "color": "var(--ac)" }}></span>
                  <span style={{ "width": "28px", "height": "1px", "background": "var(--ac)" }}></span>
                  <span>
                    The fastest way
                  </span>
                </div>
                <div style={{ "marginTop": "clamp(22px,3.4vh,34px)", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%,300px),1fr))", "gap": "clamp(28px,4vw,64px)", "alignItems": "end" }}>
                  <div style={{ "minWidth": "0" }}>
                    <p style={{ "fontSize": "clamp(1.06rem,1.25vw,1.2rem)", "lineHeight": "1.6", "color": "var(--t2)", "textWrap": "pretty" }}>
                      Available this quarter, and I usually reply the same day.
                    </p>
                    <button data-fe="copy-email" data-cursor="explore" data-cursor-label="Copy" style={{ "display": "flex", "alignItems": "baseline", "justifyContent": "space-between", "gap": "16px", "width": "100%", "marginTop": "clamp(18px,2.6vh,26px)", "padding": "0 0 14px", "borderBottom": "1px solid var(--ac)", "textAlign": "left" }}>
                      <span style={{ "minWidth": "0", "overflowWrap": "anywhere", "fontSize": "clamp(1.25rem,2.2vw,1.8rem)", "fontWeight": "500", "letterSpacing": "-0.02em", "color": "var(--ink)" }}>
                        chaitanya.sai311@gmail.com
                      </span>
                      <span data-fe="copy-label" style={{ "flex": "0 0 auto", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "var(--ac)" }}>
                        Copy
                      </span>
                    </button>
                  </div>
                  <div style={{ "minWidth": "0", "borderBottom": "1px solid var(--ln2)" }}>
                    <a className="fh6" href="https://www.stafflo.ai/" target="_blank" rel="noreferrer" data-cursor="link" data-cursor-label="Open" style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "baseline", "gap": "12px", "padding": "16px 0", "borderTop": "1px solid var(--ln2)", "transition": "padding-left 0.45s cubic-bezier(0.16,1,0.3,1),color 0.3s ease" }}>
                      <span style={{ "display": "inline-flex", "alignItems": "center", "gap": "10px", "fontSize": "1.06rem", "color": "var(--ink)" }}>
                        <svg viewBox="-12 -12 1024 404" width="22" height="9" aria-hidden="true" style={{ "display": "block", "flex": "0 0 auto", "overflow": "visible" }}>
                          <g fill="none" stroke="var(--ac)" strokeWidth="118" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="497,54 205,54 362,326 52,326"></polyline>
                            <polyline points="484,326 642,54 800,326"></polyline>
                            <polyline points="790,54 948,326"></polyline>
                          </g>
                        </svg>
                        Stafflo
                      </span>
                      <span style={{ "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                        Co-founder · stafflo.ai ↗
                      </span>
                    </a>
                    <a className="fh6" href="https://github.com/Chaitanya299" target="_blank" rel="noreferrer" data-cursor="link" data-cursor-label="Open" style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "baseline", "gap": "12px", "padding": "16px 0", "borderTop": "1px solid var(--ln2)", "transition": "padding-left 0.45s cubic-bezier(0.16,1,0.3,1),color 0.3s ease" }}>
                      <span style={{ "fontSize": "1.06rem", "color": "var(--ink)" }}>
                        GitHub
                      </span>
                      <span style={{ "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                        github.com/Chaitanya299 ↗
                      </span>
                    </a>
                    <a className="fh6" href="https://www.linkedin.com/in/saichaitanyaparasana" target="_blank" rel="noreferrer" data-cursor="link" data-cursor-label="Open" style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "baseline", "gap": "12px", "padding": "16px 0", "borderTop": "1px solid var(--ln2)", "transition": "padding-left 0.45s cubic-bezier(0.16,1,0.3,1),color 0.3s ease" }}>
                      <span style={{ "fontSize": "1.06rem", "color": "var(--ink)" }}>
                        LinkedIn
                      </span>
                      <span style={{ "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                        Chaitanya Parasana ↗
                      </span>
                    </a>
                    <a className="fh6" href="https://www.reddit.com/user/Chaitanya299/" target="_blank" rel="noreferrer" data-cursor="link" data-cursor-label="Open" style={{ "display": "flex", "justifyContent": "space-between", "alignItems": "baseline", "gap": "12px", "padding": "16px 0", "borderTop": "1px solid var(--ln2)", "transition": "padding-left 0.45s cubic-bezier(0.16,1,0.3,1),color 0.3s ease" }}>
                      <span style={{ "fontSize": "1.06rem", "color": "var(--ink)" }}>
                        Build log
                      </span>
                      <span style={{ "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                        Daily on Reddit ↗
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <Booking />
              <div data-rv="0" style={{ "marginTop": "clamp(64px,10vh,120px)" }}>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                  <span className="ck" style={{ "color": "var(--ac)" }}></span>
                  <span style={{ "width": "28px", "height": "1px", "background": "var(--ac)" }}></span>
                  <span>
                    Or tell me about the project
                  </span>
                </div>
                <form data-fe="form" noValidate style={{ "marginTop": "clamp(18px,2.6vh,26px)", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%,300px),1fr))", "gap": "clamp(24px,3.4vw,48px)", "padding": "clamp(26px,4vw,56px)", "background": "color-mix(in oklab, var(--bg0) 75%, var(--bg2))", "border": "1px solid var(--ln2)", "boxShadow": "var(--sh1)" }}>
                  <input type="text" name="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ "position": "absolute", "left": "-9999px", "width": "1px", "height": "1px", "opacity": "0" }} />
                  <div style={{ "display": "flex", "flexDirection": "column", "gap": "clamp(20px,3vh,28px)", "minWidth": "0" }}>
                    <label style={{ "display": "flex", "flexDirection": "column", "gap": "6px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.18em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                      Name
                      <input className="ff7" name="name" type="text" autoComplete="name" placeholder="Ada Lovelace" style={{ "background": "transparent", "border": "none", "borderBottom": "1px solid var(--ln2)", "borderRadius": "0", "minHeight": "48px", "padding": "12px 2px", "fontFamily": "var(--font-archivo),system-ui,sans-serif", "fontSize": "1rem", "letterSpacing": "0", "textTransform": "none", "color": "var(--ink)", "outline": "none" }} />
                    </label>
                    <label style={{ "display": "flex", "flexDirection": "column", "gap": "6px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.18em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                      Email
                      <input className="ff7" name="email" type="email" autoComplete="email" placeholder="ada@example.com" style={{ "background": "transparent", "border": "none", "borderBottom": "1px solid var(--ln2)", "borderRadius": "0", "minHeight": "48px", "padding": "12px 2px", "fontFamily": "var(--font-archivo),system-ui,sans-serif", "fontSize": "1rem", "letterSpacing": "0", "textTransform": "none", "color": "var(--ink)", "outline": "none" }} />
                    </label>
                    <fieldset style={{ "border": "none" }}>
                      <legend style={{ "marginBottom": "10px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.18em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                        What you need
                      </legend>
                      <div style={{ "display": "grid", "gridTemplateColumns": "1fr", "gap": "0" }}>
                        <label data-cursor="explore" data-cursor-label="Pick" style={{ "display": "flex", "alignItems": "center", "gap": "10px", "minHeight": "44px", "fontSize": "1.02rem", "color": "var(--t1)" }}>
                          <input type="checkbox" name="needs" value="agent" style={{ "width": "15px", "height": "15px", "accentColor": "var(--ac)" }} />
                          An AI agent or assistant
                        </label>
                        <label data-cursor="explore" data-cursor-label="Pick" style={{ "display": "flex", "alignItems": "center", "gap": "10px", "minHeight": "44px", "fontSize": "1.02rem", "color": "var(--t1)" }}>
                          <input type="checkbox" name="needs" value="app" style={{ "width": "15px", "height": "15px", "accentColor": "var(--ac)" }} />
                          A native app (Mac or phone)
                        </label>
                        <label data-cursor="explore" data-cursor-label="Pick" style={{ "display": "flex", "alignItems": "center", "gap": "10px", "minHeight": "44px", "fontSize": "1.02rem", "color": "var(--t1)" }}>
                          <input type="checkbox" name="needs" value="tool" style={{ "width": "15px", "height": "15px", "accentColor": "var(--ac)" }} />
                          An internal tool or dashboard
                        </label>
                        <label data-cursor="explore" data-cursor-label="Pick" style={{ "display": "flex", "alignItems": "center", "gap": "10px", "minHeight": "44px", "fontSize": "1.02rem", "color": "var(--t1)" }}>
                          <input type="checkbox" name="needs" value="deploy" style={{ "width": "15px", "height": "15px", "accentColor": "var(--ac)" }} />
                          Deploy and maintain what I have
                        </label>
                        <label data-cursor="explore" data-cursor-label="Pick" style={{ "display": "flex", "alignItems": "center", "gap": "10px", "minHeight": "44px", "fontSize": "1.02rem", "color": "var(--t1)" }}>
                          <input type="checkbox" name="needs" value="unsure" style={{ "width": "15px", "height": "15px", "accentColor": "var(--ac)" }} />
                          Not sure yet, help me figure it out
                        </label>
                      </div>
                    </fieldset>
                  </div>
                  <div style={{ "display": "flex", "flexDirection": "column", "gap": "clamp(20px,3vh,28px)", "minWidth": "0" }}>
                    <label style={{ "display": "flex", "flexDirection": "column", "gap": "6px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.18em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                      Budget (optional)
                      <input className="ff7" name="budget" type="text" placeholder="Rough range, or 'not sure yet'" style={{ "background": "transparent", "border": "none", "borderBottom": "1px solid var(--ln2)", "borderRadius": "0", "minHeight": "48px", "padding": "12px 2px", "fontFamily": "var(--font-archivo),system-ui,sans-serif", "fontSize": "1rem", "letterSpacing": "0", "textTransform": "none", "color": "var(--ink)", "outline": "none" }} />
                    </label>
                    <label style={{ "display": "flex", "flexDirection": "column", "gap": "6px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.18em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                      Timeline (optional)
                      <select name="timeline" style={{ "appearance": "none", "background": "transparent", "border": "none", "borderBottom": "1px solid var(--ln2)", "borderRadius": "0", "minHeight": "48px", "padding": "12px 2px", "fontSize": "1rem", "letterSpacing": "0.02em", "textTransform": "none", "color": "var(--ink)", "outline": "none", "backgroundImage": "linear-gradient(45deg, transparent 50%, var(--t3) 50%),linear-gradient(135deg, var(--t3) 50%, transparent 50%)", "backgroundPosition": "right 6px center,right 1px center", "backgroundSize": "5px 5px,5px 5px", "backgroundRepeat": "no-repeat" }}>
                        <option>
                          As soon as possible
                        </option>
                        <option>
                          Within 1–2 months
                        </option>
                        <option>
                          Just exploring for now
                        </option>
                      </select>
                    </label>
                    <label style={{ "display": "flex", "flexDirection": "column", "gap": "6px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.18em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                      Message
                      <textarea className="ff7" name="message" rows={4} placeholder="One or two lines about the project. What it is, and what you're stuck on." style={{ "background": "transparent", "border": "none", "borderBottom": "1px solid var(--ln2)", "borderRadius": "0", "minHeight": "110px", "padding": "12px 2px", "fontFamily": "var(--font-archivo),system-ui,sans-serif", "fontSize": "1rem", "lineHeight": "1.5", "letterSpacing": "0", "textTransform": "none", "color": "var(--ink)", "outline": "none", "resize": "vertical" }}></textarea>
                    </label>
                    <div>
                      <button className="fh3" type="submit" data-fe="form-btn" data-cursor="explore" data-cursor-label="Send" style={{ "display": "inline-flex", "alignItems": "center", "gap": "10px", "minHeight": "48px", "padding": "14px 24px", "background": "var(--ac)", "color": "var(--bg0)", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.2em", "textTransform": "uppercase", "transition": "background 0.45s cubic-bezier(0.16,1,0.3,1)" }}>
                        {"Send it "}
                        <span>
                          ↗
                        </span>
                      </button>
                      <div data-fe="form-status" style={{ "marginTop": "14px", "minHeight": "14px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.14em", "textTransform": "uppercase", "color": "var(--t3)" }}></div>
                    </div>
                  </div>
                </form>
              </div>
              <div data-rv="0" style={{ "marginTop": "clamp(64px,10vh,120px)" }}>
                <div style={{ "display": "flex", "alignItems": "center", "gap": "14px", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.24em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                  <span className="ck" style={{ "color": "var(--ac)" }}></span>
                  <span style={{ "width": "28px", "height": "1px", "background": "var(--ac)" }}></span>
                  <span>
                    What happens next
                  </span>
                </div>
                <div style={{ "marginTop": "clamp(30px,4.6vh,48px)", "display": "grid", "gridTemplateColumns": "repeat(auto-fit,minmax(min(100%,200px),1fr))", "gap": "clamp(28px,3vw,40px) 0" }}>
                  <div style={{ "position": "relative", "paddingTop": "26px", "borderTop": "1px solid var(--ln3)" }}>
                    <span style={{ "position": "absolute", "top": "-5px", "left": "0", "width": "9px", "height": "9px", "borderRadius": "50%", "background": "var(--ac)", "boxShadow": "0 0 0 5px var(--bg1)" }}></span>
                    <div style={{ "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.18em", "color": "var(--ac)" }}>
                      01
                    </div>
                    <div style={{ "marginTop": "10px", "fontSize": "clamp(1.15rem,1.6vw,1.4rem)", "fontWeight": "500", "letterSpacing": "-0.015em", "lineHeight": "1.25", "color": "var(--ink)" }}>
                      Same-day reply
                    </div>
                    <p style={{ "marginTop": "8px", "fontSize": "clamp(1.02rem,1.1vw,1.1rem)", "lineHeight": "1.55", "color": "var(--t2)", "textWrap": "pretty" }}>
                      I read every message myself and answer the same day.
                    </p>
                  </div>
                  <div style={{ "position": "relative", "paddingTop": "26px", "borderTop": "1px solid var(--ln3)" }}>
                    <span style={{ "position": "absolute", "top": "-5px", "left": "0", "width": "9px", "height": "9px", "borderRadius": "50%", "background": "var(--ac)", "boxShadow": "0 0 0 5px var(--bg1)" }}></span>
                    <div style={{ "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.18em", "color": "var(--ac)" }}>
                      02
                    </div>
                    <div style={{ "marginTop": "10px", "fontSize": "clamp(1.15rem,1.6vw,1.4rem)", "fontWeight": "500", "letterSpacing": "-0.015em", "lineHeight": "1.25", "color": "var(--ink)" }}>
                      A half-hour call
                    </div>
                    <p style={{ "marginTop": "8px", "fontSize": "clamp(1.02rem,1.1vw,1.1rem)", "lineHeight": "1.55", "color": "var(--t2)", "textWrap": "pretty" }}>
                      We talk through the shape of it, no slides, no pitch.
                    </p>
                  </div>
                  <div style={{ "position": "relative", "paddingTop": "26px", "borderTop": "1px solid var(--ln2)" }}>
                    <span style={{ "position": "absolute", "top": "-5px", "left": "0", "width": "9px", "height": "9px", "borderRadius": "50%", "background": "var(--ac)", "boxShadow": "0 0 0 5px var(--bg1)" }}></span>
                    <div style={{ "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.18em", "color": "var(--ac)" }}>
                      03
                    </div>
                    <div style={{ "marginTop": "10px", "fontSize": "clamp(1.15rem,1.6vw,1.4rem)", "fontWeight": "500", "letterSpacing": "-0.015em", "lineHeight": "1.25", "color": "var(--ink)" }}>
                      Plan, price, demo
                    </div>
                    <p style={{ "marginTop": "8px", "fontSize": "clamp(1.02rem,1.1vw,1.1rem)", "lineHeight": "1.55", "color": "var(--t2)", "textWrap": "pretty" }}>
                      A written plan with a fixed price, a date, and a free demo.
                    </p>
                  </div>
                </div>
              </div>
              <footer style={{ "display": "flex", "flexWrap": "wrap", "alignItems": "center", "justifyContent": "space-between", "gap": "12px", "marginTop": "clamp(88px,13vh,160px)", "borderTop": "1px solid var(--ln2)", "paddingTop": "clamp(18px,3vh,26px)", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10.5px", "letterSpacing": "0.16em", "textTransform": "uppercase", "color": "var(--t3)" }}>
                <span>
                  © 2026 Chaitanya Parasana
                </span>
                <a href="#" data-cursor="explore" data-cursor-label="Go">
                  Back to the start ↑
                </a>
              </footer>
            </div>
          </div>
        </section>
      </main>
      <div aria-hidden="true" style={{ "position": "fixed", "inset": "0", "zIndex": "1", "pointerEvents": "none", "background": "radial-gradient(70% 50% at 15% 0%, color-mix(in oklab, var(--bg0) 80%, transparent), transparent 70%), radial-gradient(120% 100% at 50% 0%, transparent 55%, color-mix(in oklab, var(--ac) 7%, transparent) 100%)" }}></div>
      <div aria-hidden="true" style={{ "position": "fixed", "inset": "0", "zIndex": "35", "pointerEvents": "none", "opacity": "0.05", "backgroundImage": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.86' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }}></div>
      <div data-pv-card="1" aria-hidden="true" style={{ "position": "fixed", "left": "0", "top": "0", "zIndex": "10", "width": "270px", "height": "170px", "border": "1px solid var(--ln3)", "background": "var(--bg2)", "boxShadow": "0 18px 36px -24px var(--shadow)", "pointerEvents": "none", "opacity": "0", "transform": "translate(-50%,-50%) scale(0.96)", "transition": "opacity 0.35s cubic-bezier(0.16,1,0.3,1)", "willChange": "transform,opacity", "overflow": "hidden" }}>
        <img data-pv-cimg="1" alt="" style={{ "position": "absolute", "inset": "0", "width": "100%", "height": "100%", "objectFit": "cover", "objectPosition": "top left", "display": "none" }} />
        <span data-pv-cap="1" style={{ "position": "absolute", "left": "0", "right": "0", "bottom": "0", "padding": "6px 8px", "textAlign": "left", "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "10px", "letterSpacing": "0.2em", "textTransform": "uppercase", "color": "var(--t2)", "background": "color-mix(in oklab, var(--bg1) 82%, transparent)", "borderTop": "1px solid var(--ln2)" }}></span>
      </div>
      <div data-ch-curtain="1" aria-hidden="true" style={{ "position": "fixed", "inset": "0", "zIndex": "40", "pointerEvents": "none", "background": "var(--ac)", "clipPath": "inset(100% 0 0 0)", "display": "flex", "alignItems": "center", "padding": "0 max(clamp(20px,5vw,88px),env(safe-area-inset-right)) 0 max(clamp(20px,5vw,88px),env(safe-area-inset-left))", "willChange": "clip-path" }}>
        <div data-ch-inner="1" style={{ "display": "flex", "flexDirection": "column", "gap": "clamp(14px,2.4vh,26px)", "maxWidth": "1600px", "margin": "0 auto", "width": "100%", "willChange": "transform" }}>
          <div data-ch-cnum="1" style={{ "fontFamily": "var(--font-mono),ui-monospace,monospace", "fontSize": "11px", "letterSpacing": "0.3em", "textTransform": "uppercase", "color": "color-mix(in oklab, var(--bg0) 72%, transparent)" }}>
            01
          </div>
          <div data-ch-ctitle="1" style={{ "fontSize": "clamp(1.9rem,min(9.5vw,17vh),9rem)", "overflowWrap": "break-word", "fontWeight": "600", "lineHeight": "0.88", "letterSpacing": "-0.045em", "textTransform": "uppercase", "color": "var(--bg0)" }}>
            What I Can Build
          </div>
          <div style={{ "height": "1px", "background": "color-mix(in oklab, var(--bg0) 45%, transparent)" }}></div>
        </div>
      </div>
    </div>
  );
}
