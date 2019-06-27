# Thermostat challenge

In this challenge we built a thermostat!

## Setup

### Clone repo
```
$ git clone git@github.com:rhysco8/thermostat-challenge2.git
$ cd thermostat-challenge2
```

### Run tests

To run tests in Jasmine do the following:
```
$ open jasmine/SpecRunner.html
```

### Launch thermostat

Start it up!
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

## Disclaimer

This is not actually hooked up to an actual thermostat. But just imagine if it was!
