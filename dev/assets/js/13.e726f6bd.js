(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{364:function(t,e,r){t.exports=r.p+"assets/img/OpenMQTTgateway_ESP32_Addon_RF.e2747c60.png"},365:function(t,e,r){t.exports=r.p+"assets/img/OpenMQTTgateway_ESP8266_Addon_RF.fc195165.png"},366:function(t,e,r){t.exports=r.p+"assets/img/OpenMQTTgateway_Arduino_Addon_RF.4de128c9.png"},424:function(t,e,r){"use strict";r.r(e);var a=r(14),s=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"rf-gateway-433mhz-315mhz"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rf-gateway-433mhz-315mhz"}},[t._v("#")]),t._v(" RF gateway (433mhz/315mhz)")]),t._v(" "),e("h2",{attrs:{id:"protocols-modules-and-library"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#protocols-modules-and-library"}},[t._v("#")]),t._v(" Protocols, modules and library")]),t._v(" "),e("p",[t._v("RTL_433 covers OOK protocols detailed "),e("a",{attrs:{href:"../use/rf#supported-decoders"}},[t._v("here")]),t._v(" and supports auto-discovery following Home Assistant convention. The other libraries/modules are more for advanced users.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Board")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Protocols")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Assembly/Soldering required")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Heltec LORA V2 433Mhz")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"../use/rf#supported-decoders"}},[t._v("RTL_433")]),t._v(", receiving only")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("No")])]),t._v(" "),e("tr",[e("td",[t._v("LILYGO® LoRa32 V2.1_1.6.1 433 Mhz")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"../use/rf#supported-decoders"}},[t._v("RTL_433")]),t._v(", receiving only")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("No")])]),t._v(" "),e("tr",[e("td",[t._v("ESP32 + SX127X")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"../use/rf#supported-decoders"}},[t._v("RTL_433")]),t._v(", receiving only")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),e("tr",[e("td",[t._v("ESP32 + CC1101")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("a",{attrs:{href:"../use/rf#supported-decoders"}},[t._v("RTL_433")]),t._v(", RF(RCSwitch), RF2(KaKu), Pilight")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),e("tr",[e("td",[t._v("ESP8266 + Basic RF modules (SRX, STX, XD RF, FS1000A")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("RF(RCSwitch), RF2(KaKu), Pilight")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),e("tr",[e("td",[t._v("ESP8266 + CC1101 (might have lower range than with SRX/STX above)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("RF(RCSwitch), RF2(KaKu), Pilight")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])]),t._v(" "),e("tr",[e("td",[t._v("ESP32 + Basic RF modules (SRX, STX, XD RF, FS1000A")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("RF(RCSwitch), RF2(KaKu), Pilight")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")])])])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("If you want to try the RTL_433 module with a combination or a board outside of this list, verify that it has an SX1278 or a SX1276")])]),t._v(" "),e("p",[t._v("Heltec LORA V3 is not compatible with RTL_433 library as it is based on an SX1262 module.")]),t._v(" "),e("h2",{attrs:{id:"assembly-soldering-required-parts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#assembly-soldering-required-parts"}},[t._v("#")]),t._v(" Assembly/soldering required parts")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Module")]),t._v(" "),e("th",[t._v("Purpose")]),t._v(" "),e("th",[t._v("Compatible modules")]),t._v(" "),e("th",[t._v("Receiver Switching")]),t._v(" "),e("th",[t._v("Where to Buy")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("SRX882 or SRX882S (recommended)")]),t._v(" "),e("td",[t._v("433Mhz Receiver")]),t._v(" "),e("td",[t._v("RF(RCSwitch), RF2(KaKu), Pilight")]),t._v(" "),e("td",[t._v("Supported")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://compatible.openmqttgateway.com/index.php/parts",target:"_blank",rel:"noopener noreferrer"}},[t._v("compatible parts list"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("STX882 (recommended)")]),t._v(" "),e("td",[t._v("433Mhz Transmitter")]),t._v(" "),e("td",[t._v("RF(RCSwitch), RF2(KaKu), Pilight")]),t._v(" "),e("td",[t._v("Supported")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://compatible.openmqttgateway.com/index.php/parts",target:"_blank",rel:"noopener noreferrer"}},[t._v("compatible parts list"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("CC1101")]),t._v(" "),e("td",[t._v("433Mhz Transceiver")]),t._v(" "),e("td",[e("a",{attrs:{href:"../use/rf#supported-decoders"}},[t._v("RTL_433")]),t._v(", RF(RCSwitch), RF2(KaKu), Pilight")]),t._v(" "),e("td",[t._v("Supported")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://compatible.openmqttgateway.com/index.php/parts",target:"_blank",rel:"noopener noreferrer"}},[t._v("compatible parts list"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("SX1276/SX1278")]),t._v(" "),e("td",[t._v("433Mhz Transceiver")]),t._v(" "),e("td",[e("a",{attrs:{href:"../use/rf#supported-decoders"}},[t._v("RTL_433")])]),t._v(" "),e("td",[t._v("Not Supported")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://compatible.openmqttgateway.com/index.php/parts",target:"_blank",rel:"noopener noreferrer"}},[t._v("compatible parts list"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("LilyGo/Heltec")]),t._v(" "),e("td",[t._v("433Mhz Transceiver")]),t._v(" "),e("td",[e("a",{attrs:{href:"../use/rf#supported-decoders"}},[t._v("RTL_433")])]),t._v(" "),e("td",[t._v("Not Supported")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://compatible.openmqttgateway.com/index.php/parts",target:"_blank",rel:"noopener noreferrer"}},[t._v("compatible parts list"),e("OutboundLink")],1)])])])]),t._v(" "),e("h3",{attrs:{id:"srx-stx-pinout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#srx-stx-pinout"}},[t._v("#")]),t._v(" SRX STX Pinout")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Board")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Receiver Pin")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Emitter Pin")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Arduino UNO")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("D3")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("D4")])]),t._v(" "),e("tr",[e("td",[t._v("ESP8266")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("D2/"),e("strong",[t._v("D3")]),t._v("/D1/D8")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("RX")]),t._v("/D2")])]),t._v(" "),e("tr",[e("td",[t._v("ESP32")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("27")]),t._v("/26")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("12")])]),t._v(" "),e("tr",[e("td",[t._v("RF BRIDGE")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("RF BRIDGE "),e("a",{attrs:{href:"https://github.com/xoseperez/espurna/wiki/Hardware-Itead-Sonoff-RF-Bridge---Direct-Hack",target:"_blank",rel:"noopener noreferrer"}},[t._v("DIRECT HACK"),e("OutboundLink")],1)]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("5")])]),t._v(" "),e("tr",[e("td",[t._v("SONOFF RFR3")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("RF WIFI GATEWAY")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-")])])])]),t._v(" "),e("p",[t._v("Connect the Emitter and Receiver to a 5V or 3.3V supply source, check datasheet of your modules to confirm ("),e("strong",[t._v("3.3V")]),t._v(" for CC1101), and the ground of your supply source to the ground of your board.")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("With SRX882S receiver connect the CS pin to 3.3V")])]),t._v(" "),e("h3",{attrs:{id:"cc1101-pinout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cc1101-pinout"}},[t._v("#")]),t._v(" CC1101 Pinout")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Board")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Receiver Pin(GDO2)")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Emitter Pin(GDO0)")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("SCK")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("VCC")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("MOSI")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("MISO")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("CSN")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("GND")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("ESP8266")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("D2/"),e("strong",[t._v("D3")]),t._v("/D1/D8")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("RX")]),t._v("/D2")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("D5")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("3V3")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("D7")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("D6")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("D8")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("GND")])]),t._v(" "),e("tr",[e("td",[t._v("ESP32")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("D27")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("D12")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("D18")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("strong",[t._v("3V3")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("D23")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("D19")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("D5")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("GND")])])])]),t._v(" "),e("p",[t._v("To use the CC1101 module, "),e("code",[t._v("ZradioCC1101")]),t._v(" must be uncomment in the "),e("code",[t._v("User_config.h")]),t._v(" or added to the "),e("code",[t._v("build_flags")]),t._v(".\nMore information about the "),e("a",{attrs:{href:"https://github.com/LSatan/SmartRC-CC1101-Driver-Lib#wiring",target:"_blank",rel:"noopener noreferrer"}},[t._v("CC1101 wiring"),e("OutboundLink")],1),t._v(". ( Please note that with OMG we are recommending CC1101 GDO2 to be connected to ESP32 D27 and GDO0 to be connected to D12, this is different than the LSatan diagram. This is due to the ESP32 using D2 as part of the boot process. )")]),t._v(" "),e("h2",{attrs:{id:"esp32-hardware-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#esp32-hardware-setup"}},[t._v("#")]),t._v(" ESP32 Hardware setup")]),t._v(" "),e("p",[e("img",{attrs:{src:r(364),alt:"Addon_RF"}})]),t._v(" "),e("h2",{attrs:{id:"esp8266-hardware-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#esp8266-hardware-setup"}},[t._v("#")]),t._v(" ESP8266 Hardware setup")]),t._v(" "),e("p",[t._v("If the gateway works only when serial monitor is connected don't use D3 use D2 instead (gpio 4) and modify config_RF.h accordingly.")]),t._v(" "),e("p",[t._v("With SRX882 some users reported that D3 is not working use D1 instead in this case and modify config_RF.h accordingly.")]),t._v(" "),e("p",[e("img",{attrs:{src:r(365),alt:"Addon_RF"}})]),t._v(" "),e("h2",{attrs:{id:"arduino-hardware-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arduino-hardware-setup"}},[t._v("#")]),t._v(" Arduino Hardware setup")]),t._v(" "),e("p",[e("img",{attrs:{src:r(366),alt:"RF"}})]),t._v(" "),e("h2",{attrs:{id:"sonoff-rf-bridge-hardware-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sonoff-rf-bridge-hardware-setup"}},[t._v("#")]),t._v(" SONOFF RF Bridge Hardware setup")]),t._v(" "),e("p",[t._v("Per default there is no need on modifying the RF Bridge hardware, unless you don't want to use the provided RF controller (EFM8BB1). Indeed if you want to extend the protocols supported by the bridge you can "),e("a",{attrs:{href:"https://github.com/xoseperez/espurna/wiki/Hardware-Itead-Sonoff-RF-Bridge---Direct-Hack",target:"_blank",rel:"noopener noreferrer"}},[t._v("bypass this controller"),e("OutboundLink")],1),t._v(" and use the ESP8255 capacities to decode RF Signal.\nThe RF processing can be achieved after the modification by either RF, RF2 or Pilight gateways.")]),t._v(" "),e("h2",{attrs:{id:"sonoff-rfr3-hardware-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sonoff-rfr3-hardware-setup"}},[t._v("#")]),t._v(" SONOFF RFR3 Hardware setup")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://1technophile.blogspot.com/2019/08/new-sonoff-rfr3-as-433tomqtt-gateway.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Connect GPIO4 of the ESP8255 to the pin D0 of SYN470"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"wifi-rf-gateway-hardware-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wifi-rf-gateway-hardware-setup"}},[t._v("#")]),t._v(" WIFI RF GATEWAY Hardware setup")]),t._v(" "),e("p",[t._v("This board doesn't require any hardware modifications.")])])}),[],!1,null,null,null);e.default=s.exports}}]);