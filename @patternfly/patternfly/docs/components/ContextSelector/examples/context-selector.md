---
id: Context selector
section: components
cssPrefix: pf-c-context-selector
---import './context-selector.css'

## Examples

### Basic

```html
<div class="pf-c-context-selector">
  <span id="context-selector-collapsed-example-label" hidden>Selected project:</span>
  <button
    class="pf-c-context-selector__toggle"
    aria-expanded="false"
    id="context-selector-collapsed-example-toggle"
    aria-labelledby="context-selector-collapsed-example-label context-selector-collapsed-example-toggle"
  >
    <span class="pf-c-context-selector__toggle-text">My project</span>
    <span class="pf-c-context-selector__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-c-context-selector__menu" hidden>
    <div class="pf-c-context-selector__menu-search">
      <div class="pf-c-input-group">
        <input
          class="pf-c-form-control"
          type="search"
          placeholder="Search"
          id="textInput1"
          name="textInput1"
          aria-labelledby="context-selector-collapsed-example-search-button"
        />
        <button
          class="pf-c-button pf-m-control"
          type="button"
          id="context-selector-collapsed-example-search-button"
          aria-label="Search menu items"
        >
          <i class="fas fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <ul class="pf-c-context-selector__menu-list">
      <li>
        <a class="pf-c-context-selector__menu-list-item" href="#">Link</a>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >Action</button>
      </li>
      <li>
        <a
          class="pf-c-context-selector__menu-list-item pf-m-disabled"
          href="#"
          aria-disabled="true"
          tabindex="-1"
        >Disabled link</a>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
          disabled
        >Disabled action</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >My project</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >OpenShift cluster</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >Production Ansible</button>
      </li>
      <li>
        <button class="pf-c-context-selector__menu-list-item" type="button">AWS</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >Azure</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >My project</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >OpenShift cluster</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >Production Ansible</button>
      </li>
      <li>
        <button class="pf-c-context-selector__menu-list-item" type="button">AWS</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >Azure</button>
      </li>
    </ul>
  </div>
</div>

<div class="pf-c-context-selector pf-m-expanded">
  <span id="context-selector-expanded-example-label" hidden>Selected Project:</span>
  <button
    class="pf-c-context-selector__toggle"
    aria-expanded="true"
    id="context-selector-expanded-example-toggle"
    aria-labelledby="context-selector-expanded-example-label context-selector-expanded-example-toggle"
  >
    <span class="pf-c-context-selector__toggle-text">My project</span>
    <span class="pf-c-context-selector__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-c-context-selector__menu">
    <div class="pf-c-context-selector__menu-search">
      <div class="pf-c-input-group">
        <input
          class="pf-c-form-control"
          type="search"
          placeholder="Search"
          id="textInput2"
          name="textInput2"
          aria-labelledby="context-selector-expanded-example-search-button"
        />
        <button
          class="pf-c-button pf-m-control"
          type="button"
          id="context-selector-expanded-example-search-button"
          aria-label="Search menu items"
        >
          <i class="fas fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <ul class="pf-c-context-selector__menu-list">
      <li>
        <a class="pf-c-context-selector__menu-list-item" href="#">Link</a>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >Action</button>
      </li>
      <li>
        <a
          class="pf-c-context-selector__menu-list-item pf-m-disabled"
          href="#"
          aria-disabled="true"
          tabindex="-1"
        >Disabled link</a>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
          disabled
        >Disabled action</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >My project</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >OpenShift cluster</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >Production Ansible</button>
      </li>
      <li>
        <button class="pf-c-context-selector__menu-list-item" type="button">AWS</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >Azure</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >My project</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >OpenShift cluster</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >Production Ansible</button>
      </li>
      <li>
        <button class="pf-c-context-selector__menu-list-item" type="button">AWS</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >Azure</button>
      </li>
    </ul>
  </div>
</div>

```

### With footer

```html
<div class="pf-c-context-selector pf-m-expanded">
  <span id="context-selector-with-footer-example-label" hidden>Selected Project:</span>
  <button
    class="pf-c-context-selector__toggle"
    aria-expanded="true"
    id="context-selector-with-footer-example-toggle"
    aria-labelledby="context-selector-with-footer-example-label context-selector-with-footer-example-toggle"
  >
    <span class="pf-c-context-selector__toggle-text">My project</span>
    <span class="pf-c-context-selector__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-c-context-selector__menu">
    <div class="pf-c-context-selector__menu-search">
      <div class="pf-c-input-group">
        <input
          class="pf-c-form-control"
          type="search"
          placeholder="Search"
          id="context-selector-with-footer-example-textInput3"
          name="textInput3"
          aria-labelledby="context-selector-with-footer-example-search-button"
        />
        <button
          class="pf-c-button pf-m-control"
          type="button"
          id="context-selector-with-footer-example-search-button"
          aria-label="Search menu items"
        >
          <i class="fas fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <ul class="pf-c-context-selector__menu-list">
      <li>
        <a class="pf-c-context-selector__menu-list-item" href="#">Link</a>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >Action</button>
      </li>
      <li>
        <a
          class="pf-c-context-selector__menu-list-item pf-m-disabled"
          href="#"
          aria-disabled="true"
          tabindex="-1"
        >Disabled link</a>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
          disabled
        >Disabled action</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >My project</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >OpenShift cluster</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >Production Ansible</button>
      </li>
      <li>
        <button class="pf-c-context-selector__menu-list-item" type="button">AWS</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >Azure</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >My project</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >OpenShift cluster</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >Production Ansible</button>
      </li>
      <li>
        <button class="pf-c-context-selector__menu-list-item" type="button">AWS</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >Azure</button>
      </li>
    </ul>

    <div class="pf-c-context-selector__menu-footer">
      <button class="pf-c-button pf-m-secondary" type="button">Manage projects</button>
    </div>
  </div>
</div>

<div class="pf-c-context-selector pf-m-expanded">
  <span
    id="context-selector-with-footer-example-two-label"
    hidden
  >Selected Project:</span>
  <button
    class="pf-c-context-selector__toggle"
    aria-expanded="true"
    id="context-selector-with-footer-example-two-toggle"
    aria-labelledby="context-selector-with-footer-example-two-label context-selector-with-footer-example-two-toggle"
  >
    <span class="pf-c-context-selector__toggle-text">My project</span>
    <span class="pf-c-context-selector__toggle-icon">
      <i class="fas fa-caret-down" aria-hidden="true"></i>
    </span>
  </button>
  <div class="pf-c-context-selector__menu">
    <div class="pf-c-context-selector__menu-search">
      <div class="pf-c-input-group">
        <input
          class="pf-c-form-control"
          type="search"
          placeholder="Search"
          id="context-selector-with-footer-example-two-textInput3"
          name="textInput3"
          aria-labelledby="context-selector-with-footer-example-two-search-button"
        />
        <button
          class="pf-c-button pf-m-control"
          type="button"
          id="context-selector-with-footer-example-two-search-button"
          aria-label="Search menu items"
        >
          <i class="fas fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <ul class="pf-c-context-selector__menu-list">
      <li>
        <a class="pf-c-context-selector__menu-list-item" href="#">Link</a>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >Action</button>
      </li>
      <li>
        <a
          class="pf-c-context-selector__menu-list-item pf-m-disabled"
          href="#"
          aria-disabled="true"
          tabindex="-1"
        >Disabled link</a>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
          disabled
        >Disabled action</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >My project</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >OpenShift cluster</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >Production Ansible</button>
      </li>
      <li>
        <button class="pf-c-context-selector__menu-list-item" type="button">AWS</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >Azure</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >My project</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >OpenShift cluster</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >Production Ansible</button>
      </li>
      <li>
        <button class="pf-c-context-selector__menu-list-item" type="button">AWS</button>
      </li>
      <li>
        <button
          class="pf-c-context-selector__menu-list-item"
          type="button"
        >Azure</button>
      </li>
    </ul>

    <div class="pf-c-context-selector__menu-footer">
      <button
        class="pf-c-button pf-m-link pf-m-inline"
        type="button"
      >Manage projects</button>
    </div>
  </div>
</div>

```

## Documentation

### Accessibility

| Class                   | Applied to                                | Outcome                                                                                                        |
| ----------------------- | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `aria-expanded="false"` | `.pf-c-context-selector__toggle`          | Indicates that the menu is hidden.                                                                             |
| `aria-expanded="true"`  | `.pf-c-context-selector__toggle`          | Indicates that the menu is visible.                                                                            |
| `aria-hidden="true"`    | `.pf-c-context-selector__toggle-icon > *` | Hides the icon from assistive technologies.                                                                    |
| `disabled`              | `button.pf-c-context-selector__menu-item` | When the menu item uses a button element, indicates that it is unavailable and removes it from keyboard focus. |
| `aria-disabled="true"`  | `a.pf-c-context-selector__menu-item`      | When the menu item uses a link element, indicates that it is unavailable.                                      |
| `tabindex="-1"`         | `a.pf-c-context-selector__menu-item`      | When the menu item uses a link element, removes it from keyboard focus.                                        |

### Usage

| Class                                    | Applied to                                | Outcome                                                                         |
| ---------------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------- |
| `.pf-c-context-selector`                 | `<div>`                                   | Initiates a context selector.                                                   |
| `.pf-c-context-selector__toggle`         | `<button>`                                | Initiates a toggle.                                                             |
| `.pf-c-context-selector__toggle-text`    | `<span>`                                  | Initiates text inside the toggle.                                               |
| `.pf-c-context-selector__toggle-icon`    | `<span>`                                  | Inititiates the toggle icon wrapper.                                            |
| `.pf-c-context-selector__menu`           | `<div>`                                   | Initiaties a menu.                                                              |
| `.pf-c-context-selector__menu-search`    | `<div>`                                   | Initiates a container for the search input group.                               |
| `.pf-c-context-selector__menu-list`      | `<ul>`                                    | Initiaties an unordered list of menu items that sits under the input container. |
| `.pf-c-context-selector__menu-footer`    | `<div>`                                   | Initiaties a menu footer.                                                       |
| `.pf-c-context-selector__menu-list-item` | `<li>`                                    | Initiaties a menu item.                                                         |
| `.pf-m-expanded`                         | `.pf-c-context-selector`                  | Modifies for the expanded state.                                                |
| `.pf-m-active`                           | `.pf-c-context-selector__toggle`          | Forces display of the active state of the toggle.                               |
| `.pf-m-disabled`                         | `a.pf-c-context-selector__menu-list-item` | Modifies an item for the disabled state.                                        |
