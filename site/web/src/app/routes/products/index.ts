import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterLink } from '@angular/router'

@Component({
  imports: [RouterLink],
  host: { class: 'g-page' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="g-card product-card" routerLink="/products/server">
      <img
        class="product-image"
        src="/assets/products/server-one.png"
        alt="Server One"
      />
      <div class="product-info">
        <h2>Server One</h2>
        <p>Your personal server, powered by StartOS</p>
        <span class="price">From $749</span>
      </div>
    </a>

    <a class="g-card product-card" routerLink="/products/router">
      <div class="product-image placeholder"></div>
      <div class="product-info">
        <h2>RISC-V Router</h2>
        <p>Advanced networking and security, accessible to everyone</p>
        <span class="price">Pre-order &middot; Ships Sep 2026</span>
      </div>
    </a>
  `,
  styles: `
    :host {
      gap: 2rem;
    }

    .product-card {
      gap: 0;
      padding: 0;
      overflow: hidden;
      transition: transform 0.2s;

      &:hover {
        transform: translateY(-4px);
      }
    }

    .product-image {
      width: 100%;
      aspect-ratio: 21 / 9;
      object-fit: cover;
      background: var(--start9-base-2);
    }

    .placeholder {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .product-info {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 2rem;
    }

    h2 {
      margin: 0;
      font-size: 1.5rem;
      font-weight: 700;
    }

    p {
      margin: 0;
      color: var(--tui-text-secondary);
      line-height: 1.5;
    }

    .price {
      font-weight: 600;
      color: var(--tui-text-primary);
    }
  `,
})
export default class ProductsPage {}
