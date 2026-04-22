# pi-command-palette

Opens the slash command menu (same as typing `/`) via **Ctrl+P** shortcut.

## Setup

### 1. Rebind Default Ctrl+P (Model Cycling)

Create/edit `~/.pi/agent/keybindings.json`:

```json
{
  "app.model.cycleForward": ["shift+ctrl+p"]
}
```

This frees Ctrl+P by rebinding model cycling to Shift+Ctrl+P.

### 2. Install Extension

```bash
git clone https://github.com/alephtex/pi-command-palette ~/.pi/agent/extensions/pi-command-palette
```

Update `~/.pi/agent/settings.json`:

```json
{
  "extensions": [
    "extensions/pi-command-palette"
  ]
}
```

### 3. Reload

```bash
/reload
```

## Usage

Press **Ctrl+P** to open the command palette - same menu as typing `/` in the input.

## Repository

https://github.com/alephtex/pi-command-palette
