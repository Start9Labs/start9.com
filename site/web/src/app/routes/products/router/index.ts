import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core'
import { FormsModule } from '@angular/forms'
import { TuiButton } from '@taiga-ui/core'

@Component({
  imports: [TuiButton, FormsModule],
  host: { class: 'g-page' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="product-header">
      <h1>RISC-V Router</h1>
      <p class="tagline">
        Advanced networking and network security, accessible to everyone
      </p>
    </div>

    <div class="g-card campaign-section">
      <div class="progress-bar">
        <div class="progress-fill" [style.width]="progressPercent()"></div>
      </div>
      <div class="campaign-stats">
        <div class="stat">
          <span class="stat-value">{{ raised() }}</span>
          <span class="stat-label">raised of $250,000 goal</span>
        </div>
        <div class="stat">
          <span class="stat-value">{{ contributors() }}</span>
          <span class="stat-label">contributors</span>
        </div>
      </div>
      <p class="shipping-note">
        Units are expected to ship no later than September 2026
      </p>
    </div>

    <div class="contribute-grid">
      <div class="g-card perk-card">
        <img
          class="perk-image"
          src="/assets/products/router/router-front.png"
          alt="RISC-V Router"
        />
        <h3>Pre-order a Router</h3>
        <p class="perk-description">Be the first to get a Start9 router.</p>
        <div class="perk-price">
          <span class="from">From</span>
          <span class="amount">$300</span>
        </div>
        <div class="perk-actions">
          <input
            type="number"
            class="amount-input"
            [ngModel]="routerAmount()"
            (ngModelChange)="routerAmount.set($event)"
            min="300"
            placeholder="300"
          />
          <button tuiButton appearance="primary" size="m">Pre-order</button>
        </div>
        <span class="perk-count">{{ routerContributors() }} pre-orders</span>
      </div>

      <div class="g-card perk-card">
        <h3>Just Donate</h3>
        <p class="perk-description">Help us make this a reality</p>
        <div class="perk-actions">
          <input
            type="number"
            class="amount-input"
            [ngModel]="donateAmount()"
            (ngModelChange)="donateAmount.set($event)"
            min="1"
            placeholder="Any amount"
          />
          <button tuiButton appearance="primary" size="m">Donate</button>
        </div>
        <span class="perk-count">{{ donateContributors() }} donations</span>
      </div>
    </div>

    <p class="refund-note">
      Pre-orders and donations will be used to fund development and are
      therefore non-refundable.
    </p>

    <div class="g-card description-section">
      <h2>About</h2>
      <p>
        The RISC-V Router by Start9 makes advanced networking and network
        security accessible to everyone. The router is open source, from
        hardware to OS, and is the only one designed specifically to accommodate
        the complex needs of home-based self-hosting.
      </p>
      <p>
        Powered by StartWrt — Start9's fork of OpenWrt — with a modern GUI
        reimagining the router experience from first principles. Easy to use,
        with sane defaults for users who just want a plug-and-play experience.
      </p>
    </div>

    <div class="g-card features-section">
      <h2>Key Features</h2>
      <ul>
        <li>
          <strong>Open Source</strong>
          — all the way down through firmware and hardware
        </li>
        <li>
          <strong>User-friendly</strong>
          — modern GUI with sensible defaults, accessible to non-technical users
        </li>
        <li>
          <strong>StartOS Integration</strong>
          — link your server with your router for a streamlined clearnet
          experience. The server can remotely and automatically configure the
          router to forward ports and create firewall rules.
        </li>
      </ul>
    </div>

    <div class="g-card features-section">
      <h2>Security Profiles</h2>
      <p class="section-intro">
        Devices receive different security profiles based on how they connect to
        your network.
      </p>
      <ul>
        <li>
          <strong>Ethernet</strong>
          — each port maps to a different profile. A device's port determines
          its access level.
        </li>
        <li>
          <strong>WiFi</strong>
          — single network with multiple passwords. Each password corresponds to
          a different security tier with distinct permissions.
        </li>
        <li>
          <strong>Inbound VPNs</strong>
          — unlimited VPN servers, each mapping to a specific security profile
        </li>
        <li>
          <strong>WiFi Schedules</strong>
          — optionally disable WiFi on a schedule (e.g. 10 PM &ndash; 7 AM)
        </li>
        <li>
          <strong>Outbound VPNs &amp; Chaining</strong>
          — multiple VPN configuration options available
        </li>
      </ul>
    </div>

    <div class="g-card specs-section">
      <h2>Hardware Specifications</h2>
      <table>
        <tr>
          <th>Processor</th>
          <td>SpacemiT K1 8-Core RISC-V</td>
        </tr>
        <tr>
          <th>Memory</th>
          <td>4GB LPDDR4</td>
        </tr>
        <tr>
          <th>Storage</th>
          <td>16GB eMMC</td>
        </tr>
        <tr>
          <th>WAN</th>
          <td>1&times; Gigabit Ethernet</td>
        </tr>
        <tr>
          <th>LAN</th>
          <td>1&times; Gigabit Ethernet</td>
        </tr>
        <tr>
          <th>WiFi</th>
          <td>AsiaRF AW7915-NP1 &mdash; Wi-Fi 6 (802.11ax) 4T4R, 2401 Mbps</td>
        </tr>
      </table>
    </div>

    <div class="g-card specs-section">
      <h2>Software Stack</h2>
      <table>
        <tr>
          <th>OpenSBI</th>
          <td>
            Firmware layer providing M-mode to S-mode runtime services,
            abstracting hardware specifics for OS portability
          </td>
        </tr>
        <tr>
          <th>StartWrt</th>
          <td>
            Start9's fork of OpenWrt with a modern GUI, reimagining the router
            experience from first principles
          </td>
        </tr>
      </table>
    </div>
  `,
  styles: `
    :host {
      gap: 2rem;
    }

    .product-header {
      text-align: center;

      h1 {
        margin: 0;
        font-size: 2.5rem;
        font-weight: 700;
      }
    }

    .tagline {
      margin: 0.5rem 0 0;
      font-size: 1.125rem;
      color: var(--tui-text-secondary);
    }

    .campaign-section {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .progress-bar {
      height: 0.5rem;
      border-radius: 0.25rem;
      background: var(--tui-background-neutral-1);
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      border-radius: 0.25rem;
      background: var(--tui-background-accent-1);
      transition: width 0.5s ease;
    }

    .campaign-stats {
      display: flex;
      gap: 3rem;
    }

    .stat {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .stat-value {
      font-size: 1.5rem;
      font-weight: 700;
    }

    .stat-label {
      font-size: 0.875rem;
      color: var(--tui-text-tertiary);
    }

    .shipping-note {
      margin: 0;
      font-size: 0.9375rem;
      color: var(--tui-text-secondary);
    }

    .contribute-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;

      @media (max-width: 48rem) {
        grid-template-columns: 1fr;
      }
    }

    .perk-card {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h3 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
      }
    }

    .perk-image {
      width: 100%;
      border-radius: 0.5rem;
      background: var(--start9-base-2);
    }

    .perk-description {
      margin: 0;
      color: var(--tui-text-secondary);
      line-height: 1.5;
    }

    .perk-price {
      display: flex;
      align-items: baseline;
      gap: 0.5rem;

      .from {
        font-size: 0.875rem;
        color: var(--tui-text-tertiary);
      }

      .amount {
        font-size: 1.5rem;
        font-weight: 700;
      }
    }

    .perk-actions {
      display: flex;
      gap: 0.75rem;
      align-items: center;
    }

    .amount-input {
      flex: 1;
      padding: 0.625rem 0.75rem;
      border: 1px solid var(--tui-border-normal);
      border-radius: 0.5rem;
      background: var(--tui-background-neutral-1);
      color: var(--tui-text-primary);
      font-size: 1rem;
      font-family: inherit;
      outline: none;

      &:focus {
        border-color: var(--tui-background-accent-1);
      }

      &::placeholder {
        color: var(--tui-text-tertiary);
      }
    }

    .perk-count {
      font-size: 0.8125rem;
      color: var(--tui-text-tertiary);
    }

    .refund-note {
      margin: 0;
      font-size: 0.875rem;
      color: var(--tui-text-tertiary);
      text-align: center;
      font-style: italic;
    }

    .description-section {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h2 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
      }

      p {
        margin: 0;
        color: var(--tui-text-secondary);
        line-height: 1.7;
      }
    }

    .features-section {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h2 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
      }

      .section-intro {
        margin: 0;
        color: var(--tui-text-secondary);
        line-height: 1.6;
      }

      ul {
        margin: 0;
        padding-left: 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        color: var(--tui-text-secondary);
        line-height: 1.6;
      }

      strong {
        color: var(--tui-text-primary);
      }
    }

    .specs-section {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h2 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
      }

      table {
        width: 100%;
        border-collapse: collapse;
      }

      tr {
        border-bottom: 1px solid var(--tui-border-normal);
      }

      tr:last-child {
        border-bottom: none;
      }

      th,
      td {
        padding: 0.75rem 0;
        text-align: left;
        font-weight: 400;
        vertical-align: top;
      }

      th {
        width: 10rem;
        color: var(--tui-text-tertiary);
      }

      td {
        color: var(--tui-text-secondary);
      }
    }
  `,
})
export default class RouterPage {
  // TODO: wire to BTCPay API
  readonly raisedCents = signal(780191)
  readonly goalCents = 25000000
  readonly contributors = signal(30)
  readonly routerContributors = signal(25)
  readonly donateContributors = signal(5)

  readonly routerAmount = signal(300)
  readonly donateAmount = signal<number | null>(null)

  readonly raised = computed(() =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(this.raisedCents() / 100),
  )

  readonly progressPercent = computed(() => {
    const pct = Math.min((this.raisedCents() / this.goalCents) * 100, 100)
    return `${pct.toFixed(1)}%`
  })
}
