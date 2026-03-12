import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TuiButton } from '@taiga-ui/core'

@Component({
  imports: [RouterLink, TuiButton],
  host: { class: 'g-page' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="hero">
      <h1>About Start9</h1>
      <p>
        We believe computing should serve the individual, not corporations.
        Start9 is building the future of personal sovereignty — one server at a
        time.
      </p>
    </section>

    <section class="g-section">
      <h2>Our Values</h2>
      <div class="g-grid">
        <div class="g-card value-card">
          <h3>Privacy First</h3>
          <p>
            In a world of mass surveillance, we build tools that keep your data
            where it belongs — with you. No telemetry, no tracking, no cloud
            dependency.
          </p>
        </div>
        <div class="g-card value-card">
          <h3>True Ownership</h3>
          <p>
            When you buy a Start9 product, you own it completely. No
            subscriptions, no license keys, no kill switches. Your hardware,
            your software, your data.
          </p>
        </div>
        <div class="g-card value-card">
          <h3>Open Source</h3>
          <p>
            StartOS and our entire software stack are free and open source.
            Inspect the code, modify it, contribute to it. Trust through
            transparency, not authority.
          </p>
        </div>
        <div class="g-card value-card">
          <h3>Community Driven</h3>
          <p>
            We are building for and with our community. From developers
            packaging services to users running their first server — everyone
            has a voice.
          </p>
        </div>
      </div>
    </section>

    <section class="story g-section">
      <h2>Our Story</h2>
      <p>
        Start9 was founded on a simple principle: people deserve to control
        their own digital lives. What began as a passion project has grown into
        a movement of thousands worldwide who are taking back control of their
        data, communications, and finances.
      </p>
      <p>
        With StartOS, we have made self-hosting accessible to everyone — not
        just the technically elite. Our plug-and-play personal servers let
        anyone run their own cloud services, Bitcoin nodes, and more with just a
        few clicks.
      </p>
    </section>

    <section class="cta">
      <h2>Join the movement</h2>
      <p>
        Explore our products and take the first step toward digital
        independence.
      </p>
      <a tuiButton routerLink="/products" appearance="primary" size="l">
        Shop Products
      </a>
    </section>
  `,
  styles: `
    .hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 1.5rem;
      padding: 3rem 1rem;
    }

    .hero h1 {
      font-size: 2.5rem;
      font-weight: 800;
      margin: 0;
    }

    .hero p {
      max-width: 40rem;
      font-size: 1.125rem;
      color: var(--tui-text-secondary);
      line-height: 1.6;
      margin: 0;
    }

    h2 {
      margin: 0;
    }

    .value-card {
      gap: 0.75rem;

      h3 {
        margin: 0;
        font-size: 1.125rem;
        font-weight: 700;
      }

      p {
        margin: 0;
        color: var(--tui-text-secondary);
        font-size: 0.875rem;
        line-height: 1.6;
      }
    }

    .story {
      max-width: 48rem;

      p {
        color: var(--tui-text-secondary);
        line-height: 1.7;
        margin: 0;
      }
    }

    .cta {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 1rem;
      padding: 3rem 1rem;

      h2 {
        font-size: 1.75rem;
      }

      p {
        color: var(--tui-text-secondary);
        margin: 0;
      }
    }
  `,
})
export default class AboutPage {}
