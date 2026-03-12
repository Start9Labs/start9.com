import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
} from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { ActivatedRoute } from '@angular/router'
import { TuiButton } from '@taiga-ui/core'
import { Apollo } from 'apollo-angular'
import { map, switchMap } from 'rxjs'
import { GET_PRODUCT } from './detail.graphql'

@Component({
  imports: [TuiButton],
  host: { class: 'g-page' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (product(); as product) {
      <div class="detail">
        <div class="gallery">
          @if (product.featuredAsset) {
            <img
              [src]="product.featuredAsset.preview + '?preset=large'"
              [alt]="product.name"
            />
          }
        </div>

        <div class="info">
          <h1>{{ product.name }}</h1>

          @if (product.description) {
            <p class="description">{{ product.description }}</p>
          }

          @if ((product.variants?.length ?? 0) > 1) {
            <div class="variants">
              @for (variant of product.variants!; track variant.id) {
                <button
                  tuiButton
                  [appearance]="
                    selectedVariant() === variant.id ? 'primary' : 'neutral'
                  "
                  size="s"
                  (click)="selectedVariant.set(variant.id ?? null)"
                >
                  {{ variant.name }}
                </button>
              }
            </div>
          }

          <div class="purchase">
            <span class="price">{{ currentPrice() }}</span>
            <button tuiButton appearance="primary" size="l">Add to Cart</button>
          </div>
        </div>
      </div>
    } @else {
      <p>Loading...</p>
    }
  `,
  styles: `
    .detail {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      align-items: start;

      @media (max-width: 48rem) {
        grid-template-columns: 1fr;
      }
    }

    .gallery img {
      width: 100%;
      border-radius: 0.75rem;
      background: var(--start9-base-1);
    }

    .info {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    h1 {
      margin: 0;
      font-size: 2rem;
    }

    .description {
      margin: 0;
      color: var(--tui-text-secondary);
      line-height: 1.6;
    }

    .variants {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .purchase {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      padding-top: 1rem;
      border-top: 1px solid var(--tui-border-normal);
    }

    .price {
      font-size: 1.5rem;
      font-weight: 700;
    }
  `,
})
export default class ProductDetailPage {
  private readonly route = inject(ActivatedRoute)
  private readonly apollo = inject(Apollo)

  readonly selectedVariant = signal<string | null>(null)

  readonly product = toSignal(
    this.route.paramMap.pipe(
      map(p => p.get('slug')!),
      switchMap(slug =>
        this.apollo
          .watchQuery({ query: GET_PRODUCT, variables: { slug } })
          .valueChanges.pipe(map(r => r.data?.product ?? null)),
      ),
    ),
  )

  readonly currentPrice = computed(() => {
    const product = this.product()
    if (!product?.variants?.length) return ''
    const selected = this.selectedVariant()
    const variant = selected
      ? product.variants.find(v => v.id === selected)
      : product.variants[0]
    if (!variant?.priceWithTax) return ''
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(variant.priceWithTax / 100)
  })
}
