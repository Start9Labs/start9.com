import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core'
import { RouterLink } from '@angular/router'
import { TuiButton } from '@taiga-ui/core'

@Component({
  imports: [RouterLink, TuiButton],
  host: { class: 'g-page' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="hero">
      <h1>Sovereign Computing for a Free Future</h1>
      <p>
        Run your own server. Own your data. Take back control of your digital
        life with open-source software that puts you first.
      </p>
    </section>

    <section class="products">
      <a class="g-card product-row" routerLink="/products/server">
        <div class="product-info">
          <h2>Server One</h2>
          <p class="tagline">Your personal server, powered by StartOS</p>
          <p class="description">
            Discover, install, and self-host open-source services from the
            Marketplace. Own your data. No cloud dependency.
          </p>
          <span class="price">From $749</span>
        </div>
        <img
          class="product-image"
          src="/assets/products/server/server.png"
          alt="Server One"
        />
      </a>

      <a class="g-card product-row reverse" routerLink="/products/router">
        <div class="product-info">
          <h2>RISC-V Router</h2>
          <p class="tagline">
            Advanced networking and security, accessible to everyone
          </p>
          <p class="description">
            The only router designed specifically for self-hosting.
            Differentiated security profiles, VPN servers, WiFi schedules, and
            seamless StartOS integration.
          </p>
          <span class="price">Pre-order &middot; Ships Sep 2026</span>
        </div>
        <img
          class="product-image"
          src="/assets/products/server/server-2.png"
          alt="RISC-V Router"
        />
      </a>
    </section>

    <section class="reviews">
      <h2>Reviews</h2>
      <p class="section-intro">
        Trusted by thousands of individuals and families worldwide to take back
        control of their data, communications, and digital lives.
      </p>
      <div
        id="ap-widget-1"
        class="ap-widget--carousel"
        data-options='{"prod_code": "startos", "show": "top", "theme": "dark", "template_id": "carousel", "text_color": "#F5F5F5", "bg_color": "transparent"}'
      ></div>
    </section>

    <section class="open-source">
      <h2>Open Source and Self-Hosted</h2>
      <p>
        Everything we build is open source and free for everyone to use under
        the MIT license. StartOS, StartWrt, StartTunnel, and every service on
        the Marketplace &mdash; the code is public, auditable, and yours to
        modify.
      </p>
      <p>
        We sell hardware for those who want a plug-and-play experience, but you
        never need our permission. Install StartOS on your own hardware, build
        from source, and run it however you like.
      </p>
      <a
        tuiButton
        appearance="primary"
        size="l"
        href="https://docs.start9.com"
        target="_blank"
      >
        DIY &mdash; Build Your Own
      </a>
    </section>
  `,
  styles: `
    :host {
      gap: 4rem;
    }

    .hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 1.5rem;
      padding: 4rem 1rem 2rem;

      h1 {
        font-size: 3rem;
        font-weight: 800;
        margin: 0;
        max-width: 48rem;
        line-height: 1.15;

        @media (max-width: 48rem) {
          font-size: 2rem;
        }
      }

      p {
        max-width: 40rem;
        font-size: 1.25rem;
        color: var(--tui-text-secondary);
        line-height: 1.6;
        margin: 0;

        @media (max-width: 48rem) {
          font-size: 1.0625rem;
        }
      }
    }

    .products {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .reviews {
      overflow: visible;
      padding: 0 2.5rem;

      > h2 {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 700;
        text-align: center;
      }

      > .section-intro {
        margin: 0.5rem 0 1rem;
        font-size: 1.0625rem;
        color: var(--tui-text-tertiary);
        text-align: center;
        line-height: 1.6;
      }

      ::ng-deep {
        .ap-widget__logo--carousel {
          display: none;
        }

        .glider-track {
          display: grid;
          grid-auto-flow: column;
          gap: 1rem;
        }

        .glider-prev {
          left: -30px !important;
        }

        .glider-next {
          right: -30px !important;
        }

        .ap-widget__rev-stars,
        .ap-widget--carousel__first-row img {
          display: unset;
          width: auto;
        }

        .ap-widget__review {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: start;
          margin: 0 !important;
          padding: 0.75rem !important;
          border-radius: 0.5rem;
          transition: background-color 0.2s !important;
          transform: none !important;

          &:hover {
            background-color: rgba(255, 255, 255, 0.06) !important;
            transform: none !important;
            font-size: unset !important;
          }
        }

        .ap-widget__review p {
          font-size: unset;
          opacity: 50%;
        }

        .ap-widget__author,
        .ap-widget__prod-rating-text--carousel {
          font-size: 0.8rem;
          color: var(--tui-text-tertiary) !important;

          a {
            color: var(--tui-text-action) !important;
          }
        }
      }
    }

    .open-source {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 3rem 2rem;
      border-top: 1px solid var(--tui-border-normal);
      border-bottom: 1px solid var(--tui-border-normal);
      background: var(--tui-background-neutral-1);
      border-radius: 1rem;

      h2 {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 700;
      }

      p {
        margin: 0;
        color: var(--tui-text-secondary);
        line-height: 1.7;
      }

      [tuiButton] {
        margin-top: 0.5rem;
      }
    }

    .product-row {
      flex-direction: row;
      align-items: center;
      gap: 0;
      padding: 0;
      transition: transform 0.2s;

      &:hover {
        transform: translateY(-4px);
      }

      &.reverse {
        flex-direction: row-reverse;
      }

      @media (max-width: 48rem) {
        flex-direction: column-reverse;

        &.reverse {
          flex-direction: column-reverse;
        }
      }
    }

    .product-info {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 4rem;
      flex: 1;

      @media (max-width: 48rem) {
        flex: none;
        padding: 0rem 1.25rem 3rem;
        margin-top: -1rem;
        position: relative;
      }
    }

    .product-image {
      flex: 1;
      max-height: 26rem;
      object-fit: contain;

      @media (max-width: 48rem) {
        flex: none;
        height: 16rem;
        max-height: none;
        width: 100%;
        padding: 0;
      }
    }

    h2 {
      margin: 0;
      font-size: 2rem;
      font-weight: 700;

      @media (max-width: 48rem) {
        font-size: 1.25rem;
      }
    }

    .tagline {
      margin: 0;
      font-size: 1.125rem;
      color: var(--tui-text-secondary);

      @media (max-width: 48rem) {
        display: none;
      }
    }

    .description {
      margin: 0;
      font-size: 1.0625rem;
      color: var(--tui-text-tertiary);
      line-height: 1.6;

      @media (max-width: 48rem) {
        display: none;
      }
    }

    .price {
      margin-top: 0.5rem;
      font-size: 1.0625rem;
      font-weight: 600;
      color: var(--tui-text-primary);

      @media (max-width: 48rem) {
        display: none;
      }
    }
  `,
})
export default class HomePage implements AfterViewInit {
  ngAfterViewInit() {
    // Load the Apollo widget script, then re-dispatch DOMContentLoaded
    // so its internal listener fires and it initializes the carousel.
    const s = document.createElement('script')
    s.src = 'https://ap-widget-2.s3.amazonaws.com/widget.min.js'
    s.onload = () => document.dispatchEvent(new Event('DOMContentLoaded'))
    document.head.appendChild(s)
  }
}
