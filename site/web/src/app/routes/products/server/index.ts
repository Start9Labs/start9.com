import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core'
import { TuiButton } from '@taiga-ui/core'

interface Variant {
  name: string
  description: string
  storage: string
  ram: string
  price: number
}

const VARIANTS: Variant[] = [
  {
    name: 'Standard',
    description: '2TB storage, 16GB memory',
    storage: '2TB',
    ram: '16GB',
    price: 749,
  },
  {
    name: 'Performance',
    description: '2TB storage, 32GB memory',
    storage: '2TB',
    ram: '32GB',
    price: 899,
  },
  {
    name: 'Storage',
    description: '4TB storage, 16GB memory',
    storage: '4TB',
    ram: '16GB',
    price: 899,
  },
  {
    name: 'Max',
    description: '4TB storage, 32GB memory',
    storage: '4TB',
    ram: '32GB',
    price: 1049,
  },
]

@Component({
  imports: [TuiButton],
  host: { class: 'g-page' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="product-header">
      <h1>Server One</h1>
      <p class="tagline">Your personal server, powered by StartOS</p>
    </div>

    <div class="g-card config-section">
      <h2>Configuration</h2>
      <div class="variants">
        @for (variant of variants; track variant.name) {
          <button
            class="variant-option"
            [class.selected]="selectedIndex() === $index"
            (click)="selectedIndex.set($index)"
          >
            <span class="variant-name">{{ variant.name }}</span>
            <span class="variant-desc">{{ variant.description }}</span>
          </button>
        }
      </div>
      <div class="purchase">
        <span class="price">{{ formattedPrice() }}</span>
        <button tuiButton appearance="primary" size="l">Add to Cart</button>
      </div>
    </div>

    <div class="g-card description-section">
      <p>
        The Server One is a personal computing device designed to run
        self-hosted services. It arrives pre-configured with StartOS and
        includes access to a support program valued at $300.
      </p>
      <p>
        StartOS is a Linux-based server operating system optimized for hosting
        decentralized applications without command-line expertise. Discover,
        install, and self-host open-source services from the Marketplace. Own
        your data. No cloud dependency.
      </p>
    </div>

    <div class="gallery">
      <div class="gallery-track">
        <img src="/assets/products/server/server-1.png" alt="Server One" />
        <img
          src="/assets/products/server/server-2.png"
          alt="Server One — alternate view"
        />
        <img
          src="/assets/products/server/server-3.png"
          alt="Server One — another view"
        />
      </div>
    </div>

    <div class="g-card specs-section">
      <h2>Specifications</h2>
      <table>
        <tr>
          <th>Processor</th>
          <td>AMD Ryzen 7 6800H</td>
        </tr>
        <tr>
          <th>Memory</th>
          <td>{{ selectedVariant().ram }} LPDDR5 @ 6400 MHz</td>
        </tr>
        <tr>
          <th>Storage</th>
          <td>{{ selectedVariant().storage }} Samsung 990 EVO Plus NVMe SSD</td>
        </tr>
        <tr>
          <th>Graphics</th>
          <td>AMD Radeon Graphics</td>
        </tr>
        <tr>
          <th>Connectivity</th>
          <td>Gigabit Ethernet</td>
        </tr>
        <tr>
          <th>Ports</th>
          <td>
            2&times; USB 3.0, 2&times; USB 2.0, 1&times; USB-C 3.1, 2&times;
            HDMI
          </td>
        </tr>
        <tr>
          <th>Power</th>
          <td>19V / 5A DC input</td>
        </tr>
        <tr>
          <th>Dimensions</th>
          <td>4.5&Prime; &times; 4.2&Prime; &times; 1.5&Prime;</td>
        </tr>
        <tr>
          <th>Weight</th>
          <td>0.81 lb (0.37 kg)</td>
        </tr>
        <tr>
          <th>Warranty</th>
          <td>2-year limited hardware</td>
        </tr>
      </table>
    </div>

    <div class="g-card included-section">
      <h2>What's Included</h2>
      <ul>
        <li>Server One, pre-configured with StartOS</li>
        <li>Power adapter (19V / 5A)</li>
        <li>
          Lifetime membership to Start9 Support — on-demand technical assistance
          (valued at $300)
        </li>
      </ul>
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

    .config-section {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      h2 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
      }
    }

    .variants {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
      gap: 0.75rem;
    }

    .variant-option {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      padding: 0.875rem 1rem;
      border: 1px solid var(--tui-border-normal);
      border-radius: 0.5rem;
      background: transparent;
      color: var(--tui-text-primary);
      cursor: pointer;
      text-align: left;
      font-family: inherit;
      transition:
        border-color 0.15s,
        background-color 0.15s;

      &:hover {
        border-color: var(--tui-text-tertiary);
      }

      &.selected {
        border-color: var(--tui-background-accent-1);
        background: color-mix(
          in hsl,
          var(--tui-background-accent-1) 10%,
          transparent
        );
      }
    }

    .variant-name {
      font-size: 0.9375rem;
      font-weight: 600;
    }

    .variant-desc {
      font-size: 0.8125rem;
      color: var(--tui-text-tertiary);
    }

    .purchase {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 1rem;
      border-top: 1px solid var(--tui-border-normal);
    }

    .price {
      font-size: 1.75rem;
      font-weight: 700;
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

    .gallery {
      overflow: hidden;
    }

    .gallery-track {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;

      img {
        width: 100%;
        border-radius: 0.75rem;
        background: var(--start9-base-2);
      }

      @media (max-width: 48rem) {
        grid-template-columns: repeat(3, 80%);
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-padding-left: 1rem;
        gap: 0.75rem;
        padding-bottom: 0.75rem;

        img {
          scroll-snap-align: start;
        }
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
      }

      th {
        width: 10rem;
        color: var(--tui-text-tertiary);
      }
    }

    .included-section {
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
  `,
})
export default class ServerPage {
  readonly variants = VARIANTS
  readonly selectedIndex = signal(0)
  readonly selectedVariant = computed(() => VARIANTS[this.selectedIndex()])
  readonly formattedPrice = computed(() =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(this.selectedVariant().price),
  )
}
