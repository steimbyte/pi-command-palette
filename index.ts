/**
 * pi-command-palette - Simple version
 */

import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";

export default function (pi: ExtensionAPI) {
	pi.registerShortcut("ctrl+p", {
		description: "Open command palette",
		handler: async (ctx) => {
			// Set editor to "/" which triggers slash command autocomplete
			ctx.ui.setEditorText("/");
		},
	});
}
