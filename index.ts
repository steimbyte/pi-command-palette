/**
 * pi-command-palette
 * 
 * Opens the slash command menu (same as typing "/") via Ctrl+P shortcut.
 * Overrides the default Ctrl+P model cycling behavior.
 * 
 * Usage:
 * - Press Ctrl+P to open command palette
 */

import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";
import { getKeybindings } from "@mariozechner/pi-coding-agent";

export default function (pi: ExtensionAPI) {
	// Intercept Ctrl+P before the app processes it (model cycling)
	// Use onTerminalInput with consume: true to override built-in shortcuts
	pi.ui.onTerminalInput((data: string) => {
		const kb = getKeybindings();
		if (kb.matches(data, "app.model.cycleForward")) {
			// Override: open command palette instead of cycling models
			pi.sendUserMessage("/");
			return { consume: true };
		}
		// Don't consume other inputs
		return undefined;
	});

	// Also register as regular shortcut for when terminal input isn't captured
	pi.registerShortcut("ctrl+p", {
		description: "Open command palette (same as typing /)",
		handler: async (ctx) => {
			ctx.sendUserMessage("/");
		},
	});
}
