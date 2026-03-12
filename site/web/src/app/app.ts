import { TuiRoot } from '@taiga-ui/core'
import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot],
  template: `
    <tui-root tuiTheme="dark">
      <router-outlet />
    </tui-root>
  `,
  styles: `
    :host {
      height: 100%;
      display: block;
    }
    tui-root {
      height: 100%;
      border-image: none;
    }
  `,
})
export class App {}
