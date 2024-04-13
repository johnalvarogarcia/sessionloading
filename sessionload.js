
sf.ui.proTools.windows.whoseTitle.is("Session Notes").first.buttons.whoseTitle.is("No").first.elementClick();


sf.ui.proTools.windows.whoseTitle.is("Missing AAX Plugins").first.buttons.whoseTitle.is("OK").first.elementClick();



sf.wait({
    intervalMs: 200,
});

sf.ui.proTools.windows.whoseTitle.is("MetricAB: 11 file(s) could not be found").first.children.whoseRole.is("AXWindow").whoseTitle.is("MetricAB: 11 file(s) could not be found").first.buttons.whoseTitle.is("Skip All").first.elementClick();

