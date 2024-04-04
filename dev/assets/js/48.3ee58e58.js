(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{420:function(e,t,a){"use strict";a.r(t);var r=a(14),n=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("OpenMQTTGateway aims to unify various technologies and protocols into a single firmware. This reduces the need for multiple physical bridges and streamlines diverse technologies under the widely-used "),t("a",{attrs:{href:"http://mqtt.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("MQTT"),t("OutboundLink")],1),e._v(" protocol.")]),e._v(" "),t("div",{staticStyle:{"text-align":"center"}},[t("img",{attrs:{src:"img/OpenMQTTGateway.png",alt:"Overview of the protocols and compatible controllers",width:"640",height:"479"}})]),e._v(" "),t("h1",{attrs:{id:"what-is-an-mqtt-gateway-or-bridge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-an-mqtt-gateway-or-bridge"}},[e._v("#")]),e._v(" What is an MQTT gateway or bridge ?")]),e._v(" "),t("p",[e._v("MQTT, short for Message Queuing Telemetry Transport, is a lightweight messaging protocol ideal for IoT devices.")]),e._v(" "),t("p",[e._v("An MQTT gateway or bridge plays a pivotal role in the MQTT ecosystem:")]),e._v(" "),t("ul",[t("li",[e._v("Protocol Translation: It converts non-MQTT protocols (like LoRa or Bluetooth) into MQTT, enabling broader network communication.")]),e._v(" "),t("li",[e._v("Data Aggregation: Combines data from multiple devices into single messages, optimizing network use.")]),e._v(" "),t("li",[e._v("Security: Incorporates features like SSL/TLS encryption to safeguard data during transmission.")]),e._v(" "),t("li",[e._v("Device Management: Handles tasks like firmware updates and remote configuration changes.")])]),e._v(" "),t("p",[e._v("In essence, an MQTT gateway ensures smooth communication between devices and MQTT brokers, enhancing the efficiency and security of IoT systems.")]),e._v(" "),t("h1",{attrs:{id:"what-openmqttgateway-can-do"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-openmqttgateway-can-do"}},[e._v("#")]),e._v(" What OpenMQTTGateway can do ?")]),e._v(" "),t("p",[e._v("OpenMQTTGateway integrates with established technologies, such as 433mhz/315mhz protocols and infrared (IR), allowing you to upgrade and repurpose older devices. Additionally, OMG is compatible with modern technologies like Bluetooth Low Energy (BLE) and LoRa.")]),e._v(" "),t("p",[e._v("To have an overview of the supported PIR, door, water, temperature, smoke sensors, sirens, rings, beacons, switches & weather stations you can take a look to the\n"),t("a",{attrs:{href:"https://compatible.openmqttgateway.com/index.php/devices",target:"_blank",rel:"noopener noreferrer"}},[e._v("compatible devices list"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("You can run OpenMQTTGateway on a wide variety of "),t("a",{attrs:{href:"https://compatible.openmqttgateway.com/index.php/boards/",target:"_blank",rel:"noopener noreferrer"}},[e._v("boards"),t("OutboundLink")],1),e._v(", ESP32, ESP8266, Arduino MEGA, UNO (with limitation).\nBLE to MQTT gateway can also run on Raspberry Pi, Windows or Unix computers thanks to "),t("a",{attrs:{href:"https://theengs.github.io/gateway/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Theengs Gateway"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Using MQTT, you can seamlessly integrate with home automation platforms such as OpenHAB, Home Assistant, and others, or with IoT software like Node-Red.")]),e._v(" "),t("h1",{attrs:{id:"use-cases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[e._v("#")]),e._v(" Use cases")]),e._v(" "),t("p",[e._v("Leveraging OpenMQTTGateway with a controller allows you to:")]),e._v(" "),t("ul",[t("li",[e._v("Monitor a garden with a Mi Flora BLE sensor and control an irrigation valve depending on the soil moisture,")]),e._v(" "),t("li",[e._v("Trigger a fan depending on the temperature and humidity thanks to a Mi Jia/LYWSD03MMC BLE sensor,")]),e._v(" "),t("li",[e._v("Follow your meat temperature when cooking with an Inkbird IBBQ")]),e._v(" "),t("li",[e._v("Alert yourself by a controller notification if the temperature of a fridge or freezer is too high,")]),e._v(" "),t("li",[e._v("Detect a beacon/smartwatch so as to trigger a special scenario when you come home,")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.youtube.com/watch?v=noUROhtf0E0&t=18s",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lose weight with the help of a complete log system"),t("OutboundLink")],1),e._v(", video from "),t("a",{attrs:{href:"https://www.youtube.com/channel/UCu7_D0o48KbfhpEohoP7YSQ",target:"_blank",rel:"noopener noreferrer"}},[e._v("@Andreas Spiess"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Detect opened door or windows through 433mhz or BLE and alert yourself when leaving")]),e._v(" "),t("li",[e._v("Detect water leakage or smoke remotely")]),e._v(" "),t("li",[e._v("Actionate a siren if something is going wrong")]),e._v(" "),t("li",[e._v("Detect if your far mailbox has been opened by the postman with LoRa")]),e._v(" "),t("li",[e._v("Make smart your old TV or AC system through infrared control")]),e._v(" "),t("li",[e._v("Monitor vehicle tire pressure")])]),e._v(" "),t("p",[e._v("The limit is your imagination 😀")]),e._v(" "),t("h1",{attrs:{id:"functions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[e._v("#")]),e._v(" Functions")]),e._v(" "),t("p",[e._v("Under the hood, OpenMQTTGateway offers features such as:")]),e._v(" "),t("ul",[t("li",[e._v("Deduplication")]),e._v(" "),t("li",[e._v("Simple and lite API")]),e._v(" "),t("li",[e._v("Strong integrations with libraries used")]),e._v(" "),t("li",[e._v("Signal forward/repeat")]),e._v(" "),t("li",[e._v("Wifi web portal onboarding")]),e._v(" "),t("li",[e._v("Web portal configuration")]),e._v(" "),t("li",[e._v("Whitelist & Blacklist management")]),e._v(" "),t("li",[e._v("Secure connections")]),e._v(" "),t("li",[e._v("Over the air updates")]),e._v(" "),t("li",[e._v("Local or cloud, your choice")])]),e._v(" "),t("h2",{attrs:{id:"using-openmqttgateway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-openmqttgateway"}},[e._v("#")]),e._v(" Using OpenMQTTGateway ?")]),e._v(" "),t("p",[e._v("Support open-source development through sponsorship and gain exclusive access to our private forum. Your questions, issues, and feature requests will receive priority attention, plus you'll gain insider access to our roadmap.")]),e._v(" "),t("div",{staticStyle:{"text-align":"center"}},[t("iframe",{staticStyle:{border:"0","border-radius":"6px"},attrs:{src:"https://github.com/sponsors/theengs/button",title:"Sponsor Theengs",height:"32",width:"228"}})]),e._v(" "),t("h2",{attrs:{id:"products-powered-by-openmqttgateway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#products-powered-by-openmqttgateway"}},[e._v("#")]),e._v(" Products powered by OpenMQTTGateway")]),e._v(" "),t("h3",{attrs:{id:"theengs-bridge-ble-gateway-with-external-antenna"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#theengs-bridge-ble-gateway-with-external-antenna"}},[e._v("#")]),e._v(" Theengs Bridge, BLE gateway with external antenna")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://shop.theengs.io/products/theengs-bridge-esp32-ble-mqtt-gateway-with-ethernet-and-external-antenna",target:"_blank",rel:"noopener noreferrer"}},[e._v("Theengs bridge"),t("OutboundLink")],1),e._v(" is a powerfull BLE to MQTT gateway for over "),t("a",{attrs:{href:"https://decoder.theengs.io/devices/devices.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("100 sensors"),t("OutboundLink")],1),e._v(". Equipped with an Ethernet port, and external antenna, ensuring an enhanced range for your BLE sensors. It supports also WiFi connectivity.")]),e._v(" "),t("div",{staticStyle:{"text-align":"center"}},[t("a",{attrs:{href:"https://shop.theengs.io/products/theengs-bridge-esp32-ble-mqtt-gateway-with-ethernet-and-external-antenna",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"img/Theengs-Bridge-ble-gateway.png",alt:"Theengs bridge view",width:"375",height:"501"}})])]),e._v(" "),t("h3",{attrs:{id:"theengs-plug-ble-gateway-and-smart-plug"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#theengs-plug-ble-gateway-and-smart-plug"}},[e._v("#")]),e._v(" Theengs Plug, BLE gateway and Smart Plug")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://shop.theengs.io/products/theengs-plug-smart-plug-ble-gateway-and-energy-consumption",target:"_blank",rel:"noopener noreferrer"}},[e._v("Theengs plug"),t("OutboundLink")],1),e._v(" brings the following features:")]),e._v(" "),t("ul",[t("li",[e._v("BLE to MQTT gateway, tens of "),t("a",{attrs:{href:"https://compatible.openmqttgateway.com/index.php/devices/ble-devices/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bluetooth devices"),t("OutboundLink")],1),e._v(" supported thanks to Theengs Decoder library. The plug uses an ESP32 acting as a BLE to Wifi gateway to scan, decode and forward the data of the nearby sensors,")]),e._v(" "),t("li",[e._v("Smart plug that can be controlled remotely,")]),e._v(" "),t("li",[e._v("Energy consumption monitoring,")]),e._v(" "),t("li",[e._v("Device tracker,")]),e._v(" "),t("li",[e._v("Presence detection (beta),")]),e._v(" "),t("li",[e._v("Local connectivity first.")])]),e._v(" "),t("div",{staticStyle:{"text-align":"center"}},[t("a",{attrs:{href:"https://shop.theengs.io/products/theengs-plug-smart-plug-ble-gateway-and-energy-consumption",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"img/Theengs-Plug-OpenMQTTGateway.png",alt:"Theengs plug view",width:"268",height:"453"}})])]),e._v(" "),t("p",[e._v("Support the project by purchasing the "),t("a",{attrs:{href:"https://shop.theengs.io/products/theengs-bridge-esp32-ble-mqtt-gateway-with-ethernet-and-external-antenna",target:"_blank",rel:"noopener noreferrer"}},[e._v("Theengs bridge"),t("OutboundLink")],1),e._v(" or the "),t("a",{attrs:{href:"https://shop.theengs.io/products/theengs-plug-smart-plug-ble-gateway-and-energy-consumption",target:"_blank",rel:"noopener noreferrer"}},[e._v("Theengs plug"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"media"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#media"}},[e._v("#")]),e._v(" Media")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://hackaday.com/2023/01/13/arduino-library-brings-rtl_433-to-the-esp32",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hackaday - ARDUINO LIBRARY BRINGS RTL_433 TO THE ESP32"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.cnx-software.com/2023/01/14/esp32-board-with-lora-433-mhz-sensors/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CNX Software - 433 MHz is not dead! Using an ESP32 board with LoRa module to talk to 433 MHz sensors"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.rtl-sdr.com/rtl_433-ported-to-esp32-microcontrollers-with-cc1101-or-sx127x-transceiver-chips/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RTL_433 PORTED TO ESP32 MICROCONTROLLERS WITH CC1101 OR SX127X TRANSCEIVER CHIPS"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://lwn.net/Articles/921497/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Using low-cost wireless sensors in the unlicensed bands"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.electronics-lab.com/smart-plug-esp32-openmqttgateway-serving-as-an-ble-mqtt-gateway-and-a-power-meter/",target:"_blank",rel:"noopener noreferrer"}},[e._v("SMART PLUG ESP32 OPENMQTTGATEWAY SERVING AS AN BLE MQTT GATEWAY AND A POWER METER"),t("OutboundLink")],1)])]),e._v(" "),t("h3",{attrs:{id:"theengs-plug"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#theengs-plug"}},[e._v("#")]),e._v(" Theengs Plug")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.youtube.com/watch?v=nUwMt9p2U7o&t=427s",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.youtube.com/vi/nUwMt9p2U7o/0.jpg",alt:"Theengs Plug video ElektroMaker"}}),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"_433mhz-and-ble"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_433mhz-and-ble"}},[e._v("#")]),e._v(" 433Mhz and BLE")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.youtube.com/watch?v=_gdXR1uklaY",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.youtube.com/vi/_gdXR1uklaY/0.jpg",alt:"433Mhz and BLE gateway video by Andreas Spiess"}}),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"ble"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ble"}},[e._v("#")]),e._v(" BLE")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.youtube.com/watch?v=noUROhtf0E0",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.youtube.com/vi/noUROhtf0E0/0.jpg",alt:"BLE gateway video by Andreas Spiess"}}),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"_433mhz"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_433mhz"}},[e._v("#")]),e._v(" 433Mhz")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.youtube.com/watch?v=H-JXWbWjJYE",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.youtube.com/vi/H-JXWbWjJYE/0.jpg",alt:"RTL_433 video by TECH MIND"}}),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"lora"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lora"}},[e._v("#")]),e._v(" LORA")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.youtube.com/watch?v=6DftaHxDawM",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.youtube.com/vi/6DftaHxDawM/0.jpg",alt:"LORA video by Priceless Toolkit"}}),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("Note")]),e._v(" "),t("p",[e._v("The material and information contained in this documentation is for general information purposes only. You should not rely upon the material or information on this documentation as a basis for making any business, legal or any other decisions. There is no warranty given on this documentation content. If you decide to follow the information and materials given it is at your own risk. I will not be liable for any false, inaccurate, inappropriate or incomplete information presented on this website.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);