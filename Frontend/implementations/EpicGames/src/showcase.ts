// Copyright Epic Games, Inc. All Rights Reserved.

import { Config, PixelStreaming } from '@epicgames-ps/lib-pixelstreamingfrontend-ue5.2';
import { Application, PixelStreamingApplicationStyle } from '@epicgames-ps/lib-pixelstreamingfrontend-ui-ue5.2';
export const PixelStreamingApplicationStyles =
    new PixelStreamingApplicationStyle();


document.body.onload = function() {
	// Example of how to set the logger level
	// Logger.SetLoggerVerbosity(10);

	// Create a config object
	const config = new Config({ useUrlParams: true });

	// Create Pixel Streaming application
	const pixelStreaming = new PixelStreaming(config);
	const application = new Application({ pixelStreaming });
	document.getElementById("playercontainer").appendChild(application.rootElement);

	// Bind example selection to the onExampleChanged function
	document.getElementById("exampleSelect").onchange = onExampleChanged;
}

/**
 * Event fired for when the selection drop down containing our showcase examples changes.
 * @param event The change event.
 */
function onExampleChanged(event : Event) : void {

	if(!event) { return; }

	const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;

	console.log(selectedValue);
}