import { ChangeDetectionStrategy, Component, signal } from '@angular/core'
import { RouterLink, RouterLinkActive } from '@angular/router'
import { TuiButton, TuiPopup } from '@taiga-ui/core'
import { TuiDrawer } from '@taiga-ui/kit'

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, TuiButton, TuiPopup, TuiDrawer],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav>
      <div class="nav-left">
        <a routerLink="/" class="logo">
          <img src="/assets/start9-wordmark.svg" alt="Start9" />
        </a>
        <a
          tuiButton
          appearance="flat"
          routerLink="/products/server"
          routerLinkActive="active"
          class="desktop-only"
        >
          Server
        </a>
        <a
          tuiButton
          appearance="flat"
          routerLink="/products/router"
          routerLinkActive="active"
          class="desktop-only"
        >
          Router
        </a>
        <a
          tuiButton
          appearance="flat"
          routerLink="/products/support"
          routerLinkActive="active"
          class="desktop-only"
        >
          Support
        </a>
      </div>

      <div class="nav-right">
        <a
          tuiButton
          appearance="flat"
          href="https://docs.start9.com"
          target="_blank"
          class="desktop-only"
        >
          Docs
        </a>
        <a
          tuiButton
          appearance="flat"
          routerLink="/about"
          routerLinkActive="active"
          class="desktop-only"
        >
          About
        </a>
        <a
          tuiButton
          appearance="flat"
          routerLink="/contact"
          routerLinkActive="active"
          class="desktop-only"
        >
          Contact
        </a>
        <a
          tuiIconButton
          iconStart="@tui.shopping-cart"
          appearance="flat"
          routerLink="/cart"
        ></a>
        <button
          tuiIconButton
          iconStart="@tui.menu"
          appearance="flat"
          class="mobile-only"
          (click)="menuOpen.set(true)"
        ></button>
      </div>
    </nav>

    <tui-drawer
      *tuiPopup="menuOpen()"
      [overlay]="true"
      (click.self)="menuOpen.set(false)"
    >
      <header>
        <button
          tuiIconButton
          iconStart="@tui.x"
          appearance="flat"
          (click)="menuOpen.set(false)"
        ></button>
      </header>
      <nav class="drawer-nav" (click)="menuOpen.set(false)">
        <a
          tuiButton
          appearance="flat"
          size="l"
          routerLink="/products/server"
          routerLinkActive="active"
        >
          Server One
        </a>
        <a
          tuiButton
          appearance="flat"
          size="l"
          routerLink="/products/router"
          routerLinkActive="active"
        >
          RISC-V Router
        </a>
        <a
          tuiButton
          appearance="flat"
          size="l"
          routerLink="/products/support"
          routerLinkActive="active"
        >
          Start9 Support
        </a>
        <a
          tuiButton
          appearance="flat"
          size="l"
          href="https://docs.start9.com"
          target="_blank"
        >
          Docs
        </a>
        <a
          tuiButton
          appearance="flat"
          size="l"
          routerLink="/about"
          routerLinkActive="active"
        >
          About
        </a>
        <a
          tuiButton
          appearance="flat"
          size="l"
          routerLink="/contact"
          routerLinkActive="active"
        >
          Contact
        </a>
      </nav>
    </tui-drawer>
  `,
  styles: `
    :host {
      position: sticky;
      top: 0;
      z-index: 100;
      backdrop-filter: blur(1rem);
      background-color: color-mix(
        in hsl,
        var(--tui-background-base) 80%,
        transparent
      );
      box-shadow: inset 0 -1px var(--tui-border-normal);
    }

    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.75rem 2rem;
    }

    .nav-left,
    .nav-right {
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    .logo {
      display: flex;
      align-items: center;
      margin-right: 0.75rem;

      img {
        height: 3.2rem;
        width: auto;
      }
    }

    [tuiButton],
    [tuiIconButton] {
      color: var(--tui-text-primary);
      font-weight: 400;
    }

    .active {
      font-weight: 700;
    }

    .mobile-only {
      display: none;
    }

    @media (max-width: 48rem) {
      .desktop-only {
        display: none;
      }

      .mobile-only {
        display: inline-flex;
      }
    }

    tui-drawer {
      top: 0;
      border-radius: 0;

      header {
        display: flex;
        justify-content: flex-end;
        padding: 0.75rem 1rem;
      }
    }

    .drawer-nav {
      display: flex;
      flex-direction: column;
      padding: 0 1rem;
      gap: 0.25rem;

      [tuiButton] {
        justify-content: flex-start;
      }
    }
  `,
})
export class HeaderComponent {
  readonly menuOpen = signal(false)
}
