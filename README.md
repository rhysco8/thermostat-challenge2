# Thermostat challenge

In this challenge we built a thermostat!

## Setup

Navigate in your terminal to the folder you wish to download the app into and enter the following on the command line:

### Clone repo
```
$ git clone git@github.com:rhysco8/thermostat-challenge2.git
$ cd thermostat-challenge2
```

### Run tests

```
$ open jasmine/SpecRunner.html
```

### Launch thermostat app

```
$ open jasmine/thermostat.html
```

## Approach

We had to meet these specifications:

* Thermostat starts at 20 degrees
* You can increase the temperature with an up function
* You can decrease the temperature with a down function
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default
* You can reset the temperature to 20 with a reset function
* You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-* usage, anything else is high-usage.
* (In the challenges where we add an interface, low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.)
* Display current outside temperature for London using weather API
* Allow user to enter the city they are in and have the local weather displayed

## Progress

Not yet implemented: entering user's current city. Presently the user can choose from one of London, New York, Tokyo and Paris. This will be changed to a text form, rather than a dropdown menu in a future update.

## Disclaimer

This is not actually hooked up to an actual thermostat. But just imagine if it were!
