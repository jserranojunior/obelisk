# Obelisk

> Functions for any projects Typescript <br>
> Modules and function for global use typescript using jest for tests.

<img src="https://pa1.narvii.com/7567/068a52d4e1983fcfc67f6fcbf0a665c7fe7cfa9cr1-612-604_hq.gif" width="35%">

## Instalation

`npm i alvitre-obelisk` <br>
`yarn add alvitre-obelisk`

## Functions

### **Convert dates from JS, US or PTBR**

#### **dateFormatPtbr**

> Date US and JS to PTBR format<br> > `dateFormatPtbr("1992-06-10")` <br>
> return 10/06/1992<br>

#### **dateFormatUs**

> Date JS to US format<br> > `dateFormatUs(new Date("1992,06,10"))` <br>
> return 1992-06-10<br>

#### **dateFormatJs**

> Date US to JS full format<br> > `dateFormatJS(new Date("1992-06-10"))` <br>
> return 1992-06-10T03:00:00.000Z<br>

<br><br>

### **Other functions to use**

#### **validarToken**

> Verify with token is valid string<br> > `validarToken(null)` <br>return false<br> > `validarToken(undefined)` <br>return false<br>

#### **calcYearsOldWithMounths**

> Calculate age with months of life <br> > `calcYearsOldWithMounths("1993-06-10")`<br>
> return "28 anos e 6 meses"

#### **limitText**

> Cut string adding points <br> > `limitText("lorem ipsum", 3)`<br>
> return "lor ..."
