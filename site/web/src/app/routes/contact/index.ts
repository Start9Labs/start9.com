import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  signal,
  viewChild,
} from '@angular/core'
import { TuiButton, TuiLink } from '@taiga-ui/core'

@Component({
  imports: [TuiButton, TuiLink],
  host: { class: 'g-page' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="hero">
      <h1>Contact Us</h1>
      <p>Get in tough with the Start9 team</p>
    </section>

    <section class="channels">
      <div class="g-card channel">
        <h3>Community Forum</h3>
        <p>
          Search through existing questions or submit new ones and get fast
          responses from the Start9 community.
        </p>
        <a tuiButton href="https://community.start9.com" target="_blank">
          Go to Forum
        </a>
      </div>

      <div class="g-card channel">
        <h3>Private Support Server</h3>
        <p>
          Start9's community support server and team of experts on Matrix.
          Staffed 15 hours/day, 7 days/week, 8am &ndash; 11pm ET.
        </p>
        <a tuiButton href="https://start9.me" target="_blank">Join Server</a>
      </div>

      <div class="g-card channel">
        <h3>Developer Community</h3>
        <p>
          Our Matrix space for StartOS developers and package developers to
          interact and collaborate.
        </p>
        <a
          tuiButton
          href="https://matrix.to/#/#developer-space:matrix.start9labs.com"
          target="_blank"
        >
          Explore Rooms
        </a>
      </div>
    </section>

    <section class="form-section">
      <h2>Message Us</h2>
      <p class="form-note">
        Response times are usually 24 &ndash; 48 hours. For faster support, use
        one of the channels above.
      </p>

      <form #contactForm autocomplete="off" (submit)="onSubmit($event)">
        <label for="contact-name">Name</label>
        <input
          id="contact-name"
          type="text"
          placeholder="Your name"
          required
          (input)="checkValidity()"
        />

        <label for="contact-email">Email</label>
        <input
          id="contact-email"
          type="email"
          placeholder="Your email"
          required
          (input)="checkValidity()"
        />

        <label for="contact-message">Message</label>
        <textarea
          id="contact-message"
          rows="5"
          placeholder="How can we help?"
          required
          (input)="checkValidity()"
        ></textarea>

        <label
          for="mcaptcha__token"
          id="mcaptcha__token-label"
          data-mcaptcha_url="https://mcaptcha.start9.me/widget/?sitekey=VXoIaUB6OaX7JtkF4RlGt05CXyH7k1k4"
        ></label>
        <div id="mcaptcha__widget-container"></div>
        <input type="hidden" name="mcaptcha__token" id="mcaptcha__token" />

        <button
          tuiButton
          appearance="primary"
          type="submit"
          size="l"
          [disabled]="!canSubmit()"
        >
          Submit
        </button>
      </form>

      @if (success()) {
        <div class="alert alert-success">
          Inquiry received! We will get back to you within 24 hours.
        </div>
      }

      @if (error()) {
        <div class="alert alert-error">
          Something went wrong. If this persists, try us on
          <a
            tuiLink
            href="https://matrix.to/#/#general:start9.me"
            target="_blank"
          >
            Matrix
          </a>
          instead.
        </div>
      }
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
      padding: 3rem 1rem 1rem 1rem;
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

    .channels {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      justify-items: center;

      @media (max-width: 48rem) {
        grid-template-columns: 1fr;
      }
    }

    .channel {
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
        flex: 1;
      }

      [tuiButton] {
        align-self: flex-start;
      }
    }

    .form-section {
      max-width: 36rem;
      width: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h2 {
        margin: 0;
        font-size: 1.75rem;
        font-weight: 700;
      }

      .form-note {
        margin: 0;
        color: var(--tui-text-secondary);
        line-height: 1.6;
      }
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }

    label {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--tui-text-secondary);
      margin-top: 0.5rem;
    }

    input,
    textarea {
      background: var(--tui-background-neutral-1);
      border: 1px solid var(--tui-border-normal);
      border-radius: 0.5rem;
      padding: 0.75rem 1rem;
      font-size: 1rem;
      color: var(--tui-text-primary);
      font-family: inherit;
      transition:
        border-color 0.2s,
        box-shadow 0.2s;

      &::placeholder {
        color: var(--tui-text-tertiary);
      }

      &:focus {
        outline: none;
        border-color: var(--tui-border-focus);
        box-shadow: 0 0 0 2px
          color-mix(in srgb, var(--tui-border-focus) 25%, transparent);
      }
    }

    textarea {
      resize: vertical;
    }

    button[tuiButton] {
      margin-top: 1rem;
      align-self: flex-start;
    }

    .alert {
      padding: 1rem 1.25rem;
      border-radius: 0.5rem;
      font-size: 0.9375rem;
      line-height: 1.5;
    }

    .alert-success {
      background: color-mix(
        in srgb,
        var(--tui-status-positive) 15%,
        transparent
      );
      color: var(--tui-status-positive);
    }

    .alert-error {
      background: color-mix(
        in srgb,
        var(--tui-status-negative) 15%,
        transparent
      );
      color: var(--tui-status-negative);

      a {
        color: inherit;
        font-weight: 600;
      }
    }

    #mcaptcha__widget-container {
      margin: 0.5rem 0;
      border-radius: 0.5rem;
      overflow: hidden;
    }
  `,
})
export default class ContactPage implements AfterViewInit {
  readonly contactForm = viewChild<ElementRef<HTMLFormElement>>('contactForm')

  readonly success = signal(false)
  readonly error = signal(false)

  private readonly formValid = signal(false)
  private readonly hasCaptcha = signal(false)
  readonly canSubmit = computed(() => this.formValid() && this.hasCaptcha())

  private captchaObserver?: MutationObserver

  ngAfterViewInit() {
    // Load the mCaptcha glue script
    const s = document.createElement('script')
    s.src = 'https://unpkg.com/@mcaptcha/vanilla-glue@0.1.0-rc2/dist/index.js'
    document.head.appendChild(s)

    // Watch for mCaptcha filling in the hidden token
    const tokenInput = document.getElementById(
      'mcaptcha__token',
    ) as HTMLInputElement
    if (tokenInput) {
      this.captchaObserver = new MutationObserver(() => {
        this.hasCaptcha.set(!!tokenInput.value)
      })
      this.captchaObserver.observe(tokenInput, {
        attributes: true,
        attributeFilter: ['value'],
      })
      // Also listen for programmatic value changes via input event
      tokenInput.addEventListener('input', () => {
        this.hasCaptcha.set(!!tokenInput.value)
      })
    }
  }

  checkValidity() {
    const form = this.contactForm()?.nativeElement
    this.formValid.set(form?.checkValidity() ?? false)
  }

  async onSubmit(e: Event) {
    e.preventDefault()

    this.success.set(false)
    this.error.set(false)

    const token = (
      document.getElementById('mcaptcha__token') as HTMLInputElement
    )?.value

    if (!token) return

    const body = {
      name: (document.getElementById('contact-name') as HTMLInputElement).value,
      email: (document.getElementById('contact-email') as HTMLInputElement)
        .value,
      message: (
        document.getElementById('contact-message') as HTMLTextAreaElement
      ).value,
      mcaptcha__token: token,
    }

    try {
      const res = await fetch('https://start9.me/_api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      if (res.ok) {
        this.contactForm()?.nativeElement.reset()
        this.resetCaptchaWidget()
        this.success.set(true)
      } else {
        throw new Error()
      }
    } catch {
      this.error.set(true)
    }
  }

  private resetCaptchaWidget() {
    const container = document.getElementById('mcaptcha__widget-container')
    const iframe = container?.querySelector('iframe')
    if (iframe) iframe.src = iframe.src
    const tokenInput = document.getElementById(
      'mcaptcha__token',
    ) as HTMLInputElement
    if (tokenInput) tokenInput.value = ''
    this.hasCaptcha.set(false)
    this.formValid.set(false)
  }
}
