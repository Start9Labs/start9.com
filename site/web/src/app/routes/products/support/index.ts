import { ChangeDetectionStrategy, Component } from '@angular/core'
import { TuiButton } from '@taiga-ui/core'

@Component({
  imports: [TuiButton],
  host: { class: 'g-page' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="product-header">
      <h1>Start9 Support</h1>
      <p class="tagline">Lifetime access to expert technical assistance</p>
    </div>

    <div class="g-card purchase-section">
      <div class="purchase">
        <span class="price">$300</span>
        <button tuiButton appearance="primary" size="l">Add to Cart</button>
      </div>
      <p class="free-note">Free with the purchase of a Start9 Server</p>
    </div>

    <div class="g-card description-section">
      <p>
        A lifetime membership to Start9's private support community on Matrix.
        Our expert team is available 15 hours a day, 7 days a week, from 8:00 AM
        to 11:00 PM Eastern Time.
      </p>
    </div>

    <div class="g-card coverage-section">
      <h2>What's Covered</h2>
      <ul>
        <li>Operating StartOS</li>
        <li>Using supported Marketplace services</li>
        <li>Bitcoin and Lightning concepts</li>
        <li>Client configuration (phones &amp; laptops)</li>
        <li>Network setup (routers, VPNs, VPS)</li>
        <li>General technical troubleshooting</li>
      </ul>
    </div>

    <div class="g-card details-section">
      <h2>Details</h2>
      <table>
        <tr>
          <th>Duration</th>
          <td>Lifetime</td>
        </tr>
        <tr>
          <th>Platform</th>
          <td>Matrix (private community)</td>
        </tr>
        <tr>
          <th>Availability</th>
          <td>8:00 AM &ndash; 11:00 PM ET, 7 days/week</td>
        </tr>
        <tr>
          <th>Shipping</th>
          <td>Not required (digital product)</td>
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

    .purchase-section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .purchase {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .price {
      font-size: 1.75rem;
      font-weight: 700;
    }

    .free-note {
      margin: 0;
      font-size: 0.9375rem;
      color: var(--tui-text-action);
      font-weight: 600;
    }

    .description-section {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      p {
        margin: 0;
        color: var(--tui-text-secondary);
        line-height: 1.7;
      }
    }

    .coverage-section {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h2 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
      }

      ul {
        margin: 0;
        padding-left: 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        color: var(--tui-text-secondary);
        line-height: 1.6;
      }
    }

    .details-section {
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
      }

      th {
        width: 10rem;
        color: var(--tui-text-tertiary);
      }
    }
  `,
})
export default class SupportPage {}
