{"version":3,"sources":["notification.js"],"names":["BX","namespace","Call","Notification","Events","onButtonClick","config","this","popup","window","callerAvatar","type","isNotEmptyString","callerName","video","hasCamera","callbacks","onClose","isFunction","DoNothing","onDestroy","_onContentButtonClickHandler","_onContentButtonClick","bind","desktop","addCustomEvent","prototype","show","params","BXDesktopWindow","ExecuteCommand","BXDesktopSystem","getHtmlPage","JSON","stringify","content","NotificationContent","createPopup","render","PopupWindow","closeIcon","noAllPaddings","zIndex","offsetLeft","offsetTop","closeByEsc","draggable","restrict","overlay","backgroundColor","opacity","events","onPopupClose","onPopupDestroy","close","destroy","removeCustomEvents","e","elements","root","avatar","create","props","className","children","src","style","document","createTextNode","message","text","util","htmlspecialchars","click","_onAnswerWithVideoButtonClick","_onAnswerButtonClick","_onDeclineButtonClick","showInDesktop","body","appendChild","setWindowPosition","X","STP_CENTER","Y","STP_VCENTER","Width","Height","onCustomEvent","button"],"mappings":"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","file":"notification.map.js"}