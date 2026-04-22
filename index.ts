/**
 * pi-command-palette
 * 
 * Opens the slash command menu (same as typing "/") via Ctrl+P shortcut.
 * 
 * Usage:
 * - Press Ctrl+P to open command palette
 */

import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

export default function (pi: ExtensionAPI) {
	// Register Ctrl+P shortcut to open command palette
	pi.registerShortcut("ctrl+p", {
		description: "Open command palette (same as typing /)",
		handler: async (ctx) => {
			// Send "/" as a user message to trigger the command menu
			// This opens the same menu as typing "/" in the input
			ctx.sendUserMessage("/");
		},
	});
}
