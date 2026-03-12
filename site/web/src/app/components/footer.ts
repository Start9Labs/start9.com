import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { TuiButton, TuiLink } from '@taiga-ui/core'

@Component({
  selector: 'app-footer',
  imports: [RouterLink, TuiLink, TuiButton],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer>
      <div class="columns">
        <div class="column">
          <h4>Products</h4>
          <a tuiLink routerLink="/products/server">Server</a>
          <a tuiLink routerLink="/products/router">Router</a>
          <a tuiLink routerLink="/products/support">Support</a>
        </div>

        <div class="column">
          <h4>Support</h4>
          <a tuiLink href="https://docs.start9.com" target="_blank">Docs</a>
          <a tuiLink href="https://community.start9.com" target="_blank">
            Community
          </a>
        </div>

        <div class="column">
          <h4>Company</h4>
          <a tuiLink routerLink="/about">About</a>
          <a tuiLink routerLink="/contact">Contact</a>
        </div>

        <div class="column">
          <h4>Legal</h4>
          <a tuiLink routerLink="/privacy">Privacy</a>
        </div>
      </div>

      <div class="bottom">
        <span class="copyright">&copy; {{ year }} Start9 Labs, Inc.</span>

        <div class="social">
          <a
            tuiIconButton
            iconStart="@tui.github"
            appearance="flat"
            size="s"
            href="https://github.com/Start9Labs"
            target="_blank"
          ></a>
          <a
            tuiIconButton
            iconStart="@tui.twitter"
            appearance="flat"
            size="s"
            href="https://x.com/start9labs"
            target="_blank"
          ></a>
        </div>
      </div>
    </footer>
  `,
  styles: `
    :host {
      display: block;
      border-top: 1px solid var(--tui-border-normal);
    }

    footer {
      max-width: 80rem;
      margin: 0 auto;
      padding: 3rem 2rem 2rem;
    }

    .columns {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .column {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    h4 {
      margin: 0 0 0.25rem;
      font-size: 0.875rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--tui-text-tertiary);
    }

    a[tuiLink] {
      color: var(--tui-text-secondary);
      font-size: 0.875rem;
    }

    .bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 1.5rem;
      border-top: 1px solid var(--tui-border-normal);
    }

    .copyright {
      font-size: 0.8125rem;
      color: var(--tui-text-tertiary);
    }

    .social {
      display: flex;
      gap: 0.25rem;

      [tuiIconButton] {
        color: var(--tui-text-primary);
      }
    }
  `,
})
export class FooterComponent {
  readonly year = new Date().getFullYear()
}
